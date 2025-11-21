import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">colleagues</span>
      </h1>
      <div className="mt-10 flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}
export default Clients
