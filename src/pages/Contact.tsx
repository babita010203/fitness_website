import { useState, type FormEvent, type ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/Button";
import { persistRequest, usePageMeta } from "../hooks/usePageMeta";
import CTASection from "../components/CTASection";

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  usePageMeta(
    "Contact | IronForge Fitness",
    "Visit IronForge at 123 Fitness Avenue, Bhubaneswar or send a message. Book a tour or ask about membership.",
  );
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{10,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (form.subject.trim().length < 2) next.subject = "Add a subject.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    persistRequest("ironforge-contact", form);
    setSent(true);
  };

  return (
    <>
      <section className="bg-ink-2 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-lime uppercase">Contact</p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">Get in touch</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <Info icon={<MapPin className="text-lime" />} title="Address">
            123 Fitness Avenue,
            <br />
            Bhubaneswar, Odisha
          </Info>
          <Info icon={<Phone className="text-lime" />} title="Phone">
            <a href="tel:+919876543210">+91 98765 43210</a>
          </Info>
          <Info icon={<Mail className="text-lime" />} title="Email">
            <a href="mailto:hello@ironforgefitness.com">hello@ironforgefitness.com</a>
          </Info>
          <Info icon={<Clock className="text-lime" />} title="Opening Hours">
            Monday–Friday: 5:30 AM – 10:00 PM
            <br />
            Saturday: 6:00 AM – 9:00 PM
            <br />
            Sunday: 7:00 AM – 2:00 PM
          </Info>
        </div>

        <div className="rounded-2xl border border-white/8 bg-ink-3 p-6 md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="font-display text-3xl uppercase">Message sent</h2>
              <p className="mt-3 text-muted">We’ll get back to you within one business day.</p>
              <Button className="mt-6" variant="secondary" onClick={() => { setSent(false); setForm(empty); }}>
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <Field label="Name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Subject" error={errors.subject}>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/8 bg-ink-3">
          <div className="flex min-h-[320px] flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(200,245,66,0.08),transparent_55%)] p-8 text-center">
            <MapPin className="text-lime" size={32} />
            <p className="mt-3 font-display text-3xl uppercase">123 Fitness Avenue</p>
            <p className="text-muted">Bhubaneswar, Odisha · Map placeholder for client presentation</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

const inputClass =
  "w-full rounded-md border border-white/10 bg-ink px-3 py-2.5 text-sm text-cream outline-none focus:border-lime";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="text-sm">
      <span className="mb-1.5 block">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/8 bg-ink-3 p-5">
      <div className="mt-0.5">{icon}</div>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
