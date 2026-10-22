'use client'

import { useState } from "react"
import { HostVanDetailBlocks, VanDetail } from "../../lib/types"
import HostVansNav from "./HostVansNav"
import Image from "next/image"

export default function DetailBlocks(props: { van: VanDetail }) {
    const [active, setActive] = useState<HostVanDetailBlocks>('details')
    const { name, type, price, description, image_url } = props.van

    function Details() {
        const details = {
            name: name,
            category: type,
            description: description,
            visibility: "public"
        }
        return (
            <div className="flex flex-col gap-4 text-black-main text-[.938rem]/[1.25rem] font-normal md:text-base">
                {Object.entries(details).map((detail) => <h4 key={detail[0]}>
                    <span className="font-bold capitalize">{detail[0]}: </span>
                    {detail[1]}
                </h4>)}
            </div>
        )
    }

    function Pricing() {
        return (
            <h3 className="text-2xl font-medium">
                ${price}
                <span className="text-dark-text text-[1.063rem]">
                    /day
                </span>
            </h3>
        )
    }

    function Photos() {
        return (
            <div className="flex gap-2 flex-wrap">
                <Image
                    className="h-[100px] w-auto rounded-md"
                    src={image_url}
                    alt={`Photo of ${name}.`}
                    height={100}
                    width={100}
                />
            </div>
        )
    }

    function Block() {
        switch (active) {
            case "details": return <Details />
            case "pricing": return <Pricing />
            case "photos": return <Photos />
        }
    }

    return (
        <>
            <HostVansNav active={active} setActive={setActive} />
            <Block />
        </>
    )

}