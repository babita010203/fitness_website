import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useModals } from "../../context/ModalContext";
import { images } from "../../data/images";

export default function Hero() {
  const { openTrial } = useModals();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={images.hero}
        alt="Athletes training with barbells in the IronForge strength hall"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16">
        <p className="inline-flex w-fit items-center rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-lime uppercase">
          Premium Fitness • Est. 2018
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] text-cream uppercase sm:text-7xl md:text-8xl">
          Build Your Strongest Self.
        </h1>
        <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">
          Train with purpose. Build strength. Transform your body and mindset with expert coaching,
          premium equipment, and a community that keeps you accountable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={openTrial}>Start Your Journey</Button>
          <Link to="/programs">
            <Button variant="secondary">Explore Programs</Button>
          </Link>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Active Members</dt>
            <dd className="font-display text-3xl text-lime sm:text-4xl">500+</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Expert Trainers</dt>
            <dd className="font-display text-3xl text-lime sm:text-4xl">10+</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Member Rating</dt>
            <dd className="font-display text-3xl text-lime sm:text-4xl">4.9/5</dd>
          </div>
        </dl>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[0.3em] text-cream/60 uppercase"
      >
        Scroll
        <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  );
}
