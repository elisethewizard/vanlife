import type { ReviewType } from "@/app/lib/types"
import { BsStarFill } from "react-icons/bs"

export default function Review(props: ReviewType) {
    const { username, text, rating, date } = props
    const dateStr = date.toLocaleDateString()
    const stars = rating && Array.from({ length: rating }, () => <BsStarFill className="review-star" />)

    return (
        <div className="review">
            { rating && <div className="rating">{stars}</div> }
            <div className="text">
                <div className="info">
                    <p className="name">{username}</p>
                    <p className="date">{dateStr}</p>
                </div>
                <p>{text}</p>
            </div>
            <hr />
        </div>
    )
}