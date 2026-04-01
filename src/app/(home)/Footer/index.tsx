"use client";

import { useDiscoveryBooking } from "@/components/discovery-booking";
import { footerContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  const { openBooking } = useDiscoveryBooking();

  return (
    <footer className="bg-[#0D0D0D] text-white py-12 md:py-16 px-4 sm:px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">

          {/* Brand */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              {footerContent.logo}
            </h3>
            <p className="text-sm text-white/60">
              {footerContent.tagline}
            </p>
          </motion.div>

          {/* Links */}
          <motion.nav variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2">
            {footerContent.links.map((link) =>
              link.href === "#contact" ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={openBooking}
                  className="text-sm text-white/70 hover:text-[#C0170F] transition-colors text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[#C0170F] transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </motion.nav>

        </div>

        {/* Divider + copyright */}
        <motion.div variants={fadeUp} className="mt-8 md:mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40">
            {footerContent.copyright}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
