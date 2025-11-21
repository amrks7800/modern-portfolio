"use client"

import { cn } from "@/utils/cn"
import { BackgroundGradientAnimation } from "./GradientBg"
import Lottie from "react-lottie"
import { useState } from "react"
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton"
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-3 lg:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("amrkh.business@gmail.com")

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div
      className={cn(
        `group/bento hover:border-purple/30 hover:shadow-purple/10 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] shadow-input transition-all duration-300 hover:shadow-xl md:rounded-3xl`,
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center")}
          />
        )}
      </div>

      {/* Spare Image Layer */}
      {spareImg && (
        <div
          className={`absolute -bottom-5 right-0 z-[5] ${id === 5 && "w-full opacity-80"}`}
        >
          <img
            src={spareImg}
            alt={spareImg}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      {/* Background Animation for Item 6 */}
      {id === 6 && (
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white"></div>
          </BackgroundGradientAnimation>
        </div>
      )}

      {/* Content Layer */}
      <div
        className={cn(
          titleClassName,
          "relative z-10 flex min-h-[250px] flex-col justify-between p-5 transition duration-200 group-hover/bento:translate-x-1 md:min-h-[280px] md:p-6 lg:min-h-0 lg:p-10",
          id === 6 && "items-center justify-center",
        )}
      >
        <div className="flex-1">
          {description && (
            <div className="mb-2 font-sans text-sm font-light text-[#c1c2d3] md:text-xs lg:text-sm">
              {description}
            </div>
          )}
          <div className="mb-2 mt-2 font-sans text-xl font-bold leading-tight text-neutral-200 md:text-2xl lg:text-3xl">
            {title}
          </div>
          {id === 5 && (
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-purple underline transition-all hover:gap-3 md:text-base lg:text-lg"
              href="https://www.github.com/amrks7800/elegant-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elegant store
            </a>
          )}
        </div>

        {/* Tech Stack for Item 3 */}
        {id === 3 && (
          <div className="mt-5 flex gap-2 md:gap-3 lg:gap-5">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              {["React.js", "Next.js", "TypeScript"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-[#10132e] px-2 py-2 text-center text-[10px] text-white/70 transition-all hover:bg-[#1a1d3e] hover:text-white md:px-3 md:text-xs lg:px-3 lg:py-3 lg:text-sm"
                >
                  {item}
                </div>
              ))}
              <span className="hidden rounded-lg bg-[#10132e] px-3 py-3 md:block lg:py-4" />
            </div>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <span className="hidden rounded-lg bg-[#10132e] px-3 py-3 md:block lg:py-4" />
              {["Tailwind", "Redux", "Zod"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-[#10132e] px-2 py-2 text-center text-[10px] text-white/70 transition-all hover:bg-[#1a1d3e] hover:text-white md:px-3 md:text-xs lg:px-3 lg:py-3 lg:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Email Copy Button for Item 6 */}
        {id === 6 && (
          <div className="w-ful relative mt-5">
            <div
              className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}
            >
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              text={copied ? "Email copied!" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="bg-[#161a31] w-full"
              className="w-full!"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  )
}
