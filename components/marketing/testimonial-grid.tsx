import { TestimonialCard } from "@/components/shared";
import { landingPage } from "@/lib/content/marketing/landing-page";
import { cn } from "@/lib/utils";

export function TestimonialGrid({ className }: { className?: string }) {
  const { items } = landingPage.testimonials;

  return (
    <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-3", className)}>
      {items.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
}