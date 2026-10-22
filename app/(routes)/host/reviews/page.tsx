import Reviews from '@/app/components/host/Reviews'
import ReviewsSkeleton from '@/app/components/skeletons/ReviewsSkeleton'
import type { Metadata } from 'next'
import Image from "next/image"
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'My reviews',
}

export default function Page() {
    return (
        <section className="pb-16 text-black-main">
            <div className="mb-8 flex items-center">
                <h2 className="mr-5 text-[2rem] font-bold">Your reviews</h2>
                <p className="text-dark-text md:text-lg/[1]">
                    Last <span className="font-bold underline">30 days</span>
                </p>
            </div>
            <Image
                className="graph pb-9 md:max-w-112.5"
                src="/reviews-graph.png"
                alt="Review graph"
                width={1732}
                height={753}
                loading='eager'
            />
            <Suspense fallback={<ReviewsSkeleton />}>
                <Reviews />
            </Suspense>
        </section>
    )
}