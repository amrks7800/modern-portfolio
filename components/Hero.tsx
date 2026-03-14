import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineContactPage } from "react-icons/md"
import { HiCode, HiServer } from "react-icons/hi"

import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative w-full pb-10 pt-24 md:pt-28">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.04] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Ambient gradient orbs */}
      <div className="from-purple-500/10 absolute left-1/4 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r via-blue-500/10 to-cyan-500/10 blur-3xl" />
      <div className="bg-purple-500/5 dark:bg-purple-500/10 absolute right-1/4 top-1/3 -z-10 h-[300px] w-[300px] rounded-full blur-3xl" />

      {/* Main Content — two-column split */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* ---- LEFT: Text Content ---- */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          {/* Badge */}
          <div className="animate-fade-in border-purple/20 bg-purple/5 dark:border-purple/30 dark:bg-purple/10 mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
            <span className="bg-gradient-to-r from-purple to-blue-400 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
              Fullstack Software Engineer
            </span>
          </div>

          {/* Main Heading */}
          <TextGenerateEffect
            className="mb-5 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-center text-[36px] font-bold leading-tight text-transparent md:text-5xl lg:text-left lg:text-5xl xl:text-6xl"
            words="Building Robust Systems From UI to Backend"
          />

          {/* Subtitle */}
          <p className="mb-6 max-w-xl text-center text-sm leading-relaxed text-foreground/60 md:text-base lg:text-left lg:text-lg">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-foreground">Amr Khaled</span>, a
            passionate{" "}
            <span className="bg-gradient-to-r from-purple to-blue-400 bg-clip-text font-semibold text-transparent">
              Fullstack Engineer
            </span>{" "}
            based in Egypt — crafting scalable web platforms, APIs, and
            real-time systems end-to-end.
          </p>

          {/* Tech Pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {[
              {
                icon: <HiCode className="h-3 w-3" />,
                label: "React · Next.js · React Native",
              },
              {
                icon: <HiServer className="h-3 w-3" />,
                label: "Node.js · Go · PostgreSQL",
              },
            ].map((pill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur-sm dark:bg-white/5 dark:text-white/60"
              >
                {pill.icon}
                {pill.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="#projects"
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <MagicButton
                text="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <Link
              href="/cv.pdf"
              className="group transform transition-all duration-300 hover:scale-105"
              target="_blank"
            >
              <MagicButton
                text="Download CV"
                icon={<MdOutlineContactPage />}
                position="right"
              />
            </Link>
          </div>
        </div>

        {/* ---- RIGHT: Photo ---- */}
        <div className="flex flex-shrink-0 flex-col items-center lg:items-end">
          {/* Outer glow ring */}
          <div className="relative">
            {/* Animated ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-purple via-blue-500 to-cyan-400 opacity-30 blur-lg dark:opacity-50" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple to-blue-500 opacity-40" />

            {/* Photo frame */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-2xl md:h-80 md:w-80 lg:h-[360px] lg:w-[360px]">
              <Image
                src="/me-prev.png"
                alt="Amr Khaled — Fullstack Software Engineer"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Subtle overlay for light mode readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 dark:to-transparent" />
            </div>

            {/* Floating badge — top right */}
            <div className="absolute -right-4 -top-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
                <span className="text-xs font-semibold text-foreground">
                  Available for hire
                </span>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-3 -left-6 rounded-2xl border border-border bg-card px-3 py-2 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-black/60">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-foreground">
                  2+ Years
                </span>
                <span className="text-[10px] text-foreground/50">
                  of building products
                </span>
              </div>
            </div>
          </div>

          {/* Location tag */}
          <div className="mt-6 flex items-center gap-1.5 text-sm text-foreground/50">
            <svg
              className="h-4 w-4 text-purple"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Cairo, Egypt
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-8 flex animate-bounce justify-center">
        <div className="flex flex-col items-center gap-2 text-foreground/30">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Hero
