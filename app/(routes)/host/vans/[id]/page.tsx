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
        <section className="max-w-[1400px] mx-auto">
            <Link href='/host/vans' className="back-button">
                <BsArrowLeft className="icon" />
                <span>Back to your vans</span>
            </Link>
            <div className="my-6 p-6 rounded-md bg-beige-transparent shadow-main lg:py-8 lg:px-12 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-x-6">
                <img 
                    src={van.image_url} 
                    className="hidden rounded-md lg:block"
                />
                <div className="lg:pr-8">
                    <HostVansDetail van={van} />
                    <DetailBlocks van={van} />
                </div>
            </div>
        </section>
        
    )
}

export const instant = false