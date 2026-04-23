"use client";

import { founderContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "motion/react";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-brand-black py-16 text-white sm:py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16"
        >
          <motion.div variants={fadeInLeft}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {founderContent.heading}
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              {founderContent.name}
            </h2>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-sm">
              {founderContent.title}
            </p>

            <div
              aria-hidden="true"
              className="mt-8 h-0.5 w-16 rounded-full bg-primary"
            />
          </motion.div>

          <motion.div variants={fadeInRight} className="flex flex-col gap-6">
            {founderContent.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-base leading-relaxed text-white/75 sm:text-lg md:leading-[1.75]"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
