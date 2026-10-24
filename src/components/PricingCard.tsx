import { Check } from "lucide-react";
import type { Membership } from "../types";
import Button from "./Button";
import { useModals } from "../context/ModalContext";

interface PricingCardProps {
  plan: Membership;
  billing: "monthly" | "yearly";
}

const formatInr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function PricingCard({ plan, billing }: PricingCardProps) {
  const { openMembership } = useModals();
  const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const unit = billing === "monthly" ? "/month" : "/year";

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 ${
        plan.popular
          ? "border-lime bg-gradient-to-b from-lime/12 to-ink-3 shadow-[0_0_60px_rgba(200,245,66,0.12)]"
          : "border-white/8 bg-ink-3 hover:border-white/20"
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-[11px] font-bold tracking-wider text-ink uppercase">
          Most Popular
        </span>
      ) : null}
      <h3 className="font-display text-3xl uppercase">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted">{plan.description}</p>
      <p className="mt-6 font-display text-5xl text-cream">
        {formatInr(price)}
        <span className="ml-1 text-lg font-sans text-muted">{unit}</span>
      </p>
      {billing === "yearly" ? (
        <p className="mt-1 text-xs text-lime">Save two months vs monthly billing</p>
      ) : null}
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-cream/90">
            <Check size={16} className="mt-0.5 shrink-0 text-lime" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "secondary"}
        className="mt-8 w-full"
        onClick={() => openMembership(plan)}
      >
        {plan.cta}
      </Button>
    </article>
  );
}
