import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
  return (
    <section id="about" className="isolate w-full py-20">
      <h2 className="z-[80] mb-12 text-center text-4xl font-bold md:text-5xl">
        About <span className="text-purple">Me</span>
      </h2>
      <BentoGrid className="w-full px-4">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              className={className}
              description={description}
              title={title}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  )
}
export default Grid
