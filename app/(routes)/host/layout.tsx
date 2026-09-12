import '@/app/style/host.css'
import HostNav from '../../components/host/HostNav'

export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <HostNav />
            { children }
        </>
    )
}