import '@/app/style/vans.css'
import type { Metadata } from 'next'
import type { VanType } from "@/app/lib/types"
import { Suspense } from 'react'
import FilterLinksSkeleton from '@/app/components/skeletons/FilterLinksSkeleton'
import VansListSkeleton from '@/app/components/skeletons/VansListSkeleton'
import FilterLinks from "@/app/components/vans/FilterLinks"
import VanList from "@/app/components/vans/VanList"

export async function generateMetadata(
    props: { searchParams?: Promise<{ type?: VanType }> }
): Promise<Metadata> {
    
    const searchParams = await props.searchParams
    const type = searchParams?.type ? 
        searchParams.type.charAt(0).toUpperCase() + searchParams.type.slice(1) : 
        null

    return {
        title: type ? `${type} vans` : 'Explore our vans',
    }
}

export function generateStaticParams() {
    return [
        { searchParams: { type: 'simple' } },
        { searchParams: { type: 'rugged' } },
        { searchParams: { type: 'luxury' } },
        {},
    ]
}

export default function Page(
    props: { searchParams: Promise<{ type?: VanType }> }
) {
    return (
        <div className="px-6 pb-16 md:px-12 md:max-w-[900px] lg:pt-5 lg:max-w-[1500px]">
            <h1 className="my-[.67em] text-[2em] font-bold md:text-4xl lg:mt-0 lg:text-[2.5rem]">
                Explore our van options
            </h1>
            <Suspense fallback={<FilterLinksSkeleton />}>
                <FilterLinks searchParams={props.searchParams} />
            </Suspense>
            <Suspense fallback={<VansListSkeleton />}>
                <VanList searchParams={props.searchParams} />
            </Suspense>
        </div>
    )
}