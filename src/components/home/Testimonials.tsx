import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, testimonials.length - 1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i >= max ? 0 : i + 1));
    }, 7000);
    return () => window.clearInterval(id);
  }, [max]);

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Testimonials" title="What our members say" />
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="rounded-md border border-white/10 p-2 hover:border-lime"
            onClick={() => setIndex((i) => (i === 0 ? max : i - 1))}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            className="rounded-md border border-white/10 p-2 hover:border-lime"
            onClick={() => setIndex((i) => (i >= max ? 0 : i + 1))}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}
