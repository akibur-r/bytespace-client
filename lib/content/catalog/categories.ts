import type { StaticImageData } from "next/image";

import buildingComplex from "@/components/catalog/icons/building-complex.svg";
import laptop from "@/components/catalog/icons/laptop.svg";
import mobileCode from "@/components/catalog/icons/mobile-code.svg";
import pencilScale from "@/components/catalog/icons/pencil-scale.svg";
import userCamera from "@/components/catalog/icons/user-camera.svg";
import usersConnection from "@/components/catalog/icons/users-connection.svg";

export type Category = {
  title: string;
  slug: string;
  icon: StaticImageData;
};

export const categories: Category[] = [
  { title: "Design", slug: "design", icon: pencilScale },
  { title: "Development", slug: "development", icon: mobileCode },
  { title: "IT & Software", slug: "it-software", icon: laptop },
  { title: "Business", slug: "business", icon: buildingComplex },
  { title: "Marketing", slug: "marketing", icon: usersConnection },
  { title: "Photography", slug: "photography", icon: userCamera },
];