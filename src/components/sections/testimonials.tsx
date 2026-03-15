"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const { ref, isInView } = useIntersection();
  const [api, setApi] = useState<CarouselApi>();

  // Manual autoplay
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Agents Who Stopped{" "}
            <span className="text-cyan">Missing Deals.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real results from real Dubai agents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2"
                >
                  <div className="rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-8 h-full flex flex-col gap-6 hover:border-cyan/30 transition-colors duration-300">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 border border-cyan/20 shrink-0">
                        <span className="text-sm font-semibold text-cyan">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows — desktop only */}
            <div className="hidden md:block">
              <CarouselPrevious className="border-cyan-dim hover:border-cyan/40 hover:bg-card/80 -left-6" />
              <CarouselNext className="border-cyan-dim hover:border-cyan/40 hover:bg-card/80 -right-6" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
