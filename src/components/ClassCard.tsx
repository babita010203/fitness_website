import { Clock, User } from "lucide-react";
import type { GymClass } from "../types";
import Button from "./Button";
import { useModals } from "../context/ModalContext";

export default function ClassCard({ gymClass }: { gymClass: GymClass }) {
  const { openBooking } = useModals();
  const full = gymClass.slots === 0;

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-white/8 bg-ink-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-lime uppercase">{gymClass.day}</p>
        <h3 className="mt-1 font-display text-2xl uppercase">{gymClass.name}</h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} /> {gymClass.time} · {gymClass.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <User size={14} /> {gymClass.trainer}
          </span>
          <span>{gymClass.difficulty}</span>
          <span>
            {gymClass.slots}/{gymClass.totalSlots} slots
          </span>
        </div>
      </div>
      <Button disabled={full} onClick={() => openBooking(gymClass)} className="shrink-0">
        {full ? "Class Full" : "Book Class"}
      </Button>
    </article>
  );
}
