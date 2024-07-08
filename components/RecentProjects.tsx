import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small Selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map(({ des, iconLists, id, img, link, title }) => (
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-[570px] lg:min-h-[40rem]"
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-[570px] lg:h-[25rem]">
                <div
                  className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt="cover" className="absolute bottom-0 z-10" />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentProjects
