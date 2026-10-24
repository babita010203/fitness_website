import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { images } from "../data/images";
import { usePageMeta } from "../hooks/usePageMeta";

const values = ["Discipline", "Consistency", "Community", "Growth", "Results"];

const facilities = [
  {
    name: "Strength Zone",
    text: "Competition-ready racks, calibrated plates, and platforms for serious lifting.",
    image: images.facilityStrength,
  },
  {
    name: "Cardio Zone",
    text: "Treadmills, bikes, rowers, and sled space for conditioning that counts.",
    image: images.facilityCardio,
  },
  {
    name: "Functional Training Area",
    text: "Turf, kettlebells, battle ropes, and athletic implements.",
    image: images.functional,
  },
  {
    name: "Recovery Area",
    text: "Stretching, mobility tools, and quiet space to downshift after heavy work.",
    image: images.recovery,
  },
  {
    name: "Locker Rooms",
    text: "Clean lockers, showers, and premium amenities — because details matter.",
    image: images.lockers,
  },
];

export default function About() {
  usePageMeta(
    "About IronForge Fitness | Our Story",
    "IronForge Fitness was founded in 2018 in Bhubaneswar to raise the standard of coaching, community, and results.",
  );
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative overflow-hidden pt-28">
        <img src={images.weights} alt="IronForge gym interior" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Our story</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase md:text-7xl">Forged in discipline. Built for results.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            IronForge opened in Bhubaneswar in 2018 because the city deserved a gym that treated
            training like a craft — not a crowded room of unused machines.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
        <img
          src={images.about}
          alt="Members training together at IronForge"
          className="h-[420px] w-full rounded-2xl object-cover"
        />
        <div>
          <SectionHeading title="How we started" />
          <p className="mt-4 leading-relaxed text-muted">
            Two coaches, one warehouse, and a simple idea: if people had expert eyes, honest
            programming, and a community that showed up, they would finally get the results they
            kept promising themselves. Today IronForge trains 500+ members across strength, fat
            loss, performance, and first-time gym confidence.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We still program every class. We still assess every new member. We still believe the
            gym should feel premium — and the work should feel real.
          </p>
        </div>
      </section>

      <section className="bg-ink-2 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our mission"
            subtitle="To help people build stronger bodies, healthier habits, and greater confidence."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-lime/30 bg-lime/10 px-5 py-2 font-display text-xl uppercase text-lime"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading title="Our facilities" subtitle="Designed for serious training and a calm, premium experience." />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3">
            {facilities.map((f, i) => (
              <button
                key={f.name}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-xl border p-5 text-left transition ${
                  active === i ? "border-lime bg-lime/10" : "border-white/8 bg-ink-3 hover:border-white/20"
                }`}
              >
                <h3 className="font-display text-2xl uppercase">{f.name}</h3>
                <p className="mt-1 text-sm text-muted">{f.text}</p>
              </button>
            ))}
          </div>
          <img
            src={facilities[active].image}
            alt={facilities[active].name}
            className="h-full min-h-[360px] w-full rounded-2xl object-cover"
          />
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 md:grid-cols-4">
          <div>
            <dt className="text-xs tracking-wider text-muted uppercase">Floor space</dt>
            <dd className="font-display text-4xl text-lime">18,000 sq ft</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted uppercase">Racks</dt>
            <dd className="font-display text-4xl text-lime">24</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted uppercase">Weekly classes</dt>
            <dd className="font-display text-4xl text-lime">20+</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted uppercase">Open since</dt>
            <dd className="font-display text-4xl text-lime">2018</dd>
          </div>
        </dl>
      </section>
      <CTASection />
    </>
  );
}
