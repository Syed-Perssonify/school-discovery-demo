"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";

type BookingContextValue = {
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useDiscoveryBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useDiscoveryBooking must be used within DiscoveryBookingProvider");
  }
  return ctx;
}

export function DiscoveryBookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const titleId = useId();
  const descId = useId();

  const openBooking = useCallback(() => {
    setSubmitted(false);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setSubmitted(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBooking();
      }
    };
    if (open) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeBooking]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      setOpen(true);
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-[#C0170F]/40";

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            key="discovery-booking"
            role="presentation"
            className="fixed inset-0 z-200 flex items-end justify-center bg-black/60 sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeBooking}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descId}
              className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-xl sm:max-w-md sm:rounded-2xl"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-white px-5 py-4 sm:px-6">
                <h2 id={titleId} className="text-lg font-extrabold text-[#0D0D0D]">
                  Book a Discovery Visit
                </h2>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="rounded-md p-2 text-[#0D0D0D] hover:bg-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0170F]"
                  aria-label="Close"
                >
                  <span aria-hidden className="block text-2xl leading-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="px-5 py-5 sm:px-6 sm:py-6">
                {submitted ? (
                  <p id={descId} className="text-sm text-muted-foreground leading-relaxed">
                    Thank you — we have received your request. Our team will be in touch with you
                    soon.
                  </p>
                ) : (
                  <>
                    <p id={descId} className="mb-5 text-sm text-muted-foreground leading-relaxed">
                      Please share your details below. All fields are required.
                    </p>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-name" className="text-sm font-medium text-[#0D0D0D]">
                          Name <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-email" className="text-sm font-medium text-[#0D0D0D]">
                          Email <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-phone" className="text-sm font-medium text-[#0D0D0D]">
                          Phone Number <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-school" className="text-sm font-medium text-[#0D0D0D]">
                          School Name <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-school"
                          name="schoolName"
                          type="text"
                          required
                          autoComplete="organization"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-curriculum" className="text-sm font-medium text-[#0D0D0D]">
                          School Curriculum <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-curriculum"
                          name="curriculum"
                          type="text"
                          required
                          placeholder="E.g. CBSE, ICSE, Cambridge, IB"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="booking-location" className="text-sm font-medium text-[#0D0D0D]">
                          Location <span className="text-[#C0170F]">*</span>
                        </label>
                        <input
                          id="booking-location"
                          name="location"
                          type="text"
                          required
                          autoComplete="address-level2"
                          className={inputClass}
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-2 w-full rounded-lg bg-[#C0170F] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9B100A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0170F] focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
