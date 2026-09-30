import type { StaticImageData } from "next/image";

import studentAvatar from "@/components/catalog/student-avatar.png";
import thumbnail1 from "@/components/catalog/thumbnail-1.png";
import thumbnail2 from "@/components/catalog/thumbnail-2.png";
import thumbnail3 from "@/components/catalog/thumbnail-3.png";
import thumbnail4 from "@/components/catalog/thumbnail-4.png";
import thumbnail5 from "@/components/catalog/thumbnail-5.png";
import thumbnail6 from "@/components/catalog/thumbnail-6.png";

export type CourseDifficulty = "beginner" | "intermediate" | "advanced";

export type CourseFrequency = "month" | "6 months" | "year" | "lifetime";

export type Course = {
  title: string;
  author: string;
  difficulty: CourseDifficulty;
  thumbnail: StaticImageData;
  lessonCount: number;
  durationHours: number;
  durationMinutes: number;
  commentCount: number;
  rating: number;
  price: number;
  frequency: CourseFrequency;
  studentAvatars: StaticImageData[];
  studentCount: number;
};

export const difficultyLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
} satisfies Record<CourseDifficulty, string>;

const placeholders = Array.from({ length: 4 }, () => studentAvatar);

export const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    difficulty: "beginner",
    thumbnail: thumbnail1,
    lessonCount: 17,
    durationHours: 2,
    durationMinutes: 16,
    commentCount: 59,
    rating: 4.5,
    price: 45,
    frequency: "lifetime",
    studentAvatars: placeholders,
    studentCount: 1240,
  },
  {
    title: "Build Digital Asset",
    author: "artova labs",
    difficulty: "intermediate",
    thumbnail: thumbnail2,
    lessonCount: 24,
    durationHours: 12,
    durationMinutes: 15,
    commentCount: 86,
    rating: 4.6,
    price: 29,
    frequency: "month",
    studentAvatars: placeholders,
    studentCount: 12800,
  },
  {
    title: "the Power of Big Data",
    author: "bluekeys academy",
    difficulty: "intermediate",
    thumbnail: thumbnail3,
    lessonCount: 18,
    durationHours: 9,
    durationMinutes: 45,
    commentCount: 203,
    rating: 4.9,
    price: 39,
    frequency: "6 months",
    studentAvatars: placeholders,
    studentCount: 860,
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "studio marisol",
    difficulty: "beginner",
    thumbnail: thumbnail4,
    lessonCount: 32,
    durationHours: 22,
    durationMinutes: 5,
    commentCount: 341,
    rating: 4.7,
    price: 59,
    frequency: "year",
    studentAvatars: placeholders,
    studentCount: 3400,
  },
  {
    title: "Mastering Money Management",
    author: "framefoundry",
    difficulty: "advanced",
    thumbnail: thumbnail5,
    lessonCount: 41,
    durationHours: 28,
    durationMinutes: 50,
    commentCount: 519,
    rating: 4.9,
    price: 79,
    frequency: "lifetime",
    studentAvatars: placeholders,
    studentCount: 47,
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    difficulty: "intermediate",
    thumbnail: thumbnail6,
    lessonCount: 15,
    durationHours: 7,
    durationMinutes: 20,
    commentCount: 12,
    rating: 4.4,
    price: 19,
    frequency: "month",
    studentAvatars: Array.from({ length: 3 }, () => studentAvatar),
    studentCount: 3,
  },
];