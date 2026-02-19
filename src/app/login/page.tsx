'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('Login successful')
            router.push('/')
        } catch (err) {
            console.error('Login error:', err)
            setError('Invalid email or password')
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
            router.push('/')
        } catch (err) {
            console.error('Google Sign In error:', err)
            setError(err.message)
        }
    }

    return (
        <div className="min-h-screen flex flex-col text-gray-900 font-sans bg-white">
            {/* Header Branding */}
            <div className="h-16 flex items-center px-4 sm:px-6 lg:px-8 border-b border-transparent">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/img/Cognera_log_bg_removed.png"
                            alt="Cognera Logo"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Cognera</span>
                </Link>
            </div>

            {/* Form Container */}
            <div className="flex-1 w-full flex items-start justify-center px-6 pt-10 pb-10 sm:px-12 sm:pb-16 lg:px-24 lg:pb-20 overflow-y-auto">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
                        <p className="text-gray-600">
                            Enter your email to sign in to your account.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors h-14">
                        <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign in with Google
                    </button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Work Email"
                            type="email"
                            name="email"
                            placeholder="name@work-email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="light-input"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="light-input"
                            required
                        />

                        <Button
                            type="submit"
                            className="w-full !bg-[#7440FA] hover:!bg-[#6030d4] text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                        >
                            Continue with Email
                        </Button>
                    </form>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don&apos;t have an account?{' '}
                            <Link href="/get-started" className="font-medium text-[#7440FA] hover:text-[#6030d4] hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
