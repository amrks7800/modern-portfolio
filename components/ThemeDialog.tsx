"use client"

import { IoColorPalette } from "react-icons/io5"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
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

const ThemeDialog = () => {
  const [open, setOpen] = useState(false)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) return null

  const root = document.documentElement

  const handleThemeChange = (formData: FormData) => {
    const color = formData.get("color") as string

    console.log(color)

    if (!color) return
    console.log(color)

    root.style.setProperty("--clr-primary-purple", color)

    setOpen(false)
  }
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant={"ghost"}
            title="Change the theme"
            className="fixed bottom-5 left-5"
            size={"icon"}
          >
            <IoColorPalette
              style={{
                color: getComputedStyle(root).getPropertyValue(
                  "--clr-primary-purple",
                ),
              }}
              size={50}
            />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change the theme</AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form action={handleThemeChange}>
            <input
              type="color"
              defaultValue={getComputedStyle(root).getPropertyValue(
                "--clr-primary-purple",
              )}
              name="color"
            />
            <AlertDialogFooter>
              <AlertDialogCancel type="button" onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <Button type="submit">Choose</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
export default ThemeDialog
