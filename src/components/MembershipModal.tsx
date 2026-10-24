import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useModals } from "../context/ModalContext";
import { persistRequest } from "../hooks/usePageMeta";

export default function MembershipModal() {
  const { membershipOpen, selectedPlan, closeMembership } = useModals();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    closeMembership();
    setTimeout(() => {
      setName("");
      setEmail("");
      setSuccess(false);
      setError("");
    }, 250);
  };

  const submit = () => {
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter your name and a valid email so we can follow up.");
      return;
    }
    persistRequest("ironforge-memberships", { name, email, plan: selectedPlan?.id });
    setSuccess(true);
  };

  return (
    <Modal
      open={membershipOpen}
      onClose={handleClose}
      title={success ? "Request received" : `Choose ${selectedPlan?.name ?? "Plan"}`}
    >
      {success ? (
        <div>
          <p className="text-muted">
            Thanks. An IronForge advisor will reach out to complete your {selectedPlan?.name}{" "}
            membership.
          </p>
          <Button className="mt-6" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : selectedPlan ? (
        <div className="grid gap-4">
          <p className="text-sm text-muted">
            This is a frontend request — no payment is processed. Share your details and we will
            contact you to activate the plan.
          </p>
          <label className="text-sm">
            <span className="mb-1.5 block">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-ink px-3 py-2.5 text-sm outline-none focus:border-lime"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-ink px-3 py-2.5 text-sm outline-none focus:border-lime"
            />
          </label>
          {error ? <p className="text-xs text-red-400">{error}</p> : null}
          <Button onClick={submit}>Request {selectedPlan.name}</Button>
        </div>
      ) : null}
    </Modal>
  );
}
