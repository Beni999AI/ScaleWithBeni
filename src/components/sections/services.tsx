"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

export function Services() {
  const { ref, isInView } = useIntersection();

  return (
    <section id="services" className="py-20 md:py-28">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Everything Your Leads Need.
            <br />
            <span className="text-cyan">Nothing You Have to Do.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Three fully managed services that handle your missed calls,
            follow-ups, and property matching — automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl border border-cyan-dim bg-card p-8 transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-cyan/10 text-cyan border-0"
                  >
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
