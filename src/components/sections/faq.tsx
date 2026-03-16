"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const { ref, isInView } = useIntersection();

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Everything you&apos;re wondering about.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-cyan-dim data-[state=open]:border-b-cyan/30 px-0"
              >
                <AccordionTrigger className="text-left font-medium text-white hover:text-cyan hover:no-underline py-5 text-base data-[state=open]:text-cyan [&[data-state=open]]:pl-4 [&[data-state=open]]:border-l-2 [&[data-state=open]]:border-cyan transition-all duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
