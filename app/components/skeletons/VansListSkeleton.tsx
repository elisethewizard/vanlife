export default function VansListSkeleton() {
    return (
        <div className="pt-12 grid grid-cols-2 gap-6.5 justify-items-center md:py-8 md:grid-cols-3 md:gap-7 lg:gap-y-8 lg:gap-x-11">
            {Array(6).fill('').map((_, idx) => <div
                key={idx}
                className="skeleton p-4 flex flex-col gap-4 shadow-main lg:py-5 lg:px-7"
            >
                <div className="skeleton dark aspect-square" />
                <div className="skeleton dark grow" style={{ height: 90 }} />
            </div>)}
        </div>
    )
}