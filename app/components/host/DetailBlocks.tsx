'use client'

import { useState } from "react"
import { HostVanDetailBlocks, VanDetail } from "../../lib/types"
import HostVansNav from "./HostVansNav"
import Image from "next/image"

export default function DetailBlocks(props: { van: VanDetail }) {
    const [active, setActive] = useState<HostVanDetailBlocks>('details')
    const { name, type, price, description, image_url } = props.van

    function Details() {
        return (
            <div className="host-van-detail">
                <h4>Name: <span>{name}</span></h4>
                <h4>Category: <span>{type}</span></h4>
                <h4>Description: <span>{description}</span></h4>
                <h4>Visibility: <span>Public</span></h4>
            </div>
        )
    }

    function Pricing() {
        return (
            <h3 className="host-van-price">
                ${price}
                <span>/day</span>
            </h3>
        )
    }

    function Photos() {
        return (
            <div className="host-van-detail-photos-cont">
                <Image
                    className="host-van-detail-image rounded"
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