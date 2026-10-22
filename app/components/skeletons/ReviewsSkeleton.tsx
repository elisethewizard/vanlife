export default function ReviewsSkeleton() {
    return (
        <>
            <h3 className="mb-2 mt-[1em] text-[1.17em] font-bold">Loading...</h3>
            {Array(3).fill('').map((_, idx) => <div 
                key={idx}
                className="max-w-6xl pt-5 flex flex-col gap-4"
            >
                <div className="skeleton" style={{ width: 80, height: 18 }} />
                <div className="flex flex-col gap-2">
                    <div className="skeleton" style={{ width: 300, height: 20 }} />
                    <div className="skeleton" style={{ height: 40 }} />
                </div>
                <hr className="h-px my-[.5em] border-0 bg-[oklch(0.83_0_0)]" />
            </div>)}
        </>
    )
}