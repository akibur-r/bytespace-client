import { CourseCard } from "@/components/catalog";
import { courses } from "@/lib/content/catalog/courses";
import { cn } from "@/lib/utils";

export function CourseGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10", className)}>
      {courses.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  );
}