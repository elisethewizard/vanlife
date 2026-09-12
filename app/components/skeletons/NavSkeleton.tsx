export default function NavSkeleton({ type }: { type: 'main' | 'host' }) {

    const mainNav = <>
        {Array(3).fill('').map((_, idx) => <div key={idx} className="skeleton" style={{
            width: 40,
            height: 20,
        }} />)}
        {Array(2).fill('').map((_, idx) => <div key={idx} className="skeleton" style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
        }} />)}
    </>

    const hostNav = <>
        {Array(4).fill('').map((_, idx) => <div key={idx} className="skeleton" style={{
            width: 90,
            height: 30,
        }} />)}
    </>

    return (
        <nav 
            className={ type === 'host' ? 'host-nav' : '' } 
        >
            { type === 'host' ? hostNav : mainNav }
        </nav>
    )
}