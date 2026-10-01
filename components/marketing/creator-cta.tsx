import Image from "next/image";
import Link from "next/link";

import { Container, GridBackdrop } from "@/components/layout";
import coneWhite from "@/components/shared/shapes/cone-2-white.svg";
import coneLime from "@/components/shared/shapes/cone-1-lime.svg";
import cylinderWhite from "@/components/shared/shapes/cylinder-1-white.svg";
import donutLime from "@/components/shared/shapes/donut-1-lime.svg";

import spiralLime1 from "@/components/shared/shapes/spiral-1-lime.svg";
import spiralWhite2 from "@/components/shared/shapes/spiral-2-white.svg";
import spiralLime3 from "@/components/shared/shapes/spiral-3-lime.svg";
import { Button } from "@/components/ui/button";
import { landingPage } from "@/lib/content/marketing/landing-page";
import { cn } from "cn";

const SHAPE = "pointer-events-none absolute";

export function CreatorCta() {
  const { heading, description, actionLabel, actionHref } =
    landingPage.creatorCta;

  return (
    <section className="relative bg-blue-800 ">
      <GridBackdrop />

      <Container className="relative flex flex-col items-center space-y-10 text-center overflow-clip py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src={coneWhite} alt="" className={cn(SHAPE, "size-48 bottom-10 -left-12")} />
          <Image src={coneLime} alt="" className={cn(SHAPE, "size-48 top-0 right-42")} />
          <Image src={donutLime} alt="" className={cn(SHAPE, "size-85 -bottom-28 left-5")} />
          <Image src={cylinderWhite} alt="" className={cn(SHAPE, "size-92 -right-36 top-2")} />
          <Image src={spiralLime1} alt="" className={cn(SHAPE, "size-96 -left-28 -top-40")} />
          <Image src={spiralWhite2} alt="" className={cn(SHAPE, "size-44 top-2 left-44")} />
          <Image src={spiralLime3} alt="" className={cn(SHAPE, "size-80 right-0 -bottom-44")} />
        </div>

        <h2 className="heading-m whitespace-pre-line text-gray-50">
          {heading}
        </h2>
        <p className="body-l max-w-3xl text-gray-50">{description}</p>

        <Button
          render={<Link href={actionHref} />}
          nativeButton={false}
          size="lg"
          className="label-l! rounded-full px-8 py-6"
        >
          {actionLabel}
        </Button>
      </Container>
    </section>
  );
}