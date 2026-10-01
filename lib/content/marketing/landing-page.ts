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

type CourseCategory = {
  label: string;
  slug: string;
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
  courses: {
    heading: "Discover Your Passion,\nBuild Your Skills",
    subheading:
      "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
    categories: [
      { label: "Featured", slug: "featured" },
      { label: "Music", slug: "music" },
      { label: "Drawing & Painting", slug: "drawing-and-painting" },
      { label: "Marketing", slug: "marketing" },
      { label: "Animation", slug: "animation" },
      { label: "Social Media", slug: "social-media" },
      { label: "UI/UX Design", slug: "ui-ux-design" },
      { label: "Creative Marketing", slug: "creative-marketing" },
      { label: "Digital Illustration", slug: "digital-illustration" },
      { label: "Film & Video", slug: "film-and-video" },
      { label: "Crafts", slug: "crafts" },
      { label: "Freelance & Entrepreneurship", slug: "freelance-and-entrepreneurship" },
      { label: "Graphic Design", slug: "graphic-design" },
      { label: "Photography", slug: "photography" },
      { label: "Productivity", slug: "productivity" },
      { label: "Web Development", slug: "web-development" },
      { label: "Data Science", slug: "data-science" },
      { label: "Cooking", slug: "cooking" },
    ] satisfies CourseCategory[],
    moreLabel: "+More",
  },
  courseCategories: {
    heading: "Explore Diverse Learning Paths at Bytespace",
    subheading:
      "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  },
  stats: {
    title: "Your Path to Professional Growth Starts Here!",
    description:
      "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    items: [
      { value: "12k", label: "Students" },
      { value: "70+", label: "Courses" },
      { value: "16", label: "Creators" },
    ],
  },
};
