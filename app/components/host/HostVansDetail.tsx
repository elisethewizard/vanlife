import { VanShort } from "../../lib/types"

export default function HostVansDetail(props: { van: VanShort }) {
    const { name, type, price, image_url } = props.van

    return (
        <div className="flex items-center gap-4.5 lg:pt-4">
            <img 
                src={image_url} 
                className="h-[160px] self-start rounded-md lg:hidden"
            />
            <div className="md:grid md:gap-y-2 md:gap-x-4">
                <p
                    className={`van-type ${type} rounded-md shadow-main md:self-center md:col-start-2`}
                >
                    {type}
                </p>
                <h3 className="mt-4 mb-1.5 text-[1.625rem] font-bold md:my-0 md:row-start-1 md:text-[1.75rem] lg:text-[2.375rem]">
                    {name}
                </h3>
                <h4 className="text-xl font-medium lg:text-2xl">
                    ${price}/day
                </h4>
            </div>
        </div>

    )
}
