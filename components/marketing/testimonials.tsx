import { Container } from "@/components/layout";
import { TestimonialGrid } from "@/components/marketing/testimonial-grid";
import { RadialGlow } from "@/components/shared";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Testimonials() {
  const { heading, description } = landingPage.testimonials;

  return (
    <section className="bg-[#fafafa] ">
      <Container className="relative py-14">
        <div className="pointer-events-none absolute inset-0 text-blue-800">
          <RadialGlow
            radius={570}
            origin="0% 100%"
            className="absolute inset-0 opacity-40"
          />
          <RadialGlow
            radius={336}
            origin="50% 25%"
            className="absolute inset-0 text-lime-500 opacity-60"
          />
          <RadialGlow
            radius={570}
            origin="100% 50%"
            className="absolute inset-0 text-lime-500 opacity-40"
          />
        </div>

        <div className="relative space-y-18">
          <div className="grid grid-cols-1 items-end gap-y-4 sm:grid-cols-2">
            <h2 className="heading-m whitespace-pre-line text-black-950">
              {heading}
            </h2>
            <p className="body-l text-black-700">{description}</p>
          </div>

          <TestimonialGrid />
        </div>
      </Container>
    </section>
  );
}
