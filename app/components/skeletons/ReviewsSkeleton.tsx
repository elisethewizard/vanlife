export default function ReviewsSkeleton() {
    return (
        <>
            <h3>Loading...</h3>
            {Array(3).fill('').map((_, idx) => <div 
                className="review"
                key={idx}
            >
                <div className="skeleton" style={{
                    width: 80,
                    height: 16,
                }} />
                <div className="text">
                    <div className="skeleton" style={{
                            width: 300,
                            height: 20
                        }} />
                    <div className="skeleton" style={{
                        height: 40,
                    }} />
                </div>
                <hr />
            </div>)}
        </>
    )
}