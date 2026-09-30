import { Masthead, SiteHeader } from "@/components/layout";
import { Hero } from "@/components/marketing";

export default function Home() {
  return (
    <Masthead header={<SiteHeader variant="overlay" />}>
      <Hero />
    </Masthead>
  );
}
