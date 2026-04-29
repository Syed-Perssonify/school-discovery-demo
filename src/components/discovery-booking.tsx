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
import { EnvelopeSimpleIcon, MapPinIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDIAN_CITIES = [
  "Agra",
  "Ahmedabad",
  "Ajmer",
  "Aligarh",
  "Allahabad (Prayagraj)",
  "Amravati",
  "Amritsar",
  "Asansol",
  "Aurangabad",
  "Bangalore (Bengaluru)",
  "Bareilly",
  "Belgaum",
  "Bhavnagar",
  "Bhilai",
  "Bhiwandi",
  "Bhopal",
  "Bhubaneswar",
  "Bikaner",
  "Chandigarh",
  "Chennai",
  "Coimbatore",
  "Cuttack",
  "Dehradun",
  "Delhi",
  "Dhanbad",
  "Durgapur",
  "Erode",
  "Faridabad",
  "Firozabad",
  "Ghaziabad",
  "Gorakhpur",
  "Guntur",
  "Gurgaon (Gurugram)",
  "Guwahati",
  "Gwalior",
  "Howrah",
  "Hubli-Dharwad",
  "Hyderabad",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jalandhar",
  "Jammu",
  "Jamnagar",
  "Jamshedpur",
  "Jhansi",
  "Jodhpur",
  "Kalyan-Dombivli",
  "Kanpur",
  "Kochi",
  "Kolhapur",
  "Kolkata",
  "Kota",
  "Lucknow",
  "Ludhiana",
  "Madurai",
  "Mangalore",
  "Meerut",
  "Moradabad",
  "Mumbai",
  "Mysore (Mysuru)",
  "Nagpur",
  "Nanded",
  "Nashik",
  "Navi Mumbai",
  "Nellore",
  "Noida",
  "Patna",
  "Puducherry",
  "Pune",
  "Raipur",
  "Rajkot",
  "Ranchi",
  "Rourkela",
  "Saharanpur",
  "Salem",
  "Sangli-Miraj & Kupwad",
  "Siliguri",
  "Solapur",
  "Srinagar",
  "Surat",
  "Thane",
  "Thiruvananthapuram",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tiruppur",
  "Udaipur",
  "Ujjain",
  "Vadodara",
  "Varanasi",
  "Vasai-Virar",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
  "Other",
];

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
  const [sending, setSending] = useState(false);
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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      form.reset();
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus-visible:ring-2 focus-visible:ring-primary/40";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500";

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
              className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white text-zinc-900 shadow-xl sm:max-w-md sm:rounded-2xl"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeBooking}
                className="absolute right-4 top-4 z-10 cursor-pointer rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close"
              >
                <XIcon weight="bold" aria-hidden="true" className="size-5" />
              </button>

              <div className="px-6 py-7 sm:px-8 sm:py-8">
                {submitted ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Contact
                    </p>
                    <h2 id={titleId} className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
                      Thank you.
                    </h2>
                    <span aria-hidden className="mt-3 block h-0.75 w-12 rounded-full bg-primary" />
                    <p id={descId} className="mt-5 text-sm leading-relaxed text-zinc-600">
                      We have received your request. Our team will be in touch with you soon.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Contact
                    </p>
                    <h2 id={titleId} className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
                      Let&apos;s connect.
                    </h2>
                    <span aria-hidden className="mt-3 block h-0.75 w-12 rounded-full bg-primary" />
                    <p id={descId} className="mt-5 text-sm leading-relaxed text-zinc-600">
                      Ready to bring School Discovery to your campus? Reach out and we will
                      connect with you soon.
                    </p>

                    <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-700">
                      <a
                        href="mailto:subbu.k@schooldiscovery.in"
                        className="flex items-center gap-3 hover:text-zinc-900"
                      >
                        <EnvelopeSimpleIcon
                          weight="regular"
                          aria-hidden="true"
                          className="size-5 shrink-0 text-primary"
                        />
                        <span>subbu.k@schooldiscovery.in</span>
                      </a>
                      <p className="flex items-center gap-3">
                        <MapPinIcon
                          weight="regular"
                          aria-hidden="true"
                          className="size-5 shrink-0 text-primary"
                        />
                        <span>Narsingi, Hyderabad</span>
                      </p>
                    </div>

                    <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-school" className={labelClass}>
                          School Name
                        </label>
                        <input
                          id="booking-school"
                          name="schoolName"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Your school name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-location" className={labelClass}>
                          Location
                        </label>
                        <Select name="location" required>
                          <SelectTrigger
                            id="booking-location"
                            className="border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 data-placeholder:text-zinc-400 [&_svg]:text-zinc-500"
                          >
                            <SelectValue placeholder="Select a city" />
                          </SelectTrigger>
                          <SelectContent className="border-zinc-200 bg-white text-zinc-900">
                            {INDIAN_CITIES.map((city) => (
                              <SelectItem
                                key={city}
                                value={city}
                                className="text-zinc-900 data-highlighted:bg-zinc-100"
                              >
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="booking-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@school.edu"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-phone" className={labelClass}>
                          Phone Number
                        </label>
                        <input
                          id="booking-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="Your phone number"
                          className={inputClass}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="mt-2 w-full cursor-pointer rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {sending ? "Sending…" : "Send Message"}
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
