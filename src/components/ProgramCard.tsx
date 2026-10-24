import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "../types";

interface ProgramCardProps {
  program: Program;
  compact?: boolean;
}

export default function ProgramCard({ program, compact }: ProgramCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/8 bg-ink-3 transition duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={program.image}
          alt={`${program.name} training at IronForge`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold tracking-wider text-lime uppercase backdrop-blur">
          {program.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase">{program.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{program.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-cream/80">
          <span className="rounded-md border border-white/10 px-2.5 py-1">{program.difficulty}</span>
          <span className="rounded-md border border-white/10 px-2.5 py-1">{program.duration}</span>
          {!compact ? (
            <span className="rounded-md border border-white/10 px-2.5 py-1">{program.trainer}</span>
          ) : null}
        </div>
        <Link
          to={`/programs/${program.id}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-lime transition hover:gap-2"
        >
          {compact ? "View Program" : "View Details"}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
