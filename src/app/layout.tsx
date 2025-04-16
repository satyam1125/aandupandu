import type React from "react"
import type { Metadata, Viewport } from "next"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Triloki Hospitality - Premium Travel Services",
  description:
    "Experience divine journeys with Triloki Hospitality. Premium helicopter services for Chardham Yatra and other sacred destinations in Uttarakhand.",
  generator: "Next.js",
  keywords: ["Chardham Yatra", "Helicopter Tour", "Kedarnath", "Badrinath", "Uttarakhand", "Travel"],
  authors: [{ name: "Triloki Hospitality" }],
  robots: "index, follow",
}

// ✅ NEW EXPORT: this replaces the deprecated `viewport` inside metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <meta name="theme-color" content="#00A7B5" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
