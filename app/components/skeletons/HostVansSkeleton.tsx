export default function HostVansSkeleton() {
    return (
        <>
            <h2>Loading...</h2>
            <div className="host-vans-list">
                {Array(6).fill('').map((_, idx) => <div
                    className="skeleton host-van-single"
                    key={idx}
                >
                    <div className="skeleton dark img" />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        flexGrow: 1
                    }}>
                        <div className="skeleton dark" style={{
                            height: 35,
                            width: 'unset',
                            flexGrow: 1
                        }} />
                        <div className="skeleton dark" style={{
                            height: 25,
                            width: '50%',
                            maxWidth: 100,
                        }} />
                    </div>
                </div>)}
            </div>
        </>
    )
}