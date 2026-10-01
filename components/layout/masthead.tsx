import { cn } from "@/lib/utils";

import { GridBackdrop } from "./grid-backdrop";

export function Masthead({
  header,
  children,
  className,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative flex flex-col bg-blue-800", className)}>
      <GridBackdrop />

      <div className="relative flex flex-1 flex-col">
        {header}
        {children}
      </div>
    </div>
  );
}