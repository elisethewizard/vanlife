export default function VansListSkeleton() {
    return (
        <div className="van-list">
            {Array(6).fill('').map((_, idx) => <div
                key={idx}
                className="skeleton van-tile"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <div
                    className="skeleton dark"
                    style={{
                        aspectRatio: '1 / 1'
                    }}
                />
                <div
                    className="skeleton dark"
                    style={{
                        flexGrow: 1,
                        height: 90,
                    }}
                />
            </div>)}
        </div>
    )
}