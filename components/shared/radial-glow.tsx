import { cn } from "@/lib/utils";

export function RadialGlow({
  radius,
  origin,
  className,
}: {
  radius: number;
  origin: string;
  className?: string;
}) {
  const stops = [
    `currentColor 0%`,
    `color-mix(in srgb, currentColor 23%, transparent) 53%`,
    `color-mix(in srgb, currentColor 6%, transparent) 75%`,
    `transparent 100%`,
  ];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle ${radius}px at ${origin}, ${stops.join(", ")})`,
      }}
    />
  );
}