import Image from "next/image";

import { CourseCard } from "@/components/catalog";
import { ProgressCard } from "@/components/marketing/progress-card";
import spiralLime from "@/components/shared/shapes/spiral-1-lime.svg";
import { courses } from "@/lib/content/catalog/courses";
import { landingPage } from "@/lib/content/marketing/landing-page";
import { cn } from "@/lib/utils";
import heroPerson from "./hero-person.png";

export function StatsShowcase({ className }: { className?: string }) {
  const { progress } = landingPage.hero.cards;
  const course = courses[0];

  return (
    <div className={cn("relative min-h-120", className)}>
      <CourseCard
        className="absolute top-0 left-0"
        course={course}
      />

      <Image
        src={heroPerson}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-1/2 min-h-120 object-cover -translate-x-2/5"
      />

      <ProgressCard
        className="absolute top-52/100 -right-2 -translate-y-1/2"
        title={progress.title}
        value={progress.value}
      />

      <Image
        src={spiralLime}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-30/100 right-0 w-40 -translate-y-1/2 rotate-120"
      />
    </div>
  );
}