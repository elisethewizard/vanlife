import { cacheLife } from "next/cache"

export default async function Footer() {
    'use cache'
    cacheLife('days')

    const yearStart = 2025
    const yearCurrent = new Date().getFullYear()
    const yearString = yearCurrent === yearStart ? yearStart.toString() : `${yearStart}-${yearCurrent}`

    return (
        <footer className="mt-auto p-5.5 flex justify-center items-center shrink-0 bg-black-main text-gray-main font-[350]">
            &#169; #VANLIFE {yearString}
        </footer>
    )
}