"use client";

import { supportContent } from "@/app/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  ArrowUpRightIcon,
  CertificateIcon,
  GraduationCapIcon,
  MedalIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Pillar = (typeof supportContent.pillars)[number];

const pillarIcons: Record<string, Icon> = {
  certificate: CertificateIcon,
  "graduation-cap": GraduationCapIcon,
  medal: MedalIcon,
};

function renderDescription(
  description: string,
  links?: ReadonlyArray<{ text: string; href: string }>,
) {
  if (!links || links.length === 0) return description;
  const nodes: ReactNode[] = [];
  let remaining = description;
  links.forEach((link, i) => {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) return;
    if (idx > 0) nodes.push(remaining.slice(0, idx));
    nodes.push(
      <a
        key={`${link.href}-${i}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-secondary"
      >
        {link.text}
      </a>,
    );
    remaining = remaining.slice(idx + link.text.length);
  });
  if (remaining) nodes.push(remaining);
  return nodes;
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  const PillarIcon = pillarIcons[pillar.iconKey];
  const hasGroups = pillar.groups.length > 0;
  const footnote = "footnote" in pillar ? pillar.footnote : undefined;
  const descriptionLinks =
    "descriptionLinks" in pillar ? pillar.descriptionLinks : undefined;

  return (
    <motion.article
      variants={fadeUp}
      className="group/card ring-foreground/10 bg-card text-card-foreground flex h-full flex-col gap-5 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1"
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
          {renderDescription(pillar.description, descriptionLinks)}
        </p>

        {footnote ? (
          <div className="mt-auto border-t border-border pt-4">
            <p className="text-sm font-medium italic leading-relaxed text-primary">
              {footnote}
            </p>
          </div>
        ) : null}

        {hasGroups ? (
          <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
            {pillar.groups.map((group, groupIndex) => {
              const isStacked = group.items.some(
                (item) => item.label.length > 40,
              );

              return (
                <div
                  key={group.label || `group-${groupIndex}`}
                  className="flex flex-col gap-2"
                >
                  {group.label ? (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {group.label}
                    </span>
                  ) : null}
                  <ul
                    className={
                      isStacked
                        ? "flex flex-col gap-2"
                        : "flex flex-wrap gap-2"
                    }
                  >
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className={isStacked ? "w-full" : ""}
                      >
                        {"href" in item ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              isStacked
                                ? "border-border bg-background text-foreground hover:border-primary hover:bg-primary hover:text-white flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-xs font-medium transition-colors"
                                : "border-border bg-background text-foreground hover:border-primary hover:bg-primary hover:text-white inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-medium transition-colors"
                            }
                          >
                            <span className="flex-1">{item.label}</span>
                            <ArrowUpRightIcon
                              weight="bold"
                              aria-hidden="true"
                              className="size-3 shrink-0"
                            />
                          </a>
                        ) : (
                          <span
                            className={
                              isStacked
                                ? "border-border bg-background text-foreground flex w-full items-center rounded-md border px-3 py-2 text-xs font-medium"
                                : "border-border bg-background text-foreground inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium"
                            }
                          >
                            {item.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Support() {
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
          {supportContent.pillars.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
