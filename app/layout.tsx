import type { Metadata } from "next"
import { Inter, DM_Sans, Sora } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
})
const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: "BitcoinPro - A Bitcoin Client That Keeps Bitcoin Simple",
  description: "BitcoinPro is a simple and secure Bitcoin client that makes Bitcoin accessible to everyone. Experience the future of digital currency with our user-friendly interface.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${sora.variable}`}>{children}</body>
    </html>
  )
}
