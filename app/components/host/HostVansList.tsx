import { getHostVans } from "../../lib/data"
import HostVansOverview from "./HostVansOverview"

export default async function HostVansList() {
    const vans = await getHostVans()

    return (
        <div className="host-grid">
            {vans.map((van) => <HostVansOverview key={van.id} {...van} />)}
        </div>
    )
}