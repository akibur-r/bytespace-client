import Image from "next/image";

import { RevenueCard } from "@/components/marketing/revenue-card";
import { SocialProofCard } from "@/components/shared";
import spiralLime from "@/components/shared/shapes/spiral-1-lime.svg";
import { landingPage } from "@/lib/content/marketing/landing-page";
import { cn } from "@/lib/utils";
import heroPersonFemale from "./hero-person-female.png";

export function CreatorShowcase({ className }: { className?: string }) {
  const { revenue, students } = landingPage.stats.creator;

  return (
    <div className={cn("relative min-h-140", className)}>
      <div className="absolute top-0 left-0 flex flex-col items-start gap-7">
        <RevenueCard
          title={revenue.total.title}
          subtitle={revenue.total.subtitle}
          amount={revenue.total.amount}
          trend={revenue.total.trend}
          progressValue={revenue.total.progressValue}
        />

        <RevenueCard
          className=""
          layout="stacked"
          title={revenue.lifetime.title}
          subtitle={revenue.lifetime.subtitle}
          amount={revenue.lifetime.amount}
          trend={revenue.lifetime.trend}
        />
      </div>

      <Image
        src={heroPersonFemale}
        alt=""
        aria-hidden
        className="absolute left-65/100 min-h-140 scale-110 max-h-full object-contain -translate-x-1/2 pointer-events-none"
      />

      <SocialProofCard
        className="absolute bottom-1/5 right-0"
        title={students.title}
        rating={students.rating}
        reviewCount={students.reviews}
        avatars={students.avatars}
        countLabel={students.count}
      />

      <Image
        src={spiralLime}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/5 right-0 w-44"
      />
    </div>
  );
}