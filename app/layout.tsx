import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./provider"
import ThemeDialog from "@/components/ThemeDialog"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "amr's portfolio",
  description: "my modern and minimal portfolio",
  icons: "/amr.jpg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative text-blue-100"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="dark">{children}</div>
          <ThemeDialog />
        </ThemeProvider>
      </body>
    </html>
  )
}
