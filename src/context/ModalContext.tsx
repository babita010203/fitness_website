import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { GymClass, Membership } from "../types";

interface ModalContextValue {
  trialOpen: boolean;
  openTrial: () => void;
  closeTrial: () => void;
  bookingOpen: boolean;
  selectedClass: GymClass | null;
  openBooking: (gymClass: GymClass) => void;
  closeBooking: () => void;
  membershipOpen: boolean;
  selectedPlan: Membership | null;
  openMembership: (plan: Membership) => void;
  closeMembership: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [trialOpen, setTrialOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<GymClass | null>(null);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Membership | null>(null);

  const openTrial = useCallback(() => setTrialOpen(true), []);
  const closeTrial = useCallback(() => setTrialOpen(false), []);
  const openBooking = useCallback((gymClass: GymClass) => {
    setSelectedClass(gymClass);
    setBookingOpen(true);
  }, []);
  const closeBooking = useCallback(() => {
    setBookingOpen(false);
    setSelectedClass(null);
  }, []);
  const openMembership = useCallback((plan: Membership) => {
    setSelectedPlan(plan);
    setMembershipOpen(true);
  }, []);
  const closeMembership = useCallback(() => {
    setMembershipOpen(false);
    setSelectedPlan(null);
  }, []);

  const value = useMemo(
    () => ({
      trialOpen,
      openTrial,
      closeTrial,
      bookingOpen,
      selectedClass,
      openBooking,
      closeBooking,
      membershipOpen,
      selectedPlan,
      openMembership,
      closeMembership,
    }),
    [
      trialOpen,
      openTrial,
      closeTrial,
      bookingOpen,
      selectedClass,
      openBooking,
      closeBooking,
      membershipOpen,
      selectedPlan,
      openMembership,
      closeMembership,
    ],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within ModalProvider");
  return ctx;
}
