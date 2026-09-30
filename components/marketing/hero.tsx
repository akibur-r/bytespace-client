import Image from "next/image";

import { Container } from "@/components/layout";
import { SearchBar } from "@/components/search/search-bar";import heroPerson from "@/components/marketing/hero-person.png";
import coneWhite from "@/components/shared/shapes/cone-1-white.svg";
import cylinderLime from "@/components/shared/shapes/cylinder-1-lime.svg";
import donutWhite from "@/components/shared/shapes/donut-1-white.svg";
import ellipseLime from "@/components/shared/shapes/ellipse-1-lime.svg";
import spiralLime1 from "@/components/shared/shapes/spiral-1-lime.svg";
import spiralWhite2 from "@/components/shared/shapes/spiral-2-white.svg";
import spiralWhite3 from "@/components/shared/shapes/spiral-3-white.svg";

import { landingPage } from "@/lib/content/marketing/landing-page";

export function Hero() {
  const { hero } = landingPage;

  return (
    <Container className="relative overflow-clip max-h-256 pt-12">
      <div className="absolute inset-0">
        <Image
          src={ellipseLime}
          alt=""
          width={1149}
          height={1149}
          unoptimized
          aria-hidden
          className="absolute bottom-0 left-1/2 h-290 aspect-square -translate-x-1/2 translate-y-60/100"
        />

        <Image
          src={spiralLime1}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute -left-20 top-56 w-96"
        />

        <Image
          src={cylinderLime}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute -right-36 top-56 w-96"
        />

        <Image
          src={spiralWhite2}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute left-48 top-120 w-44"
        />
        <Image
          src={coneWhite}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute right-48 top-120 w-44"
        />

        <Image
          src={donutWhite}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute left-2 top-170 w-86"
        />

        <Image
          src={spiralWhite3}
          alt=""
          width={337}
          height={387}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute -right-10 rotate-5 top-170 w-86"
        />

        <Image
          src={heroPerson}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 h-136 w-auto -translate-x-44/100"
        />
      </div>

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
