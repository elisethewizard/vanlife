import { getHostVans } from "../../lib/data"
import HostVansOverview from "./HostVansOverview"
import HostVansTop from "./HostVansTop"

export default async function HostVansList() {
    const vans = await getHostVans()

    return (
        <>
            <HostVansTop />
            <div className="host-vans-list">
                {vans.map((van) => <HostVansOverview key={van.id} {...van} />)}
            </div>
        </>
    )
}