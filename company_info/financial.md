# Financial Reference — ScaleWithBeni

> Cross-reference: [./business.md](./business.md) for company overview | [./legal.md](./legal.md) for invoicing requirements and tax obligations | [./services.md](./services.md) for what each tier includes technically.

---

## 1. Pricing Philosophy

ScaleWithBeni is priced on ROI, not cost comparison. The anchor frame for every sales conversation:

**A single closed deal in Dubai generates AED 10,000–30,000 in commission for the agent.** That is $2,720–$8,170 USD per deal. The Growth plan at $449/month costs the agent $5,388/year — less than one deal. If the system helps the agent close even one additional deal per year that they would have otherwise lost to slow follow-up, the subscription has paid for itself 5–15x.

This framing should appear in proposals, onboarding conversations, and monthly reports. Never pitch on features — always anchor to deal value recovered.

---

## 2. Service Tiers

| Tier | Name | Monthly Price | Ideal For | Inbound Call Fallback |
|---|---|---|---|---|
| 1 | Starter | $299/month | Solo agents with 20–80 leads/month wanting to test AI voice qualification | Not included (add-on: $49/month) |
| 2 | Growth | $449/month | Solo agents with 80–200 leads/month who need voice + multi-channel follow-up ← **primary target** | Included |
| 3 | Pro | $649/month | High-volume agents (200+ leads/month) needing the full stack including property matching | Included |
| 4 | Team | $1,199/month | Small brokerages with 3–5 agents sharing a lead pool and system | Included (all agents' numbers) |

**Pricing psychology:** Pro anchors the perception of Growth. When presented with all four options, Growth at $449 reads as the intelligent middle choice between a limited Starter and an expensive Pro. Team is positioned as a separate category (brokerage-level), not a direct upgrade from Pro.

---

## 3. Tier Breakdown

### Starter — $299/month

- **AI Voice Agent:** Up to 500 outbound calls/month (based on ~80 lead volume with retry logic)
- **Languages:** English + one additional language (Arabic, Russian, or Hindi — client selects at onboarding)
- **Integrations:** 1 lead source (Property Finder, Bayut, or Dubizzle — client selects)
- **Booking:** Cal.com integration for meeting scheduling
- **Reporting:** Monthly email summary (no live dashboard)
- **Support:** Async WhatsApp support, 4-hour response SLA (business hours)
- **Onboarding:** 2-week sprint included
- **Inbound Call Fallback:** Not included — available as add-on at $49/month
- **Not included:** WhatsApp follow-up sequences, property matching, second lead source, Arabic QA review

### Growth — $449/month ← Primary Target

- **AI Voice Agent:** Up to 1,500 outbound calls/month
- **Languages:** English + Arabic (Gulf) + one additional language (Russian or Hindi)
- **Integrations:** Up to 2 lead sources
- **Booking:** Cal.com integration
- **Follow-Up System:** WhatsApp + email sequences (New Lead, Post-Call, Re-Engagement — full suite)
- **Inbound Call Fallback:** Included — Twilio DID provisioned; carrier forwarding setup provided; AI answers missed direct calls and sends agent WhatsApp summary
- **Reporting:** Live Looker Studio dashboard, updated daily
- **Support:** Async WhatsApp support, 4-hour response SLA
- **Onboarding:** 2-week sprint included
- **Not included:** Property matching assistant, additional languages beyond 3, Arabic voice QA review

### Pro — $649/month

- **AI Voice Agent:** Unlimited calls (subject to fair use — >3,000 calls/month requires pre-approval)
- **Languages:** English + Arabic (MSA + Gulf) + Russian + Hindi (4 languages standard)
- **Integrations:** All 3 major portals (Property Finder, Bayut, Dubizzle) + CSV upload
- **Booking:** Cal.com integration
- **Follow-Up System:** Full WhatsApp + email suite + custom sequence creation (1 custom per quarter)
- **Inbound Call Fallback:** Included — same as Growth; AI handles all missed direct calls with full qualification flow
- **Property Matching Assistant:** Active — GPT-4o powered shortlist + multilingual pitches
- **Reporting:** Live Looker Studio dashboard + monthly video review call (30 min)
- **Arabic Voice QA:** 1 hour/month native speaker review of Arabic call samples
- **Support:** Priority WhatsApp, 2-hour response SLA
- **Onboarding:** 2-week sprint included; dedicated onboarding call with Beni

### Team — $1,199/month

- Everything in Pro, applied to 3–5 named agents sharing a system
- Shared Airtable CRM with agent-level lead assignment and visibility controls
- Up to 3 agent WhatsApp profiles connected
- 5 language support (adds Mandarin to the Pro language set)
- **Inbound Call Fallback:** Included for all agents' UAE numbers — one Twilio DID provisioned per agent; carrier forwarding setup provided for each
- Monthly reporting per individual agent + team rollup
- Dedicated monthly strategy call (45 min) with Beni
- **Requires:** Existing CRM or willingness to adopt Airtable as primary; 3-month minimum commitment

---

## 4. Add-Ons

| Add-On | Price | Description |
|---|---|---|
| Additional language | $49/month | Add a 5th language to voice agent and sequences (subject to availability of TTS voice quality in target language) |
| Extra call volume | $79/month | +500 additional outbound calls/month beyond tier limit |
| Additional custom sequence | $39/month | One additional automated sequence (trigger + message set) beyond what the tier includes |
| Custom Airtable build | $299 one-time | Full Airtable CRM setup including custom views, automations, and property database template |
| Arabic voice QA | $149/month | Monthly native speaker review of Arabic call recordings: accuracy, tone, dialect appropriateness (recommended for Pro clients with >50 Arabic calls/month) |
| Inbound Call Fallback | $49/month | Available as an add-on for Starter clients — Twilio DID provisioned, carrier forwarding setup provided, AI answers missed direct calls. Growth and above: included in base price. |

---

## 5. Revenue Model and Projections

### Key Assumptions

- **Blended ARPC (Average Revenue Per Client):** ~$380/month — weighted average assuming 40% Starter, 45% Growth, 15% Pro/Team
- **Monthly churn:** 8% — conservative estimate for a niche B2B subscription with high switching costs
- **New clients/month (target):** 2 in months 1–3, scaling to 3–4 by months 6–12
- **Cost scaling:** Fixed costs ~$700 at 5 clients; variable costs scale with call volume

### Monthly Projection (12-Month)

| Month | Clients (Start) | New Clients | Churned | Clients (End) | Gross Revenue | Est. Costs | Net Profit |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 2 | 0 | 2 | $760 | $750 | $10 |
| 2 | 2 | 2 | 0 | 4 | $1,520 | $820 | $700 |
| 3 | 4 | 2 | 1 | 5 | $1,900 | $870 | $1,030 |
| 4 | 5 | 2 | 1 | 6 | $2,280 | $950 | $1,330 |
| 5 | 6 | 2 | 1 | 7 | $2,660 | $1,050 | $1,610 |
| 6 | 7 | 3 | 1 | 9 | $3,420 | $1,200 | $2,220 |
| 7 | 9 | 2 | 1 | 10 | $3,800 | $1,280 | $2,520 |
| 8 | 10 | 3 | 1 | 12 | $4,560 | $1,500 | $3,060 |
| 9 | 12 | 2 | 1 | 13 | $4,940 | $1,600 | $3,340 |
| 10 | 13 | 2 | 1 | 14 | $5,320 | $1,700 | $3,620 |
| 11 | 14 | 2 | 1 | 15 | $5,700 | $1,850 | $3,850 |
| 12 | 15 | 3 | 1 | 17 | $6,460 | $2,000 | $4,460 |

**Target steady state (month 12–18):** 15–18 active clients generating $5,700–$7,600 gross monthly revenue with estimated costs of $1,850–$2,200, yielding **$3,500–$5,400 net monthly profit** before Hungarian tax.

**Note:** Net profit figures are pre-tax. Apply 9% Hungarian corporate income tax to annual taxable profit.

### Break-Even Analysis

- Break-even at current fixed cost baseline (~$750/month): **3 Growth clients** paying $449/month
- Comfortable operating margin (>50%): **7+ clients** at blended $380 ARPC

---

## 6. Monthly Operating Costs

| Tool | Plan | Monthly Cost (USD) | Type | Notes |
|---|---|---|---|---|
| Vapi | Pay-per-minute | $0.07/minute + $0.05/call | Variable | ~$0.40–0.60 per full call. At 15 clients: est. $1,000–1,575/month. This is the dominant variable cost. |
| Twilio | Pay-per-use | ~$1–2/number/month + $0.013/min inbound routing | Variable | One DID per client with inbound fallback. At 15 clients: ~$15–30/month fixed + usage. Small cost vs. Vapi. |
| OpenAI API | Pay-per-token | $50–$200 | Variable | Scales with call volume and property matching usage. GPT-4o pricing. |
| n8n | Self-hosted VPS | $20–$40 | Fixed | Hetzner or DigitalOcean VPS (4GB RAM minimum). |
| Make.com | Core or Pro | $29–$99 | Fixed | Backup automation platform; keep subscription for redundancy. |
| Airtable | Team plan | $20 | Fixed | Per-workspace; one workspace per client can be managed under a team plan. |
| 360dialog | WhatsApp API | $49–$99 | Fixed | Includes WhatsApp Business API access; pricing scales with message volume. |
| Brevo | Starter or Business | $25 | Fixed | Email delivery for sequences. Includes 20,000 emails/month on Starter. |
| Cal.com | Teams | $15 | Fixed | Calendar booking for all clients under one account. |
| Stripe | Pay-per-transaction | ~$50–$150 | Variable | ~2.9% + $0.30 per transaction. At $5,000 revenue: ~$175. Estimate conservatively. |
| Wise | Business | ~$20–$50 | Variable | Transfer fees for USD → HUF conversion. Wise typically 0.4–0.5% vs. bank SWIFT. |
| Domain + DNS | Annual / monthly | ~$10 | Fixed | scalewithbeni.com or equivalent. Cloudflare for DNS. |
| Bitwarden | Teams | $4 | Fixed | Password manager for all service credentials. |

### Cost Summary by Scale

| Scale | Active Clients | Estimated Monthly Costs | Notes |
|---|---|---|---|
| Baseline | 5 clients | $700–$900 | Vapi ~$300, fixed tools ~$270, variable ~$130 |
| Mid-scale | 10 clients | $1,100–$1,400 | Vapi ~$650, fixed ~$300, variable ~$250 |
| Target | 15 clients | $1,500–$2,000 | Vapi ~$1,100, fixed ~$320, variable ~$380 |

**Critical note on Vapi:** Voice call costs are the single largest variable expense. At 15 clients averaging 100 calls/month each at $0.40/call: $600/month. At higher call volumes (Pro tier, large portals): up to $1,575/month. This is why Starter is priced at $299 minimum — below 5 clients, Vapi costs alone make sub-$299 pricing unprofitable.

---

## 7. Payment Terms and Invoicing

### Payment Terms

- **Due date:** Monthly, in advance. First payment due before any build work commences.
- **Grace period:** 7 calendar days from invoice date
- **Late payment:** After 7-day grace: 1.5%/month compound interest on outstanding amount
- **Service suspension:** At day 14 of non-payment, all automated systems are paused. Client is notified at day 10 with final warning.
- **Contract termination:** At day 30 of non-payment, contract may be terminated and offboarding SOP initiated.

### Accepted Payment Methods

| Method | Details | Fees |
|---|---|---|
| Stripe | Credit/debit card, monthly recurring | 2.9% + $0.30/transaction — Stripe fees are absorbed into pricing |
| Wise | Business transfer, USD to ScaleWithBeni Wise account | Client bears Wise transfer fees |
| SWIFT Bank Transfer | To ScaleWithBeni Kft. Hungarian bank account | Client bears SWIFT fees (typically $15–25) |

**Currency policy:** All invoices are denominated and payable in USD. ScaleWithBeni does not accept AED, EUR, or HUF from clients. For internal Hungarian accounting, USD amounts are converted at the MNB official exchange rate on the invoice date.

### Annual Subscription Option

Clients paying for 12 months upfront receive **2 months free** (equivalent to a 16.7% discount). Framing: always present as "get 2 months free" — not "save 16%" or "16% discount." The anchoring effect of 2 free months is psychologically stronger.

- Growth annual: $449 × 10 months = $4,490 (saving $898 vs. monthly)
- Pro annual: $649 × 10 months = $6,490 (saving $1,298 vs. monthly)

Annual subscriptions are non-refundable except in cases of ScaleWithBeni service failure. Cancellation mid-year does not entitle client to a pro-rata refund of prepaid months.

### Invoice Template Requirements

Every invoice must include:

| Field | Value |
|---|---|
| Seller name | ScaleWithBeni Korlátolt Felelősségű Társaság |
| Seller registration number | [REGISTRATION NUMBER PLACEHOLDER] |
| Seller address | [HUNGARIAN BUSINESS ADDRESS PLACEHOLDER] |
| Seller bank account | [HUNGARIAN IBAN PLACEHOLDER] |
| Client legal name | As per UAE trade license |
| Client UAE trade license number | As per contract |
| Invoice number | Sequential: `SWB-YYYY-NNN` (e.g., SWB-2026-001) |
| Invoice date | Date of issue |
| Service period | "Subscription: [Month Year]" |
| Amount | USD amount + line item breakdown |
| VAT note | "Reverse charge applies — customer to account for any applicable VAT in their jurisdiction. VAT 0% per place of supply rules." |
| Payment terms | "Due within 7 days of invoice date" |
| Payment methods | Stripe link or Wise/SWIFT instructions |

---

## 8. Tax Considerations

### Hungarian Corporate Income Tax (CIT)

- Rate: **9%** on taxable profit
- Applies to all revenue, including USD revenue from UAE clients (converted at MNB rate)
- Annual filing deadline: 31 May for the prior calendar year
- Estimated advance tax payments: quarterly (15 March, 15 June, 15 September, 15 December)
- Engage a certified Hungarian accountant (könyvelő) for all CIT filings — this is not optional for a Kft.

### VAT

- ScaleWithBeni's services to UAE B2B clients fall outside the scope of Hungarian VAT (place of supply: UAE)
- ScaleWithBeni must be VAT-registered in Hungary if domestic (Hungarian) revenue exceeds HUF 18 million/year; B2B cross-border services do not count toward this threshold
- If ScaleWithBeni ever acquires Hungarian-based clients, a separate VAT analysis is required

### KATA — Not Applicable

The 2022 KATA reform eliminated KATA eligibility for B2B revenue from foreign clients. ScaleWithBeni operates under standard Kft. taxation. Do not attempt to use KATA for this business model.

### Dividend vs. Salary

As sole member and managing director of the Kft., Beni may extract profit as:
- **Salary (munkabér):** Subject to Hungarian income tax (SZJA) + social contributions (~33.5% employer + 18.5% employee on gross)
- **Dividend (osztalék):** Subject to 15% SZJA + 13% social contribution (on amounts up to 24× the minimum wage), or 15% SZJA only above that threshold

Consult a Hungarian accountant for the optimal extraction strategy — the dividend route is typically more tax-efficient for a profitable Kft. at this revenue scale.
