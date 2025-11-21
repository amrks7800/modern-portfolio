"use client"

import { cn } from "@/utils/cn"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
  <div className="hover:border-purple/30 group relative h-32 w-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-[1px] transition-all duration-500 hover:scale-105">
    {/* Animated gradient border on hover */}
    <div className="from-purple-500/0 via-purple-500/20 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

    {/* Shine effect */}
    <div className="absolute inset-0 -translate-x-full rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    {/* Card content */}
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-5">
      {/* Icon container with glow */}
      <div className="relative">
        <div className="bg-purple-500/20 absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative h-14 w-14 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
          />
        </div>
      </div>

      {/* Skill name */}
      <span className="text-center text-sm font-semibold text-white/70 transition-all duration-300 group-hover:tracking-wide group-hover:text-white">
        {name}
      </span>

      {/* Bottom accent line */}
      <div className="from-purple-500 absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r to-blue-500 transition-all duration-500 group-hover:w-full" />
    </div>
  </div>
)

export const InfiniteSkillsMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string
    icon: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      // Set direction
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        )
      }

      // Set speed
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s")
      }

      setStart(true)
    }
  }, [direction, speed])
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <SkillCard name={item.name} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  )
}
