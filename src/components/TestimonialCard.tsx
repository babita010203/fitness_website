import { Star } from "lucide-react";
import type { Testimonial } from "../types";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full min-w-[280px] flex-col rounded-xl border border-white/8 bg-ink-3/80 p-6 backdrop-blur">
      <div className="flex gap-1 text-lime" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-cream/90">“{item.review}”</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={item.avatar}
          alt=""
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs tracking-wide text-muted uppercase">{item.goal}</p>
        </div>
      </div>
    </article>
  );
}
