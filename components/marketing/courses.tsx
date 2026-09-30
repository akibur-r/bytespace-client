import { Container } from "@/components/layout";
import { CourseFilters } from "@/components/marketing/course-filters";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Courses() {
  const { heading, subheading } = landingPage.courses;

  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="heading-m text-[#040819] whitespace-pre-line">
          {heading}
        </h2>
        <p className="body-l max-w-4xl text-gray-400">{subheading}</p>
        <div className="py-10">
          <CourseFilters />
        </div>
      </Container>
    </section>
  );
}
