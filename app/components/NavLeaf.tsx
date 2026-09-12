'use client'

import { usePathname } from 'next/navigation'

export default function NavLeaf(props: { href: string, end?: boolean }) {
    const { href, end } = props
    const pathname = usePathname()
    
    return (
        <div
            style={{
                display: 'none'
            }}
            data-active={ end ? pathname === href : pathname.startsWith(href) }
        />
    )
}