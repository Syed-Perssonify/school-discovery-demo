"use client";

import { founderContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight mb-10 md:mb-14"
        >
          {founderContent.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto md:mx-0 w-full max-w-[280px] md:max-w-none bg-[#fafafa] border border-border rounded-2xl aspect-3/4 overflow-hidden"
          >
            <Image
              src={founderContent.photo}
              alt={founderContent.name}
              width={400}
              height={533}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <motion.div variants={fadeInRight}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight">
                {founderContent.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#C0170F] mt-1.5 uppercase tracking-widest">
                {founderContent.title}
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="w-12 h-1 bg-[#C0170F] rounded-full" />
            {founderContent.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInRight}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
