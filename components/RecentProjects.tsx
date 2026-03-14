import { projects } from "@/data"
import { FaLocationArrow } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"
import Link from "next/link"

const RecentProjects = () => {
  return (
    <section className="w-full py-20" id="projects">
      <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h2>
      <p className="mb-16 text-center text-lg text-foreground/60">
        Showcasing fullstack work — from UIs to backend systems and mobile apps
      </p>

      <div className="mx-auto max-w-7xl space-y-12 px-4">
        {projects.map(({ des, iconLists, id, img, link, live, title }, index) => (
          <div
            key={id}
            className="hover:border-purple/30 group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl"
          >
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div
              className={`flex flex-col gap-8 p-6 lg:p-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="relative flex-1">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-secondary/40 dark:bg-slate-900/50">
                  {/* Decorative blur blobs */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple/10 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                  {/* Project Image */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:rotate-1 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Project badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-foreground/70">
                      Project #{id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-center space-y-6">
                {/* Title */}
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">
                    {title}
                  </h3>
                  <div className="from-purple h-1 w-20 rounded-full bg-gradient-to-r to-blue-500" />
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-foreground/60 lg:text-lg">
                  {des}
                </p>

                {/* Tech Stack */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Built With
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {iconLists.map((icon, idx) => (
                      <div
                        key={idx}
                        className="hover:border-purple/50 group/icon relative overflow-hidden rounded-xl border border-border bg-secondary/60 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-secondary dark:bg-white/5"
                      >
                        <div className="relative h-8 w-8">
                          <Image
                            src={icon}
                            alt={`tech-${idx}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="from-purple/20 absolute inset-0 bg-gradient-to-br to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover/icon:opacity-100" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid items-center gap-4 pt-2 md:grid-cols-2">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-purple/50 flex items-center gap-3 rounded-xl border border-border bg-secondary/60 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-secondary dark:bg-white/5"
                  >
                    <FiGithub className="h-5 w-5" />
                    <span>Source Code</span>
                  </Link>
                  <Link
                    href={live || link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-purple shadow-purple/30 flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span>View Live Site</span>
                    <FaLocationArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative corner accents on hover */}
            <div className="border-purple/20 absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
