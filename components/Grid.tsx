"use client"

import { useState } from "react"
import {
  HiCode,
  HiServer,
  HiDeviceMobile,
  HiCloud,
  HiMail,
  HiCheckCircle,
} from "react-icons/hi"
import { IoCopyOutline, IoCheckmarkDone } from "react-icons/io5"
import { FaLocationArrow } from "react-icons/fa"

const whatIDo = [
  {
    icon: <HiCode className="h-6 w-6" />,
    label: "Frontend",
    desc: "Pixel-perfect UIs with React, Next.js, and React Native — fast, accessible, and beautiful.",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/20 dark:border-blue-500/30",
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: <HiServer className="h-6 w-6" />,
    label: "Backend",
    desc: "Scalable REST & real-time APIs with Node.js, Go, and Express — from schemas to deployment.",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/20 dark:border-green-500/30",
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-500/10",
  },
  {
    icon: <HiDeviceMobile className="h-6 w-6" />,
    label: "Mobile",
    desc: "Production-grade cross-platform apps with React Native — offline-first and fully synced.",
    color: "from-purple/20 to-violet-500/20 border-purple/20 dark:border-purple/30",
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
  },
  {
    icon: <HiCloud className="h-6 w-6" />,
    label: "Cloud & DevOps",
    desc: "AWS, Vercel, Docker, Redis — I handle the full deployment pipeline, not just the code.",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/20 dark:border-orange-500/30",
    iconColor: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-500/10",
  },
]

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "3", label: "Companies Worked" },
  { value: "∞", label: "Bugs Fixed 😄" },
]

const traits = [
  "End-to-end product ownership",
  "Clean, maintainable code",
  "Flexible with time zones",
  "Strong communication",
]

const Grid = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("amrkh.business@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="about" className="isolate w-full py-20">
      {/* Section heading */}
      <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
        About <span className="text-purple">Me</span>
      </h2>

      <div className="mx-auto max-w-7xl space-y-10 px-4">
        {/* ── Top row: Bio + Stats ── */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Bio card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm lg:col-span-3">
            {/* Decorative blob */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <span className="mb-4 inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Who I am
              </span>
              <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Fullstack Engineer who{" "}
                <span className="text-purple">ships end-to-end</span>
              </h3>
              <p className="mb-6 leading-relaxed text-foreground/60">
                I&apos;m <strong className="text-foreground">Amr Khaled</strong>, a Fullstack Software
                Engineer specializing in the React ecosystem and modern backend
                architecture. I build cross-platform mobile applications, scalable
                multilingual web platforms, and real-time synchronization engines —
                bridging complex backend infrastructures with high-performance,
                accessible interfaces.
              </p>

              {/* Traits list */}
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {traits.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-foreground/70">
                    <HiCheckCircle className="h-4 w-4 flex-shrink-0 text-purple" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats card */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center py-3 text-center">
                  <span className="bg-gradient-to-br from-purple to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs text-foreground/50">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Email CTA card */}
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-gradient-to-br from-purple to-blue-500 p-[1px] shadow-sm">
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[calc(1.5rem-1px)] bg-card p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10">
                  <HiMail className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Let&apos;s build together
                  </p>
                  <p className="mt-1 text-xs text-foreground/50">
                    amrkh.business@gmail.com
                  </p>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary"
                >
                  {copied ? (
                    <>
                      <IoCheckmarkDone className="h-4 w-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <IoCopyOutline className="h-4 w-4" />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom row: What I Do cards ── */}
        <div>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-foreground/40">
            What I Do
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatIDo.map((item) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                >
                  {item.icon}
                </div>
                <h4 className="mb-2 font-bold text-foreground">{item.label}</h4>
                <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>

                {/* Hover accent */}
                <div className="from-purple-500/0 absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Grid
