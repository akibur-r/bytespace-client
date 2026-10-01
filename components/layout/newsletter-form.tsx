import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { siteFooter } from "@/lib/content/site-footer";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const { placeholder, actionLabel } = siteFooter.newsletter;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <InputGroup className="h-12 flex-1 rounded-full bg-white px-4">
        <InputGroupInput
          type="email"
          aria-label={actionLabel}
          placeholder={placeholder}
          className="body-l! text-gray-950 placeholder:text-gray-400"
        />
      </InputGroup>

      <Button variant="default" className="label-l! h-12 px-6 rounded-full">
        {actionLabel}
      </Button>
    </div>
  );
}