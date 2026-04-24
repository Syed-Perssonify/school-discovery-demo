"use client";

import { cornerstonesContent } from "@/app/data/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";

export default function Cornerstones() {
  return (
    <section
      id="cornerstones"
      className="w-full bg-background py-8 sm:py-10 md:py-14"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-8 flex max-w-210 flex-col items-center justify-between gap-4 md:mb-12"
        >
          <h2 className="text-center text-3xl tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
            Four Cornerstones of
            <br />
            <span className="text-primary">School Discovery</span>
          </h2>
          <p className="text-center text-sm leading-relaxed text-muted-foreground whitespace-pre-line md:text-base">
            {cornerstonesContent.description}
          </p>
        </motion.div>

        <Tabs
          defaultValue={cornerstonesContent.items[0].number}
          className="flex flex-col-reverse gap-6 xl:flex-row! xl:items-stretch xl:gap-10"
        >
          <TabsList
            variant="default"
            className="h-fit! w-full flex-col gap-2 bg-transparent p-0 xl:w-auto xl:max-w-136.25 xl:flex-1"
          >
            {cornerstonesContent.items.map((item) => (
              <TabsTrigger
                key={item.number}
                value={item.number}
                className="group w-full cursor-pointer flex-col items-start gap-1.5 whitespace-normal rounded-[0.75rem] border border-transparent p-4 text-left transition-colors hover:bg-muted/60 data-active:bg-muted data-active:text-foreground"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {item.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full xl:flex-1 xl:self-stretch">
            {cornerstonesContent.items.map((item) => (
              <TabsContent
                key={item.number}
                value={item.number}
                className="w-full outline-none xl:h-full"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[0.75rem] xl:aspect-auto xl:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:mt-12 md:text-base"
        >
          These four cornerstones guide our observations, interactions,
          <br />
          and recommendations throughout the{" "}
          <span className="text-primary">School Discovery</span> process.
        </motion.p>
      </div>
    </section>
  );
}
