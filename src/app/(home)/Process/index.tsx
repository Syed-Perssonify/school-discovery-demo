"use client";

import { processContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="process" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
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
              {processContent.heading}
            </h2>
          </motion.div>

          {/* Right -- accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col divide-y divide-border"
          >
            {processContent.steps.map((step, index) => (
              <motion.div key={step.number} variants={fadeUp} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0D0D0D]">
                    {step.title}
                  </h3>
                  <span className="text-[#C0170F] text-xl font-bold shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 sm:pt-4 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
