import { useState, type FormEvent } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useModals } from "../context/ModalContext";
import { persistRequest } from "../hooks/usePageMeta";

export default function BookingModal() {
  const { bookingOpen, selectedClass, closeBooking } = useModals();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    closeBooking();
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "" });
      setErrors({});
      setSuccess(false);
    }, 250);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{10,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    setErrors(next);
    if (Object.keys(next).length) return;
    persistRequest("ironforge-bookings", { ...form, classId: selectedClass?.id });
    setSuccess(true);
  };

  return (
    <Modal
      open={bookingOpen}
      onClose={handleClose}
      title={success ? "Booking Request Received" : "Book Class"}
    >
      {success ? (
        <div>
          <p className="text-muted">Thank you! Your class request has been recorded.</p>
          <Button className="mt-6" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : selectedClass ? (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="rounded-lg border border-white/8 bg-ink p-4 text-sm">
            <p className="font-display text-xl uppercase">{selectedClass.name}</p>
            <p className="mt-1 text-muted">
              {selectedClass.trainer} · {selectedClass.day} · {selectedClass.time}
            </p>
          </div>
          <label className="text-sm">
            <span className="mb-1.5 block">Name</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            {errors.name ? <span className="text-xs text-red-400">{errors.name}</span> : null}
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            {errors.email ? <span className="text-xs text-red-400">{errors.email}</span> : null}
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block">Phone</span>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            {errors.phone ? <span className="text-xs text-red-400">{errors.phone}</span> : null}
          </label>
          <Button type="submit">Confirm Booking</Button>
        </form>
      ) : null}
    </Modal>
  );
}

const inputClass =
  "w-full rounded-md border border-white/10 bg-ink px-3 py-2.5 text-sm text-cream outline-none focus:border-lime";
