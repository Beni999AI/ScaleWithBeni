"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MoveRight,
  MessageCircle,
  PhoneIncoming,
  Monitor,
  MessageSquare,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

function ServiceSection({
  id,
  icon: Icon,
  headline,
  painCopy,
  stats,
  included,
  process,
}: {
  id: string;
  icon: React.ElementType;
  headline: string;
  painCopy: string[];
  stats: { value: string; label: string }[];
  included?: string[];
  process?: { step: string; description: string }[];
}) {
  const { ref, isInView } = useIntersection();

  return (
    <section id={id} className="py-16 md:py-20 lg:py-24 border-t border-cyan-dim scroll-mt-20">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-transparent border border-cyan/20">
              <Icon className="h-7 w-7 text-cyan" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white">
              {headline}
            </h2>
          </div>

          {/* Pain copy */}
          <div className="max-w-3xl mb-10 space-y-4">
            {painCopy.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Outcome stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-xl border border-cyan-dim bg-card/50 backdrop-blur-sm p-6"
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Process flow (if provided) */}
          {process && (
            <div className="mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">How It Works</h3>
              <div className="space-y-0">
                {process.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/10 border border-cyan/20 text-xs font-bold text-cyan">
                        {i + 1}
                      </div>
                      {i < process.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-cyan/30 to-transparent" />
                      )}
                    </div>
                    <div className="pb-6 pt-1">
                      <p className="text-sm font-semibold text-white">{item.step}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's included (if provided) */}
          {included && (
            <div className="mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <Button
            size="lg"
            className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90"
            asChild
          >
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              Get a custom quote <MoveRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { ref: heroRef, isInView: heroInView } = useIntersection();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(171,171,171,0.08)_0%,_transparent_70%)]" />
          <div ref={heroRef} className="relative container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-6"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                What I Build
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-3xl">
                Four systems. Every gap closed.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Each service targets a specific place where Dubai real estate professionals lose leads, lose credibility, or lose time. Choose one. Choose all. I&apos;ll tell you what fits.
              </p>
              <Button
                size="lg"
                className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90 mt-2"
                asChild
              >
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Book a Free Strategy Call <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Separator className="bg-cyan-dim" />

        {/* Service 1 — AI Voice Agent */}
        <ServiceSection
          id="voice-agent"
          icon={PhoneIncoming}
          headline="Never let a high-intent lead go to voicemail."
          painCopy={[
            "When someone calls your number directly, they're not browsing — they're ready to talk. These are your highest-quality leads. And when you miss that call, they don't leave a voicemail and wait. They call the next agent on the list.",
            "In Dubai real estate, a direct call can be worth AED 10,000–30,000 in commission. Every unanswered call is real money walking away.",
          ]}
          stats={[
            { value: "4×", label: "Direct callers are more likely to close than portal form leads." },
            { value: "78%", label: "The agent who responds first wins the deal." },
            { value: "AED 10K–30K", label: "Average Dubai commission per closed deal." },
          ]}
          process={[
            { step: "Lead calls your number", description: "A prospect dials your number directly — a high-intent signal." },
            { step: "You're unavailable", description: "You're mid-showing, on another call, or after hours." },
            { step: "AI answers within 3 rings", description: "The AI introduces itself as your AI assistant and begins qualifying." },
            { step: "Qualifies in their language", description: "Budget, timeline, property type — gathered in their language (Arabic, English, Russian, Hindi, Mandarin)." },
            { step: "Books directly into your calendar", description: "Meeting booked into Google Calendar or Cal.com automatically." },
            { step: "Sends you a WhatsApp summary", description: "Name, number, qualification details, and meeting link — instantly." },
          ]}
          included={[
            "AI inbound call fallback (activates if you don't answer within ~15 seconds)",
            "Qualification script tailored to your listings and client profile",
            "Calendar booking integration (Google Calendar or Cal.com)",
            "WhatsApp summary notification to agent after every handled call",
            "Multi-language: Arabic, English, Russian, Hindi, Mandarin",
            "Ongoing maintenance and script updates",
          ]}
        />

        {/* Service 2 — Website Design & Build */}
        <ServiceSection
          id="website"
          icon={Monitor}
          headline="Your website is your first impression. Make it count."
          painCopy={[
            "Most Dubai real estate agents have one of three website problems: they have no website, they have a templated listing page that looks like everyone else's, or they have something they built themselves three years ago that loads slowly and doesn't work on mobile.",
            "Leads search on their phones. They see your website in 3 seconds and make a judgment. If it doesn't look credible, professional, and fast — they go back to Google and click the next result. You never even got a chance.",
          ]}
          stats={[
            { value: "3×", label: "A professionally designed website converts more visitors than an outdated one." },
            { value: "53%", label: "Of mobile users leave a site that takes more than 3 seconds to load." },
            { value: "94%", label: "First impressions are design-driven — before anyone reads a single word." },
          ]}
          included={[
            "Strategy session: target audience, positioning, key conversion goals",
            "Copywriting: every word written for conversion, not decoration",
            "Custom Next.js build: fast, modern, mobile-first",
            "Dark premium design aesthetic (consistent with your brand)",
            "SEO fundamentals: meta tags, Open Graph, page speed optimization",
            "Vercel deployment: live in under a minute, globally fast",
            "30-day post-launch support",
            "Optional: integrated AI chatbot, lead capture forms, WhatsApp contact",
          ]}
        />

        {/* Service 3 — AI Chatbot & Lead Agent */}
        <ServiceSection
          id="chatbot"
          icon={MessageSquare}
          headline="Qualify leads 24/7 — even when you're on a viewing."
          painCopy={[
            "A lead lands on your website at 10pm. They have questions about a listing. You're not there. Your contact form sends an email to an inbox you'll check tomorrow morning. By then, they've already spoken to three other agents.",
            "Every hour of silence is a lead warming up to someone else.",
          ]}
          stats={[
            { value: "20%", label: "Agencies using AI chat capture more qualified leads from the same traffic." },
            { value: "900%", label: "Response time under 5 minutes increases lead conversion vs. 30 minutes." },
            { value: "60%", label: "Of real estate leads expect a response within 1 hour — or they move on." },
          ]}
          process={[
            { step: "Lead visits your website or messages your WhatsApp", description: "Any channel — your site or WhatsApp Business." },
            { step: "AI chatbot opens immediately", description: "Introduces itself and starts the qualification conversation." },
            { step: "Asks qualifying questions", description: "Budget, property type, timeline, language preference." },
            { step: "Provides relevant info from your listings", description: "Answers questions based on your portfolio and criteria." },
            { step: "Offers to book a call or viewing", description: "Books directly or passes the warm lead to you." },
            { step: "Logs to your CRM and notifies you", description: "Full conversation summary sent to your phone instantly." },
          ]}
          included={[
            "AI chat widget on your website (customized to your brand)",
            "WhatsApp Business integration (optional)",
            "Qualification flow built around your specific listings and buyer profiles",
            "Arabic + English (additional languages available)",
            "CRM hand-off (Airtable or your existing CRM)",
            "Agent notification on every qualified conversation",
            "Ongoing monitoring and script updates",
          ]}
        />

        {/* Service 4 — Automation & Workflow Systems */}
        <ServiceSection
          id="automation"
          icon={Zap}
          headline="Stop spending hours on tasks a system can do in seconds."
          painCopy={[
            "Studies show that real estate agents spend an average of 5–7 hours per week on manual follow-up, data entry, and lead management. That's time you're not spending with buyers, showing properties, or closing deals.",
            "And the follow-up you are doing? It's inconsistent. You remember to message some leads and forget others. The ones you forget — they close with someone else.",
          ]}
          stats={[
            { value: "80%", label: "Of sales require 5+ follow-up contacts. Most agents stop after 2." },
            { value: "3×", label: "Automated follow-up sequences increase response rates vs. manual outreach." },
            { value: "5–7 hrs", label: "Saved per week by agents using workflow automation." },
          ]}
          included={[
            "Lead routing: automatic assignment, tagging, and tracking from portal inquiries",
            "WhatsApp sequences: timed, personalized follow-up messages in lead's language",
            "Email sequences: professional follow-up for leads who prefer email",
            "CRM integration: Property Finder, Bayut, Dubizzle feed into your pipeline automatically",
            "Post-viewing follow-up: automated touchpoints after each showing",
            "Re-engagement sequences: dormant leads triggered back into the funnel",
            "Viewing reminders: automated messages before and after scheduled appointments",
            "Full build, test, and deployment — fully managed ongoing",
          ]}
        />

        {/* Closing CTA */}
        <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden border-t border-cyan-dim">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(171,171,171,0.08)_0%,_transparent_70%)]" />
          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                Not sure where to start?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Book a free 20-minute strategy call. I&apos;ll identify the biggest gap in your current setup and tell you exactly what I&apos;d build first. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90"
                  asChild
                >
                  <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Book a Free Strategy Call <MoveRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-cyan-dim text-white hover:bg-white/5 hover:border-cyan/40"
                  asChild
                >
                  <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp <MessageCircle className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
