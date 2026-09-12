
import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnHost = nextUrl.pathname.startsWith('/host')
            
            /* unauthorized users don't have access to host */
            if (isOnHost && !isLoggedIn) {
                return false
            }

            return true
        },
        async jwt({ token, user, session }) {
            if (user) {
                return {
                    ...token,
                    id: user.id
                }
            }
            return token
        },
        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string|undefined
                }
            }
        },
    },
    pages: {
        signIn: '/login',
    },
    providers: [],
    session: {
        strategy: 'jwt',
    }
} satisfies NextAuthConfig