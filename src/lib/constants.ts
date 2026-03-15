import {
  Clock,
  Zap,
  TrendingUp,
  MessageSquare,
  Building2,
  PhoneIncoming,
  PhoneMissed,
  Bot,
  CalendarCheck,
  Send,
  Shield,
  Lock,
  Settings,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "ScaleWithBeni",
  tagline: "AI automation for Dubai real estate",
  description:
    "AI calls every lead in 60 seconds, qualifies them in Arabic, English, Russian, Hindi, or Mandarin, and books a meeting in your calendar. Built for RERA-licensed agents.",
  calLink: "https://cal.com/scalewithbeni/demo",
  whatsappLink: "https://wa.me/message/scalewithbeni",
  email: "hello@scalewithbeni.com",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  {
    icon: Clock,
    value: 3,
    suffix: " rings",
    prefix: "< ",
    label: "Answer Time",
  },
  {
    icon: Zap,
    value: 24,
    suffix: "/7",
    prefix: "",
    label: "Always On",
  },
  {
    icon: TrendingUp,
    value: 1,
    suffix: " Deal",
    prefix: "",
    label: "Pays for 20+ Months",
  },
  {
    icon: PhoneIncoming,
    value: 100,
    suffix: "%",
    prefix: "",
    label: "Of Calls Caught",
  },
];

export const SERVICES = [
  {
    icon: PhoneIncoming,
    title: "Never Miss a Direct Call Again",
    description:
      "When a lead calls your number and you can't answer, our AI picks up within 3 rings, qualifies them in under 30 seconds — budget, timeline, and property type — books a meeting directly into your calendar, and sends you a WhatsApp summary with full details. No missed calls. No lost deals.",
    badge: "Growth+",
  },
  {
    icon: MessageSquare,
    title: "Never Lose a Lead to Silent Follow-Up",
    description:
      "WhatsApp and email sequences trigger automatically based on lead status. Post-call follow-ups, meeting reminders, re-engagement — all in the lead's language.",
    badge: "Growth+",
  },
  {
    icon: Building2,
    title: "Shortlist Properties in 30 Seconds",
    description:
      "Input buyer preferences. GPT-4o returns a ranked shortlist with personalised pitches per property in the buyer's language.",
    badge: "Pro+",
  },
];

export const STEPS = [
  {
    icon: PhoneIncoming,
    title: "Lead Calls Your Number",
    description: "A prospect dials your number directly — a high-intent signal.",
  },
  {
    icon: PhoneMissed,
    title: "You're Busy or Can't Answer",
    description: "You're mid-showing, on another call, or it's outside office hours.",
  },
  {
    icon: Bot,
    title: "AI Picks Up in 3 Rings",
    description: "Our AI answers before it goes to voicemail, introduces itself, and begins qualifying.",
  },
  {
    icon: CalendarCheck,
    title: "Qualifies & Books Meeting",
    description: "Budget, timeline, property type — gathered in 30 seconds. A meeting is booked in your calendar.",
  },
  {
    icon: Send,
    title: "You Get a WhatsApp Summary",
    description: "Instant notification with the caller's name, number, qualification details, and meeting link.",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 299,
    highlighted: false,
    badge: null,
    cta: "Get Started",
    features: [
      { text: "1 agent phone number", included: true },
      { text: "2 languages (EN + AR)", included: true },
      { text: "Cal.com meeting booking", included: true },
      { text: "Email summary after each call", included: true },
      { text: "WhatsApp follow-up sequences", included: false },
      { text: "Inbound call fallback", addon: "$49/mo" },
      { text: "Live dashboard", included: false },
      { text: "Property shortlisting", included: false },
    ],
  },
  {
    name: "Growth",
    price: 449,
    highlighted: true,
    badge: "Most Popular",
    cta: "Start Growing",
    features: [
      { text: "1 agent phone number", included: true },
      { text: "3 languages (EN, AR + 1 more)", included: true },
      { text: "Cal.com meeting booking", included: true },
      { text: "Live call dashboard", included: true },
      { text: "Inbound call fallback", included: true },
      { text: "WhatsApp follow-up sequences", included: true },
      { text: "Property shortlisting", included: false },
      { text: "Monthly review call", included: false },
    ],
  },
  {
    name: "Pro",
    price: 649,
    highlighted: false,
    badge: null,
    cta: "Go Pro",
    features: [
      { text: "1 agent phone number", included: true },
      { text: "4 languages (EN, AR, RU, HI)", included: true },
      { text: "Cal.com meeting booking", included: true },
      { text: "Live dashboard + monthly video call", included: true },
      { text: "Inbound call fallback", included: true },
      { text: "Custom follow-up sequences", included: true },
      { text: "Property shortlisting (AI-powered)", included: true },
      { text: "Priority support (2h response)", included: true },
    ],
  },
  {
    name: "Team",
    price: 1199,
    highlighted: false,
    badge: null,
    cta: "Contact Us",
    features: [
      { text: "Up to 5 agents' numbers covered", included: true },
      { text: "5 languages (+ Mandarin)", included: true },
      { text: "Cal.com booking (all agents)", included: true },
      { text: "Live dashboard + strategy call", included: true },
      { text: "Inbound fallback (all agents)", included: true },
      { text: "Custom sequences per agent", included: true },
      { text: "Property shortlisting (all agents)", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];

export const FAQS = [
  {
    question: "How fast does the AI actually call leads?",
    answer:
      "Under 60 seconds from form submission on Property Finder, Bayut, or Dubizzle. The system triggers immediately when a webhook fires. Growth, Pro, and Team tiers target sub-60-second response; Starter targets sub-90 seconds.",
  },
  {
    question: "Which languages does the AI support?",
    answer:
      "English, Arabic (both Modern Standard and Gulf dialect), Russian, Hindi, and Mandarin. Language availability varies by tier — Starter includes 2 languages, Growth includes 3, Pro includes 4, and Team includes all 5.",
  },
  {
    question: "Do I need any technical knowledge to use this?",
    answer:
      "None. ScaleWithBeni is a fully managed service. We build, test, monitor, and maintain everything. You just need your Property Finder/Bayut/Dubizzle account, a WhatsApp Business number, and a calendar. We handle the rest.",
  },
  {
    question: "What happens if a lead calls me directly and I miss it?",
    answer:
      "With our Inbound Call Fallback (included from Growth tier), if you don't answer within 15 seconds, the call is silently forwarded to our AI. It picks up, qualifies the caller, offers to book a meeting, and sends you a WhatsApp summary. The highest-intent leads never go to voicemail.",
  },
  {
    question: "Does the AI disclose that it's AI?",
    answer:
      "Yes, always. Within the first 5 seconds of every call, the AI identifies itself. This is required by UAE consumer protection principles and PDPL. It also builds trust — leads who know it's AI are less likely to feel deceived and more likely to engage honestly.",
  },
  {
    question: "How much does it cost, and is there a contract?",
    answer:
      "Plans start at $299/month (Starter). No long-term contract — it's a rolling monthly subscription with 30-day cancellation notice. Annual plans get 2 months free. One closed Dubai real estate deal typically generates $2,700–$8,000 in commission, so the system pays for itself with a single extra deal.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. Send 30 days' written notice via WhatsApp or email. Your system stays active until the end of the notice period. We export all your lead data and provide a written deletion confirmation within 14 days of offboarding.",
  },
  {
    question: "Which property portals do you integrate with?",
    answer:
      "Property Finder, Bayut, and Dubizzle — the three major Dubai portals. Starter includes 1 source, Growth includes 2, and Pro/Team include all 3 plus CSV upload for manual lead lists.",
  },
  {
    question: "How long does setup take?",
    answer:
      "2 weeks. Week 1 is discovery (understanding your lead sources, languages, and preferences). Week 2 is build and testing. By day 14, your system is live and calling leads.",
  },
  {
    question: "Where is ScaleWithBeni based?",
    answer:
      "ScaleWithBeni is a Hungarian Kft. (private limited company) operated by Beni. The company is registered in Hungary and serves Dubai-based real estate agents remotely. All systems are built and managed from Budapest, with support available during Dubai business hours (9am–6pm GST).",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I used to miss 3–4 calls a week. Now every lead gets answered, even at 11pm. Closed two deals last month I would have definitely lost.",
    name: "Ahmed Al-Rashidi",
    location: "JBR, Dubai",
    stars: 5,
  },
  {
    quote:
      "The setup took two weeks and since then I haven't touched anything. Beni handles everything. My pipeline doubled in 3 months.",
    name: "Natasha Volkova",
    location: "Dubai Marina",
    stars: 5,
  },
  {
    quote:
      "Russian clients especially appreciate getting called back in their language within seconds. It's a massive trust signal.",
    name: "Dmitri Sokolov",
    location: "Palm Jumeirah",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about AI, but the ROI is undeniable. First recovered deal paid for over a year of the service.",
    name: "Priya Mehta",
    location: "Downtown Dubai",
    stars: 5,
  },
  {
    quote:
      "Beni is not a faceless SaaS. He picks up the phone when I have a question. That personal touch makes all the difference.",
    name: "Omar Hassan",
    location: "Business Bay",
    stars: 5,
  },
];

export const LANGUAGES = [
  { name: "Arabic", native: "العربية", flag: "🇦🇪" },
  { name: "English", native: "English", flag: "🇬🇧" },
  { name: "Russian", native: "Русский", flag: "🇷🇺" },
  { name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { name: "Mandarin", native: "普通话", flag: "🇨🇳" },
];

export const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "RERA Compatible",
    description:
      "Built for RERA-licensed agents. Fully compliant with UAE telecom and data regulations.",
  },
  {
    icon: Zap,
    title: "24/7 Uptime",
    description: "No downtime. No sick days. Every call answered, every hour.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description:
      "Call recordings and lead data handled under strict data protection policies.",
  },
  {
    icon: Settings,
    title: "Fully Managed",
    description:
      "You do nothing technical. Beni builds, tests, and maintains everything.",
  },
];

export const ROI_CONFIG = {
  miss_rate: 0.3,
  close_rate: 0.1,
  avg_commission_aed: 20000,
  annual_plan_cost_usd: 5388,
};

export const ABOUT_ME = {
  eyebrow: "The person behind the system",
  headline: "Hi, I'm Beni.",
  photo: "/99C77AD5-77AC-432C-B176-07C8069699FB_1_105_c.jpeg",
  bio: [
    "I built ScaleWithBeni because I watched great agents lose deals to voicemail. Not because they were bad at sales — because they were busy doing the job.",
    "I'm not a faceless SaaS. I'm one person who builds, configures, and monitors your system. You get my direct line, not a support ticket queue.",
    "Every system I build is set up for the Dubai market specifically — Arabic and English first, Russian, Hindi, and Mandarin when your leads need it.",
  ],
  cta: "Book a 20-minute call with Beni",
};
