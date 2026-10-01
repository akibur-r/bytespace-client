import { Container } from "@/components/layout";
import { StatList } from "@/components/marketing/stat-list";
import { StatsShowcase } from "@/components/marketing/stats-showcase";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Stats() {
  const { title, description } = landingPage.stats;

  return (
    <section className="bg-[#fafafa] py-30">
      <Container>
        <div className="space-y-72">
          <div className="grid grid-cols-2 gap-16">
            <div className="order-2 flex flex-col gap-10 lg:order-1">
              <h2 className="heading-m text-gray-950">{title}</h2>
              <p className="body-l text-gray-700">{description}</p>
              <StatList />
            </div>

            <div className="order-1 lg:order-2">
              <StatsShowcase />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}