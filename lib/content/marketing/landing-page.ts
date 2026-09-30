import heroPerson from "@/components/marketing/hero-person.png";

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
        rating: "4.5",
        reviews: "(240)",
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
};
