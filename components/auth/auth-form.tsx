import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function AuthForm({
  subheading,
  title,
  footer,
  className,
  children,
}: {
  subheading: string;
  title: string;
  footer: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        "gap-10 rounded-2xl bg-white py-15 px-16 ring-0",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <p className="body-l text-blue-800">{subheading}</p>
        <h2 className="heading-m text-gray-950">{title}</h2>
      </div>

      <form className="flex flex-col gap-6">{children}</form>

      <div className="mt-auto">{footer}</div>
    </Card>
  );
}