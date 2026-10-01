import { ProgressCard } from "@/components/marketing/progress-card";
import { SocialProofCard } from "@/components/shared";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function HeroCards() {
  const { cards } = landingPage.hero;

  return (
    <>
      <Card className="absolute bottom-80 left-1/4 gap-0 rounded-2xl ring-0 border-0 bg-white">
        <CardHeader>
          <CardTitle className="label-m">{cards.category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="body-xs">
            {cards.category.meta}
          </CardDescription>
        </CardContent>
      </Card>

      <ProgressCard
        className="absolute bottom-60 right-50 -translate-x-1/2"
        title={cards.progress.title}
        value={cards.progress.value}
      />

      <SocialProofCard
        className="absolute bottom-16 left-80"
        title={cards.students.title}
        rating={cards.students.rating}
        reviewCount={cards.students.reviews}
        avatars={cards.students.avatars}
        countLabel={cards.students.count}
      />
    </>
  );
}
