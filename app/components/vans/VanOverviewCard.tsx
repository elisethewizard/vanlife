import Link from "next/link";
import type { VanShort } from "../../lib/types";
import Image from "next/image";

export default function VanOverviewCard(props: VanShort) {
    const { id, name, price, type, image_url, from } = props
    return (
        <div className="p-4 rounded-md bg-beige-transparent shadow-main lg:py-5 lg:px-7">
            <Link
                href={{
                    pathname: `/vans/${id}`,
                    query: from ? { from: from } : {},
                }}
                className="h-full flex flex-col text-black-main"
            >
                <Image 
                    className="h-full max-w-full object-cover rounded-md aspect-square"
                    src={image_url}
                    alt={`Photo of ${name}.`}
                    width={500}
                    height={500}
                />
                <div className="pt-2.5 pb-3 flex flex-col gap-2 lg:pt-4">
                    <h3 className="text-[1.17em] font-bold lg:text-[1.375rem]">
                        {name}
                    </h3>
                    <p className="lg:text-lg">
                        ${price}
                        <span>/day</span>
                    </p>
                </div>
                <p className={`van-type ${type} py-1.5 px-3.5 rounded-md text-sm shadow-main md:text-[.938rem] lg:py-2 lg:px-6 lg:text-base`}>
                    {type}
                </p>
            </Link>
        </div>
    )
}