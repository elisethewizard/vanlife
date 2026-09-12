import { authConfig } from './auth.config'
import NextAuth from 'next-auth'

export const proxy = NextAuth(authConfig).auth((req) => {

    /* redirect users who are already logged in away from login page */
    if (req.auth && req.nextUrl.pathname === '/login') {
        const newUrl = new URL('/host', req.nextUrl.origin)
        return Response.redirect(newUrl)
    }

    /* redirect not logged in users trying to access host to login page */
    if (!req.auth && req.nextUrl.pathname.startsWith('/host')) {
        const newUrl = new URL('/login', req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
    // Exclude API routes, static files, image optimizations, and .png files
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}