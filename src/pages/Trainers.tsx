import { useMemo, useState } from "react";
import { trainers } from "../data/trainers";
import TrainerCard from "../components/TrainerCard";
import EmptyState, { FilterPills } from "../components/EmptyState";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import type { Trainer, TrainerFocus } from "../types";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useModals } from "../context/ModalContext";

const filters = ["All", "Strength", "Weight Loss", "Functional", "Yoga", "Nutrition"] as const;
type Filter = (typeof filters)[number];

export default function Trainers() {
  usePageMeta(
    "Trainers | IronForge Fitness",
    "Meet IronForge coaches for strength, fat loss, functional training, yoga, and nutrition.",
  );
  const [filter, setFilter] = useState<Filter>("All");
  const [profile, setProfile] = useState<Trainer | null>(null);
  const { openTrial } = useModals();

  const list = useMemo(() => {
    if (filter === "All") return trainers;
    return trainers.filter((t) => t.focus.includes(filter as TrainerFocus));
  }, [filter]);

  return (
    <>
      <section className="bg-ink-2 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Coaches</p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">The people who raise the standard</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Experienced coaches. Clear specializations. Accountability you can feel on the floor.
          </p>
          <div className="mt-8">
            <FilterPills options={[...filters]} value={filter} onChange={setFilter} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        {list.length === 0 ? (
          <EmptyState
            title="No trainers found"
            message="Try changing your filters."
            onClear={() => setFilter("All")}
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((trainer) => (
              <div key={trainer.id} className="relative">
                <TrainerCard trainer={trainer} detailed />
                <div className="px-5 pb-5">
                  <Button variant="secondary" className="w-full" onClick={() => setProfile(trainer)}>
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Modal open={Boolean(profile)} onClose={() => setProfile(null)} title={profile?.name ?? "Coach"}>
        {profile ? (
          <div>
            <img src={profile.image} alt="" className="mb-4 h-56 w-full rounded-lg object-cover" />
            <p className="text-lime">{profile.role}</p>
            <p className="mt-1 text-sm text-muted">{profile.experience}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/85">{profile.bio}</p>
            <Button className="mt-6" onClick={openTrial}>
              Train with {profile.name.split(" ")[0]}
            </Button>
          </div>
        ) : null}
      </Modal>
      <CTASection />
    </>
  );
}
