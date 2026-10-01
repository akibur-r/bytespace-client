import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { type Testimonial } from "@/lib/content/marketing/landing-page";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <Card className={cn("gap-6 p-6 ring-0", className)}>
      <Avatar className="size-16 after:border-0 md:size-20">
        <AvatarImage src={testimonial.avatar.src} alt="" />
        <AvatarFallback className="bg-gray-400" />
      </Avatar>

      <div className="flex flex-col">
        <h3 className="heading-xs text-black-950">{testimonial.name}</h3>
        <p className="body-l text-blue-800">{testimonial.designation}</p>
      </div>

      <p className="body-l text-black-700">{testimonial.message}</p>
    </Card>
  );
}