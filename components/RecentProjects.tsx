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
      <p className="mb-16 text-center text-lg text-white/60">
        Showcasing my latest work and creative solutions
      </p>

      <div className="mx-auto max-w-7xl space-y-12 px-4">
        {projects.map(
          ({ des, iconLists, id, img, link, live, title }, index) => (
            <div
              key={id}
              className="hover:border-purple/30 hover:shadow-purple/20 group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-black-100 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Animated background gradient */}
              <div className="from-purple-500/5 absolute inset-0 bg-gradient-to-br via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={`flex flex-col gap-8 p-6 lg:p-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="relative flex-1">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900/50">
                    {/* Decorative elements */}
                    <div className="bg-purple-500/10 absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                    {/* Project Image */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:rotate-1 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-white">
                        Project #{id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-center space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
                      {title}
                    </h3>
                    <div className="from-purple-500 h-1 w-20 rounded-full bg-gradient-to-r to-blue-500" />
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white/70 lg:text-lg">
                    {des}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
                      Built With
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {iconLists.map((icon, idx) => (
                        <div
                          key={idx}
                          className="group/icon hover:border-purple/50 relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-slate-800/50"
                        >
                          <div className="relative h-8 w-8">
                            <Image
                              src={icon}
                              alt={`tech-${idx}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {/* Glow effect */}
                          <div className="from-purple-500/20 absolute inset-0 bg-gradient-to-br to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover/icon:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid items-center gap-4 pt-4 md:grid-cols-2">
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn hover:border-purple/50 flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    >
                      <FiGithub className="h-5 w-5" />
                      <span>Source Code</span>
                    </Link>
                    <Link
                      href={live || link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn from-purple-500 shadow-purple-500/50 hover:shadow-purple-500/50 text-xs! z-[70] flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:text-base"
                    >
                      <span>View Live Site</span>
                      <FaLocationArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="border-purple-500/20 absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export default RecentProjects
