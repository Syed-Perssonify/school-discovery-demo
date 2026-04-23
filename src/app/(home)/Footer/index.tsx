"use client";

import { footerContent } from "@/app/data/content";
import { useDiscoveryBooking } from "@/components/discovery-booking";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  const { openBooking } = useDiscoveryBooking();

  return (
    <footer className="w-full bg-background text-foreground">
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center gap-10 py-10 sm:py-14 md:py-16"
      >
        <nav className="container mx-auto flex flex-col items-center gap-6 px-4 sm:px-6">
          <motion.p
            variants={fadeUp}
            className="text-sm text-foreground/70"
          >
            {footerContent.tagline}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {footerContent.links.map((link) => (
              <li key={link.label}>
                {link.href === "#contact" ? (
                  <button
                    type="button"
                    onClick={openBooking}
                    className="cursor-pointer text-sm font-medium text-foreground transition-opacity hover:opacity-75 md:text-base"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground transition-opacity hover:opacity-75 md:text-base"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="text-xs text-foreground/70 md:text-sm"
          >
            {footerContent.copyright}
          </motion.p>
        </nav>

        <motion.div
          variants={fadeUp}
          aria-hidden="true"
          className="mt-6 w-full overflow-hidden px-4 text-center md:mt-10 lg:mt-14"
        >
          <p className="select-none bg-linear-to-b from-primary/25 to-primary/5 dark:from-white/25 dark:to-white/5 bg-clip-text text-[clamp(3rem,18vw,18rem)] font-bold leading-none tracking-tighter text-transparent">
            {footerContent.logo}
          </p>
        </motion.div>
      </motion.section>
    </footer>
  );
}
