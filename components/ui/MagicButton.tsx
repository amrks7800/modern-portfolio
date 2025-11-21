import { cn } from "@/utils/cn"
import { FC, ReactNode } from "react"

type Props = {
  text: string
  icon?: ReactNode
  position?: "left" | "right"
  handleClick?: () => void
  otherClasses?: string
  className?: string
}

const MagicButton: FC<Props> = ({
  text,
  icon,
  position,
  handleClick,
  className,
  otherClasses,
}) => {
  return (
    <button
      className={cn(
        "relative -top-[25px] inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 md:w-60",
        className,
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl`,
          otherClasses,
        )}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  )
}
export default MagicButton
