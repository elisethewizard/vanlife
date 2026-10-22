'use client'

import { MdOutlineContentCopy } from "react-icons/md"

export default function TipButton({ text }: { text: string }) {
    return (
        <button 
            className="btn login-form-btn w-fit py-1 px-2 flex items-center gap-1.5 bg-orange-light text-dark-text text-sm font-medium select-text interact:bg-orange-main interact:text-bg-light" 
            onClick={ () => navigator.clipboard.writeText(text) }
        >
            <MdOutlineContentCopy className="icon" />
            { text }
        </button>
    )
}