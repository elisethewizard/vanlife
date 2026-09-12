import { Suspense } from "react"
import TipButton from "./TipButton"

export default function Tip() {
    const creds = ['b@b.com', '123123']

    return (
        <div className="tip-cont rounded">
            <h2>Try logging in with these credentials:</h2>
            {creds.map((cred) => <Suspense key={cred} fallback={<div className="skeleton dark" style={{ height: 30, width: 120 }} />}>
                <TipButton text={cred} />
            </Suspense>)}
        </div>
    )
}