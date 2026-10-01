import Image from "next/image";

import { CourseCard } from "@/components/catalog";
import { SocialProofCard } from "@/components/shared";
import coneLime from "@/components/shared/shapes/cone-1-lime.svg";
import donutLime from "@/components/shared/shapes/donut-1-lime.svg";
import spiralWhite2 from "@/components/shared/shapes/spiral-2-white.svg";
import { auth } from "@/lib/content/auth";
import { cn } from "@/lib/utils";

export function AuthShowcase({ className }: { className?: string }) {
  const { cards, socialProof } = auth.showcase;

  return (
    <div className={cn("relative min-h-150", className)}>
      <CourseCard className="absolute top-1/6 left-0" course={cards[0]} />
      <CourseCard className="absolute top-0 left-1/5" course={cards[1]} />

      <Image
        src={coneLime}
        alt=""
        aria-hidden
        className="absolute bottom-0 -left-6 size-48"
      />

      <Image
        src={donutLime}
        alt=""
        aria-hidden
        className="absolute top-4 left-8 size-36"
      />

      <SocialProofCard
        className="bg-lime-400 absolute bottom-8 right-10"
        title={socialProof.title}
        rating={socialProof.rating}
        reviewCount={socialProof.reviewCount}
        avatars={socialProof.avatars}
        countLabel={socialProof.countLabel}
      />

      <Image
        src={spiralWhite2}
        alt=""
        aria-hidden
        className="absolute bottom-2/15 right-2 size-44"
      />
    </div>
  );
}
