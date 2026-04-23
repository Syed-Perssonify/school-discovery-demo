"use client";

import { processContent } from "@/app/data/content";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";

export default function GuidingPrinciple() {
  return (
    <section
      id="guiding-principle"
      className="relative overflow-hidden bg-background py-8 sm:py-10 md:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-14"
        >
          <motion.div variants={fadeInLeft} className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {processContent.guidingPrinciple.label}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block whitespace-nowrap">Non-intrusive.</span>
              <span className="block whitespace-nowrap text-primary">
                System-focused.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              How we show up in every school we visit — and why.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="relative lg:col-span-7 lg:pl-10"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-border lg:block"
            />

            <p className="text-base leading-relaxed text-foreground sm:text-lg md:text-xl md:leading-[1.7]">
              Across all aspects of the visit—classroom observations, learning
              walks, focus group interactions, and document review—our approach
              remains{" "}
              <span className="font-semibold text-primary">
                non-intrusive
              </span>{" "}
              and{" "}
              <span className="font-semibold text-primary">
                system-focused
              </span>
              . At School Discovery, we seek to understand how the school
              operates{" "}
              <span className="font-semibold text-foreground">as a whole</span>,
              not to evaluate individual performance, so that the school can{" "}
              <span className="font-semibold text-foreground">
                build on its strengths
              </span>{" "}
              with confidence and clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Classroom Observations", "Learning Walks", "Focus Groups", "Document Review"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
