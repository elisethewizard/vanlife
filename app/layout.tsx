import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./style/global.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
        <html lang="en" className={inter.variable}>
            <body>
                <div className="site-wrapper">
                    <Header />
                    <main>{ children }</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}