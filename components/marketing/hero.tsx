import Image from "next/image";

import { Container } from "@/components/layout";
import spiralLime1 from "@/components/shared/shapes/spiral-1-lime.svg";
import spiralWhite2 from "@/components/shared/shapes/spiral-2-white.svg";
import spiralWhite3 from "@/components/shared/shapes/spiral-3-white.svg";
import cylinderLime from "@/components/shared/shapes/cylinder-1-lime.svg";
import coneWhite from "@/components/shared/shapes/cone-1-white.svg";
import donutWhite from "@/components/shared/shapes/donut-1-white.svg";
import ellipseLime from "@/components/shared/shapes/ellipse-1-lime.svg";

export function Hero() {
  return (
    <Container className="relative overflow-clip max-h-256">
      <Image
        src={ellipseLime}
        alt=""
        width={1160}
        height={1160}
        unoptimized
        aria-hidden
        className="absolute bottom-0 left-1/2 h-290 aspect-square -translate-x-1/2 translate-y-32/50"
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
        className="pointer-events-none absolute left-8 top-170 w-86"
      />

      <Image
        src={spiralWhite3}
        alt=""
        width={337}
        height={387}
        unoptimized
        aria-hidden
        className="pointer-events-none absolute -right-6 top-170 w-86"
      />

      <section className="h-300">test</section>
    </Container>
  );
}
