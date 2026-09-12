'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

export default function BackButtonRouter({ children }: { children: ReactNode }) {
    const router = useRouter()

    return (
        <button type="button" className='btn b-shadow' onClick={() => router.back()}>
            { children }
        </button>
    )
}