import type { VanType } from "@/app/lib/types"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"

export default async function BackButton(
    props: {
        searchParams: Promise<{ from?: VanType }>
    }
) {
    const { from } = await props.searchParams

    return (
        <Link
            href={{
                pathname: '/vans',
                query: from ? { type: from } : {}
            }}
            className="back-button"
        >
            <BsArrowLeft size={'1.125rem'} />
            <span>Back to {from || 'all'} vans</span>
        </Link>
    )

}