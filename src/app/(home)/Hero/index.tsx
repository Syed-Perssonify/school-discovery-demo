"use client";

import { useDiscoveryBooking } from "@/components/discovery-booking";
import { heroContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  const { openBooking } = useDiscoveryBooking();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[125svh] overflow-hidden bg-background text-foreground"
    >
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_35%] opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/55"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container mx-auto flex flex-1 flex-col items-center justify-center gap-8 sm:gap-10 md:text-center px-4 sm:px-6 py-14 sm:py-16 md:py-20 lg:py-24 md:items-center"
      >
        <div className="flex max-w-220 flex-col items-center gap-5 sm:gap-6">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            {heroContent.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/85 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
          >
            {heroContent.subheading}
          </motion.p>
        </div>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={openBooking}
          className="group inline-flex h-fit self-center items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm sm:text-base font-semibold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>{heroContent.primaryCta}</span>
          <span className="ml-0 grid max-w-0 overflow-hidden transition-[max-width,margin,opacity,transform] duration-300 ease-out opacity-0 -translate-y-1 group-hover:ml-2 group-hover:max-w-6 group-hover:opacity-100 group-hover:translate-y-0 motion-reduce:transition-none">
            <ArrowUpRightIcon weight="bold" className="size-5" aria-hidden="true" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
