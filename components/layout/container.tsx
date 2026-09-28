import { cn } from "@/lib/utils"

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-desktop px-6 desktop:px-30",
        className
      )}
      {...props}
    />
  )
}
