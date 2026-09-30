import Image from "next/image";

import { landingPage } from "@/lib/content/marketing/landing-page";

export function PartnerLogos() {
  return (
    <ul className="grid grid-cols-[repeat(2,auto)] justify-between gap-y-8 gap-x-2 sm:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(5,auto)]">
      {landingPage.partners.map((partner) => (
        <li key={partner.src.src}>
          <Image src={partner.src} alt={partner.alt} className="h-10 w-auto" />
        </li>
      ))}
    </ul>
  );
}