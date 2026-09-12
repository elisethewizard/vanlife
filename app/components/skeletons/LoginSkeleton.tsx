export default function LoginSkeleton() {
    return (
        <div className="login-form-cont">
            <div className="msg-cont">
                <div className="skeleton" style={{ width: 400, height: 40 }} />
            </div>
            <div className="login-form">
                <div className="skeleton" style={{ height: 80 }} />
                <div className="skeleton" style={{ height: 50, width: '60%', marginTop: 20 }} />
            </div>
        </div>
    )
}