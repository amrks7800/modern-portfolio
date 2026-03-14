import { socialMedia } from "@/data"
import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      {/* Background grid decorative */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full opacity-20 dark:opacity-50">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build something{" "}
          <span className="text-purple">remarkable</span> together?
        </h1>
        <p className="my-5 text-center text-foreground/60 md:mt-10">
          Whether it&apos;s a fullstack product, a real-time system, or a
          cross-platform app — reach out and let&apos;s make it happen.
        </p>
        <a href="mailto:amrkh.business@gmail.com">
          <MagicButton
            text="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-light text-foreground/50 md:text-base md:font-normal">
          Copyright © 2025 Amr Khaled · Fullstack Software Engineer
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-card shadow-sm backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-purple/40 hover:shadow-purple/20 hover:shadow-md"
            >
              <Image
                src={info.img}
                alt="social icon"
                width={20}
                height={20}
                className="dark:invert-0 dark:filter-none"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
