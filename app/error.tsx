'use client'

import { useEffect } from 'react'

export default function Error(
    { error, retry }: {
        error: Error & { digest?: string },
        retry: () => void
    }
) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='error-outer'>
            <div className='error-inner rounded'>

            <h2>Something went wrong!</h2>
            <button
                className='btn'
                onClick={
                    // Attempt to recover by re-fetching and re-rendering the segment
                    () => retry()
                }
            >
                Try again
            </button>
            </div>
        </div>
    )
}