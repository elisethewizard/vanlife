import Link from "next/link";
import type { VanShort } from "../../lib/types";
import Image from "next/image";

export default function VanOverviewCard(props: VanShort) {
    const { id, name, price, type, image_url, from } = props
    return (
        <div className="van-tile b-shadow rounded">
            <Link
                href={{
                    pathname: `/vans/${id}`,
                    query: from ? { from: from } : {},
                }}
            >
                <Image 
                    className="rounded"
                    src={image_url}
                    alt={`Photo of ${name}.`}
                    width={500}
                    height={500}
                />
                <div className="van-info">
                    <h3>{name}</h3>
                    <p>${price}<span>/day</span></p>
                </div>
                <p className={`van-type ${type} selected b-shadow rounded`}>{type}</p>
            </Link>
        </div>
    )
}