import { CircleCheck } from "lucide-react";

import { Container } from "@/components/layout";
import { CreatorShowcase } from "@/components/marketing/creator-showcase";
import { StatList } from "@/components/marketing/stat-list";
import { StatsShowcase } from "@/components/marketing/stats-showcase";
import { RadialGlow } from "@/components/shared";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Stats() {
  const { growth, creator } = landingPage.stats;

  return (
    <section className="bg-[#fafafa] ">
      <Container className="relative py-30">
        <div className="pointer-events-none absolute inset-0 text-lime-500">
          <RadialGlow radius={570} origin="100% 0%" className="absolute inset-0 text-blue-800 opacity-8" />
          <RadialGlow radius={570} origin="100% 100%" className="absolute inset-0 text-blue-800 opacity-24" />
          <RadialGlow radius={570} origin="15% 0%" className="absolute inset-0 opacity-40" />
          <RadialGlow radius={336} origin="0% 85%" className="absolute inset-0 opacity-60" />
        </div>

        <div className="relative space-y-18">
          <div className="grid grid-cols-2 gap-16">
            <div className="order-2 flex flex-col gap-10 lg:order-1">
              <h2 className="heading-m text-left text-gray-950">
                {growth.title}
              </h2>
              <p className="body-l text-left text-gray-700">
                {growth.description}
              </p>
              <StatList />
            </div>

            <div className="order-1 lg:order-2">
              <StatsShowcase />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <CreatorShowcase />

            <div className="flex flex-col gap-10 self-center">
              <h2 className="heading-m text-left text-gray-950">
                {creator.title}
              </h2>
              <p className="body-l text-left text-gray-700">
                <span className="font-bold text-gray-950">{creator.brand}</span>
                {` ${creator.description}`}
              </p>

              <ul className="flex flex-col gap-4.5">
                {creator.features.map((feature) => (
                  <li
                    key={feature}
                    className="label-m flex items-center gap-2 text-left text-gray-950"
                  >
                    <CircleCheck className="size-5 shrink-0 text-white [&_circle]:fill-blue-800" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
