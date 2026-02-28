"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  const { ref, isInView } = useIntersection();

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From missed call to booked meeting — in under 60 seconds.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan/20 via-cyan/40 to-cyan/20" />

            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center max-w-[180px]"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-cyan/30 bg-card">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan text-xs font-bold text-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-card shrink-0">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="w-px h-8 bg-cyan/20 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
