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
        <section className="text-black-main font-bold">
            <h1 className="mb-5 text-[2rem] md:text-4xl lg:text-[2.5rem]">
                Income
            </h1>
            <p className="text-dark-text font-normal md:text-lg">
                Last <span className="font-bold underline">30 days</span>
            </p>
            <h2 className="my-5 text-black-main text-4xl font-black">$2,260</h2>
            <Image
                className="graph"
                src="/income-graph.png"
                alt="Income graph"
                width={986}
                height={692}
            />
            <div>
                <h3 className="mt-10 text-2xl font-bold lg:text-3xl lg:mt-14 lg:mb-6">
                    Your transactions ({transactionsData.length})
                </h3>
                <p className="my-4.5 text-dark-text font-normal md:text-lg">
                    Last <span className="font-bold underline">30 days</span>
                </p>
            </div>
            <div className="host-grid pb-6">
                {transactionsData.map((item) => (
                    <div 
                        key={item.id} 
                        className="p-6 flex justify-between items-center bg-white rounded-md md:px-9"
                    >
                        <h3 className="text-4xl font-semibold">
                            ${item.amount}
                        </h3>
                        <p className="text-dark-text text-xl font-medium md:text-lg">
                            {item.date}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}