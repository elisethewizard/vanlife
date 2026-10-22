import HostVansList from "@/app/components/host/HostVansList"
import { Suspense } from "react"
import type { Metadata } from 'next'
import HostVansSkeleton from "@/app/components/skeletons/HostVansSkeleton"

export const metadata: Metadata = {
    title: 'My vans',
}

export default function Page() {
    return (
        <section>
            <h1 className="mb-[.67em] font-bold text-[2rem] md:text-4xl lg:text-[2.5rem]">Your listed vans</h1>
            <Suspense fallback={<HostVansSkeleton />}>
                <HostVansList />
            </Suspense>
        </section>
    )
}