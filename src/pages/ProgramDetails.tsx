import { Link, useNavigate, useParams } from "react-router-dom";
import { programs } from "../data/programs";
import { trainers } from "../data/trainers";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { useModals } from "../context/ModalContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { Check } from "lucide-react";

export default function ProgramDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openTrial } = useModals();
  const program = programs.find((p) => p.id === id);
  const trainer = trainers.find((t) => t.name === program?.trainer);

  usePageMeta(
    program ? `${program.name} | IronForge Programs` : "Program | IronForge",
    program?.description ?? "IronForge training program details.",
  );

  if (!program) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="font-display text-5xl uppercase">Program not found</h1>
        <p className="mt-3 text-muted">That program doesn’t exist. Browse the full catalog.</p>
        <Button className="mt-6" onClick={() => navigate("/programs")}>
          View All Programs
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-[70vh] pt-20">
        <img src={program.image} alt={`${program.name} program at IronForge Fitness`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-16">
          <div>
            <p className="text-xs tracking-[0.28em] text-lime uppercase">{program.category}</p>
            <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">{program.name}</h1>
            <p className="mt-4 max-w-2xl text-cream/80">{program.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <h2 className="font-display text-3xl uppercase">The goal</h2>
          <p className="mt-3 text-muted">{program.goal}</p>
          <h2 className="mt-10 font-display text-3xl uppercase">What you’ll achieve</h2>
          <ul className="mt-4 space-y-3">
            {program.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-cream/90">
                <Check className="mt-0.5 shrink-0 text-lime" size={18} />
                {o}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-3xl uppercase">Program features</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {program.features.map((f) => (
              <div key={f} className="rounded-lg border border-white/8 bg-ink-3 p-4 text-sm">
                {f}
              </div>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-white/8 bg-ink-3 p-6">
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="text-muted">Difficulty</dt>
              <dd className="mt-1 font-semibold">{program.difficulty}</dd>
            </div>
            <div>
              <dt className="text-muted">Duration</dt>
              <dd className="mt-1 font-semibold">{program.duration}</dd>
            </div>
            <div>
              <dt className="text-muted">Weekly frequency</dt>
              <dd className="mt-1 font-semibold">{program.weeklyFrequency}</dd>
            </div>
            <div>
              <dt className="text-muted">Lead trainer</dt>
              <dd className="mt-1 font-semibold">{program.trainer}</dd>
            </div>
          </dl>
          {trainer ? (
            <Link to="/trainers" className="mt-4 flex items-center gap-3">
              <img src={trainer.image} alt="" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">{trainer.name}</p>
                <p className="text-xs text-muted">{trainer.role}</p>
              </div>
            </Link>
          ) : null}
          <Button className="mt-6 w-full" onClick={openTrial}>
            Start This Program
          </Button>
        </aside>
      </section>
      <CTASection />
    </>
  );
}
