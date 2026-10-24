import type { Membership } from "../types";

export const memberships: Membership[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 999,
    yearlyPrice: 9999,
    description: "Premium floor access for focused independent training.",
    features: ["Gym Access", "Locker Access", "Basic Fitness Assessment"],
    cta: "Choose Starter",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 1999,
    yearlyPrice: 19999,
    popular: true,
    description: "The membership most members use to stay consistent.",
    features: [
      "Everything in Starter",
      "Group Classes",
      "Fitness Assessment",
      "Diet Guidance",
      "Progress Tracking",
    ],
    cta: "Choose Pro",
  },
  {
    id: "elite",
    name: "Elite",
    monthlyPrice: 3499,
    yearlyPrice: 34999,
    description: "Full coaching, custom programming, and priority support.",
    features: [
      "Everything in Pro",
      "Personal Trainer",
      "Customized Workout Plan",
      "Personalized Nutrition Plan",
      "Priority Support",
    ],
    cta: "Choose Elite",
  },
];

export const comparisonRows: { feature: string; starter: string; pro: string; elite: string }[] = [
  { feature: "Gym floor access", starter: "Yes", pro: "Yes", elite: "Yes" },
  { feature: "Locker & showers", starter: "Yes", pro: "Yes", elite: "Priority" },
  { feature: "Group classes", starter: "—", pro: "Unlimited", elite: "Unlimited" },
  { feature: "Fitness assessment", starter: "Basic", pro: "Full", elite: "Quarterly" },
  { feature: "Diet guidance", starter: "—", pro: "Yes", elite: "Personalized" },
  { feature: "Progress tracking", starter: "—", pro: "Yes", elite: "Coach-led" },
  { feature: "Personal trainer", starter: "Add-on", pro: "Add-on", elite: "Included" },
  { feature: "Custom programming", starter: "—", pro: "—", elite: "Yes" },
  { feature: "Guest passes / month", starter: "1", pro: "2", elite: "4" },
];
