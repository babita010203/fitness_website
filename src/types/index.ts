export type ProgramCategory =
  | "Strength"
  | "Muscle Building"
  | "Fat Loss"
  | "HIIT"
  | "Functional"
  | "Personal Training";

export interface Program {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: ProgramCategory;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  weeklyFrequency: string;
  image: string;
  trainer: string;
  goal: string;
  outcomes: string[];
  features: string[];
}

export type TrainerFocus =
  | "Strength"
  | "Weight Loss"
  | "Functional"
  | "Yoga"
  | "Nutrition";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specializations: string[];
  focus: TrainerFocus[];
  bio: string;
  image: string;
  instagram: string;
}

export interface Membership {
  id: "starter" | "pro" | "elite";
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
}

export type ClassType =
  | "Strength Training"
  | "HIIT"
  | "CrossFit"
  | "Yoga"
  | "Cardio"
  | "Functional Training";

export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface GymClass {
  id: string;
  name: ClassType;
  trainer: string;
  day: WeekDay;
  time: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  slots: number;
  totalSlots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  goal: string;
  avatar: string;
}

export interface Transformation {
  id: string;
  name: string;
  goal: string;
  duration: string;
  result: string;
  beforeImage: string;
  afterImage: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
