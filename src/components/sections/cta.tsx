"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { MoveRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTA() {
  const { ref, isInView } = useIntersection();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.12)_0%,_transparent_70%)]" />

      <div ref={ref} className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white max-w-2xl">
            Ready to Never Miss a Lead Again?
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Book a 15-minute demo. See the AI call a lead in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90"
              asChild
            >
              <a href={SITE_CONFIG.calLink} target="_blank" rel="noopener noreferrer">
                Book a Demo <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-cyan-dim text-white hover:bg-white/5"
              asChild
            >
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Us <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
