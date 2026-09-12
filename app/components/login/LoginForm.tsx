'use client'

import { useActionState } from 'react'
import { logIn } from '@/app/lib/actions'

export default function LoginForm() {
    const [message, formAction, isPending] = useActionState(logIn, undefined)
    return (
        <div className='login-form-cont'>
            <div className='msg-cont'>{
                message ? <h2 aria-live='polite'>{message}</h2> :
                <h1>Sign in to your account</h1>
            }</div>

            <form action={formAction} className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="b-shadow"    
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="b-shadow"
                    minLength={6}
                    required
                />
                <input type='hidden' name='redirectTo' value='/host' />
                <button
                    className="btn b-shadow"
                    aria-disabled={isPending}
                >
                    { isPending ? "Logging in..." : "Log in" }
                </button>
            </form>
        </div>
    )
}