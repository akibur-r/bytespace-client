import { Container } from "@/components/layout";
import { HeroCards } from "@/components/marketing/hero-cards";
import { HeroDecorations } from "@/components/marketing/hero-decorations";
import { SearchBar } from "@/components/search/search-bar";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function Hero() {
  const { hero } = landingPage;

  return (
    <Container className="relative overflow-clip max-h-256 pt-12">
      <HeroDecorations />
      <HeroCards />

      <section className="relative min-h-256 text-center space-y-16">
        <header>
          <h1 className="heading-l whitespace-pre-line text-center text-white">
            {hero.headline}
          </h1>
          <p className="body-l text-gray-100">{hero.subheadline}</p>
        </header>
        <main>
          <SearchBar
            className="mx-auto max-w-140"
            placeholder={hero.searchPlaceholder}
            label={hero.searchLabel}
          />
        </main>
      </section>
    </Container>
  );
}
