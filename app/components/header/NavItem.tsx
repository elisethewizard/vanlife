import Link from 'next/link'
import { Suspense, type ReactNode } from "react"
import NavLeaf from './NavLeaf'

type NavItemProps = {
    href: string,
    children: ReactNode,
    classes?: string,
}

export default function NavItem(props: NavItemProps) {
    return (
        <Link
            href={props.href}
            className={`${props.classes || ''} flex border-0 text-dark-text font-semibold cursor-pointer interact:text-black-main interact:underline interact:decoration-1 has-active:text-black-main has-active:underline has-active:decoration-1 md:text-lg`}
            key={props.href}
        >
            {props.children}
            <Suspense>
                <NavLeaf href={props.href} />
            </Suspense>
        </Link>
    )
}