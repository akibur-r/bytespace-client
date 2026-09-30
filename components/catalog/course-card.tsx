import { SignalHigh, SignalLow, SignalMedium, Star, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  type Course,
  type CourseDifficulty,
  difficultyLabels,
} from "@/lib/content/catalog/courses";
import { formatCount } from "@/lib/format";
import { cn } from "@/lib/utils";

const VISIBLE_STUDENTS = 4;

const THUMBNAIL_BADGE_CLASSNAME =
  "label-xs! h-auto rounded-full bg-[#F6F6F660] px-3 py-2 text-gray-700 backdrop-blur-sm";

const DIFFICULTY: Record<
  CourseDifficulty,
  { icon: LucideIcon; className: string }
> = {
  beginner: { icon: SignalLow, className: "text-gray-700" },
  intermediate: { icon: SignalMedium, className: "text-emerald-700" },
  advanced: { icon: SignalHigh, className: "text-blue-700" },
};

export function CourseCard({
  course,
  href = "#",
  className,
}: {
  course: Course;
  href?: string | null;
  className?: string;
}) {
  const { icon: SignalIcon, className: signalClassName } =
    DIFFICULTY[course.difficulty];
  const visibleStudents = course.studentAvatars.slice(0, VISIBLE_STUDENTS);
  const overflow = course.studentCount - visibleStudents.length;

  const card = (
    <Card className="gap-5 rounded-3xl bg-white p-4 ring-2 ring-gray-200">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={course.thumbnail}
          alt="Course thumbnail"
          className="w-full rounded-xl object-cover"
        />

        <div className="absolute inset-x-5 bottom-5 flex justify-between gap-2">
          <Badge className={THUMBNAIL_BADGE_CLASSNAME}>
            {course.lessonCount} Lessons
          </Badge>
          <Badge className={THUMBNAIL_BADGE_CLASSNAME}>
            {course.durationHours} hours {course.durationMinutes} mins
          </Badge>
          <Badge className={THUMBNAIL_BADGE_CLASSNAME}>
            {course.commentCount} Comments
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2.5">
        <div className="col-span-5 flex flex-col gap-4">
          <div>
            <h3 className="heading-xs line-clamp-1 truncate text-black-950" title={course.title}>
              {course.title}
            </h3>
            <p className={cn("body-xs", "text-black-700")}>
              by <span className="text-blue-800">{course.author}</span>
            </p>
          </div>

          <div className="flex items-center justify-start gap-4">
            <Badge
              variant="ghost"
              className={cn(
                "label-xs! rounded-full h-full bg-gray-50 px-4 py-2.5 text-gray-700",
                signalClassName,
              )}
            >
              <SignalIcon />
              {difficultyLabels[course.difficulty]}
            </Badge>

            <AvatarGroup className="*:data-[slot=avatar]:ring-0">
              {visibleStudents.map((student, index) => (
                <Avatar key={index} className="size-9 bg-gray-100 after:border-0">
                  <AvatarImage src={student.src} alt="" />
                </Avatar>
              ))}

              {overflow > 0 && (
                <AvatarGroupCount className="label-xs size-9 bg-lime-400 text-gray-950 ring-0">
                  {`${formatCount(overflow)}+`}
                </AvatarGroupCount>
              )}
            </AvatarGroup>
          </div>

          <p className="flex items-baseline gap-1">
            <span className="heading-xs text-blue-800">{`$${course.price}`}</span>
            <span className={cn("body-xs", "text-black-700")}>{`/${course.frequency}`}</span>
          </p>
        </div>

        <div className={cn("text-black-700")}>
          <div className="flex gap-1 items-center">
            <span className="body-l">{course.rating}</span>
          <Star className="size-5 fill-gray-200 text-gray-200" />
          </div>
        </div>
      </div>
    </Card>
  );

  if (href === null) {
    return <div className={className}>{card}</div>;
  }

  return (
    <Link href={href} className={cn("block", className)}>
      {card}
    </Link>
  );
}