"use client"

import { mixColors } from "@/utils"
import { ReactNode, useEffect, useState } from "react"

const Main = ({ children }: { children: ReactNode }) => {
  const [render, setRender] = useState(false)
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    setRender(true)

    if (!document) return

    const root = document ? document.documentElement : null

    if (!root) return

    const interval = setInterval(() => {
      setColor(
        getComputedStyle(root).getPropertyValue(
          "--clr-primary-purple",
        ) as string,
      )
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!document) return

    const root = document?.documentElement || null
    if (!root) return

    const interval = setInterval(() => {
      setColor(
        getComputedStyle(root).getPropertyValue(
          "--clr-primary-purple",
        ) as string,
      )
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (!render) return null

  return (
    <main
      className="dark relative mx-auto flex flex-col items-center justify-center overflow-hidden sm:px-10"
      style={{
        backgroundColor: color ? mixColors("#000319", color) : "#000319",
      }}
    >
      {children}
    </main>
  )
}
export default Main
