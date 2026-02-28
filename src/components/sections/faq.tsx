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
    <section id="faq" className="py-20 md:py-28 border-t border-cyan-dim">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to know about ScaleWithBeni.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-cyan-dim rounded-lg px-6 data-[state=open]:border-cyan/30"
              >
                <AccordionTrigger className="text-left text-white hover:text-cyan hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
