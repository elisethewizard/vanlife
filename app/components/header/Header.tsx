import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
    return (
        <header className="py-3.5 px-4 flex items-center justify-between gap-3 leading-none md:py-4 md:px-6 lg:px-8">
            <Link 
                className="text-dark-text font-black text-xl/[1.4] uppercase bg-clip-text transition-colors duration-500 ease-in-out interact:text-transparent interact:bg-linear-to-br interact:from-orange-main interact:from-45% interact:to-black-main md:text-[1.625rem] lg:text-[1.75rem]" 
                href="/"
            >
                #VanLife
            </Link>
            <Nav />
        </header>
    )
}