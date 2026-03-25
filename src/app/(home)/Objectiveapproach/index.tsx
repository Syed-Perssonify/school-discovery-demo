"use client";

import { objectiveApproachContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";

export default function ObjectiveApproach() {
  return (
    <section id="objective-approach" className="py-12 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl sm:text-2xl font-extrabold text-[#0D0D0D] tracking-tight mb-8 md:mb-10"
        >
          {objectiveApproachContent.heading}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <h3 className="text-sm sm:text-base font-bold text-[#C0170F] uppercase tracking-widest">
              {objectiveApproachContent.objective.label}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {objectiveApproachContent.objective.text}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <h3 className="text-sm sm:text-base font-bold text-[#C0170F] uppercase tracking-widest">
              {objectiveApproachContent.approach.label}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {objectiveApproachContent.approach.text}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
