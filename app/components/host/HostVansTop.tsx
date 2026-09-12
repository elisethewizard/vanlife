'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HostVansTop() {
    const pathname = usePathname()
    const onDash = pathname.endsWith('host')

    return onDash
        ? (
            <div className="top">
                <h2>Your listed vans</h2>
                <Link href="/host/vans">View all</Link>
            </div>
        )
        : (
            <h1>Your listed vans</h1>
        )
}