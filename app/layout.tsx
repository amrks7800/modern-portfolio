import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeDialog from "@/components/ThemeDialog"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amr Khaled — Fullstack Software Engineer",
  description:
    "Fullstack Software Engineer specializing in the React ecosystem, modern backend architecture, and cross-platform mobile development.",
  icons: "/amr.jpg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <ThemeDialog />
        </Providers>
      </body>
    </html>
  )
}
