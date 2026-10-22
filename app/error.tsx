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
        <div className='flex justify-center items-center lg:pt-24 lg:items-start'>
            <div className='max-w-[94vw] p-6 flex flex-col items-center gap-4 rounded-md bg-beige-main md:py-8 md:px-16 md:gap-6'>

            <h2 className='font-bold text-[1.5em] lg:text-[1.75rem]'>
                Something went wrong!
            </h2>
            <button
                className='btn w-fit bg-orange-light text-black-main text-[1.063rem] font-semibold interact:bg-orange-main lg:text-lg'
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