import type { ReviewType } from "@/app/lib/types"
import { BsStarFill } from "react-icons/bs"

export default function Review(props: ReviewType) {
    const { username, text, rating, date } = props
    const dateStr = date.toLocaleDateString()
    const stars = rating && Array.from({ length: rating }, () => <BsStarFill className="text-orange-main" />)

    return (
        <div className="max-w-6xl pt-5 flex flex-col gap-4">
            { rating && <div className="w-fit flex gap-1">{stars}</div> }
            <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2.5">
                    <p className="text-black-main font-semibold text-[110%]">
                        {username}
                    </p>
                    <p className="text-[oklch(0.64_0_0)]">{dateStr}</p>
                </div>
                <p>{text}</p>
            </div>
            <hr className="h-px my-[.5em] border-0 bg-[oklch(0.83_0_0)]" />
        </div>
    )
}