import { NavLink, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useModals } from "../context/ModalContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
  { to: "/schedule", label: "Schedule" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { openTrial } = useModals();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || pathname !== "/" || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid ? "border-b border-white/8 bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-cream">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-lime text-ink">
            <Dumbbell size={20} />
          </span>
          <span className="font-display text-2xl tracking-wide uppercase">IronForge</span>
        </NavLink>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition ${
                    isActive ? "text-lime" : "text-cream/75 hover:text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button onClick={openTrial}>Book Free Trial</Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/8 bg-ink px-4 py-4 lg:hidden">
          <ul className="grid gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-sm font-medium ${
                      isActive ? "bg-lime/10 text-lime" : "text-cream"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button className="mt-4 w-full" onClick={openTrial}>
            Book Free Trial
          </Button>
        </div>
      ) : null}
    </header>
  );
}
