import type { StaticImageData } from "next/image";

import heroPerson from "@/components/marketing/hero-person.png";
import partner1 from "@/components/marketing/partner-1.png";
import partner2 from "@/components/marketing/partner-2.png";
import partner3 from "@/components/marketing/partner-3.png";
import partner4 from "@/components/marketing/partner-4.png";
import partner5 from "@/components/marketing/partner-5.png";

type PartnerLogo = {
  src: StaticImageData;
  alt: string;
};

export const landingPage = {
  hero: {
    headline: "Get Access to Hundreds\nCourses Available",
    subheadline:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    searchPlaceholder: "Course, topic, creator",
    searchLabel: "Search",
    cards: {
      category: {
        title: "UI/UX Design",
        meta: "200 Courses • 1000+ Students",
      },
      progress: {
        title: "Learning Progress",
        value: 55,
      },
      students: {
        title: "Happy Students",
        rating: 4.5,
        reviews: 240,
        count: "2K+",
        avatars: [
          { src: heroPerson.src },
          { src: heroPerson.src },
          { src: heroPerson.src },
          { src: heroPerson.src },
          { src: heroPerson.src },
          { src: heroPerson.src },
          { src: heroPerson.src },
        ],
      },
    },
  },
  partners: [
    { src: partner1, alt: "" },
    { src: partner2, alt: "" },
    { src: partner3, alt: "" },
    { src: partner4, alt: "" },
    { src: partner5, alt: "" },
  ] satisfies PartnerLogo[],
};
