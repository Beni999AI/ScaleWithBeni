ScaleWithBeni is a Hungary-registered AI automation agency (Kft.) that builds and operates multilingual AI voice and messaging systems for Dubai real estate agents. Founded and operated by Beni [LAST NAME PLACEHOLDER], the company serves RERA-licensed solo agents and small brokerages who need to respond to leads faster and follow up more consistently than any human operator could manage alone. The business model is subscription-based: clients pay a monthly flat fee and receive a fully managed, always-on automation stack — no technical knowledge required. All services are designed for the Dubai market, with Arabic, English, Russian, and Hindi language support built in from day one.

---

## Mission

Eliminate the revenue lost to slow lead response and inconsistent follow-up by giving every Dubai real estate agent access to automation infrastructure that works like a tireless, multilingual in-house team.

---

## Vision

Every RERA-licensed agent in Dubai, regardless of team size or budget, will have access to enterprise-grade automation systems by 2028. ScaleWithBeni will serve 50+ agents across the UAE, with systems that operate in every major buyer language and plug into every major property portal.

The three-year horizon (2028):
- 50+ active agent subscriptions across Dubai, Abu Dhabi, and Sharjah
- Full integration with Property Finder, Bayut, and Dubizzle APIs
- Standardised onboarding sprint reduced from 2 weeks to 5 days
- Contractor team handling QA, Arabic review, and tier-1 client support

---

## Core Values

| Value | Operational Definition | What Would Violate It |
|---|---|---|
| Quality over quantity | Every system delivered works flawlessly before it goes live; no half-built automations | Rushing a client go-live to hit a revenue milestone |
| Radical automation | If a task runs more than once a week, it should be automated | Manually sending follow-up messages that could be sequenced |
| Privacy-first | Data minimisation in every system; no data collected that isn't necessary for the service | Storing full conversation transcripts indefinitely without a deletion schedule |
| Language respect | Every communication in a lead's preferred language; no machine-translated messages without human review for Arabic | Sending AI-generated Arabic text without a native QA pass |
| Solo-sustainable | Every process, tool choice, and client limit is designed to work with one person operating the business | Taking on 20+ clients without contractor support in place |

---

## Elevator Pitch

### 30-Second (Networking)

"I build AI voice and messaging systems for Dubai real estate agents. When a lead submits a form on Property Finder, my system calls them within 60 seconds, qualifies them in their language — Arabic, English, Russian, Hindi — and books a meeting with the agent automatically. And if a lead calls the agent directly and they're busy, the AI picks up for you — so no direct caller ever goes to voicemail unanswered. Agents get warm, pre-qualified leads; no manual calling, no leads going cold at 11pm."

### Email / DM (Cold Outreach)

**Subject:** Your Property Finder leads — responding faster than humanly possible

Hi [Agent Name],

Dubai property leads expect a callback in under 2 minutes. Most agents call back in 4+ hours — and by then, 3 competitors already have.

I build AI voice agents that call every lead within 60 seconds of form submission, qualify them in their preferred language, and book meetings directly into your calendar. Fully managed, no tech knowledge needed, from AED 1,100/month.

One closed deal pays for 20+ months of the system.

Worth 15 minutes? [Cal.com link]

Beni

### Investor / Partner

ScaleWithBeni addresses a structural gap in the Dubai real estate market: agents receive multilingual inbound leads 24/7 but operate with human availability constraints. Response speed is the single strongest predictor of lead conversion in this market (studies show >5-minute response time reduces conversion by 80%).

The business delivers managed AI automation infrastructure on a recurring subscription model. Unit economics are strong: blended ARPC ~$380/month, infrastructure costs scale sub-linearly with client count, and the service is inherently sticky (once built into an agent's workflow, it's operationally disruptive to remove). Target is 12–15 active clients at $5,400–$7,800 gross monthly revenue, operated profitably by a single person.

---

## Services

Three core services, all fully managed:

**1. AI Inbound Call Fallback**
When a lead calls the agent's UAE number and the agent doesn't answer within ~15 seconds, carrier conditional call forwarding silently routes the call to a Twilio number, which triggers Vapi to answer with an AI voice agent. The AI qualifies the caller, offers to book a meeting, and sends the agent a WhatsApp summary. This captures the highest-intent leads: those who initiated the call themselves. Available from Growth tier upward. Full specification in [./services.md](./services.md).

**2. Automated Follow-Up & Nurture System**
WhatsApp and email sequences that trigger automatically based on lead status, property viewed, and buyer nationality. Built on the official WhatsApp Business API — compliant with Meta's terms and UAE marketing law. Full specification in [./services.md](./services.md).

**3. AI-Powered Property Matching & Listing Assistant**
Agent inputs client preferences; the system returns a ranked shortlist of matching properties with a personalised pitch paragraph per property in the buyer's language. Built on GPT-4o and the agent's own Airtable property database. Full specification in [./services.md](./services.md).

---

## Target Market

### Primary Client Profile

- RERA-licensed solo agent (individual or operating under a brokerage)
- Receives 50–300 inbound leads per month from Property Finder, Bayut, or Dubizzle
- Budget: $300–500/month for automation tools
- Pain points: leads going cold overnight, manual follow-up falling through cracks, not speaking Russian or Hindi fluently
- Tech comfort: uses CRM basics, WhatsApp Business, and Google Calendar; not a developer
- Deal size: AED 800K–3M residential or AED 1M–10M commercial

### Secondary Client Profile

- Small brokerage with 3–10 agents
- Shared lead pool that current admin staff can't handle
- Budget: $800–1,500/month for a team-level system
- Already using some form of CRM (Salesforce, HubSpot, or custom)

### Anti-Profile (Who We Do NOT Serve in 2025)

- Large brokerages with 20+ agents and in-house tech teams (they need enterprise vendors)
- Agents with fewer than 20 leads/month (insufficient volume to justify the investment)
- Agents operating outside the UAE (different legal landscape, portal integrations not built)
- Agents who want to manage the automation themselves (this is a fully managed service)
- Anyone seeking lead generation — ScaleWithBeni handles lead response, not lead acquisition

---

## Competitive Positioning

| Competitor Type | Their Approach | ScaleWithBeni's Advantage |
|---|---|---|
| Generic AI chatbot platforms (Tidio, Intercom) | English-only, form-based, no voice | Native multilingual voice + Arabic Gulf dialect; built for Dubai portals |
| UAE-based CRM vendors (Salesforce, HubSpot) | Heavy CRM with basic automation | Fully managed ops, no CRM admin burden on the agent |
| Virtual assistant agencies | Human VAs on hourly rates | 24/7 availability at a fraction of the cost; no sick days or time-zone gaps |
| DIY automation builders (Make.com, Zapier) | Agent builds and maintains it themselves | Done-for-you: ScaleWithBeni builds, tests, monitors, and maintains everything |
| Local IT consultancies | Custom builds with high one-time cost + ongoing maintenance fees | Subscription model with predictable monthly cost; ongoing management included |

---

## Team Structure

ScaleWithBeni is a solo operation — this is a deliberate structural advantage, not a limitation. A single operator with deep expertise in one niche market delivers faster, more consistent, and more personalised service than a generic agency team.

**Current capacity:** 1 operator (Beni) can sustainably manage up to 15 active clients. At this scale, the majority of client-facing work is strategic (onboarding, QA, reporting) — the automation handles execution.

**Contractor roles activated at scale triggers:**
- Arabic voice QA reviewer — engaged per client at the Pro tier or when volume requires (see [./operations.md](./operations.md) for triggers)
- Onboarding specialist — engaged when client backlog exceeds 3 simultaneous builds
- Part-time ops support — at 15+ active clients

**Scalability note:** The subscription model and standardised SOP (see [./operations.md](./operations.md)) mean that adding clients requires proportionally less time as the system matures. Client 10 takes significantly less setup time than client 1.

---

## Operational Model

- **Pricing:** Monthly subscription, paid in advance. USD-denominated. Annual option available (2 months free). See [./financial.md](./financial.md) for full tier structure.
- **Onboarding:** 2-week sprint from contract signing to go-live. Week 1 is discovery; Week 2 is build and testing.
- **Communication:** WhatsApp-first, async. Beni is available 9am–6pm Dubai time on weekdays. All client comms on WhatsApp Business (operational use only — no cold broadcasts). Response SLA: 4 hours during business hours.
- **Reporting:** Monthly Looker Studio dashboard per client. Metrics: call success rate, booking conversion, sequence open and reply rates, lead source breakdown.
- **Cancellation:** 30-day written notice. Final billing cycle runs to notice date. Data export and deletion handled per [./legal.md](./legal.md).

---

## Technology Stack

| Category | Primary Tool | Backup / Alternative |
|---|---|---|
| AI Voice Calling | Vapi | Bland AI |
| Inbound Call Routing | Twilio | — |
| Workflow Automation | n8n (self-hosted) | Make.com |
| AI Language Model | OpenAI GPT-4o | Anthropic Claude |
| CRM / Database | Airtable | Notion |
| WhatsApp API | 360dialog | Meta Business API direct |
| Email Automation | Brevo (formerly Sendinblue) | Mailchimp |
| Calendar Booking | Cal.com | Calendly |
| Payments (international) | Stripe | — |
| Payments (bank transfer) | Wise | Hungarian SWIFT |
| Reporting / Analytics | Looker Studio | — |

Full stack details including login access notes, costs, and configuration in [./operations.md](./operations.md).

---

## Cross-References

| File | Purpose |
|---|---|
| [./brand_guidelines.md](./brand_guidelines.md) | Visual identity, tone of voice, email/social templates |
| [./legal.md](./legal.md) | GDPR, PDPL, RERA compliance; contract requirements; data retention |
| [./financial.md](./financial.md) | Pricing tiers, revenue projections, operating costs, invoicing |
| [./services.md](./services.md) | Technical specifications for all four services |
| [./operations.md](./operations.md) | Tool stack, SOPs, onboarding workflow, incident response |
