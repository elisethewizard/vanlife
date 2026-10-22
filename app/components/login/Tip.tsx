import { Suspense } from "react"
import TipButton from "./TipButton"

export default function Tip() {
    const creds = ['b@b.com', '123123']

    return (
        <div className="p-6 gap-2 rounded-md flex flex-col bg-beige-main">
            <h2 
                className="pb-3 text-[1.5em] font-bold"
            >
                Try logging in with these credentials:
            </h2>
            {creds.map((cred) => <Suspense key={cred} fallback={<div className="skeleton dark h-[30px] w-[120px]" />}>
                <TipButton text={cred} />
            </Suspense>)}
        </div>
    )
}