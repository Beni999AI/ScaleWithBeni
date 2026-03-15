"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, X, Plus, Info } from "lucide-react";
import { PRICING_TIERS, SITE_CONFIG } from "@/lib/constants";

export function Pricing() {
  const { ref, isInView } = useIntersection();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const getPrice = (monthlyPrice: number) => {
    if (billing === "annual") {
      return Math.round(monthlyPrice * 0.85);
    }
    return monthlyPrice;
  };

  return (
    <TooltipProvider>
      <section
        id="pricing"
        className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim"
      >
        <div ref={ref} className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              Simple Pricing.{" "}
              <span className="text-cyan">Serious ROI.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              One closed deal pays for 20+ months. No contracts, cancel anytime.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-10">
            <Tabs
              value={billing}
              onValueChange={(v) => setBilling(v as "monthly" | "annual")}
            >
              <TabsList className="bg-card/50 border border-cyan-dim">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-cyan data-[state=active]:text-black">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-cyan data-[state=active]:text-black">
                  Annual{" "}
                  <span className="ml-1.5 text-xs opacity-75">Save 15%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative"
              >
                {tier.highlighted ? (
                  <motion.div
                    className="relative flex flex-col rounded-xl border border-cyan/50 bg-card/60 backdrop-blur-sm p-6 h-full shadow-[0_0_40px_rgba(0,229,255,0.12)] scale-[1.02]"
                    animate={
                      isInView
                        ? {
                            boxShadow: [
                              "0 0 30px rgba(171,171,171,0.08)",
                              "0 0 50px rgba(171,171,171,0.18)",
                              "0 0 30px rgba(171,171,171,0.08)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {tier.badge && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-black font-semibold border-0 px-3">
                        {tier.badge}
                      </Badge>
                    )}
                    <PricingCardContent
                      tier={tier}
                      price={getPrice(tier.price)}
                      billing={billing}
                      originalPrice={tier.price}
                    />
                  </motion.div>
                ) : (
                  <div className="relative flex flex-col rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-6 h-full hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(171,171,171,0.08)] transition-all duration-300">
                    {tier.badge && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-black font-semibold border-0 px-3">
                        {tier.badge}
                      </Badge>
                    )}
                    <PricingCardContent
                      tier={tier}
                      price={getPrice(tier.price)}
                      billing={billing}
                      originalPrice={tier.price}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Annual discount applied at checkout. Cancel anytime with 30 days notice.
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
}

function PricingCardContent({
  tier,
  price,
  billing,
  originalPrice,
}: {
  tier: (typeof PRICING_TIERS)[number];
  price: number;
  billing: "monthly" | "annual";
  originalPrice: number;
}) {
  const FEATURE_TOOLTIPS: Record<string, string> = {
    "Inbound call fallback":
      "If you don't answer within 15 seconds, the AI picks up silently and qualifies the caller.",
    "Cal.com meeting booking":
      "Meetings are booked directly into your Cal.com calendar — no manual steps.",
    "Live call dashboard":
      "Real-time dashboard showing call outcomes, lead data, and pipeline stats.",
    "Live dashboard":
      "Real-time dashboard showing call outcomes, lead data, and pipeline stats.",
  };

  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-muted-foreground">/mo</span>
          {billing === "annual" && price !== originalPrice && (
            <span className="text-sm text-muted-foreground/50 line-through ml-1">
              ${originalPrice}
            </span>
          )}
        </div>
        {billing === "annual" && (
          <p className="text-xs text-cyan mt-1">Billed annually</p>
        )}
      </div>

      <div className="flex-1 space-y-3 mb-6">
        {tier.features.map((feature, fIndex) => (
          <motion.div
            key={fIndex}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: fIndex * 0.05 }}
          >
            {"addon" in feature && feature.addon ? (
              <Plus className="h-4 w-4 text-gold shrink-0 mt-0.5" />
            ) : feature.included ? (
              <Check className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
            )}
            <span
              className={`text-sm flex items-center gap-1 ${
                feature.included || ("addon" in feature && feature.addon)
                  ? "text-muted-foreground"
                  : "text-muted-foreground/40"
              }`}
            >
              {feature.text}
              {"addon" in feature && feature.addon && (
                <span className="text-gold ml-1">({feature.addon})</span>
              )}
              {FEATURE_TOOLTIPS[feature.text] && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3 w-3 text-muted-foreground/50 cursor-help shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-xs">
                    {FEATURE_TOOLTIPS[feature.text]}
                  </TooltipContent>
                </Tooltip>
              )}
            </span>
          </motion.div>
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
            tier.name === "Team" ? SITE_CONFIG.whatsappLink : SITE_CONFIG.calLink
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {tier.cta}
        </a>
      </Button>
    </>
  );
}
