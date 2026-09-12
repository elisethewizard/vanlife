import '@/app/style/vans.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import VanDetail from "@/app/components/vans/VanDetail"
import { fetchVan } from "@/app/lib/data"
import type { VanType } from "@/app/lib/types"
import VanSkeleton from '@/app/components/skeletons/VanSkeleton'
import BackButton from '@/app/components/vans/BackButton'

export async function generateMetadata(
    props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    
    const { id } = await props.params
    const { name } = await fetchVan(id)
    
    return {
        title: name,
    }
}

export default function Page(
    props: { 
        params: Promise<{ id: string }>, 
        searchParams: Promise<{ from?: VanType }> 
    }
) {

    return (
        <div className="van-detail-container">
            <Suspense fallback={<div className='skeleton' style={{ width: 200, height: 35 }} />}>
                <BackButton searchParams={props.searchParams} />
            </Suspense>
            <Suspense fallback={<VanSkeleton />}>
                <VanDetail params={props.params} />
            </Suspense>
        </div>
    )
}