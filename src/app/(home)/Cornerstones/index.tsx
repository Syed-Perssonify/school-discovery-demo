"use client";

import { cornerstonesContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Cornerstones() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="cornerstones" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left — Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col divide-y divide-border"
          >
            {cornerstonesContent.items.map((item, index) => (
              <motion.div key={item.number} variants={fadeInLeft} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <h2 className="text-sm sm:text-base font-bold text-[#0D0D0D]">
                    {item.title}
                  </h2>
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
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — red card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-[#C0170F] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-8 md:gap-10"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {cornerstonesContent.heading}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {cornerstonesContent.description}
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {cornerstonesContent.closing}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
