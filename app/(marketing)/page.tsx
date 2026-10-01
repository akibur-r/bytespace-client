import { Masthead, SiteHeader } from "@/components/layout";
import {
  CourseCategories,
  Courses,
  CreatorCta,
  Hero,
  Partners,
  Stats,
  Testimonials,
} from "@/components/marketing";

export default function Home() {
  return (
    <>
      <Masthead header={<SiteHeader variant="overlay" />}>
        <Hero />
      </Masthead>
      <Partners />
      <Courses />
      <CourseCategories />
      <Stats />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
