"use client";

import { useEffect, useState } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { STATS } from "@/lib/constants";

function AnimatedNumber({
  value,
  prefix,
  suffix,
  isInView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

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
    <section ref={ref} className="relative border-y border-cyan-dim bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center relative"
              >
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-cyan/30 to-transparent" />
                )}
                <Icon className="w-5 h-5 text-cyan" />
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
