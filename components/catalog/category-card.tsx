import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { type Category } from "@/lib/content/catalog/categories";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  href = "#",
  className,
}: {
  category: Category;
  href?: string | null;
  className?: string;
}) {
  const card = (
    <Card className="aspect-square h-full rounded-3xl px-6 py-9 ring-gray-200">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex rounded-full bg-lime-400 p-4">
          <Image src={category.icon} alt="" className="size-7" />
        </span>
        <span className="label-xl text-gray-950">{category.title}</span>
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