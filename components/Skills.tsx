"use client"

import { InfiniteSkillsMovingCards } from "./ui/skills-marquee"

const skills = [
  { name: "React", icon: "/re.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TypeScript", icon: "/ts.svg" },
  { name: "Tailwind CSS", icon: "/tail.svg" },
  { name: "Astro", icon: "/astro.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Docker", icon: "/dock.svg" },
  { name: "Zod", icon: "/zod.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "Postgresql", icon: "/postgres.svg" },
  { name: "MongoDB", icon: "/mongo.svg" },
  { name: "Node.js", icon: "/node.svg" },
  { name: "Framer Motion", icon: "/fm.svg" },
  { name: "Shadcn-UI", icon: "/shad.svg" },
  { name: "React-Hook-Form", icon: "/rhf.png" },
]

const Skills = () => {
  return (
    <section className="w-full py-20" id="skills">
      <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
        My <span className="text-purple">Tech Stack</span>
      </h2>
      <p className="mb-12 text-center text-white/60">
        Technologies I work with to bring ideas to life
      </p>

      <div className="relative space-y-8">
        {/* First Row - Left to Right */}
        <InfiniteSkillsMovingCards
          items={skills}
          direction="left"
          speed="slow"
        />
        <InfiniteSkillsMovingCards
          items={skills}
          direction="right"
          speed="slow"
        />

        {/* Second Row - Right to Left */}
      </div>
    </section>
  )
}

export default Skills
