"use client";

import {
  objectiveApproachContent,
  visionPurposeContent,
} from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";

const cards = [
  {
    label: visionPurposeContent.vision.label,
    text: visionPurposeContent.vision.text,
  },
  {
    label: visionPurposeContent.purpose.label,
    text: visionPurposeContent.purpose.text,
  },
  {
    label: objectiveApproachContent.objective.label,
    text: objectiveApproachContent.objective.text,
  },
  {
    label: objectiveApproachContent.approach.label,
    text: objectiveApproachContent.approach.text,
  },
];

export default function VisionPurpose() {
  return (
    <section id="vision-purpose" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-14">

          {/* Left -- sticky title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="md:sticky md:top-24 md:self-start"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight">
              {visionPurposeContent.heading}
              <span className="block mt-1 text-[#C0170F]">&</span>
              {objectiveApproachContent.heading}
            </h2>
          </motion.div>

          {/* Right -- scrollable cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {cards.map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                className="border border-border rounded-xl p-5 sm:p-6 md:p-8 bg-[#fafafa] hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#C0170F] uppercase tracking-widest mb-3">
                  {card.label}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
