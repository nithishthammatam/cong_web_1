import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import { kv } from '@vercel/kv'

// Helper to determine if we are in production/Vercel
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'

// Path to users.json for development fallback
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json')

// Helper to ensure data directory exists (only for local dev)
const ensureDataDir = () => {
    if (isProduction) return
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
    }
}

// Helper to read users
const readUsers = async () => {
    if (isProduction) {
        try {
            const users = await kv.get('users')
            return users || []
        } catch (error) {
            console.error('Vercel KV error:', error)
            return []
        }
    }

    // Local fallback
    ensureDataDir()
    if (!fs.existsSync(USERS_FILE)) {
        return []
    }
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error reading users file:', error)
        return []
    }
}

// Helper to write users
const writeUsers = async (users) => {
    if (isProduction) {
        try {
            await kv.set('users', users)
            return
        } catch (error) {
            console.error('Vercel KV write error:', error)
            throw new Error('Database write failed')
        }
    }

    // Local fallback
    ensureDataDir()
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
    } catch (error) {
        console.error('Error writing users file:', error)
        throw new Error('File system write failed')
    }
}

// Validation utilities
export function validatePassword(password) {
    const minLength = 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    const errors = []

    if (password.length < minLength) {
        errors.push(`Password must be at least ${minLength} characters long`)
    }
    if (!hasUpperCase) {
        errors.push('Password must contain at least one uppercase letter')
    }
    if (!hasLowerCase) {
        errors.push('Password must contain at least one lowercase letter')
    }
    if (!hasNumber) {
        errors.push('Password must contain at least one number')
    }
    if (!hasSpecialChar) {
        errors.push('Password must contain at least one special character')
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Auth functions
export async function createUser({ email, password, fullName }) {
    const users = await readUsers()

    if (users.find(u => u.email === email)) {
        throw new Error('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        id: Date.now().toString(),
        email,
        password: hashedPassword,
        fullName,
        createdAt: new Date().toISOString()
    }

    users.push(newUser)
    await writeUsers(users)

    const { password: _, ...userWithoutPassword } = newUser
    return userWithoutPassword
}

export async function authenticateUser(email, password) {
    const users = await readUsers()
    const user = users.find(u => u.email === email)

    if (!user) {
        throw new Error('Invalid email or password')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error('Invalid email or password')
    }

    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
}

export function generateToken(user) {
    const secret = process.env.JWT_SECRET || 'fallback-secret-for-dev-only'
    return jwt.sign(
        { id: user.id, email: user.email },
        secret,
        { expiresIn: '7d' }
    )
}
