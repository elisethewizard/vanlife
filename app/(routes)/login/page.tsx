import '@/app/style/login.css'
import { Metadata } from "next"
import LoginForm from "@/app/components/login/LoginForm"
import { Suspense } from "react"
import LoginSkeleton from "@/app/components/skeletons/LoginSkeleton"
import Tip from "@/app/components/login/Tip"

export const metadata: Metadata = {
    title: 'Login',
}

export default function Page() {
    return (
        <div className="max-w-[94vw] flex flex-col items-center justify-evenly [&>div]:w-fit">
            <Suspense fallback={<LoginSkeleton />}>
                <LoginForm />
            </Suspense>
            <Tip />
        </div>
    )
}