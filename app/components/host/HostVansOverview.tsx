import Link from "next/link"
import { VanShort } from "../../lib/types"
import Image from "next/image"

export default function HostVansOverview(props: VanShort) {
    const { id, name, price, image_url } = props
    return (
        <Link 
            href={`/host/vans/${id}`}
            className="py-4.5 px-6 flex items-center gap-4 rounded-md bg-white md:py-5 md:px-8" 
        >
            <Image 
                className="w-[70px] h-auto aspect-square rounded-md md:w-[90px] lg:w-[110px]"
                src={image_url}
                alt={`Photo of ${name}`}
                width={500}
                height={500}
            />
            <div className="mr-auto">
                <h3 className="my-2.5 text-xl font-semibold md:text-[1.375rem]">
                    {name}
                </h3>
                <p className="my-2.5 md:text-[1.063rem]">${price}/day</p>
            </div>
        </Link>
    )
}