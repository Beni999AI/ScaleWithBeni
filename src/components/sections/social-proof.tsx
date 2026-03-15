"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { STATS } from "@/lib/constants";

function AnimatedNumber({
  value,
  prefix,
  suffix,
  isInView,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const duration = 1500;
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-white tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const { ref, isInView } = useIntersection();

  return (
    <section
      ref={ref}
      className="relative border-y border-cyan-dim bg-background/50 backdrop-blur-sm py-16 md:py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            const isFeatured = index === 2;
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
                className={`flex flex-col items-center gap-3 text-center p-6 rounded-xl backdrop-blur-sm ${
                  isFeatured
                    ? "bg-card/60 border border-cyan/40 ring-1 ring-cyan/20 shadow-[0_0_30px_rgba(171,171,171,0.10)]"
                    : "bg-card/60 border border-cyan-dim shadow-[0_0_20px_rgba(0,229,255,0.04)]"
                }`}
              >
                <div className="rounded-full bg-cyan/10 p-3">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={index * 0.12}
                />
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
