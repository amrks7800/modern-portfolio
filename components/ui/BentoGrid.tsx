"use client"

import { cn } from "@/utils/cn"
import { BackgroundGradientAnimation } from "./GradientBg"
import GlobeDemo from "./GridGlobe"
import Lottie from "react-lottie"
import { useState } from "react"
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton"
import { IoCopyOutline } from "react-icons/io5"
import { FaLink } from "react-icons/fa"

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-3",
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
        `group/bento relative flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border-2 border-white/[0.1] bg-white shadow-input transition duration-200 hover:shadow-xl`,
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : "h-full"}`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"h-full w-full object-cover object-center"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover:/bento:translate-x-2 relative flex min-h-40 flex-col p-2 px-5 transition duration-200 md:h-full lg:p-10",
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] dark:text-neutral-300 md:text-xs">
            {description}
          </div>
          <div className="z-[60] mb-2 mt-2 max-w-96 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 lg:text-3xl">
            {title}{" "}
            {id === 5 && (
              <a
                className="flex items-end gap-2 text-purple underline"
                href="https://www.npmjs.com/package/@dev-amr/react-sugartax"
              >
                React-sugartax <FaLink size={30} className="" />
              </a>
            )}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-4">
                {["React.js", "Next.js", "Typescript"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </div>
                ))}
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-4">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {["TailwindCss", "Redux", "Zod"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className="absolute -bottom-5 right-0">
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
                text={copied ? "email copied" : "copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
