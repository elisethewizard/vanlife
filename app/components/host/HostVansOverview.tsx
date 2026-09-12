import Link from "next/link"
import { VanShort } from "../../lib/types"
import Image from "next/image"

export default function HostVansOverview(props: VanShort) {
    const { id, name, price, image_url } = props
    return (
        <Link className="host-van-single rounded" href={`/host/vans/${id}`}>
            <Image 
                className="rounded img"
                src={image_url}
                alt={`Photo of ${name}`}
                width={500}
                height={500}
            />
            <div className="host-van-info">
                <h3>{name}</h3>
                <p>${price}/day</p>
            </div>
        </Link>
    )
}