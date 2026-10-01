import { Stat } from "@/components/shared";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function StatList() {
  const { items } = landingPage.stats;

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-8">
      {items.map((item) => (
        <Stat key={item.label} value={item.value} label={item.label} />
      ))}
    </div>
  );
}