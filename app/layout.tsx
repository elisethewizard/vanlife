import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./style/global.css"
import Header from "./components/header/Header"
import Footer from "./components/generic/Footer"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: {
        template: '%s | #Vanlife',
        default: '#Vanlife',
    },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${inter.variable} leading-[1.15] bg-bg-light font-main`}>
            <body className="w-dvw max-w-full overflow-x-hidden overflow-y-auto">
                <div className="flex flex-col min-h-dvh">
                    <Header />
                    <main className="flex flex-col justify-center items-center grow [&>div]:grow *:w-full">
                        { children }
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}