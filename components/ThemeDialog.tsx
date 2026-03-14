"use client"

import { IoColorPalette } from "react-icons/io5"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HiSun, HiMoon } from "react-icons/hi"

const ThemeDialog = () => {
  const [open, setOpen] = useState(false)
  const [rendered, setRendered] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) return null

  const root = document.documentElement

  const handleThemeChange = (formData: FormData) => {
    const color = formData.get("color") as string
    if (!color) return
    root.style.setProperty("--clr-primary-purple", color)
    setOpen(false)
  }

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant={"ghost"}
            title="Change the accent color"
            className="fixed bottom-5 left-5 h-10 w-10 rounded-full border border-border bg-card shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            size={"icon"}
          >
            <IoColorPalette
              style={{
                color: getComputedStyle(root).getPropertyValue(
                  "--clr-primary-purple",
                ),
                width: "20px",
                height: "20px",
              }}
            />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="border-border bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">
              Customize Theme
            </AlertDialogTitle>
            <AlertDialogDescription className="text-foreground/60">
              Choose your accent color and toggle light/dark mode.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* Light / Dark Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
            <span className="text-sm font-medium text-foreground">
              Color Mode
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  theme === "light"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/60 hover:bg-secondary"
                }`}
              >
                <HiSun className="h-3.5 w-3.5" />
                Light
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/60 hover:bg-secondary"
                }`}
              >
                <HiMoon className="h-3.5 w-3.5" />
                Dark
              </button>
            </div>
          </div>

          <form action={handleThemeChange}>
            <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="text-sm font-medium text-foreground">
                Accent Color
              </span>
              <input
                type="color"
                defaultValue={getComputedStyle(root).getPropertyValue(
                  "--clr-primary-purple",
                )}
                name="color"
                className="h-9 w-16 cursor-pointer rounded-lg border-0 bg-transparent"
              />
            </div>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel
                type="button"
                onClick={() => setOpen(false)}
                className="border-border text-foreground"
              >
                Cancel
              </AlertDialogCancel>
              <Button type="submit">Apply</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
export default ThemeDialog
