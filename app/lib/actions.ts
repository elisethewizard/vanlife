'use server'

import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'
import { updateTag } from 'next/cache'

export async function logIn(prevState: any, formData: FormData) {
    try {
        await signIn('credentials', formData)
        updateTag('user')
        return 'Logged in successfully. Redirecting...'
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                return 'Invalid credentials.'
            }
            return 'Something went wrong.'
        }
        throw error
    }
}

export async function logOut() {
    await signOut({ redirectTo: '/' })
    updateTag('user')
}