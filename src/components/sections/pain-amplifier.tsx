"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { PAIN_CARDS } from "@/lib/constants";

export function PainAmplifier() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white max-w-2xl mx-auto">
            While you were busy, your lead chose someone else.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PAIN_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(171,171,171,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-cyan-dim mb-6 group-hover:border-cyan/30 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
