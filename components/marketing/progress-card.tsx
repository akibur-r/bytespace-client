import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function ProgressCard({
  title,
  value,
  className,
}: {
  title: string;
  value: number;
  className?: string;
}) {
  return (
    <Card className={cn("gap-2 rounded-2xl border-0 bg-white ring-0", className)}>
      <CardHeader>
        <CardTitle className="label-s">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <span className="font-heading text-5xl leading-[1.2em] font-semibold text-gray-950">
          {value}%
        </span>
        <Progress
          value={value}
          className="min-w-50 **:data-[slot=progress-track]:h-2 **:data-[slot=progress-indicator]:rounded-full"
        />
      </CardContent>
    </Card>
  );
}