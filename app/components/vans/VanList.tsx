import { fetchVans } from "../../lib/data"
import type { VanType } from "../../lib/types"
import VanOverviewCard from "./VanOverviewCard"

export default async function VanList(
    props: { searchParams: Promise<{ type?: VanType }> }
) {
    const type = (await props.searchParams).type
    const vans = await fetchVans(type)

    return (
        <div className="pt-12 grid grid-cols-2 gap-6.5 justify-items-center md:py-8 md:grid-cols-3 md:gap-7 lg:gap-y-8 lg:gap-x-11">
            { vans.map((van) => <VanOverviewCard key={van.id} from={type} {...van} />) }
        </div>
    )
}