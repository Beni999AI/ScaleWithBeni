"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Plus } from "lucide-react";
import { PRICING_TIERS, SITE_CONFIG } from "@/lib/constants";

export function Pricing() {
  const { ref, isInView } = useIntersection();

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Simple Pricing.{" "}
            <span className="text-cyan">Serious ROI.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            One closed deal pays for 20+ months. No contracts, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-xl border p-6 transition-all ${
                tier.highlighted
                  ? "border-cyan bg-card shadow-[0_0_40px_rgba(0,229,255,0.12)] scale-[1.02]"
                  : "border-cyan-dim bg-card hover:border-cyan/30"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-black font-semibold border-0 px-3">
                  {tier.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${tier.price}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    {"addon" in feature && feature.addon ? (
                      <Plus className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    ) : feature.included ? (
                      <Check className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included || ("addon" in feature && feature.addon)
                          ? "text-muted-foreground"
                          : "text-muted-foreground/40"
                      }`}
                    >
                      {feature.text}
                      {"addon" in feature && feature.addon && (
                        <span className="text-gold ml-1">({feature.addon})</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-cyan text-black font-semibold hover:bg-cyan/90"
                    : "bg-white/5 text-white border border-cyan-dim hover:bg-white/10"
                }`}
                asChild
              >
                <a
                  href={
                    tier.name === "Team"
                      ? SITE_CONFIG.whatsappLink
                      : SITE_CONFIG.calLink
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Annual plans available — pay for 10 months, get 12.
        </p>
      </div>
    </section>
  );
}
