import { cacheLife } from "next/cache"

export default async function Footer() {
    'use cache'
    cacheLife('days')

    const yearStart = 2025
    const yearCurrent = new Date().getFullYear()
    const yearString = yearCurrent === yearStart ? yearStart.toString() : `${yearStart}-${yearCurrent}`

    return (
        <footer>&#169; #VANLIFE {yearString}</footer>
    )
}