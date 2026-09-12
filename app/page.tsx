import Image from "next/image"
import Link from "next/link"
import heroImg from '@/public/home-hero.jpg'

export default function Home() {
    return (
        <div className="home-container t-shadow">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link href="/vans" className="rounded">Find your van</Link>
            
            {/* background image */}
            <Image 
                src={heroImg}
                alt=''
                loading="eager"
                style={{ display: 'none' }}
            />
        </div>
    )
}