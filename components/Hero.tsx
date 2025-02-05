import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineContactPage } from "react-icons/md"

import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="pt-32">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.2] dark:bg-grid-white/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 mb-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h1 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic With Next.js
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            hi, i&apos;m Amr, A React-Next.js Developer Based in Egypt
          </p>

          <div className="flex flex-col gap-6 lg:flex-row">
            <a href="#about" className="max-sm:translate-y-7">
              <MagicButton
                text="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <Link
              href="/AMR_KHALED_CV.pdf"
              className="max-sm:translate-y-7"
              target="_blank"
            >
              <MagicButton
                text="Show My CV"
                icon={<MdOutlineContactPage />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
