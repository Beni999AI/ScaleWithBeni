"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { TRUST_ITEMS } from "@/lib/constants";

export function TrustCompliance() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim bg-secondary/40">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Built to Be{" "}
            <span className="text-cyan">Trusted.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Reliability, compliance, and peace of mind — baked in from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col gap-4 rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-6 hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(171,171,171,0.08)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 border border-cyan/20">
                  <Icon className="h-6 w-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
