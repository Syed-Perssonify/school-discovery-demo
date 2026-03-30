"use client";

import { cornerstonesContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Cornerstones() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeItem = openIndex !== null ? cornerstonesContent.items[openIndex] : null;

  return (
    <section id="cornerstones" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">

        {/* Centered heading + description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight mb-3 sm:mb-4">
            {cornerstonesContent.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {cornerstonesContent.description}
          </p>
        </motion.div>

        {/* Two-column: accordion left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Accordion */}
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

          {/* Image that changes based on active accordion item */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-border">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.number}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Closing line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-sm sm:text-base text-muted-foreground leading-relaxed mt-10 md:mt-14 max-w-2xl mx-auto"
        >
          {cornerstonesContent.closing}
        </motion.p>

      </div>
    </section>
  );
}
