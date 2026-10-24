import type { FaqItem, GalleryImage, Transformation } from "../types";
import { images } from "./images";

export const transformations: Transformation[] = [
  {
    id: "rahul",
    name: "Rahul",
    goal: "Fat Loss",
    duration: "4 Months",
    result: "Lost 12kg",
    beforeImage: images.rahulBefore,
    afterImage: images.rahulAfter,
  },
  {
    id: "priya",
    name: "Priya",
    goal: "Strength & Confidence",
    duration: "6 Months",
    result: "Built strength & confidence",
    beforeImage: images.priyaBefore,
    afterImage: images.priyaAfter,
  },
  {
    id: "arjun",
    name: "Arjun",
    goal: "Muscle Gain",
    duration: "8 Months",
    result: "Muscle gain",
    beforeImage: images.arjunBefore,
    afterImage: images.arjunAfter,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: images.gallery1, alt: "IronForge strength floor with free weights", span: "wide" },
  { id: "g2", src: images.gallery2, alt: "Athlete performing a barbell deadlift" },
  { id: "g3", src: images.gallery3, alt: "Personal training session on the gym floor" },
  { id: "g4", src: images.gallery4, alt: "Modern gym interior with premium equipment", span: "tall" },
  { id: "g5", src: images.gallery5, alt: "High-intensity interval training class" },
  { id: "g6", src: images.gallery6, alt: "Functional training with kettlebells" },
  { id: "g7", src: images.gallery7, alt: "Cardio zone with treadmills and bikes" },
  { id: "g8", src: images.gallery8, alt: "Group class in the IronForge studio", span: "wide" },
  { id: "g9", src: images.gallery9, alt: "Recovery and stretching area" },
];

export const faqs: FaqItem[] = [
  {
    id: "q1",
    question: "Do I need previous gym experience?",
    answer:
      "No. Beginners start with an assessment and our Foundations program. Coaches teach equipment, technique, and a simple weekly plan so you never feel lost on the floor.",
  },
  {
    id: "q2",
    question: "Do you offer personal training?",
    answer:
      "Yes. Personal training is included with Elite membership and available as an add-on on other plans. Sessions are 1:1 with a dedicated coach and a custom program.",
  },
  {
    id: "q3",
    question: "Can I try the gym before joining?",
    answer:
      "Absolutely. Book a free trial and we will walk you through the facility, discuss your goals, and let you experience a coached session before you decide.",
  },
  {
    id: "q4",
    question: "What membership should I choose?",
    answer:
      "Starter is for independent training. Pro is the most popular — it includes classes, diet guidance, and tracking. Elite is for members who want a personal trainer and fully custom programming.",
  },
  {
    id: "q5",
    question: "Do you provide diet guidance?",
    answer:
      "Pro members receive structured diet guidance. Elite members get a personalized nutrition plan with regular check-ins from our nutrition coaches.",
  },
  {
    id: "q6",
    question: "Can I attend group classes?",
    answer:
      "Group classes are included with Pro and Elite. Starter members can drop into selected classes as paid add-ons. The weekly schedule is available on the Schedule page.",
  },
  {
    id: "q7",
    question: "What are your opening hours?",
    answer:
      "Monday–Friday 5:30 AM – 10:00 PM, Saturday 6:00 AM – 9:00 PM, Sunday 7:00 AM – 2:00 PM. Last entry is 45 minutes before close.",
  },
];
