"use client";

import { processContent } from "@/app/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";

export default function GuidingPrinciple() {
  return (
    <section id="guiding-principle" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto bg-[#C0170F] rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col items-center text-center gap-5 sm:gap-6"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          {processContent.guidingPrinciple.label}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
          {processContent.guidingPrinciple.text}
        </p>
      </motion.div>
    </section>
  );
}
