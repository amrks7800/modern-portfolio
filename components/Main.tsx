"use client"

import { ReactNode } from "react"

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background sm:px-10">
      {children}
    </main>
  )
}
export default Main
