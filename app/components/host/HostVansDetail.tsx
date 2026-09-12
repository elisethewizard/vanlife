import { VanShort } from "../../lib/types"

export default function HostVansDetail(props: { van: VanShort }) {
    const { name, type, price, image_url } = props.van

    return (
        <div className="host-van-detail-overview">
            <img src={image_url} className="rounded host-van-img mobile" />
            <div className="host-van-detail-info-text">
                <p
                    className={`van-type host-van b-shadow rounded ${type}`}
                >
                    {type}
                </p>
                <h3>{name}</h3>
                <h4>${price}/day</h4>
            </div>
        </div>

    )
}
