import '@/app/style/about.css'
import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'About us',
}

export default function AboutPage() {
    return (
        <div className="about-page-container">
            <Image 
                className="about-hero-image" 
                src="/about-hero.jpg" 
                alt={`A photo of a woman sitting on the roof of a dark blue van. The light is switched on and it illuminates her from behind. It's night, and the woman looks up at the sky.`}
                width={5304}
                height={7952}
                loading="eager"
            />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta rounded">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="btn" href="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}