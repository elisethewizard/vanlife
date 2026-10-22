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
        <div className="flex flex-col gap-3 rounded-md text-black-main md:gap-4 lg:py-8 lg:px-12 lg:flex-row lg:gap-8 lg:bg-beige-transparent lg:shadow-main">
            <Image
                src={image_url}
                alt={`Photo of ${name}.`}
                height={880}
                width={880}
                className="h-min object-cover object-center rounded-md md:w-full md:aspect-4/3"
                fetchPriority="high"
                preload
            />
            <div className="w-full flex flex-col gap-3 lg:min-w-[300px] lg:pt-4">
                <div className="flex flex-col gap-3 md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                    <p className={`van-type ${type} shadow-main rounded-md md:self-center`}>
                        {type}
                    </p>
                    <h2 className="text-[2rem] font-bold lg:text-[2.375rem]">
                        {name}
                    </h2>
                </div>
                <p className="text-xl lg:text-2xl">
                    <span className="text-2xl font-bold">${price}</span>
                    /day
                </p>
                <p className="md:max-w-[95%] md:py-2.5 lg:py-5">
                    {description}
                </p>
                <button className="btn bg-orange-main text-white text-lg transition-all duration-325 ease-in-out interact:text-dark-text md:w-fit">
                    Rent this van
                </button>
            </div>
        </div>
    )
}