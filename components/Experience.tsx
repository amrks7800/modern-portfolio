import { workExperience } from "@/data"
import { Button } from "./ui/moving-border"
import Image from "next/image"

const Experience = () => {
  return (
    <div className="py-20" id="exp">
      <h2 className="heading mb-4">
        My <span className="text-purple">Work Experience</span>
      </h2>
      <p className="mb-12 text-center text-foreground/60">
        Building end-to-end solutions across web and mobile platforms
      </p>
      <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {workExperience.map(({ className, desc, id, thumbnail, title }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 border-border bg-card text-foreground dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-4 p-5 md:p-8 lg:flex-row lg:items-center">
              <div className="flex-shrink-0">
                <div className="rounded-xl border border-border bg-secondary/60 p-3 dark:bg-white/5">
                  <Image
                    src={thumbnail}
                    alt={title}
                    className="h-10 w-auto object-contain"
                    width={100}
                    height={40}
                  />
                </div>
              </div>
              <div className="lg:ms-2">
                <h3 className="text-start text-lg font-bold text-foreground md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-start text-sm leading-relaxed text-foreground/60">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
export default Experience
