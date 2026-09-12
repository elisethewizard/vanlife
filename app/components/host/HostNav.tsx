import Link from 'next/link'
import NavLeaf from '../NavLeaf'
import { Suspense } from 'react'

export default function HostNav() {

    const links = [
        { href: '/host', text: 'Dashboard', end: true },
        { href: '/host/income', text: 'Income', },
        { href: '/host/vans', text: 'Vans', },
        { href: '/host/reviews', text: 'Reviews', },
    ]

    return (
        <nav className="host-nav secondary-nav">
            {links.map((link) => <Link
                key={link.text}
                href={link.href}
                className='secondary-nav-item'
            >
                {link.text}
                <Suspense>
                    <NavLeaf href={link.href} end={link.end} />
                </Suspense>
            </Link>)}
        </nav>
    )
}