export default function VanSkeleton() {
    return (
        <div className="van-detail">
            <div className="skeleton skeleton-van-img" />
            <div className="van-detail-info">
                <div className="van-detail-info-main">
                    <div className="skeleton" style={{ width: 100, height: 30 }} />
                    <div className="skeleton" style={{ width: '80%', height: 40 }} />
                </div>
                <div className="skeleton" style={{ width: '40%', height: 30 }} />
                <div className="skeleton" style={{ height: 160 }} />
                <div className="skeleton" style={{ width: 160, height: 40 }} />       
            </div>
        </div>
    )
}