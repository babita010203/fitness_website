import type { Testimonial } from "../types";
import { images } from "./images";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Sharma",
    review:
      "Joining IronForge completely changed my approach to fitness. The trainers actually care about your progress.",
    rating: 5,
    goal: "Fat Loss",
    avatar: images.avatar1,
  },
  {
    id: "t2",
    name: "Priya Das",
    review:
      "I was intimidated by gyms for years. The foundations program made me feel capable in three weeks. Now I train four days a week.",
    rating: 5,
    goal: "Confidence & Strength",
    avatar: images.avatar2,
  },
  {
    id: "t3",
    name: "Arjun Patel",
    review:
      "Serious coaching, serious equipment, zero fluff. I added 8kg of muscle and my deadlift finally moved after years of plateau.",
    rating: 5,
    goal: "Muscle Building",
    avatar: images.avatar3,
  },
  {
    id: "t4",
    name: "Meera Iyer",
    review:
      "The community is the difference. Classes are challenging but welcoming, and I never skip because people notice.",
    rating: 5,
    goal: "General Fitness",
    avatar: images.avatar4,
  },
];
