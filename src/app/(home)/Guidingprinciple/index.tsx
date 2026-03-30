"use client";

import { processContent } from "@/app/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";

export default function GuidingPrinciple() {
  return (
    <section id="guiding-principle" className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0D0D0D]/80" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex flex-col items-center text-center gap-5 sm:gap-6 max-w-3xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {processContent.guidingPrinciple.label}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">
          {processContent.guidingPrinciple.text}
        </p>
      </motion.div>
    </section>
  );
}
