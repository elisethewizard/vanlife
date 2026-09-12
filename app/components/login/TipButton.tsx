'use client'

import { MdOutlineContentCopy } from "react-icons/md"

export default function TipButton({ text }: { text: string }) {
    return (
        <button className="btn tip-btn" onClick={ () => navigator.clipboard.writeText(text) }>
            <MdOutlineContentCopy className="icon" />
            { text }
        </button>
    )
}