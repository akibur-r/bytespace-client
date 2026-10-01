import type { StaticImageData } from "next/image";

import partner1 from "@/components/marketing/partner-1.png";
import partner2 from "@/components/marketing/partner-2.png";
import partner3 from "@/components/marketing/partner-3.png";
import partner4 from "@/components/marketing/partner-4.png";
import partner5 from "@/components/marketing/partner-5.png";
import testimonialAvatar1 from "@/components/shared/testimonial-avatar-1.png";
import testimonialAvatar2 from "@/components/shared/testimonial-avatar-2.png";
import testimonialAvatar3 from "@/components/shared/testimonial-avatar-3.png";
import { studentAvatars } from "@/lib/content/shared";

type PartnerLogo = {
  src: StaticImageData;
  alt: string;
};

type CourseCategory = {
  label: string;
  slug: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  message: string;
  avatar: StaticImageData;
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
        avatars: studentAvatars,
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
  testimonials: {
    heading: "Discover What Our\nCommunity Is Saying",
    description:
      "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
    items: [
      {
        name: "Sarah M.",
        designation: "Enthusiastic Learner",
        message:
          '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
        avatar: testimonialAvatar1,
      },
      {
        name: "James L.",
        designation: "Lifelong Learner",
        message:
          '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
        avatar: testimonialAvatar2,
      },
      {
        name: "Alex B.",
        designation: "Inspired Creator",
        message:
          '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
        avatar: testimonialAvatar3,
      },
    ] satisfies Testimonial[],
  },
  creatorCta: {
    heading: "Unlock Your Potential as a\n Creator with ByteSpace",
    description:
      "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
    actionLabel: "Join as Creator",
    actionHref: "/sign-up",
  },
  stats: {
    growth: {
      title: "Your Path to Professional Growth Starts Here!",
      description:
        "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
      items: [
        { value: "12k", label: "Students" },
        { value: "70+", label: "Courses" },
        { value: "16", label: "Creators" },
      ],
    },
    creator: {
      title: "Create & Manage Courses Easily.",
      brand: "Bytespace",
      description:
        "supports individuals or entities in the creation, publication, and administration of educational courses.",
      features: [
        "Share Your Expertise",
        "Monetize Your Passion",
        "Flexibility and Autonomy",
        "Build a Community",
      ],
      revenue: {
        total: {
          title: "Total Revenue",
          subtitle: "July 1-28",
          amount: "$120.29",
          trend: "+12$",
          progressValue: 50,
        },
        lifetime: {
          title: "Lifetime Revenue",
          subtitle: "All time",
          amount: "$1,200.38",
          trend: "+12$",
        },
      },
      students: {
        title: "Happy Students",
        rating: 4.5,
        reviews: 240,
        avatars: studentAvatars,
        count: "2K+",
      },
    },
  },
};
