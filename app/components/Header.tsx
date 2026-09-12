import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
    return (
        <header>
            <Link className="site-logo" href="/">#VanLife</Link>
            <Nav />
        </header>
    )
}