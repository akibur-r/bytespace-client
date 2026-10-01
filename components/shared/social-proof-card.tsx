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
import { cn } from "@/lib/utils";

export function SocialProofCard({
  title,
  rating,
  reviewCount,
  avatars,
  countLabel,
  className,
}: {
  title: string;
  rating: number;
  reviewCount: number;
  avatars: string[];
  countLabel: string;
  className?: string;
}) {
  return (
    <Card className={cn("gap-2 rounded-2xl bg-white ring-0", className)}>
      <CardHeader>
        <CardTitle className="label-m!">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <CardDescription className="body-xs flex items-center gap-1">
          {`${rating} (${reviewCount})`}
          <Star className="size-3.5 fill-lime-400 text-lime-400" />
        </CardDescription>

        <AvatarGroup className="-space-x-4 *:data-[slot=avatar]:ring-0">
          {avatars.map((avatar, index) => (
            <Avatar key={index} className="size-11 after:border-0">
              <AvatarImage src={avatar} alt="" />
            </Avatar>
          ))}

          <AvatarGroupCount className="label-xs size-11 bg-lime-400 text-gray-950 ring-0">
            {countLabel}
          </AvatarGroupCount>
        </AvatarGroup>
      </CardContent>
    </Card>
  );
}