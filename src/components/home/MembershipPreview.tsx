import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import PricingCard from "../PricingCard";
import { memberships } from "../../data/memberships";
import Button from "../Button";

export default function MembershipPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Membership"
          title="Membership that fits your goals"
          subtitle="Transparent pricing. No lock-in surprises. Upgrade whenever you're ready."
        />
        <Link to="/membership">
          <Button variant="secondary">Compare Plans</Button>
        </Link>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {memberships.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing="monthly" />
        ))}
      </div>
    </section>
  );
}
