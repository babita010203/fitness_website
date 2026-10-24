import { useMemo, useState } from "react";
import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import EmptyState, { FilterPills } from "../components/EmptyState";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import type { ProgramCategory } from "../types";

const filters = [
  "All",
  "Strength",
  "Muscle Building",
  "Fat Loss",
  "HIIT",
  "Functional",
  "Personal Training",
] as const;

type Filter = (typeof filters)[number];

export default function Programs() {
  usePageMeta(
    "Programs | IronForge Fitness",
    "Strength, muscle building, fat loss, HIIT, functional training, and personal training programs at IronForge.",
  );
  const [filter, setFilter] = useState<Filter>("All");

  const list = useMemo(() => {
    if (filter === "All") return programs;
    return programs.filter((p) => p.category === (filter as ProgramCategory));
  }, [filter]);

  return (
    <>
      <section className="bg-ink-2 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Training</p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">Programs built for your goals</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Choose a path. Every program is coached, progressive, and designed to be finished — not
            abandoned in week three.
          </p>
          <div className="mt-8">
            <FilterPills options={[...filters]} value={filter} onChange={setFilter} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        {list.length === 0 ? (
          <EmptyState
            title="No programs found"
            message="Try changing your filters."
            onClear={() => setFilter("All")}
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </section>
      <CTASection />
    </>
  );
}
