import { Container } from "@/components/layout";
import { CategoryGrid } from "@/components/marketing/category-grid";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function CourseCategories() {
  const { heading, subheading } = landingPage.courseCategories;

  return (
    <section className="pb-30">
      <Container className="space-y-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <h2 className="heading-s text-[#040819]">{heading}</h2>
          <p className="body-l max-w-3xl text-gray-400">{subheading}</p>
        </header>

        <CategoryGrid />
      </Container>
    </section>
  );
}