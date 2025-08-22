import "../styles/globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

import { Inter, Poppins } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Portfolio",
  description: "Mi portfolio con Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
