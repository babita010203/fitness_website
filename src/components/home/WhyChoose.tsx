import { Dumbbell, Users, UserRound, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";

const cards = [
  {
    icon: UserRound,
    title: "Expert Coaching",
    text: "Get guidance from experienced coaches who understand your goals.",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    text: "Train with modern strength, cardio, and functional fitness equipment.",
  },
  {
    icon: Sparkles,
    title: "Personalized Training",
    text: "Programs designed around your fitness level, goals, and progress.",
  },
  {
    icon: Users,
    title: "Strong Community",
    text: "Train alongside people who motivate, challenge, and support you.",
  },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <SectionHeading
        eyebrow="Why IronForge"
        title="More than a gym. A community built for results."
        subtitle="Everything you need to train harder, recover smarter, and stay consistent."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl border border-white/8 bg-ink-3 p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/40"
          >
            <card.icon className="text-lime" size={28} />
            <h3 className="mt-4 font-display text-2xl uppercase">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
