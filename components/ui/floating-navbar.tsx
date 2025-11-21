"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"
import Link from "next/link"
import { HiMenuAlt3, HiX } from "react-icons/hi"

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
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
        {/* Glassmorphism background */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",
            scrolled
              ? "bg-black/40 backdrop-blur-xl"
              : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm",
          )}
        >
          {/* Top border gradient */}
          <div className="via-purple-500/50 absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent to-transparent" />
          {/* Bottom border */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0",
            )}
          />
        </div>

        {/* Content */}
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="group flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <div className="relative">
              <div className="bg-purple-500/20 absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <div className="from-purple-500 shadow-purple-500/50 relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br to-blue-500 font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                A
              </div>
            </div>
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-lg font-bold text-transparent md:text-xl">
              Amr Khaled
            </span>
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
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}

                  {/* Hover effect */}
                  <div className="from-purple-500/0 via-purple-500/10 absolute inset-0 rounded-lg bg-gradient-to-r to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <span className="relative z-10">{navItem.name}</span>
                  {navItem.icon && (
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                      {navItem.icon}
                    </span>
                  )}

                  {/* Bottom accent line */}
                  <div className="from-purple-500 absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r to-blue-500 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:border-purple/50 relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:hidden"
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
                className="fixed inset-0 top-[72px] z-40 bg-black/80 backdrop-blur-sm md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 right-0 top-[72px] z-50 mx-4 overflow-hidden rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
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
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white",
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{navItem.name}</span>
                          {isActive && (
                            <div className="from-purple-500 h-2 w-2 rounded-full bg-gradient-to-r to-blue-500" />
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
