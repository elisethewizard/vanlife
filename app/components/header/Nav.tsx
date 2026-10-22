
import { BsPersonCircle } from "react-icons/bs"
import NavItem from './NavItem'
import LogoutButton from './LogoutButton'

export default function Nav() {

    const links = [
        { href: '/host', text: 'Host', },
        { href: '/about', text: 'About', },
        { href: '/vans', text: 'Vans', },
    ]

    return (
        <nav className="justify-end md:gap-x-4.5 lg:gap-x-5">

            {links.map((link) => <NavItem
                href={link.href}
                key={link.text}
            >
                {link.text}
            </NavItem>)}

            <NavItem href="/login" classes='inline-flex items-center'>
                <BsPersonCircle className='icon' />
            </NavItem>

            <LogoutButton />

        </nav>
    )
}