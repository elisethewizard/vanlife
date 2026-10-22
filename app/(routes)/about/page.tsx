import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import hero from '@/public/about-hero.jpg'

export const metadata: Metadata = {
    title: 'About us',
}

export default async function AboutPage() {
    'use cache'
    return (
        <div className={`pt-4 pb-8 px-0 md:flex md:flex-col md:p-0 md:text-[110%]`}>
            <div className='h-fit bg-[oklch(0.537_0.053_272.7)] md:absolute md:h-full md:max-h-[calc(100dvh-7rem)] md:-z-10'>
                <Image 
                    src={hero}
                    alt={`A photo of a woman sitting on the roof of a dark blue van. The light is switched on and it illuminates her from behind. It's night, and the woman looks up at the sky.`}
                    className="h-min w-dvw object-cover aspect-video md:h-full md:object-[center_43%] md:mix-blend-multiply lg:object-[center_47%]" 
                    fetchPriority="high"
                    preload
                />
            </div>
            <div className="mb-13.5 px-6 text-black-main md:max-w-5xl md:mt-16 md:mx-6 md:px-7 md:text-bg-light md:text-shadow-main">
                <h1 className='my-[.67em] text-[2em]/9.5 font-bold'>
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className='my-[1em] leading-5.5'>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                </p>
                <p className='my-[1em] leading-5.5'>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="mx-6.5 p-8 pt-0 rounded-md bg-orange-light text-black-main md:pb-0 md:mt-9 md:mb-8 md:mx-13 md:border-l-12 md:border-orange-light md:bg-transparent md:text-orange-light">
                <h2 className='py-9 text-2xl font-bold md:pt-0 md:text-[1.75rem] md:text-shadow-main'>
                    Your destination is waiting.
                    <br />
                    Your van is ready.
                </h2>
                <Link 
                    className="btn bg-black-main text-white md:text-xl md:text-black-main md:bg-orange-light md:interact:bg-beige-main" 
                    href="/vans"
                >
                    Explore our vans
                </Link>
            </div>
        </div>
    )
}