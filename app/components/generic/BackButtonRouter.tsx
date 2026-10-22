'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

export default function BackButtonRouter({ children }: { children: ReactNode }) {
    const router = useRouter()

    return (
        <button 
            type="button" 
            className='btn p-3.5 bg-dark-text text-gray-light shadow-main interact:bg-gray-light interact:text-dark-text md:px-5 md:text-lg' 
            onClick={() => router.back()}
        >
            { children }
        </button>
    )
}