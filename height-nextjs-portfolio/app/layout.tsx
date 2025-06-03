import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "sadio.mane - Full Stack Developer",
    template: "%s | sadio.mane",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my portfolio and get in touch for your next project.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Alex" }],
  creator: "Alex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadio.mane",
    title: "sadio.mane - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "sadio.mane",
  },
  twitter: {
    card: "summary_large_image",
    title: "sadio.mane - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
