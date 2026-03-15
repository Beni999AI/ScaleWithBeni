"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ABOUT_ME, SITE_CONFIG } from "@/lib/constants";

export function AboutMe() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm lg:max-w-none mx-auto aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cyan/30 shadow-[0_0_40px_rgba(171,171,171,0.10)]">
              <Image
                src={ABOUT_ME.photo}
                alt="Beni — founder of ScaleWithBeni"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                {ABOUT_ME.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                {ABOUT_ME.headline}
              </h2>
            </div>

            <div className="space-y-4">
              {ABOUT_ME.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <Button
              size="lg"
              className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90 w-fit"
              asChild
            >
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ABOUT_ME.cta} <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
