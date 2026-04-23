"use client";

import { aboutContent, visionPurposeContent } from "@/app/data/content";
import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  strength?: number;
};

function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  strength = 8,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : [`${strength}%`, `${-strength}%`],
  );

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
    >
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function About() {
  const [lead, supporting] = aboutContent.description.split("\n\n");
  const columnSizes =
    "(min-width: 1024px) 30vw, (min-width: 768px) 60vw, 100vw";

  return (
    <section
      id="about"
      className="w-full bg-background text-foreground py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex w-full flex-col items-start justify-start gap-16 md:gap-24 lg:w-1/2"
          >
            <motion.div variants={fadeInLeft} className="pr-0 lg:pr-6">
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl lg:mb-8 font-semibold tracking-tight text-foreground">
                {aboutContent.heading}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {lead}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex w-full flex-col items-stretch justify-center gap-6 md:flex-row"
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&h=2000&q=85"
                alt="Students in a classroom"
                sizes={columnSizes}
                className="aspect-7/10 md:w-1/2"
                strength={10}
              />
              <div className="hidden w-full flex-col items-stretch justify-center gap-6 md:flex md:w-1/2">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2200&h=2000&q=85"
                  alt="Child engaged in reading"
                  sizes={columnSizes}
                  className="aspect-11/10"
                  strength={7}
                />
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&h=2000&q=85"
                  alt="Student writing notes at a desk"
                  sizes={columnSizes}
                  className="aspect-7/10"
                  strength={11}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex w-full flex-col items-stretch justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48"
          >
            <motion.div
              variants={fadeUp}
              className="flex w-full flex-col items-stretch justify-center gap-6 md:flex-row"
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&h=2000&q=85"
                alt="Stack of books for learning"
                sizes={columnSizes}
                className="aspect-9/10 md:w-1/2"
                strength={9}
              />
              <div className="hidden w-full flex-col items-stretch justify-center gap-6 md:flex md:w-1/2">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&h=2000&q=85"
                  alt="Library aisle lined with books"
                  sizes={columnSizes}
                  className="aspect-8/10"
                  strength={8}
                />
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=1800&h=2000&q=85"
                  alt="Open notebook and pen on a desk"
                  sizes={columnSizes}
                  className="aspect-9/10"
                  strength={10}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="px-0 md:px-4 lg:px-8">
              <h3 className="mb-6 text-3xl md:text-4xl lg:text-5xl lg:mb-8 font-semibold tracking-tight text-foreground">
                Our {visionPurposeContent.purpose.label}
              </h3>
              <p className="mb-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                {visionPurposeContent.purpose.text}
              </p>
              {supporting ? (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {supporting}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
