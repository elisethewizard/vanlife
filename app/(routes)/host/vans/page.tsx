import HostVansList from "@/app/components/host/HostVansList"
import { Suspense } from "react"
import type { Metadata } from 'next'
import HostVansSkeleton from "@/app/components/skeletons/HostVansSkeleton"

export const metadata: Metadata = {
    title: 'My vans',
}

export default function Page() {
    return (
        <section style={{ flexGrow: 0, }}>
            <Suspense fallback={<HostVansSkeleton />}>
                <HostVansList />
            </Suspense>
        </section>
    )
}