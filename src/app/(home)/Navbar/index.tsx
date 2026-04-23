"use client";

import { navContent } from "@/app/data/content";
import { useDiscoveryBooking } from "@/components/discovery-booking";
import { ThemeToggle } from "@/components/theme-toggle";
import { fadeIn } from "@/lib/motion";
import {
  ArrowUpRightIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useDiscoveryBooking();

  const handleBooking = () => {
    setOpen(false);
    openBooking();
  };

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70"
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 sm:px-6 md:h-20">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/logo.png"
            alt=""
            width={80}
            height={80}
            priority
            className="size-8 rounded-full object-cover md:size-9"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground md:text-base">
            {navContent.logo}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navContent.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground md:text-[13px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={handleBooking}
              className="group inline-flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[13px]"
            >
              <span>{navContent.cta}</span>
              <span className="grid max-w-0 overflow-hidden opacity-0 -translate-y-1 transition-[max-width,margin,opacity,transform] duration-300 ease-out group-hover:ml-2 group-hover:max-w-5 group-hover:opacity-100 group-hover:translate-y-0 motion-reduce:transition-none">
                <ArrowUpRightIcon
                  weight="bold"
                  aria-hidden="true"
                  className="size-4"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? (
              <XIcon weight="bold" className="size-5" aria-hidden="true" />
            ) : (
              <ListIcon weight="bold" className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navContent.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={handleBooking}
                className="mt-3 inline-flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {navContent.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
