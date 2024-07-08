import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
  return (
    <section id="about" className="py-12">
      <BentoGrid>
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
