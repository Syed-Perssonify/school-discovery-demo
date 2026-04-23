"use client";

import { processContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  CaretDownIcon,
  ChalkboardTeacherIcon,
  ChatsCircleIcon,
  FileTextIcon,
  FootprintsIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import type { Icon } from "@phosphor-icons/react";
import { useState } from "react";

const stepIcons: Record<string, Icon> = {
  "1": ChalkboardTeacherIcon,
  "2": FootprintsIcon,
  "3": ChatsCircleIcon,
  "4": FileTextIcon,
};

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="bg-background text-foreground py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="md:sticky md:top-24 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            {processContent.heading}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="z-20 w-full rounded-2xl border border-border bg-background p-3"
          >
            <div className="flex w-full flex-col items-stretch justify-center gap-3">
              {processContent.steps.map((step, index) => {
              const isOpen = openIndex === index;
              const panelId = `process-panel-${index}`;
              const triggerId = `process-trigger-${index}`;
              const StepIcon = stepIcons[step.number];

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="w-full rounded-xl bg-muted px-4 py-2"
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      id={triggerId}
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group/accordion-trigger flex flex-1 items-center justify-between gap-4 rounded-md border border-transparent py-4 text-left text-base font-semibold transition-all outline-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 text-foreground"
                    >
                      <span className="flex items-center gap-3">
                        {StepIcon ? (
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <StepIcon weight="duotone" aria-hidden="true" className="size-5" />
                          </span>
                        ) : null}
                        <span>{step.title}</span>
                      </span>
                      <CaretDownIcon
                        weight="bold"
                        aria-hidden="true"
                        className={`pointer-events-none ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pr-6 text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
