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

// Resolve site URL for metadataBase. Set NEXT_PUBLIC_SITE_URL in production
// to something like "http://3.131.62.228:3000". Falls back to localhost.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: "BitcoinPro - A Bitcoin Client That Keeps Bitcoin Simple",
  description: "BitcoinPro is a simple and secure Bitcoin client that makes Bitcoin accessible to everyone. Experience the future of digital currency with our user-friendly interface.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "BitcoinPro - A Bitcoin Client That Keeps Bitcoin Simple",
    description:
      "BitcoinPro is a simple and secure Bitcoin client that makes Bitcoin accessible to everyone.",
    url: siteUrl,
    siteName: "BitcoinPro",
    type: "website",
    images: [
      {
        url: "/OGimage.png",
        width: 1200,
        height: 630,
        alt: "BitcoinPro - A Bitcoin Client That Keeps Bitcoin Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitcoinPro - A Bitcoin Client That Keeps Bitcoin Simple",
    description:
      "BitcoinPro is a simple and secure Bitcoin client that makes Bitcoin accessible to everyone.",
    images: ["/OGimage.png"],
  },
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
