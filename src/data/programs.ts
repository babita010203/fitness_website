import type { Program } from "../types";
import { images } from "./images";

export const programs: Program[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description:
      "Build functional strength, improve technique, and become more powerful.",
    longDescription:
      "A structured barbell and accessory program that teaches you how to squat, hinge, press, and pull with confidence. Sessions are coached, progressive, and built around real-world strength — not just numbers on a plate.",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "8 Weeks",
    weeklyFrequency: "4 sessions / week",
    image: images.strength,
    trainer: "Alex Morgan",
    goal: "Increase compound lifts, posture, and everyday power.",
    outcomes: [
      "Cleaner squat, deadlift, and press technique",
      "Measurable strength progress every 2 weeks",
      "Better core stability and joint control",
      "A repeatable training rhythm you can keep",
    ],
    features: [
      "Coached compound lifting",
      "Progressive overload tracking",
      "Mobility primers each session",
      "Deload week built in",
    ],
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    description:
      "Hypertrophy-focused training to add lean muscle with intelligent volume.",
    longDescription:
      "High-quality muscle work with enough volume to grow and enough recovery to actually adapt. You will train with intention, track performance, and pair sessions with simple nutrition guidance from your coach.",
    category: "Muscle Building",
    difficulty: "Intermediate",
    duration: "12 Weeks",
    weeklyFrequency: "5 sessions / week",
    image: images.muscle,
    trainer: "Daniel Carter",
    goal: "Build visible muscle while staying athletic and mobile.",
    outcomes: [
      "Increased muscle size and density",
      "Improved training volume tolerance",
      "Balanced upper/lower development",
      "Confidence in the weight room",
    ],
    features: [
      "Split programming by goal",
      "Tempo and rest prescriptions",
      "Weekly check-ins",
      "Photo and measurement tracking",
    ],
  },
  {
    id: "fat-loss",
    name: "Fat Loss",
    description:
      "Sustainable fat loss through smart training, conditioning, and coaching.",
    longDescription:
      "Lose fat without wrecking your energy or your joints. This program blends strength, metabolic work, and nutrition habits so results last after the first month of motivation fades.",
    category: "Fat Loss",
    difficulty: "Beginner",
    duration: "10 Weeks",
    weeklyFrequency: "4 sessions / week",
    image: images.fatLoss,
    trainer: "Sarah Williams",
    goal: "Reduce body fat, keep muscle, and build consistent habits.",
    outcomes: [
      "Steady, realistic fat loss",
      "Improved work capacity",
      "Clearer eating structure",
      "Higher daily energy",
    ],
    features: [
      "Strength + conditioning mix",
      "Habit-based nutrition coaching",
      "Weekly weigh-in protocol",
      "Weekend-proof meal strategy",
    ],
  },
  {
    id: "hiit",
    name: "HIIT",
    description:
      "High-intensity intervals that torch calories and sharpen conditioning.",
    longDescription:
      "Short, demanding sessions with full coaching on form and pacing. Built for busy professionals who want maximum return in 45 minutes without chaotic, unsafe workouts.",
    category: "HIIT",
    difficulty: "Advanced",
    duration: "6 Weeks",
    weeklyFrequency: "3 sessions / week",
    image: images.hiit,
    trainer: "Sarah Williams",
    goal: "Raise VO2-style conditioning and fat-burning capacity.",
    outcomes: [
      "Faster recovery between efforts",
      "Improved cardiovascular fitness",
      "Leaner look with preserved strength",
      "Mental toughness under fatigue",
    ],
    features: [
      "Timed interval blocks",
      "Scalable intensity options",
      "Heart-rate guidance",
      "Finisher variations weekly",
    ],
  },
  {
    id: "functional-training",
    name: "Functional Training",
    description:
      "Move better, train harder, and build strength that transfers to real life.",
    longDescription:
      "Carries, lunges, crawls, kettlebells, and athletic patterns that make you more capable outside the gym. Ideal for people who want to feel athletic — not just look trained.",
    category: "Functional",
    difficulty: "Intermediate",
    duration: "8 Weeks",
    weeklyFrequency: "3–4 sessions / week",
    image: images.functional,
    trainer: "Daniel Carter",
    goal: "Improve movement quality, balance, and total-body athleticism.",
    outcomes: [
      "Better movement quality and coordination",
      "Stronger posterior chain and core",
      "Reduced stiffness from desk work",
      "Carryover to sport and daily life",
    ],
    features: [
      "Kettlebell and bodyweight skill work",
      "Unilateral strength emphasis",
      "Core anti-rotation training",
      "Athletic conditioning finishers",
    ],
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "1:1 coaching tailored to your body, schedule, and performance goals.",
    longDescription:
      "Private sessions with a dedicated coach. Every program is built around your assessment, injuries, and lifestyle — with accountability that actually sticks.",
    category: "Personal Training",
    difficulty: "Beginner",
    duration: "Ongoing",
    weeklyFrequency: "2–4 sessions / week",
    image: images.personal,
    trainer: "Alex Morgan",
    goal: "A fully customized plan with expert eyes on every session.",
    outcomes: [
      "A plan built around you, not a template",
      "Faster technique corrections",
      "Accountability between sessions",
      "Clear monthly progress reviews",
    ],
    features: [
      "Initial movement assessment",
      "Custom programming",
      "Form video reviews",
      "Nutrition and recovery support",
    ],
  },
  {
    id: "athletic-performance",
    name: "Athletic Performance",
    description:
      "Speed, power, and resilience for athletes who compete and train hard.",
    longDescription:
      "A performance block covering power development, sprint mechanics, and injury-resilient strength. Built for athletes who need to be explosive and durable.",
    category: "Strength",
    difficulty: "Advanced",
    duration: "8 Weeks",
    weeklyFrequency: "4 sessions / week",
    image: images.deadlift,
    trainer: "Alex Morgan",
    goal: "Increase power output and sport-ready durability.",
    outcomes: [
      "Improved rate of force development",
      "Better sprint and jump mechanics",
      "Stronger landing and deceleration",
      "Reduced niggle-related downtime",
    ],
    features: [
      "Olympic-lift variations",
      "Plyometric progressions",
      "Return-to-play screening",
      "In-season maintenance options",
    ],
  },
  {
    id: "foundations",
    name: "Beginner Foundations",
    description:
      "Learn the gym with confidence — technique, consistency, and first results.",
    longDescription:
      "The smartest way to start. We teach machines and free weights, build a weekly habit, and remove the intimidation so you actually come back.",
    category: "Strength",
    difficulty: "Beginner",
    duration: "6 Weeks",
    weeklyFrequency: "3 sessions / week",
    image: images.gymFloor,
    trainer: "Emma Johnson",
    goal: "Build gym confidence, basic strength, and a training habit.",
    outcomes: [
      "Comfort using the gym independently",
      "Solid technique on key lifts",
      "A 3-day weekly routine you can keep",
      "First visible fitness improvements",
    ],
    features: [
      "Orientation and equipment tour",
      "Simple progressive plan",
      "Form checkpoints",
      "Community intro sessions",
    ],
  },
];
