import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineContactPage } from "react-icons/md"

import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative pb-20 pt-24 md:pt-32">
      {/* Enhanced Spotlight Effects */}
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

      {/* Enhanced Grid Background with Better Gradient */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.2] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="from-purple-500/20 absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r via-blue-500/20 to-cyan-500/20 blur-3xl" />
      <div className="to-purple-500/10 absolute left-1/4 top-1/3 -z-10 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-blue-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          {/* Enhanced Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-sm">
            <span className="bg-gradient-to-r from-blue-400 to-purple bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
              Dynamic Web Magic With Next.js
            </span>
          </div>

          {/* Enhanced Main Heading */}
          <TextGenerateEffect
            className="mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-center text-[40px] font-bold leading-tight text-transparent md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          />

          {/* Enhanced Subtitle with Better Typography */}
          <p className="mb-8 max-w-2xl text-center text-base leading-relaxed text-white/70 md:text-lg lg:text-xl">
            Hi, I&apos;m <span className="font-semibold text-white">Amr</span>,
            a passionate{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple bg-clip-text font-semibold text-transparent">
              React & Next.js Developer
            </span>{" "}
            based in Egypt, crafting exceptional digital experiences.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="#about"
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <MagicButton
                text="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <Link
              href="/Amr_New_CV.pdf"
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

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs uppercase tracking-wider">
                Scroll to explore
              </span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
