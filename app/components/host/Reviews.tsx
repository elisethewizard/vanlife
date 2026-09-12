import Review from "./Review"
import { getReviews } from "@/app/lib/data"

export default async function Reviews() {
    const reviews = await getReviews() 
    return (
        <>
            <h3>Reviews ({reviews.length})</h3>
            { reviews.map((review) => <Review {...review} key={review.id} />) }
        </>
    )
}