import type { VanType } from '../../lib/types'
import Link from "next/link"

export default async function FilterLinks(
    props: { searchParams: Promise<{ type?: VanType }> }
) {
    const { type } = await props.searchParams
    const vanTypes: VanType[] = ['simple', 'rugged', 'luxury']

    return (
        <div className="flex gap-y-3 gap-x-5 flex-wrap">

            {vanTypes.map((vanType) => <Link
                href={{
                    pathname: '/vans',
                    query: { type: vanType }
                }}
                key={vanType}
                className={`van-type ${vanType} ${type === vanType ? 'selected' : ''} filter-link`}
            >
                {vanType}
            </Link>)}

            {type && <Link
                href='/vans'
                className="van-type filter-link bg-gray-main text-bg-light underline interact:bg-dark-text"
            >
                Clear filter
            </Link>}

        </div>
    )
}