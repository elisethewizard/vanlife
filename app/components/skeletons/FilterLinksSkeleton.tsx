export default function FilterLinksSkeleton() {
    return (
        <div style={{
            display: 'flex',
            gap: '.75rem 1.25rem',
        }}>
            {Array(3).fill('').map((_, idx) => <div
                key={idx}
                className="skeleton"
                style={{
                    width: 100,
                    height: 30,
                }}
            />)}
        </div>
    )
}