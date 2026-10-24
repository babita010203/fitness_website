import { Link } from "react-router-dom";
import Button from "./Button";
import { useModals } from "../context/ModalContext";

export default function CTASection() {
  const { openTrial } = useModals();

  return (
    <section className="relative overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,245,66,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
        <p className="text-xs font-semibold tracking-[0.3em] text-lime uppercase">Your move</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl uppercase md:text-6xl">
          Stop waiting for Monday. Start training this week.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Book a free trial, meet a coach, and feel the difference a premium training environment
          makes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={openTrial}>Book Free Trial</Button>
          <Link to="/membership">
            <Button variant="secondary">Explore Membership</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
