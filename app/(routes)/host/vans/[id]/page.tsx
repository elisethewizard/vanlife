import type { Metadata } from 'next'
import HostVansDetail from "@/app/components/host/HostVansDetail"
import DetailBlocks from "@/app/components/host/DetailBlocks"
import { fetchVan } from "@/app/lib/data"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { notFound } from 'next/navigation'

export async function generateMetadata(
    props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    
    const { id } = await props.params
    const { name } = await fetchVan(id)
    
    return {
        title: `${name} | My vans`,
    }
}

export default async function Page(
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id
    const van = await fetchVan(id)

    if (!van) {
        notFound()
    }

    return (
        <section>
            <Link
                href='/host/vans'
                className="back-button"
            >
                <BsArrowLeft className="icon" />
                <span>Back to your vans</span>
            </Link>
            <div className="host-van-detail-layout-container b-shadow rounded">
                <img src={van.image_url} className="rounded host-van-img desktop" />
                <div>
                    <HostVansDetail van={van} />
                    <DetailBlocks van={van} />
                </div>
            </div>
        </section>
        
    )
}

export const instant = false