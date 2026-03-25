"use client";

import { heroContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative bg-[#0D0D0D] overflow-hidden">
      <Image
        src="/banner.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-6xl mx-auto"
        >
          <div className="max-w-3xl flex flex-col gap-6 sm:gap-8">
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              {heroContent.heading}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              {heroContent.subheading}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="#contact"
                className="inline-block bg-[#C0170F] hover:bg-[#9B100A] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors"
              >
                {heroContent.primaryCta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
