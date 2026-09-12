'use client'

import { HostVanDetailBlocks } from "../../lib/types"
import { Dispatch } from "react"

export default function HostVansNav(props: { active: HostVanDetailBlocks, setActive: Dispatch<HostVanDetailBlocks> }) {
    const { active, setActive } = props

    const blocks: HostVanDetailBlocks[] = ['details', 'pricing', 'photos']

    return (
        <nav className="host-van-detail-nav secondary-nav">
            {blocks.map((block) => <button
                key={block}
                className={`secondary-nav-item ${active === block ? 'current' : ''}`}
                onClick={() => setActive(block)}
            >
                {block}
            </button>)}
        </nav>
    )
}