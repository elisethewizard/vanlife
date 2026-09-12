import Image from "next/image"
import type { VanDetail } from "../../lib/types"
import { fetchVan } from "@/app/lib/data"
import { notFound } from "next/navigation"

export default async function VanDetail(
    props: {
        params: Promise<{ id: string }>,
    }
) {
    const { id } = await props.params
    const van = await fetchVan(id)
    if (!van) {
        notFound()
    }
    const { name, price, description, image_url, type } = van

    return (
        <div className="van-detail rounded b-shadow">
            <Image
                className="rounded"
                src={image_url}
                alt={`Photo of ${name}.`}
                height={880}
                width={880}
                loading='eager'
            />
            <div className="van-detail-info">
                <div className="van-detail-info-main">
                    <p className={`van-type ${type} selected b-shadow rounded`}>{type}</p>
                    <h2>{name}</h2>
                </div>
                <p className="van-price">
                    <span>${price}</span>
                    /day
                </p>
                <p className="van-desc">{description}</p>
                <button className="btn">Rent this van</button>
            </div>
        </div>
    )
}