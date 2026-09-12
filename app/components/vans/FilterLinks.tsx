import type { VanType } from '../../lib/types'
import Link from "next/link"

export default async function FilterLinks(
    props: { searchParams: Promise<{ type?: VanType }> }
) {
    const { type } = await props.searchParams
    const vanTypes: VanType[] = ['simple', 'rugged', 'luxury']

    return (
        <div className="filter-links">

            {vanTypes.map((vanType) => <Link
                href={{
                    pathname: '/vans',
                    query: { type: vanType }
                }}
                key={vanType}
                className={`filter-link van-type b-shadow rounded ${vanType} ${type === vanType ? 'selected' : ''}`}
            >
                {vanType}
            </Link>)}

            {type && <Link
                href='/vans'
                className="clear-filters filter-link van-type b-shadow rounded"
            >
                Clear filter
            </Link>}

        </div>
    )
}