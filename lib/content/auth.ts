import { type Course, courses } from "@/lib/content/catalog/courses";
import socialProofAvatar from "@/components/shared/social-proof-avatar.png";

const avatars = Array.from({ length: 7 }, () => socialProofAvatar.src);

export const auth = {
  signUp: {
    heading: "Sign up and come in",
    subheading:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
  signIn: {
    heading: "Sign in with ease",
    subheading:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  showcase: {
    cards: [courses[0], courses[1]] satisfies Course[],
    socialProof: {
      title: "Happy Students",
      rating: 4.5,
      reviewCount: 240,
      avatars,
      countLabel: "2K+",
    },
  },
};