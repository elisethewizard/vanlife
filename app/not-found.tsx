import Link from 'next/link'
import BackButtonRouter from './components/generic/BackButtonRouter'

export default function NotFound() {
    return (
        <div className="p-7 pt-16 flex flex-col justify-start items-center gap-8 md:px-12 md:items-start">
            <h1 className="max-w-92.5 font-bold text-[1.75rem] md:max-w-[95%] md:text-[2rem]">
                Sorry, the page you were looking for was not found.
            </h1>
            <div className="flex gap-8">
                <BackButtonRouter>Go back</BackButtonRouter>
                <Link 
                    href="/" 
                    className="btn p-3.5 bg-dark-text text-gray-light shadow-main interact:bg-gray-light interact:text-dark-text md:px-5 md:text-lg"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    )
}