"use client";

import { supportContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  CaretRightIcon,
  CertificateIcon,
  GraduationCapIcon,
  MedalIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";

type Pillar = (typeof supportContent.pillars)[number];

const pillarIcons: Record<string, Icon> = {
  certificate: CertificateIcon,
  "graduation-cap": GraduationCapIcon,
  medal: MedalIcon,
};

function ReadMoreLink() {
  return (
    <a
      href="#contact"
      className="border-border bg-background text-foreground hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-md border px-2.5 text-sm font-medium shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      Read more
      <CaretRightIcon
        weight="bold"
        aria-hidden="true"
        className="ml-2 size-4"
      />
    </a>
  );
}

function PillarCard({
  pillar,
  variant = "default",
}: {
  pillar: Pillar;
  variant?: "default" | "wide";
}) {
  const PillarIcon = pillarIcons[pillar.iconKey];
  const isWide = variant === "wide";
  const hasGroups = pillar.groups.length > 0;

  return (
    <motion.article
      variants={fadeUp}
      className="group/card ring-foreground/10 bg-card text-card-foreground flex h-full flex-col justify-between gap-5 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1"
    >
      <div className="flex items-center gap-4 px-6">
        {PillarIcon ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
            <PillarIcon
              weight="duotone"
              aria-hidden="true"
              className="size-5"
            />
          </span>
        ) : null}
        <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground lg:text-lg">
          {pillar.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6">
        <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
          {pillar.description}
        </p>

        {hasGroups ? (
          <div
            className={
              isWide
                ? "mt-2 flex flex-col gap-4 border-t border-border pt-4 md:flex-row md:items-end md:justify-between"
                : "mt-2 flex flex-col gap-3 border-t border-border pt-4"
            }
          >
            <div className="flex flex-1 flex-col gap-3">
              {pillar.groups.map((group, groupIndex) => (
                <div
                  key={group.label || `group-${groupIndex}`}
                  className="flex flex-col gap-2"
                >
                  {group.label ? (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {group.label}
                    </span>
                  ) : null}
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-border bg-background text-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {isWide ? <ReadMoreLink /> : null}
          </div>
        ) : null}
      </div>

      {!isWide ? (
        <div className="flex items-center px-6">
          <ReadMoreLink />
        </div>
      ) : null}
    </motion.article>
  );
}

export default function Support() {
  const [first, second, third] = supportContent.pillars;

  return (
    <section
      id="support"
      className="w-full bg-background py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
            {supportContent.heading}
          </h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground lg:text-lg">
            {supportContent.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <div className="lg:w-1/3">
              <PillarCard pillar={first} />
            </div>
            <motion.div
              variants={fadeUp}
              className="relative aspect-video w-full overflow-hidden rounded-xl lg:aspect-auto lg:w-1/3"
            >
              <Image
                src={supportContent.feature.image}
                alt={supportContent.feature.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="lg:w-1/3">
              <PillarCard pillar={second} />
            </div>
          </div>

          <div className="w-full">
            <PillarCard pillar={third} variant="wide" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
