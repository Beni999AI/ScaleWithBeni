"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  const { ref, isInView } = useIntersection();

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim"
    >
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From missed call to booked meeting — in under 60 seconds.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Animated connector line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan/10 via-cyan-dim to-cyan/10">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-cyan/50 to-cyan/20 origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </div>

            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative flex flex-col items-center text-center max-w-[180px]"
                >
                  {/* Pulsing outer ring — one-shot on enter */}
                  <motion.div
                    className="absolute top-0 w-16 h-16 rounded-full border border-cyan/30"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={
                      isInView ? { opacity: 0, scale: 1.6 } : {}
                    }
                    transition={{
                      duration: 1.4,
                      delay: index * 0.15 + 0.6,
                      ease: "easeOut",
                    }}
                  />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-cyan/30 bg-card">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan text-xs font-bold text-black">
                    {index + 1}
                  </div>
                  {/* Glassmorphism card with ghost number */}
                  <div className="relative mt-3 rounded-lg border border-cyan-dim bg-card/50 backdrop-blur-sm p-4 w-full overflow-hidden">
                    <span className="absolute text-7xl font-bold text-white/5 select-none -top-3 -left-1 leading-none">
                      {index + 1}
                    </span>
                    <h3 className="relative text-sm font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-card">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  {index < STEPS.length - 1 && (
                    <motion.div
                      className="w-px bg-gradient-to-b from-cyan/40 to-transparent"
                      initial={{ height: 0 }}
                      animate={isInView ? { height: 40 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    />
                  )}
                </div>
                <div className="pt-2 pb-8">
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
