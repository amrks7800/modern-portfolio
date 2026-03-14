"use client"

import { InfiniteSkillsMovingCards } from "./ui/skills-marquee"

const skills = [
  { name: "React", icon: "/re.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TypeScript", icon: "/ts.svg" },
  { name: "React Native", icon: "/re.svg" },
  { name: "Node.js", icon: "/node.svg" },
  { name: "Golang", icon: "/git.svg" },
  { name: "Tailwind CSS", icon: "/tail.svg" },
  { name: "PostgreSQL", icon: "/postgres.svg" },
  { name: "MongoDB", icon: "/mongo.svg" },
  { name: "Redis", icon: "/redis.svg" },
  { name: "Docker", icon: "/dock.svg" },
  { name: "AWS", icon: "/aws.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Zod", icon: "/zod.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "Shadcn-UI", icon: "/shad.svg" },
  { name: "Framer Motion", icon: "/fm.svg" },
  { name: "Astro", icon: "/astro.svg" },
]

const Skills = () => {
  return (
    <section className="w-full py-20" id="skills">
      <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
        My <span className="text-purple">Tech Stack</span>
      </h2>
      <p className="mb-4 text-center text-foreground/60">
        From pixel-perfect UIs to scalable backend systems
      </p>

      {/* Category pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {[
          { label: "Frontend", color: "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:text-blue-400" },
          { label: "Backend", color: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400" },
          { label: "Mobile", color: "bg-purple/10 text-purple border-purple/20" },
          { label: "DevOps & Cloud", color: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400" },
        ].map((cat) => (
          <span
            key={cat.label}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${cat.color}`}
          >
            {cat.label}
          </span>
        ))}
      </div>

      <div className="relative space-y-8">
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
      </div>
    </section>
  )
}

export default Skills
