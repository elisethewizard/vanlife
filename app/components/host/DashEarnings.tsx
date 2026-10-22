import Link from "next/link"

export default function DashEarning() {
    const userIncome = '2,260'
    return (
        <section className="py-9 flex justify-between items-center bg-beige-main">
            <div className="info">
                <h1 className="text-black-main text-4xl font-bold lg:text-[2.5rem]">
                    Welcome!
                </h1>
                <p className="my-4 text-dark-text">
                    Income last{' '}
                    <span className="font-bold underline">30 days</span>
                </p>
                <h2 className="text-black-main text-[2.375rem] font-black">
                    ${userIncome}
                </h2>
            </div>
            <Link href="/host/income">Details</Link>
        </section>
    )
}