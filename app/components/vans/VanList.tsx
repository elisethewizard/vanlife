import { fetchVans } from "../../lib/data"
import type { VanType } from "../../lib/types"
import VanOverviewCard from "./VanOverviewCard"

export default async function VanList(
    props: { searchParams: Promise<{ type?: VanType }> }
) {
    const type = (await props.searchParams).type
    const vans = await fetchVans(type)

    return (
        <div className="van-list">
            { vans.map((van) => <VanOverviewCard key={van.id} from={type} {...van} />) }
        </div>
    )
}