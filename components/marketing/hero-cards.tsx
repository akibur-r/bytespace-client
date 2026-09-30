import { Star } from "lucide-react";

import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

      <Card className="absolute bottom-60 right-50 -translate-x-1/2 gap-2 rounded-2xl ring-0 border-0 bg-white">
        <CardHeader>
          <CardTitle className="label-s">{cards.progress.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <span className="font-heading text-5xl leading-[1.2em] font-semibold text-gray-950">
            {cards.progress.value}%
          </span>
          <Progress
            value={cards.progress.value}
            className="min-w-50 **:data-[slot=progress-track]:h-2 **:data-[slot=progress-indicator]:rounded-full"
          />
        </CardContent>
      </Card>

      <Card className="absolute bottom-16 left-80 gap-2 rounded-2xl ring-0 border-0 bg-white">
        <CardHeader>
          <CardTitle className="label-m">{cards.students.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <CardDescription className="body-xs flex items-center gap-1">
            <Star className="size-3.5 fill-lime-400 text-lime-400" />
            {cards.students.rating}
            {cards.students.reviews}
          </CardDescription>

          <AvatarGroup className="-space-x-4 *:data-[slot=avatar]:ring-0">
            {cards.students.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-11 after:border-0">
                <AvatarImage src={avatar.src} alt="" />
              </Avatar>
            ))}

            <AvatarGroupCount className="size-11 bg-lime-400 text-gray-950 ring-0 label-xs">
              {cards.students.count}
            </AvatarGroupCount>
          </AvatarGroup>
        </CardContent>
      </Card>
    </>
  );
}
