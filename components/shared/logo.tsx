import Image from "next/image";

import { cn } from "@/lib/utils";
import mark from "./logo.svg";

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
} as const;

type LogoProps = React.ComponentProps<"span"> & {
  variant?: "mark" | "wordmark" | "full";
  size?: keyof typeof sizeClasses;
};

export function Logo({
  variant = "mark",
  size = "md",
  className,
  ...props
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-end gap-2 text-foreground",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {variant !== "wordmark" && (
        <Image
          src={mark}
          alt=""
          width={29}
          height={32}
          unoptimized
          className="h-[1.15em] w-auto shrink-0"
        />
      )}
      {variant !== "mark" && (
        <span className="font-logo font-semibold leading-none translate-y-0.5">Bytespace</span>
      )}
    </span>
  );
}
