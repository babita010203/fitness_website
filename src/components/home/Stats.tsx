const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Trainers" },
  { value: "20+", label: "Weekly Classes" },
  { value: "5+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section id="stats" className="border-y border-white/8 bg-ink-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:py-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl text-lime md:text-5xl">{s.value}</p>
            <p className="mt-1 text-xs tracking-[0.18em] text-muted uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
