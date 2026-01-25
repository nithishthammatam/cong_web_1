import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

// Path to users.json for development
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json')

// Helper to ensure data directory exists
const ensureDataDir = () => {
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
    }
}

// Helper to read users from file
const readUsers = () => {
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

// Helper to write users to file
const writeUsers = (users) => {
    ensureDataDir()
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
    } catch (error) {
        console.error('Error writing users file:', error)
    }
}

// Client-side authentication utilities re-implemented or re-exported
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

// Server-side authentication functions
export async function createUser({ email, password, fullName }) {
    const users = readUsers()

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
    writeUsers(users)

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser
    return userWithoutPassword
}

export async function authenticateUser(email, password) {
    const users = readUsers()
    const user = users.find(u => u.email === email)

    if (!user) {
        throw new Error('Invalid email or password')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error('Invalid email or password')
    }

    // Return user without password
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
