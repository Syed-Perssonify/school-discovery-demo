"use client";

import { founderContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";

export default function Founder() {
  return (
    <section id="founder" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight mb-8 md:mb-10"
        >
          {founderContent.heading}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4 sm:gap-5"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight">
              {founderContent.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#C0170F] mt-1.5 uppercase tracking-widest">
              {founderContent.title}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-[#C0170F] rounded-full" />
          {founderContent.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
