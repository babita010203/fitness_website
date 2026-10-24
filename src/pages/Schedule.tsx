import { useMemo, useState } from "react";
import { gymClasses } from "../data/classes";
import ClassCard from "../components/ClassCard";
import EmptyState from "../components/EmptyState";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import type { ClassType, WeekDay } from "../types";

const days: Array<WeekDay | "All"> = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const types: Array<ClassType | "All"> = [
  "All",
  "Strength Training",
  "HIIT",
  "CrossFit",
  "Yoga",
  "Cardio",
  "Functional Training",
];

const trainerOptions = ["All", ...Array.from(new Set(gymClasses.map((c) => c.trainer)))];

export default function Schedule() {
  usePageMeta(
    "Class Schedule | IronForge Fitness",
    "Weekly class timetable for strength, HIIT, CrossFit, yoga, cardio, and functional training.",
  );
  const [day, setDay] = useState<(typeof days)[number]>("Monday");
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [trainer, setTrainer] = useState("All");

  const list = useMemo(() => {
    return gymClasses.filter((c) => {
      const dayOk = day === "All" || c.day === day;
      const typeOk = type === "All" || c.name === type;
      const trainerOk = trainer === "All" || c.trainer === trainer;
      return dayOk && typeOk && trainerOk;
    });
  }, [day, type, trainer]);

  const clear = () => {
    setDay("All");
    setType("All");
    setTrainer("All");
  };

  return (
    <>
      <section className="bg-ink-2 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Timetable</p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">Class schedule</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Filter by day, class type, or coach. Booking requests are recorded instantly — our team
            confirms your slot.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <label className="text-sm">
              <span className="mb-1.5 block text-muted">Day</span>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value as (typeof days)[number])}
                className="w-full rounded-md border border-white/10 bg-ink px-3 py-2.5"
              >
                {days.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1.5 block text-muted">Class type</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as (typeof types)[number])}
                className="w-full rounded-md border border-white/10 bg-ink px-3 py-2.5"
              >
                {types.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1.5 block text-muted">Trainer</span>
              <select
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-ink px-3 py-2.5"
              >
                {trainerOptions.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        {list.length === 0 ? (
          <EmptyState title="No classes found" message="Try changing your filters." onClear={clear} />
        ) : (
          <div className="grid gap-4">
            {list.map((item) => (
              <ClassCard key={item.id} gymClass={item} />
            ))}
          </div>
        )}
      </section>
      <CTASection />
    </>
  );
}
