"use client";

import { objectiveApproachContent, visionPurposeContent } from "@/app/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { motion, type Variants } from "motion/react";
import Image from "next/image";

const cards = [
  {
    number: "01",
    label: visionPurposeContent.vision.label,
    text: visionPurposeContent.vision.text,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Students collaborating in a bright classroom",
  },
  {
    number: "02",
    label: visionPurposeContent.purpose.label,
    text: visionPurposeContent.purpose.text,
    image: "/Shaping Schools That Keep Learning/12.jpeg",
    alt: "",
  },
  {
    number: "03",
    label: objectiveApproachContent.objective.label,
    text: objectiveApproachContent.objective.text,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    alt: "Rows of books in a school library",
  },
  {
    number: "04",
    label: objectiveApproachContent.approach.label,
    text: objectiveApproachContent.approach.text,
    image: "/Shaping Schools That Keep Learning/11.jpeg",
    alt: "",
  },
];

const cardStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const cardSlideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function VisionPurpose() {
  return (
    <section
      id="vision-purpose"
      className="w-full overflow-hidden bg-background py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full space-y-5 lg:w-3/5"
        >
          <h2 className="mb-6 w-full max-w-3xl text-left text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Shaping Schools That Keep Learning
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-16 lg:text-lg">
            The principles and practices that guide every School Discovery
            engagement — from the vision we hold for classrooms to the approach
            we bring on the ground.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={cardStagger}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <motion.article
              key={card.number}
              variants={cardSlideRight}
              className="flex flex-col rounded-3xl bg-muted/60 p-4"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 w-full p-3">
                <h3 className="mb-3 text-2xl font-semibold leading-tight tracking-tight text-foreground lg:text-3xl">
                  {card.label}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
