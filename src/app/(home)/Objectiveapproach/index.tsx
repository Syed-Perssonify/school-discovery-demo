"use client";

import { objectiveApproachContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";

export default function ObjectiveApproach() {
  return (
    <section id="objective-approach" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-14">

          {/* Left -- sticky title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="md:sticky md:top-32 md:self-start"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight">
              {objectiveApproachContent.heading}
            </h2>
          </motion.div>

          {/* Right -- cards + image */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="border border-border rounded-xl p-5 sm:p-6 md:p-8 bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm sm:text-base font-bold text-[#C0170F] uppercase tracking-widest mb-3">
                {objectiveApproachContent.objective.label}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {objectiveApproachContent.objective.text}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border border-border rounded-xl p-5 sm:p-6 md:p-8 bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm sm:text-base font-bold text-[#C0170F] uppercase tracking-widest mb-3">
                {objectiveApproachContent.approach.label}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {objectiveApproachContent.approach.text}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative aspect-video overflow-hidden"
            >
              <Image
                src="/Operations 5.png"
                alt="Integrated Management Framework"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
