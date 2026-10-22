export default function LoginSkeleton() {
    return (
        <div className="flex flex-col items-center gap-5.5">
            <div className="h-16 max-w-4xl flex items-end">
                <div className="skeleton" style={{ width: 400, height: 40 }} />
            </div>
            <div className="w-100 max-w-[94vw] flex flex-col items-center">
                <div className="skeleton" style={{ height: 80 }} />
                <div
                    className="skeleton"
                    style={{ width: "60%", height: 50, marginTop: '1.25rem' }}
                />
            </div>
        </div>
    )
}