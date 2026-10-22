export default function VanSkeleton() {
    return (
        <div className="flex flex-col gap-3 rounded-md md:gap-4 lg:py-8 lg:px-12 lg:flex-row lg:gap-8 lg:bg-beige-transparent">
            <div className="skeleton aspect-square md:aspect-4/3" />
            <div className="w-full flex flex-col gap-3 lg:min-w-[300px] lg:pt-4">
                <div className="flex flex-col gap-3 md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                    <div className="skeleton " style={{ width: 100, height: 30 }} />
                    <div className="skeleton w-[80%] h-[40px] lg:h-[60px]" />
                </div>
                <div className="skeleton" style={{ width: "40%", height: 30 }} />
                <div className="skeleton h-[160px] md:my-2.5 lg:my-5" />
                <div className="skeleton h-[40px] md:w-[40%]" />
            </div>
        </div>
    )
}