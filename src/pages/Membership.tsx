import { useState } from "react";
import { memberships, comparisonRows } from "../data/memberships";
import PricingCard from "../components/PricingCard";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import { faqs } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Membership() {
  usePageMeta(
    "Membership | IronForge Fitness",
    "Starter, Pro, and Elite memberships at IronForge Fitness. Monthly and yearly pricing with a full feature comparison.",
  );
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <section className="bg-ink-2 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Membership</p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">Choose the work. We’ll handle the structure.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Monthly flexibility or yearly savings. Every plan includes access to a premium training
            environment in Bhubaneswar.
          </p>
          <div
            className="mx-auto mt-8 inline-flex rounded-full border border-white/10 bg-ink p-1"
            role="group"
            aria-label="Billing period"
          >
            {(["monthly", "yearly"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBilling(opt)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize ${
                  billing === opt ? "bg-lime text-ink" : "text-cream/70"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {memberships.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>

        <div className="mt-20 overflow-x-auto">
          <h2 className="font-display text-3xl uppercase">Feature comparison</h2>
          <table className="mt-6 w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-muted">
                <th className="py-3 pr-4 font-medium">Feature</th>
                <th className="py-3 pr-4 font-medium">Starter</th>
                <th className="py-3 pr-4 font-medium">Pro</th>
                <th className="py-3 font-medium">Elite</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-white/8">
                  <td className="py-3 pr-4">{row.feature}</td>
                  <td className="py-3 pr-4 text-muted">{row.starter}</td>
                  <td className="py-3 pr-4 text-muted">{row.pro}</td>
                  <td className="py-3 text-muted">{row.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <SectionHeading title="Membership FAQ" align="center" />
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
