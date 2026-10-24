import { useState } from "react";
import SectionHeading from "../SectionHeading";
import { transformations } from "../../data/content";

export default function Transformations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <SectionHeading
        eyebrow="Transformations"
        title="Real people. Real results."
        subtitle="Members who showed up, stayed consistent, and let coaching do the rest."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {transformations.map((item) => (
          <BeforeAfter key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

function BeforeAfter({
  name,
  goal,
  duration,
  result,
  beforeImage,
  afterImage,
}: (typeof transformations)[number]) {
  const [pos, setPos] = useState(55);

  return (
    <article className="overflow-hidden rounded-xl border border-white/8 bg-ink-3">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={afterImage}
          alt={`${name} after training at IronForge`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`${name} before joining IronForge`}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute top-3 left-3 rounded bg-ink/70 px-2 py-1 text-[10px] font-bold tracking-wider uppercase">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded bg-lime px-2 py-1 text-[10px] font-bold tracking-wider text-ink uppercase">
          After
        </span>
        <input
          type="range"
          min={8}
          max={92}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-4 bottom-4 h-1 cursor-ew-resize accent-lime"
          aria-label={`Compare before and after for ${name}`}
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase">{name}</h3>
        <p className="mt-1 text-lime">{result}</p>
        <p className="mt-1 text-sm text-muted">
          {goal} · {duration}
        </p>
      </div>
    </article>
  );
}
