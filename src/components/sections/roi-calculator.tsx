"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ROI_CONFIG, SITE_CONFIG } from "@/lib/constants";

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    const duration = 400;
    const startTime = performance.now();
    const startValue = value;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startValue + (target - startValue) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

export function ROICalculator() {
  const { ref, isInView } = useIntersection();
  const [leads, setLeads] = useState(20);

  const missedPerMonth = Math.round(leads * 4 * ROI_CONFIG.miss_rate);
  const dealsPerYear = Math.round(
    missedPerMonth * 12 * ROI_CONFIG.close_rate
  );
  const revenueAed = dealsPerYear * ROI_CONFIG.avg_commission_aed;

  const animMissed = useAnimatedNumber(missedPerMonth);
  const animDeals = useAnimatedNumber(dealsPerYear);
  const animRevenue = useAnimatedNumber(revenueAed);

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim bg-secondary/20">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            What Are Missed Calls{" "}
            <span className="text-cyan">Actually Costing You?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Drag the slider to see your real numbers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Left: Controls */}
          <div className="flex flex-col justify-center gap-8 rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-8">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-medium text-white">
                  Inbound leads per week
                </label>
                <span className="text-2xl font-bold text-cyan tabular-nums">
                  {leads}
                </span>
              </div>
              <Slider
                min={5}
                max={100}
                step={1}
                value={[leads]}
                onValueChange={([val]) => setLeads(val)}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>5</span>
                <span>100</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex justify-between">
                <span>Miss rate assumed</span>
                <span className="text-white font-medium">
                  {ROI_CONFIG.miss_rate * 100}%
                </span>
              </p>
              <p className="flex justify-between">
                <span>Close rate assumed</span>
                <span className="text-white font-medium">
                  {ROI_CONFIG.close_rate * 100}%
                </span>
              </p>
              <p className="flex justify-between">
                <span>Avg. commission</span>
                <span className="text-white font-medium">
                  AED {ROI_CONFIG.avg_commission_aed.toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div className="rounded-xl border border-cyan/30 bg-card/60 backdrop-blur-sm p-8 shadow-[0_0_40px_rgba(0,229,255,0.10)]">
            <div className="space-y-6">
              <ResultRow
                label="Missed calls per month"
                value={animMissed}
                suffix=""
                highlight={false}
              />
              <ResultRow
                label="Deals recovered per year"
                value={animDeals}
                suffix=" deals"
                highlight={false}
              />
              <ResultRow
                label="Revenue at risk per year"
                value={animRevenue}
                suffix=""
                prefix="AED "
                highlight={true}
                format="aed"
              />

              <div className="border-t border-cyan-dim pt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Cost of Growth plan (annual)
                  </span>
                  <span className="text-white font-medium">
                    ${ROI_CONFIG.annual_plan_cost_usd.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Break-even</span>
                  <span className="text-cyan font-semibold">1 deal</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-muted-foreground mb-3 text-center">
                Your first recovered deal pays for 20+ months of the service.
              </p>
              <Button
                className="w-full gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90"
                asChild
              >
                <a
                  href={SITE_CONFIG.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResultRow({
  label,
  value,
  suffix,
  prefix = "",
  highlight,
  format,
}: {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  highlight: boolean;
  format?: "aed";
}) {
  const displayValue =
    format === "aed" ? value.toLocaleString() : value.toString();

  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`text-xl font-bold tabular-nums shrink-0 ${
          highlight ? "text-cyan" : "text-white"
        }`}
      >
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </div>
  );
}
