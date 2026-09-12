import Link from 'next/link'
import BackButtonRouter from './components/BackButtonRouter'

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <div>
                <BackButtonRouter>Go back</BackButtonRouter>
                <Link href="/" className="btn b-shadow">Return to Home</Link>
            </div>
        </div>
    )
}