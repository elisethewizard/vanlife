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
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <Image
                className="graph"
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