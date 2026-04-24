"use client";

import { supportContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  ArrowUpRightIcon,
  CaretRightIcon,
  CertificateIcon,
  GraduationCapIcon,
  MedalIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { motion } from "motion/react";

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
                      <li key={item.label}>
                        {"href" in item ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-border bg-background text-foreground hover:border-primary hover:bg-primary hover:text-white inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                          >
                            {item.label}
                            <ArrowUpRightIcon
                              weight="bold"
                              aria-hidden="true"
                              className="size-3"
                            />
                          </a>
                        ) : (
                          <span className="border-border bg-background text-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                            {item.label}
                          </span>
                        )}
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
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3"
        >
          <PillarCard pillar={first} />
          <PillarCard pillar={second} />
          <PillarCard pillar={third} />
        </motion.div>
      </div>
    </section>
  );
}
