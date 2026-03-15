"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

export function Services() {
  const { ref, isInView } = useIntersection();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-white via-cyan to-white bg-clip-text text-transparent animate-gradient-x">
              Everything Your Leads Need.
            </span>
            <br />
            <span className="text-cyan">Nothing You Have to Do.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Three fully managed services that handle your missed calls,
            follow-ups, and property matching — automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.94 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(171,171,171,0.12)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-transparent border border-cyan/20 group-hover:shadow-[0_0_20px_rgba(171,171,171,0.15)] transition-shadow duration-300">
                    <Icon className="h-7 w-7 text-cyan" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-cyan/10 text-cyan border-0"
                  >
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
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
