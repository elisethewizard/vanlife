import Link from "next/link"
import { BsStarFill } from "react-icons/bs"

export default function DashReviews() {
    const userRating = '5.0'
    return (
        <section className="py-9 flex items-center gap-3 bg-[oklch(0.915_0.067_73.3)]">
            <h2 className="text-2xl font-bold">Review score</h2>

            <div className="flex items-center gap-1.5">
                <BsStarFill className="text-orange-main text-2xl" />
                <p className="mr-auto text-dark-text text-xl">
                    <span className="text-black-main font-bold">
                        {userRating}
                    </span>
                    /5
                </p>
            </div>

            <Link href="/host/reviews" className="ml-auto">
                Details
            </Link>
        </section>
    )
}