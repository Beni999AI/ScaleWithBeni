# Operations Reference — ScaleWithBeni

> Cross-reference: [./business.md](./business.md) for company overview | [./services.md](./services.md) for technical specs | [./legal.md](./legal.md) for data handling and breach response | [./financial.md](./financial.md) for payment terms.

---

## 1. Full Tool Stack

| Category | Tool | Plan / Tier | Monthly Cost (USD) | Purpose | Access Notes |
|---|---|---|---|---|---|
| AI Voice | Vapi | Pay-per-minute | Variable (~$0.07/min) | Primary voice agent infrastructure | Dashboard: app.vapi.ai — API key in credential vault |
| AI Voice (backup) | Bland AI | Pay-per-minute | Variable | Failover when Vapi is unavailable | Dashboard: app.bland.ai — configured in n8n failover workflow |
| Inbound Call Routing | Twilio | Pay-per-use | ~$1–2/number/month + $0.013/min inbound routing | Inbound DID provisioning; routes missed direct calls to Vapi via webhook | console.twilio.com — API key in credential vault |
| Automation | n8n | Self-hosted | ~$25 (VPS only) | Core workflow engine — connects all tools | Self-hosted on Hetzner VPS. SSH access via key only. |
| Automation (backup) | Make.com | Core | $29 | Backup orchestration; some client-facing automations | Account: [email placeholder] |
| Language Model | OpenAI | API (pay-per-token) | Variable ($50–200) | Property matching, transcript analysis, message generation | API key in n8n credential vault |
| CRM / Database | Airtable | Team | $20 | Lead records, property database, client workspaces | One workspace per client; shared team account |
| WhatsApp API | 360dialog | Business | $49–99 | Official WhatsApp Business API gateway | Partner dashboard: hub.360dialog.com |
| Email | Brevo | Starter | $25 | Email sequence delivery | dashboard.brevo.com |
| Calendar | Cal.com | Teams | $15 | Meeting booking for all clients | app.cal.com — one event type per agent |
| Payments | Stripe | Pay-per-transaction | Variable (~2.9% + $0.30) | Client subscription billing | dashboard.stripe.com |
| Payments | Wise | Business | Variable (~0.4%) | International transfers and FX conversion | wise.com/business |
| Reporting | Looker Studio | Free | $0 | Client dashboards connected to Airtable | lookerstudio.google.com |
| VPS / Infrastructure | Hetzner | CPX21 (4GB RAM) | $7–10/month | n8n hosting, webhook endpoints | SSH key access; UFW firewall configured |
| Secrets Management | n8n Credential Vault | Built-in | $0 | All API keys stored here — never in plaintext | Accessed via n8n interface only |
| Password Manager | Bitwarden | Teams | $4 | All service credentials | bitwarden.com |
| Domain / DNS | Cloudflare | Free / Registrar | ~$10/year | scalewithbeni.com; webhook subdomains | cloudflare.com |
| AI (backup LLM) | Anthropic Claude | API | Variable | Fallback for GPT-4o; alternative for specific tasks | API key in credential vault |

---

## 2. Client Onboarding SOP

### Pre-Onboarding (Before Build Starts)

- [ ] Client contract signed (wet signature or DocuSign equivalent)
- [ ] DPA (Appendix A) signed — do not proceed without this
- [ ] First month's payment received and cleared in Stripe or Wise
- [ ] Client's WhatsApp Business number verified on 360dialog (client handles Meta verification; ScaleWithBeni connects after)
- [ ] Client provides: RERA license number, UAE trade license, Cal.com login or email for account setup
- [ ] Onboarding call scheduled (Week 1 — Day 1)

### Week 1: Discovery

**Day 1 — Onboarding Call (60 minutes)**

Agenda:
1. Lead sources: which portals? (Property Finder / Bayut / Dubizzle — confirm webhook access)
2. Lead volume: how many per month per source? (Determines call volume and tier validation)
3. Languages needed: what nationalities are the agent's primary buyers?
4. Calendar setup: existing Cal.com account or new? Event type name, available hours, buffer times
5. CRM situation: does the client have an existing CRM? (Migrate data to Airtable or create fresh)
6. Property database (Pro/Team only): does the agent have a property list we can import to Airtable?
7. Agent tone preferences: review the standard call script — any changes to agent name, brokerage name, wording?
8. Reporting preferences: what metrics matter most to this agent?
9. Inbound call fallback (Growth+ only): does the agent want inbound call fallback? Confirm carrier (Du or Etisalat). Confirm the agent can set up conditional call forwarding on their SIM (most personal plans support this; flag if they have a corporate SIM).

**Days 2–5 — Discovery Outputs**

- [ ] Webhook URLs obtained from Property Finder / Bayut / Dubizzle (client's portal account)
- [ ] Airtable workspace created, base structure configured (leads table, properties table if Pro)
- [ ] Cal.com event type created for this agent
- [ ] n8n workflow duplicated from template, updated with client-specific variables
- [ ] Call scripts finalised in all required languages
- [ ] WhatsApp templates drafted and submitted to Meta for pre-approval (allow 2–5 business days for Meta approval)
- [ ] If inbound fallback included (Growth+): Twilio number provisioned for this client; carrier forwarding USSD code prepared (Du or Etisalat, as confirmed in discovery call)

### Week 2: Build

**Days 6–9 — Core Build**

- [ ] n8n trigger configured for each lead source webhook
- [ ] Vapi voice agent created: script loaded, language configured, Cal.com integration connected
- [ ] Retry logic configured in n8n (3 attempts with timing)
- [ ] Post-call n8n workflow: transcript parsing, Airtable update, agent WhatsApp summary
- [ ] Follow-up sequences built in n8n (Growth/Pro/Team): WhatsApp + email triggers per status
- [ ] Property matching workflow configured in n8n + Airtable (Pro/Team only)
- [ ] Looker Studio dashboard created: connected to Airtable; visualisations for call success rate, booking conversion, lead source breakdown, sequence metrics
- [ ] If inbound fallback included: Twilio inbound number configured with webhook → n8n → Vapi inbound session
- [ ] If inbound fallback included: Inbound call script (receptionist variant) loaded in Vapi — confirm AI disclosure within 5 seconds, agent name and brokerage name correct

**Days 10–12 — Internal Testing**

- [ ] Place 5 test calls (2 English, 1 Arabic, 1 Russian or Hindi as applicable) — Beni calls from a personal number
- [ ] Verify transcript captured and parsed correctly in Airtable
- [ ] Verify Cal.com booking created and confirmation sent
- [ ] Verify agent WhatsApp summary sent correctly
- [ ] Send test WhatsApp messages through each sequence step — verify personalisation variables populate
- [ ] Verify opt-out (reply STOP) removes lead from sequence and suppression list
- [ ] Test property matching workflow with 5 sample buyer profiles (Pro/Team only)
- [ ] Review Looker Studio dashboard: all data flowing correctly
- [ ] If inbound fallback included: Test inbound call — Beni calls the Twilio DID directly, confirms AI answers with receptionist greeting, qualifies, offers booking
- [ ] If inbound fallback included: Test carrier forwarding — call agent's UAE number from a personal phone, let it ring 15 seconds, confirm Twilio picks up and AI answers

### Go-Live

**Days 13–14 — Handover and Launch**

- [ ] Handover call with agent (30 minutes):
  - Walk through the Airtable lead view — how to read lead records and statuses
  - Show how to mark a viewing as completed (triggers Post-Viewing sequence)
  - Explain how to add a lead to suppression list manually if needed
  - Confirm agent's phone number is correct in system for WhatsApp summaries
  - Set expectations: call volume monitoring in Week 1, Beni reviews daily
  - If inbound fallback included: Walk agent through carrier forwarding USSD setup (2 minutes, done on their phone) — confirm forwarding is active before go-live. Provide USSD code to deactivate in case they ever need to disable it.
- [ ] Enable live webhooks — system is now live
- [ ] Monitoring week: Beni reviews call logs every day for first 7 days; checks booking conversion rate
- [ ] Day 21 check-in: brief WhatsApp message to agent — any issues? Any language or script adjustments needed?

---

## 3. Weekly Operations Checklist

Run every Monday morning (or Sunday evening Dubai time) for each active client:

### Per Client

| Check | Metric / Action | Alert Threshold |
|---|---|---|
| Call success rate | % of triggered calls that connected (not failed/no answer) | <60% — investigate number quality or time-of-day patterns |
| Booking conversion | % of connected calls that resulted in a booked meeting | <20% — review script; possibly language mismatch |
| Inbound call answer rate | % of forwarded calls answered by AI (Twilio DID received call → Vapi responded) | <95% — check Twilio webhook logs and Vapi availability |
| Sequence open rate | WhatsApp message read receipts (if enabled) | <40% — review template relevance |
| Sequence reply rate | Replies to sequence messages | <5% — review message content and timing |
| Flagged opt-outs | Any leads who opted out this week | Review if volume unusually high (>5% of reached leads) |
| Failed workflows | n8n error logs | Any red — investigate and fix immediately |
| Billing status | Stripe — payment status for current month | Overdue → follow escalation process |
| Suppression list | Any additions from opt-out or bad number | Confirm suppressions are working |

### Global

- [ ] Check Vapi dashboard for any API errors or unusual latency
- [ ] Check 360dialog dashboard for any WhatsApp template rejections or account warnings
- [ ] Check OpenAI API usage — confirm within budget
- [ ] Check n8n execution history — no persistent errors
- [ ] Review any support messages from clients — respond within 4 hours

---

## 4. Automation Stack Map

This documents exactly how data flows through the system from lead submission to reporting.

```
LEAD SUBMISSION (Property Finder / Bayut / Dubizzle / Form)
        │
        ▼
WEBHOOK → n8n (Workflow: Lead Intake)
        │
        ├─ Parse: name, phone, email, property interest, source
        ├─ Validate: phone format (E.164), duplicate check vs. Airtable
        ├─ Create: Airtable lead record (status: "New")
        │
        ▼
n8n → VAPI (Workflow: Voice Call Trigger)
        │
        ├─ Success: Vapi webhook returns transcript + outcome
        │     │
        │     ├─ n8n: Update Airtable (status, qualification data, call notes)
        │     ├─ n8n → CAL.COM: Confirm booking (if booked during call)
        │     └─ n8n → 360DIALOG: Send WhatsApp summary to agent
        │
        └─ No Answer: n8n schedules retry (Workflow: Retry Logic)
              │
              └─ 3 failures → status "Unreachable" → trigger Unreachable sequence
        │
        ▼
AIRTABLE (Lead Record — persistent data store)
        │
        ├─ Status change triggers: n8n (Workflow: Sequence Router)
        │     │
        │     ├─ "Post-Call Qualified" → WhatsApp confirmation + meeting reminder
        │     ├─ "Post-Call Unqualified" → 3-message nurture sequence
        │     ├─ "Unreachable" → 4-message WhatsApp + email sequence
        │     ├─ "Viewing Completed" (agent marks) → Post-Viewing sequence
        │     └─ "Dormant 30 days" (scheduled check) → Re-Engagement sequence
        │
        ├─ 360DIALOG → WhatsApp delivery
        └─ BREVO → Email delivery
        │
        ▼
LOOKER STUDIO (connected to Airtable via API)
        │
        └─ Auto-refreshed dashboard: call metrics, booking conversion, sequence metrics
```

### Property Matching Flow (Pro / Team Only)

```
AGENT INPUT (Airtable form or n8n interface)
        │
        ▼
n8n: Query Airtable property database (filter by budget, bedrooms, area)
        │
        ▼
n8n → OPENAI GPT-4o: Pass filtered properties + buyer profile
        │
        ▼
GPT-4o: Return ranked shortlist + personalised pitches
        │
        ▼
n8n → 360DIALOG: WhatsApp to agent (top 3)
n8n → AIRTABLE: Save full output to buyer record
```

### Inbound Call Fallback Flow (Growth / Pro / Team)

```
LEAD DIALS agent's UAE number (Du / Etisalat SIM)
        │
        ▼
Agent does not answer within ~15 seconds
        │
        ▼
CARRIER conditional call forwarding fires
  → call routed to TWILIO inbound DID (provisioned per client)
        │
        ▼
TWILIO webhook → n8n (Workflow: Inbound Call Handler)
        │
        ▼
n8n → VAPI: Initiate inbound session (receptionist voice agent)
        │
        ▼
VAPI AI answers → receptionist greeting + AI disclosure (<5 seconds)
  → qualification questions (budget, timeline, property type)
  → Cal.com booking offer
        │
        ├─ Booking accepted → CAL.COM API → confirmation sent
        │
        └─ Booking declined → lead status "Qualified, no booking" → WhatsApp follow-up triggered
        │
        ▼
Post-call: VAPI sends transcript to n8n
        │
        ├─ AIRTABLE: Lead record created (source: "Inbound Direct Call", qualification data)
        └─ 360DIALOG: Agent WhatsApp summary sent
```

---

## 5. Incident Response SOP

### Vapi Is Down

1. Check status.vapi.ai — confirm outage vs. local issue
2. If confirmed outage: n8n failover workflow activates Bland AI automatically (if configured)
3. Notify affected clients via WhatsApp: "Our voice calling system is experiencing a temporary outage due to a third-party provider issue. WhatsApp follow-up sequences remain active. We'll notify you when voice calls resume." (Send within 60 minutes of confirmed outage)
4. Log outage start time. When resolved: calculate affected call volume. If >2 hours of missed call window for a client: issue pro-rata credit per SLA terms.

### n8n Workflow Fails

1. n8n sends error alert email (configure error workflow to send Telegram/email notification)
2. Identify which workflow failed — check n8n execution log for error details
3. If one client affected: pause that client's active sequences temporarily; fix workflow; re-enable
4. If systemic failure: check VPS health (CPU, memory, disk). Restart n8n service if necessary.
5. For failed lead intakes (missed webhook): re-trigger manually from portal if possible, or contact client to identify leads missed
6. Document all workflow failures in incident log regardless of severity

### Client's WhatsApp Number Gets Flagged by Meta

1. Check 360dialog dashboard for account status and flag reason
2. Common causes: excessive opt-outs, complaint rate, message template issues
3. Immediate actions: pause all outbound WhatsApp for that client's number; review recent message logs for potential cause
4. Contact 360dialog support for reinstatement guidance
5. Notify client immediately: "Your WhatsApp Business number has been temporarily restricted by Meta. We're working with our WhatsApp provider to resolve this. Email sequences remain active."
6. If number is permanently banned: client must register a new WhatsApp Business number. Assist with 360dialog re-setup (covered under service agreement).

### OpenAI API Outage

1. Check status.openai.com — confirm outage
2. Voice agent (Vapi) is unaffected — Vapi uses its own LLM layer; n8n-to-OpenAI calls are for property matching and transcript analysis only
3. Pause property matching tool (Pro/Team clients notified)
4. If transcript analysis is delayed: queue transcripts; batch process when API restored
5. Fallback: route property matching calls to Anthropic Claude API (configured as backup in n8n)

### Inbound Fallback Not Answering

Triggered by: agent reports that callers to their UAE number are going to voicemail instead of reaching the AI, or inbound call answer rate drops below 95% on weekly check.

1. Check Twilio console — confirm the DID is active and the webhook URL is correct
2. Check n8n execution log — confirm Twilio webhook is firing and reaching n8n
3. Check Vapi — confirm inbound session configuration is active and the agent is enabled
4. Verify carrier forwarding is still active on the agent's SIM: call the agent's number from a test phone and let it ring 15+ seconds. If the Twilio DID does NOT ring, forwarding has been deactivated.
5. If forwarding is inactive: provide the agent with the USSD activation code again and confirm re-activation. Agents sometimes reset forwarding after a phone reset, SIM swap, or carrier plan change.
6. If Twilio or Vapi is confirmed active but calls still not answered: escalate to Twilio support or Vapi support as appropriate. Log incident.

### Agent Reports Leads Not Being Called

1. Check n8n execution log for the agent's trigger workflow — are webhooks firing?
2. Check Property Finder / Bayut / Dubizzle portal settings — webhook URL still configured? (Portals sometimes reset these on account changes)
3. Check Vapi dashboard — are calls being initiated? Failing?
4. Check Airtable — are lead records being created? (If yes, problem is post-intake; if no, problem is webhook)
5. Test with a fresh form submission to confirm end-to-end flow
6. Notify client of findings and ETA for fix within 2 hours of report

---

## 6. Client Offboarding SOP

Triggered by: client sends 30-day written notice via WhatsApp or email.

### Days 1–3 (Notice Received)

- [ ] Acknowledge receipt of notice in writing — confirm final billing date
- [ ] Send final invoice for remaining days in current billing cycle
- [ ] Pause all new sequence enrollments (leads in active sequences continue through completion)
- [ ] Notify client: "We've received your cancellation notice. Your system will remain fully active until [end date]. We'll begin data export preparation."

### Days 4–25 (Wind-Down)

- [ ] Export all lead data from Airtable as CSV — send to client via Wise/email
- [ ] Export Cal.com appointment history (client may want records)
- [ ] Export Brevo email campaign reports
- [ ] Client to confirm receipt of all data exports

### Day 28–30 (Final Days)

- [ ] Disable all n8n webhooks for this client (no new calls or messages)
- [ ] Revoke client-specific API keys (Airtable personal access token, Cal.com webhook)
- [ ] Delete client Airtable workspace (after data export confirmed received)
- [ ] Delete client Vapi agent configuration
- [ ] If inbound fallback was active: release (delete) the Twilio inbound DID provisioned for this client
- [ ] If inbound fallback was active: confirm agent has deactivated carrier call forwarding on their SIM — provide deactivation USSD code (`##61#` for both Du and Etisalat) and ask them to confirm
- [ ] Remove client WhatsApp number from 360dialog
- [ ] Remove client from Brevo sender and contact lists
- [ ] Remove client data from Looker Studio dashboard

### Post-Offboarding

- [ ] Send Data Deletion Confirmation in writing (email) within 14 days of go-dark date. Include: list of all systems data was deleted from, deletion date.
- [ ] Archive contract, DPA, and invoice records per retention schedule (10 years for contracts; 7 years for billing records — see [./legal.md](./legal.md) Section 7)
- [ ] Mark client record in internal tracker as "Offboarded" with date and reason (if known)

---

## 7. Vendor Management

| Vendor | Primary Contact | Account ID / Username | Subscription Renewal | Notes |
|---|---|---|---|---|
| Vapi | [support@vapi.ai](mailto:support@vapi.ai) | [PLACEHOLDER] | Monthly, pay-per-use | Monitor usage daily at scale |
| Bland AI | [PLACEHOLDER] | [PLACEHOLDER] | Pay-per-use | Backup only; minimal activity |
| Twilio | [PLACEHOLDER] | [PLACEHOLDER] | Pay-per-use | One DID per client with inbound fallback. Monitor monthly usage per client. |
| Hetzner | [PLACEHOLDER] | [PLACEHOLDER] | Monthly | VPS for n8n; renew automatically |
| 360dialog | [PLACEHOLDER] | [PLACEHOLDER] | Monthly | Critical — any payment failure = WhatsApp down |
| OpenAI | [PLACEHOLDER] | [PLACEHOLDER] | Pay-per-use | Set usage cap alert at $300/month |
| Airtable | [PLACEHOLDER] | [PLACEHOLDER] | Monthly | Auto-renew on credit card |
| Brevo | [PLACEHOLDER] | [PLACEHOLDER] | Monthly | Auto-renew |
| Cal.com | [PLACEHOLDER] | [PLACEHOLDER] | Monthly | Auto-renew |
| Stripe | [PLACEHOLDER] | [PLACEHOLDER] | Pay-per-use | Review monthly for declined charges |
| Wise | [PLACEHOLDER] | [PLACEHOLDER] | Pay-per-use | Review conversion rates vs. MNB monthly |
| Cloudflare | [PLACEHOLDER] | [PLACEHOLDER] | Annual (domain) | Domain renews annually — calendar reminder set |

**Vendor redundancy principle:** For every critical tool (Vapi, 360dialog, OpenAI), maintain a configured and tested backup. Test failover quarterly by simulating an outage.

---

## 8. Growth Triggers

ScaleWithBeni is designed to scale as a solo operation. These are the trigger points for bringing in outside help:

| Trigger | Threshold | Action |
|---|---|---|
| QA contractor (Arabic) | >8 active clients with Arabic voice agent or >100 Arabic calls/month | Engage a freelance native Arabic speaker for monthly QA review. ~$300–500/month. |
| QA contractor (Russian / Hindi) | >6 active clients using Russian or Hindi sequences | Engage native reviewer for template and call QA. Monthly. |
| Onboarding specialist | Client waitlist > 3 clients or >2 simultaneous builds | Engage a part-time onboarding contractor trained on the SOP. |
| Part-time ops support | >15 active clients | Hire or contract part-time ops help to handle weekly monitoring and client reporting. |
| Full-time hire consideration | >20 active clients | At this point, solo operation is approaching its ceiling. Evaluate whether to hire a full-time ops/account manager or plateau at 20 clients for margin optimisation. |

**Hiring sequence:** Always start with specialists (QA reviewers) before generalists (ops support). Specialists improve service quality without adding management overhead. Generalist ops support only makes sense when the volume of repetitive operational tasks exceeds ~10 hours/week.

**Margin note:** Each client added beyond 15 generates incrementally higher margin because fixed costs are largely already covered. The 15–20 client range is the highest-margin zone for a solo operation.
