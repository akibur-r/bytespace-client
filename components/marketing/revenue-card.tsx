import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const TREND_BADGE_CLASSNAME =
  "label-2xs! rounded-full bg-lime-500 px-3 py-4 text-gray-950";

export type RevenueCardLayout = "inline" | "stacked";

const AMOUNT_ROW: Record<RevenueCardLayout, string> = {
  inline: "items-center justify-between",
  stacked: "flex-col items-start",
};

export function RevenueCard({
  title,
  subtitle,
  amount,
  trend,
  progressValue,
  layout = "inline",
  className,
}: {
  title: string;
  subtitle: string;
  amount: string;
  trend: string;
  progressValue?: number;
  layout?: RevenueCardLayout;
  className?: string;
}) {
  return (
    <Card
      className={cn("gap-3 rounded-2xl bg-blue-800 ring-0 p-4", className)}
    >
      <CardHeader className="p-0">
        <CardTitle className="label-m! text-gray-50">{title}</CardTitle>
        <CardDescription className="label-2xs! text-gray-50">
          {subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col justify-center gap-3 p-0">
        <div className={cn("flex gap-4", AMOUNT_ROW[layout])}>
          <span className="heading-s text-gray-50">{amount}</span>
          <Badge variant="ghost" className={TREND_BADGE_CLASSNAME}>
            {trend}
          </Badge>
        </div>

        {progressValue !== undefined && (
          <Progress
            value={progressValue}
            className="min-w-80 **:data-[slot=progress-track]:h-2 **:data-[slot=progress-indicator]:rounded-full"
          />
        )}
      </CardContent>
    </Card>
  );
}