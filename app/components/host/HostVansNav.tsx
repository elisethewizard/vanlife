'use client'

import { HostVanDetailBlocks } from "../../lib/types"
import { Dispatch } from "react"

export default function HostVansNav(props: { active: HostVanDetailBlocks, setActive: Dispatch<HostVanDetailBlocks> }) {
    const { active, setActive } = props

    const blocks: HostVanDetailBlocks[] = ['details', 'pricing', 'photos']

    return (
        <nav className="my-6 lg:mt-12">
            {blocks.map((block) => <button
                key={block}
                className={`secondary-nav-item ${active === block ? 'current' : ''} cursor-pointer`}
                onClick={() => setActive(block)}
            >
                {block}
            </button>)}
        </nav>
    )
}