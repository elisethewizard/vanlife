import Link from 'next/link'
import { BsXCircle, BsPersonCircle } from "react-icons/bs"
import { Suspense } from 'react'
import NavLeaf from './NavLeaf'
import { logOut } from '../lib/actions'

export default function Nav() {
    
    const links = [
        { href: '/host', text: 'Host', },
        { href: '/about', text: 'About', },
        { href: '/vans', text: 'Vans', },
    ]

    return (
        <nav>
            {links.map((link) => <Link
                href={link.href}
                className='nav-item'
                key={link.text}
            >
                {link.text}
                <Suspense>
                    <NavLeaf href={link.href} />
                </Suspense>
            </Link>)}
            <Link href="/login" className="login-link nav-item">
                <BsPersonCircle className='icon' />
                <Suspense>
                    <NavLeaf href='/login' />
                </Suspense>
            </Link>
            <button
                className='nav-item'
                onClick={logOut}
            >
                <BsXCircle className='icon' />
            </button>
        </nav>
    )
}