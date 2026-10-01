import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="display-xs text-left text-blue-800">{value}</span>
      <span className="body-l text-left text-gray-700">{label}</span>
    </div>
  );
}