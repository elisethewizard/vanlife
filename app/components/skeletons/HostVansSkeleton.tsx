export default function HostVansSkeleton() {
    return (
        <div className="host-grid">
            {Array(6).fill('').map((_, idx) => <div
                key={idx}
                className="skeleton py-4.5 px-6 flex items-center gap-4 bg-white md:py-5 md:px-8"
            >
                <div className="skeleton dark w-[70px] h-auto aspect-square md:w-[90px] lg:w-[110px]" />
                <div className="flex flex-col gap-[1em] grow">
                    <div 
                        className="skeleton dark"
                        style={{ height: 35, flexGrow: 1 }}
                    />
                    <div 
                        className="skeleton dark"
                        style={{ width: '50%', maxWidth: 100, height: 25 }}
                    />
                </div>
            </div>)}
        </div>
    )
}