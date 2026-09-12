import type { Metadata } from 'next'
import HostVansList from "@/app/components/host/HostVansList"
import Link from "next/link"
import { Suspense } from "react"
import { BsStarFill } from "react-icons/bs"
import HostVansSkeleton from '@/app/components/skeletons/HostVansSkeleton'

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Host() {
    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link href="/host/income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>

                <div>
                    <BsStarFill className="star" />
                    <p>
                        <span>5.0</span>/5
                    </p>
                </div>

                <Link href="/host/reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <Suspense fallback={<HostVansSkeleton />}>
                    <HostVansList />
                </Suspense>
            </section>
        </>
    )
}