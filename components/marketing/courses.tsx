import { Container } from "@/components/layout";
import { CourseFilters } from "@/components/marketing/course-filters";
import { CourseGrid } from "@/components/marketing/course-grid";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Courses() {
  const { heading, subheading } = landingPage.courses;

  return (
    <section className="py-16">
      <Container>
        <header className="flex flex-col items-center gap-8 text-center">
          <h2 className="heading-m text-[#040819]">{heading}</h2>
          <p className="body-l max-w-3xl text-gray-400">{subheading}</p>
          <CourseFilters />
        </header>

        <CourseGrid className="mt-8" />
      </Container>
    </section>
  );
}