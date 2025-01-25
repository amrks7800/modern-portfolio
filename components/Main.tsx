"use client"

import { mixColors } from "@/utils"
import { ReactNode, useEffect, useState } from "react"

const Main = ({ children }: { children: ReactNode }) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  const root = document.documentElement

  const color = getComputedStyle(root).getPropertyValue("--clr-primary-purple")

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
