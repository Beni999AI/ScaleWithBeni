import {
  Zap,
  TrendingUp,
  MessageSquare,
  PhoneIncoming,
  PhoneMissed,
  CalendarCheck,
  Monitor,
  FileText,
  Settings,
  Rocket,
  PhoneCall,
  TrendingDown,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "ScaleWithBeni",
  tagline: "AI systems for Dubai real estate. Built and managed by Beni.",
  description:
    "I build the AI infrastructure that closes the gap between you and your competition. Fully managed. Built for Dubai. No tech knowledge needed.",
  calLink: "https://wa.me/36307926211",
  whatsappLink: "https://wa.me/36307926211",
  email: "hello@scalewithbeni.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export const STATS = [
  {
    icon: TrendingUp,
    value: 3,
    suffix: "×",
    prefix: "",
    label: "More Leads Converted with AI Follow-Up",
  },
  {
    icon: Zap,
    value: 60,
    suffix: " sec",
    prefix: "",
    label: "Average AI Response Time",
  },
  {
    icon: CalendarCheck,
    value: 2,
    suffix: " weeks",
    prefix: "",
    label: "From Kickoff to Live System",
  },
  {
    icon: PhoneIncoming,
    value: 30,
    suffix: "K",
    prefix: "AED ",
    label: "Average Commission Per Closed Deal",
  },
];

export const PAIN_CARDS = [
  {
    icon: Monitor,
    title: "Your website loses you before you even speak.",
    description:
      "Leads see your site in 3 seconds and decide. Outdated or slow doesn't say \"professional\" — it says \"move on.\"",
  },
  {
    icon: PhoneMissed,
    title: "Your response time hands leads to your competition.",
    description:
      "A missed call is a lost lead. In Dubai, the agent who responds first wins — always.",
  },
  {
    icon: TrendingDown,
    title: "Your follow-up is leaking money every week.",
    description:
      "80% of sales happen after the 5th contact. Most agents stop at 2, and commissions quietly disappear.",
  },
];

export const SERVICES = [
  {
    icon: PhoneIncoming,
    title: "AI Voice Agent",
    description:
      "When you can't answer, I make sure the lead doesn't go to voicemail — or worse, your competitor. The AI answers, qualifies, and books the meeting for you.",
    href: "/services#voice-agent",
    cta: "See how it works →",
  },
  {
    icon: Monitor,
    title: "Website Design & Build",
    description:
      "Your website is your first impression. A professional, fast, mobile-first site built for Dubai real estate converts 3× more visitors than what most agents are running today.",
    href: "/services#website",
    cta: "See what's included →",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot & Lead Agent",
    description:
      "While you sleep, your chatbot qualifies leads, answers questions about listings, and books viewings — in Arabic, English, Russian, Hindi, or Mandarin.",
    href: "/services#chatbot",
    cta: "See how it works →",
  },
  {
    icon: Zap,
    title: "Automation & Workflow Systems",
    description:
      "Stop spending 5+ hours a week on manual follow-up. I automate your entire lead flow — from portal inquiry to booked meeting — so you focus on closing.",
    href: "/services#automation",
    cta: "See what's included →",
  },
];

export const STEPS = [
  {
    icon: PhoneCall,
    title: "Free Strategy Call (20 min)",
    description:
      "We talk about where you're losing leads today. I show you exactly what I'd build for your situation. No pitch, no pressure — just a clear picture of what's possible.",
  },
  {
    icon: FileText,
    title: "Custom Build Plan",
    description:
      "I map out your system: which services apply, how they connect, what they automate. You see the plan before I start. If it doesn't make sense for your business, I'll tell you.",
  },
  {
    icon: Settings,
    title: "I Build Everything",
    description:
      "You do nothing technical. I configure every tool, write every script, test every flow. You review the live system before it goes to your leads.",
  },
  {
    icon: Rocket,
    title: "Launch & Ongoing Management",
    description:
      "Your system goes live. I monitor it, maintain it, and update it. You close deals. If something breaks or needs updating, I handle it — not you.",
  },
];

export const FAQS = [
  {
    question: "Who is this for?",
    answer:
      "Real estate agents, brokers, and small-to-medium agencies in Dubai who are serious about growing their business. If you're handling 20+ leads per month and feeling like you're leaving money on the table, this is for you.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Four: AI voice agent (never miss a call), website design and build, AI chatbot and lead agent, and automation and workflow systems. You can start with one or get the full stack — I'll tell you what makes sense for your situation on the strategy call.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Custom quotes only. Every client's situation is different — the tools, integrations, and scope vary. I don't believe in one-size-fits-all pricing. Book a call and I'll give you a clear number with no surprises.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None. You need to know how to use WhatsApp and check your email. I handle everything technical — setup, configuration, integration, testing, ongoing maintenance.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most systems are live within 2 weeks of kickoff. More complex builds (full website + automations + AI agent) may take 3–4 weeks. I'll give you a specific timeline on the strategy call.",
  },
  {
    question: "Can I start with just one service?",
    answer:
      "Absolutely. Most clients start with the service that fixes their biggest current problem — usually the voice agent or the website. You can add more over time.",
  },
  {
    question: "What happens after the system is built?",
    answer:
      "I maintain and monitor it. If something breaks, I fix it. If your workflow changes, I update it. You're not left managing a system you don't understand.",
  },
  {
    question: "Where are you based?",
    answer:
      "I'm based in Europe (Hungary), operating remotely. I serve Dubai clients during Gulf business hours (9am–6pm GST). Support is via WhatsApp and email — response time under 4 hours during business hours.",
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

export const ABOUT_ME = {
  eyebrow: "Who Builds This",
  headline: "Hi, I'm Beni.",
  photo: "/99C77AD5-77AC-432C-B176-07C8069699FB_1_105_c.jpeg",
  bio: [
    "I built ScaleWithBeni because great agents kept losing deals — not from bad sales skills, but from missing infrastructure.",
    "I'm one person who builds, monitors, and maintains your entire system. You get my direct line — not a support ticket, not a chatbot. Every system is built specifically for Dubai real estate: the portals, the lead dynamics, the languages.",
  ],
  cta: "Book a 20-minute call with Beni",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/benedek-botos/" },
    { label: "Instagram", href: "https://www.instagram.com/botos_benedek/" },
    { label: "WhatsApp", href: "https://wa.me/36307926211" },
  ],
};
