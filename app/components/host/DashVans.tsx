import { Suspense } from "react"
import HostVansList from "./HostVansList"
import HostVansSkeleton from "../skeletons/HostVansSkeleton"
import Link from "next/link"

export default function DashVans() {
    return (
        <section className="py-9.5">
            <div className="flex justify-between items-center">
                <h2 className="py-4 pr-2 text-2xl font-bold lg:text-3xl">
                    Your listed vans
                </h2>
                <Link href="/host/vans" className="py-2 pl-1 md:pl-3">
                    View all
                </Link>
            </div>
            <Suspense fallback={<HostVansSkeleton />}>
                <HostVansList />
            </Suspense>
        </section>
    )
}