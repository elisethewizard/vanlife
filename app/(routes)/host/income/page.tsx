import type { Metadata } from 'next'
import Image from "next/image"

export const metadata: Metadata = {
    title: 'My income',
}

export default function Page() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '26", id: "1" },
        { amount: 560, date: "Dec 12, '25", id: "2" },
        { amount: 980, date: "Dec 3, '25", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <Image
                className="graph"
                src="/income-graph.png"
                alt="Income graph"
                width={986}
                height={692}
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction rounded">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}