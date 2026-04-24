"use client";

import { cornerstonesContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Cornerstones() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="cornerstones"
      className="w-full bg-background py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-8 flex max-w-210 flex-col items-center justify-between gap-4 md:mb-12"
        >
          <h2 className="text-center text-3xl tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
            Four Cornerstones of
            <br />
            <span className="text-primary">School Discovery</span>
          </h2>
          <p className="text-center text-sm leading-relaxed text-muted-foreground whitespace-pre-line md:text-base">
            {cornerstonesContent.description}
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-border border-y border-border md:hidden">
          {cornerstonesContent.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `cornerstone-panel-${index}`;
            const triggerId = `cornerstone-trigger-${index}`;

            return (
              <div key={item.number}>
                <button
                  type="button"
                  id={triggerId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground"
                  >
                    <PlusIcon
                      weight="bold"
                      className={`size-4 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

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
                      <div className="flex flex-col gap-4 pb-5">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="100vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="hidden items-stretch gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {cornerstonesContent.items.map((item) => (
            <motion.article
              key={item.number}
              variants={fadeUp}
              className="ring-foreground/10 bg-card text-card-foreground flex h-full flex-col overflow-hidden shadow-xs ring-1"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-base font-bold leading-snug text-foreground lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-balance text-muted-foreground md:mt-12 md:text-base"
        >
          These four cornerstones guide our observations, interactions,
          <br className="hidden md:inline" />
          {" "}and recommendations throughout the{" "}
          <span className="text-primary">School Discovery</span> process.
        </motion.p>
      </div>
    </section>
  );
}
