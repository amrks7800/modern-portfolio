import { workExperience } from "@/data"
import { Button } from "./ui/moving-border"
import Image from "next/image"

const Experience = () => {
  return (
    <div className="py-20" id="exp">
      <h1 className="heading">
        MY <span className="text-purple">Work Experience</span>
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map(({ className, desc, id, thumbnail, title }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                src={thumbnail}
                alt={title}
                className="w-16 md:w-20 lg:w-32"
                width={300}
                height={100}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
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
