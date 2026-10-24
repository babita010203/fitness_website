import { Link } from "react-router-dom";
import { Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { useModals } from "../context/ModalContext";

const quick = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
];

const services = [
  { to: "/programs/strength-training", label: "Strength Training" },
  { to: "/programs/personal-training", label: "Personal Training" },
  { to: "/programs/hiit", label: "HIIT" },
  { to: "/programs/fat-loss", label: "Weight Loss" },
  { to: "/programs/functional-training", label: "Functional Training" },
];

export default function Footer() {
  const { openTrial } = useModals();

  return (
    <footer className="border-t border-white/8 bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-lime text-ink">
              <Dumbbell size={18} />
            </span>
            <span className="font-display text-2xl uppercase">IronForge</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">Build your strongest self.</p>
          <button
            type="button"
            onClick={openTrial}
            className="mt-4 text-sm font-semibold text-lime hover:underline"
          >
            Book a Free Trial
          </button>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-md bg-white/5 p-2 hover:text-lime">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-md bg-white/5 p-2 hover:text-lime">
              <FacebookIcon />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="rounded-md bg-white/5 p-2 hover:text-lime">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-lime" />
              123 Fitness Avenue, Bhubaneswar, Odisha
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 text-lime" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 text-lime" />
              <a href="mailto:hello@ironforgefitness.com">hello@ironforgefitness.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 py-5 text-center text-xs text-muted">
        © 2026 IronForge Fitness. All rights reserved.
      </div>
    </footer>
  );
}
