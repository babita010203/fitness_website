import { useState, type FormEvent, type ReactNode } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useModals } from "../context/ModalContext";
import { persistRequest } from "../hooks/usePageMeta";

const goals = [
  "Weight Loss",
  "Muscle Building",
  "Strength",
  "General Fitness",
  "Athletic Performance",
];

const empty = {
  fullName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  goal: "Strength",
};

export default function FreeTrialModal() {
  const { trialOpen, closeTrial } = useModals();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setForm(empty);
    setErrors({});
    setSuccess(false);
  };

  const handleClose = () => {
    closeTrial();
    setTimeout(reset, 250);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{10,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.date) next.date = "Choose a preferred date.";
    if (!form.time) next.time = "Choose a preferred time.";
    setErrors(next);
    if (Object.keys(next).length) return;
    persistRequest("ironforge-trials", form);
    setSuccess(true);
  };

  return (
    <Modal open={trialOpen} onClose={handleClose} title={success ? "You're One Step Closer." : "Book Free Trial"}>
      {success ? (
        <div>
          <p className="text-muted">
            Your free trial request has been received. Our team will contact you shortly.
          </p>
          <Button className="mt-6" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <Field label="Full Name" error={errors.fullName}>
            <input
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className={inputClass}
              autoComplete="name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              autoComplete="email"
            />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
              autoComplete="tel"
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred Date" error={errors.date}>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="Preferred Time" error={errors.time}>
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="Fitness Goal">
            <select
              value={form.goal}
              onChange={(e) => setForm({ ...form, goal: e.target.value })}
              className={inputClass}
            >
              {goals.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </Field>
          <Button type="submit">Book My Free Trial</Button>
        </form>
      )}
    </Modal>
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
    <label className="block text-sm">
      <span className="mb-1.5 block text-cream/80">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
