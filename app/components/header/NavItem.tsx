import Link from 'next/link'
import { Suspense, type ComponentPropsWithoutRef } from "react"
import NavLeaf from './NavLeaf'

export default function NavItem(props: ComponentPropsWithoutRef<"a">) {
    return (
        <Link
            key={props.href}
            href={props.href!}
            className={`${props.className || ''} flex border-0 text-dark-text font-semibold cursor-pointer interact:text-black-main interact:underline interact:decoration-1 has-active:text-black-main has-active:underline has-active:decoration-1 md:text-lg`}
            {...props}
        >
            {props.children}
            <Suspense>
                <NavLeaf href={props.href!} />
            </Suspense>
        </Link>
    )
}