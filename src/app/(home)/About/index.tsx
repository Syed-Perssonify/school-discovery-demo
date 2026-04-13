"use client";

import { aboutContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* Left -- content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <motion.h2
              variants={fadeInLeft}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight"
            >
              {aboutContent.heading}
            </motion.h2>
            {aboutContent.description.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeInLeft}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Right -- image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-4/3 overflow-hidden"
          >
            <Image
              src="/Classroom discussion over educational materials.png"
              alt="About School Discovery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
