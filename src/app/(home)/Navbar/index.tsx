"use client";

import { navContent } from "@/app/data/content";
import { fadeIn } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-white border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="#top"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0170F] focus-visible:ring-offset-2 rounded-sm"
        >
          <span className="text-lg sm:text-xl font-extrabold text-[#0D0D0D] tracking-tight">
            {navContent.logo}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navContent.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-[#C0170F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="bg-[#C0170F] hover:bg-[#9B100A] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            {navContent.cta}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#0D0D0D] origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[#0D0D0D]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#0D0D0D] origin-center"
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navContent.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-[#C0170F] transition-colors py-2.5 px-2 rounded-md hover:bg-[#fafafa]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-[#C0170F] hover:bg-[#9B100A] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors text-center mt-2"
              >
                {navContent.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
