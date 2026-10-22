import Link from "next/link"

export default function Home() {
    return (
        <div 
            className="home-img min-h-[350] py-11.5 px-7 bg-position-[center_30%] bg-no-repeat bg-cover text-white text-shadow-main md:py-16 md:px-11.5 lg:px-16"
        >
            <h1 className=" my-[.67em] text-4xl/[2.625rem] font-bold lg:text-[2.75rem]">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className='leading-6 my-[1em] md:text-lg lg:text-xl'>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link 
                href="/vans" 
                className="inline-block mt-6.5 py-3 px-6 rounded-md bg-orange-main text-white text-center no-underline border-0 font-bold text-xl cursor-pointer text-shadow-none transition-all duration-325 ease-in-out interact:text-black-main md:mt-[1.3em] md:pl-0 md:bg-transparent md:text-orange-main md:text-[2.625rem] md:underline md:text-shadow-main md:interact:text-beige-main lg:text-5xl"
            >
                Find your van
            </Link>
        </div>
    )
}