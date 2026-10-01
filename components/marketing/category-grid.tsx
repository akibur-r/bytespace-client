import { CategoryCard } from "@/components/catalog";
import { categories } from "@/lib/content/catalog/categories";
import { cn } from "@/lib/utils";

export function CategoryGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(2,auto)] justify-between gap-10 sm:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(6,auto)]",
        className,
      )}
    >
      {categories.map((category) => (
        <CategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}