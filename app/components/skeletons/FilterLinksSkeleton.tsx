export default function FilterLinksSkeleton() {
    return (
        <div className="flex gap-y-3 gap-x-5 flex-wrap">
            {Array(3).fill('').map((_, idx) => (
                <div 
                    key={idx} 
                    className="skeleton" 
                    style={{ width: 100, height: 30 }} 
                />
            ))}
        </div>
    )
}