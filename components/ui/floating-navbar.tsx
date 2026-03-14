"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"
import Link from "next/link"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { useTheme } from "next-themes"
import { HiSun, HiMoon } from "react-icons/hi"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems
        .filter((item) => item.link.startsWith("#"))
        .map((item) => item.link.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const isDark = theme === "dark"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-[5000] transition-all duration-300",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        )}
      >
        {/* Background */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",
            scrolled
              ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
              : "bg-gradient-to-b from-background/30 to-transparent backdrop-blur-sm",
          )}
        />

        {/* Content */}
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="group flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-purple/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <div className="from-purple shadow-purple/50 relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br to-blue-500 font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-base font-bold leading-tight text-transparent md:text-lg">
                Amr Khaled
              </span>
              <span className="hidden text-[10px] font-medium text-foreground/40 md:block">
                Fullstack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
            {navItems.map((navItem, idx) => {
              const isActive = activeSection === navItem.link
              const isExternal = navItem.link.startsWith("http")

              return (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group relative flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-4",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg bg-foreground/10 backdrop-blur-sm"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}

                  <div className="from-purple/0 via-purple/10 absolute inset-0 rounded-lg bg-gradient-to-r to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10">{navItem.name}</span>
                  {navItem.icon && (
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                      {navItem.icon}
                    </span>
                  )}

                  <div className="from-purple absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r to-blue-500 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              )
            })}

            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="hover:border-purple/50 ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground/70 transition-all duration-300 hover:bg-secondary hover:text-foreground"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiSun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMoon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground/70"
              >
                {isDark ? (
                  <HiSun className="h-4 w-4" />
                ) : (
                  <HiMoon className="h-4 w-4" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:border-purple/50 relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-secondary"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt3 className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[72px] z-40 bg-background/80 backdrop-blur-sm md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 right-0 top-[72px] z-50 mx-4 overflow-hidden rounded-2xl border border-border bg-card shadow-xl backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col space-y-1 p-4">
                  {navItems.map((navItem, idx) => {
                    const isActive = activeSection === navItem.link
                    const isExternal = navItem.link.startsWith("http")

                    return (
                      <Link
                        key={`mobile-link-${idx}`}
                        href={navItem.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        onClick={handleLinkClick}
                        className={cn(
                          "group relative flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-all duration-300",
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-foreground/60 hover:bg-secondary/60 hover:text-foreground",
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{navItem.name}</span>
                          {isActive && (
                            <div className="from-purple h-2 w-2 rounded-full bg-gradient-to-r to-blue-500" />
                          )}
                        </div>
                        {navItem.icon && (
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {navItem.icon}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
