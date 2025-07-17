import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "../styles/global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amanda Bezerra - Software Developer",
  description:
    "Portfolio of Amanda Bezerra.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
