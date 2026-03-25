"use client";

import { cornerstonesContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Cornerstones() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="cornerstones" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight mb-3">
            {cornerstonesContent.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {cornerstonesContent.description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col divide-y divide-border"
        >
          {cornerstonesContent.items.map((item, index) => (
            <motion.div key={item.number} variants={fadeUp} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#0D0D0D]">
                  {item.title}
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
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 sm:mt-8 text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          {cornerstonesContent.closing}
        </motion.p>
      </div>
    </section>
  );
}
