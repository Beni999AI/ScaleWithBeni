"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { MoveRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTA() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden border-t border-b border-cyan-dim">
      {/* Primary radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.10)_0%,_transparent_70%)]" />
      {/* Secondary radial gradient top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,_rgba(171,171,171,0.08)_0%,_transparent_60%)]" />
      {/* Floating blur circles — hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-8 w-72 h-72 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-8 w-56 h-56 rounded-full bg-cyan/4 blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-white/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter max-w-2xl">
            <span className="text-white">You&apos;re leaving deals on the table. </span>
            <span className="bg-gradient-to-r from-white via-cyan to-white bg-clip-text text-transparent animate-gradient-x">
              Let&apos;s fix that.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Book a free 20-minute strategy call. I&apos;ll look at your current setup, identify exactly where you&apos;re losing leads, and tell you what I&apos;d build to fix it. No pitch. No commitment. Just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90 hover:shadow-[0_0_20px_rgba(171,171,171,0.25)] transition-all duration-300"
              asChild
            >
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Strategy Call <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-cyan-dim text-white hover:bg-white/5 hover:border-cyan/40 hover:shadow-[0_0_20px_rgba(171,171,171,0.15)] transition-all duration-300"
              asChild
            >
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground/60">
            20 minutes. Free. You leave knowing what&apos;s costing you deals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
