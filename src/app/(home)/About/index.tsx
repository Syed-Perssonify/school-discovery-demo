"use client";

import { aboutContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* Left -- content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <motion.h2
              variants={fadeInLeft}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight"
            >
              {aboutContent.heading}
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              {aboutContent.description}
            </motion.p>
          </motion.div>

          {/* Right -- demo image placeholder */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-[#C0170F]/10 via-[#fafafa] to-[#C0170F]/5 border border-border"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#C0170F]/10 flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C0170F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground font-medium">Image placeholder</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
