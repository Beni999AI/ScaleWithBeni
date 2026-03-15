"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { LANGUAGES } from "@/lib/constants";

export function LanguagesShowcase() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            <span className="text-white">Your Leads. Their Language. </span>
            <span className="text-cyan">Answered.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Arabic, English, Russian, Hindi, and Mandarin — the languages of
            Dubai real estate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {LANGUAGES.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col items-center gap-3 rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm px-8 py-6 hover:border-cyan/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(171,171,171,0.10)] transition-all duration-300 min-w-[140px]"
            >
              <span className="text-4xl" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <div className="text-center">
                <p className="font-semibold text-white text-sm">{lang.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {lang.native}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
