'use client'

import { useActionState } from 'react'
import { logIn } from '@/app/lib/actions'
import LoginFormInput from './LoginFormInput'

export default function LoginForm() {
    const [message, formAction, isPending] = useActionState(logIn, undefined)
    return (
        <div className='flex flex-col justify-center items-center gap-5.5'>
            <div className='h-16 max-w-4xl flex items-end'>
                {message ? 
                <h2 aria-live='polite' className='text-[1.5em] font-bold'>{message}</h2> :
                <h1 className='text-[2rem] font-bold md:text-4xl'>Sign in to your account</h1>}
            </div>

            <form action={formAction} className="w-100 max-w-[94vw] flex flex-col items-center">
                <LoginFormInput
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="rounded-[6px_6px_0_0]" 
                />
                <LoginFormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="rounded-[0_0_6px_6px] border-t-0"
                    minLength={6}
                />
                <input type='hidden' name='redirectTo' value='/host' />
                <button
                    className="btn login-form-btn mt-5.5 disabled:bg-gray-main disabled:cursor-not-allowed"
                    aria-disabled={isPending}
                >
                    { isPending ? "Logging in..." : "Log in" }
                </button>
            </form>
        </div>
    )
}