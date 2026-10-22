import type { Metadata } from 'next'
import DashEarning from '@/app/components/host/DashEarnings'
import DashReviews from '@/app/components/host/DashReviews'
import DashVans from '@/app/components/host/DashVans'

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Host() {
    return (
        <>
            <DashEarning />
            <DashReviews />
            <DashVans />
        </>
    )
}