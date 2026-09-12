import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import postgres from 'postgres'
import { User } from './app/lib/types'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

async function getUser(email: string): Promise<User|undefined> {
    try {
        const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
        return user[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

const schema = z.object({
    email: z.email({ error: 'Please enter a valid email.' }).trim(),
    password: z.string().min(6, { error: 'Be at least 6 characters long' }).trim()
})

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = schema.safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await getUser(email)
                    if (!user) return null
                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if (passwordsMatch) return user
                }

                return null
            },
        }),
    ],
    session: { 
        strategy: "jwt",
        maxAge: 24 * 60 * 60, /* one day */
    },
})