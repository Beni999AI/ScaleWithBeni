# Services — ScaleWithBeni

> Cross-reference: [./business.md](./business.md) for positioning | [./financial.md](./financial.md) for tier pricing | [./operations.md](./operations.md) for build SOPs | [./legal.md](./legal.md) for AI disclosure and RERA compliance.

---

## Service Overview Matrix

| Service | Tier Availability | Key Integrations | Typical Setup Time |
|---|---|---|---|
| 1. AI Inbound Call Fallback | Growth, Pro, Team (Starter: add-on) | Twilio, Vapi, n8n, Cal.com | 1–2 days |
| 2. Automated Follow-Up & Nurture System | Growth, Pro, Team | n8n, 360dialog (WhatsApp), Brevo (email), Airtable | 3–5 days |
| 3. AI-Powered Property Matching & Listing Assistant | Pro, Team | GPT-4o API, Airtable, n8n | 2–4 days |

Total onboarding sprint: **2 weeks** — Week 1 is discovery, Week 2 is build + testing. All services are built simultaneously where tier includes them. Service 1 adds 1–2 days to Week 2 build (Twilio number provisioning + carrier forwarding setup).

---

## Service 1: AI Inbound Call Fallback

### What It Does

When a lead calls the agent's UAE mobile number and the agent does not answer within approximately 15 seconds, carrier conditional call forwarding silently routes the call to a Twilio inbound DID (one number provisioned per client). Twilio triggers an n8n webhook, which initiates a Vapi inbound session. The AI answers with a receptionist-style greeting, discloses AI status within 5 seconds, qualifies the caller, and offers to book a meeting.

**This service captures the highest-intent lead type: a person who picked up their phone and dialled the agent directly.** They did not fill in a form passively — they made an active decision to call. An unanswered call from this person is the highest-cost missed opportunity in the agent's pipeline.

### Why Inbound Converts Better Than Outbound

| Factor | Inbound Fallback (Service 1) |
|---|---|
| Lead intent | Proactively called — maximum intent |
| Interruption factor | They initiated; they are ready to talk |
| Trust baseline | They dialled the agent's number — implicit trust |
| Conversion expectation | Typically higher — caller already decided to engage |

### Technical Architecture

```
Lead dials agent's UAE number (Du / Etisalat)
        │
        ▼
Carrier conditional call forwarding fires after ~15 seconds (no answer)
  → forwards to Twilio inbound DID (one number provisioned per client)
        │
        ▼
Twilio webhook → n8n (Workflow: Inbound Call Handler)
  → Vapi API call initiated (inbound session)
        │
        ▼
Vapi AI answers call → receptionist-style greeting + AI disclosure (within 5 seconds)
  → qualification questions → Cal.com booking offer
        │
        ▼
Post-call: same workflow as outbound
  → Airtable lead record created (source: "Inbound Direct Call")
  → Agent WhatsApp summary sent via 360dialog
```

### Carrier Setup (Client Side — One-Time, ~2 Minutes)

The agent activates conditional call forwarding directly on their SIM using a USSD code. No app or technical knowledge required. ScaleWithBeni provides the exact USSD code instructions during handover.

**Du (UAE carrier):**
- Activate: `**61*[Twilio DID in E.164 format]*11*15#` (forward on no-answer after 15 seconds)
- Deactivate: `##61#`
- Verify: `*#61#`

**Etisalat / e& (UAE carrier):**
- Activate: `**61*[Twilio DID in E.164 format]**15#` (forward on no-answer after 15 seconds)
- Deactivate: `##61#`
- Verify: `*#61#`

> **Note:** The Twilio DID is a US (+1) number. International call forwarding from the agent's UAE SIM to the Twilio DID will incur carrier charges on the agent's plan — typically included in international minute bundles. Confirm with the agent's carrier before go-live.

### Call Script Structure

1. **Receptionist greeting + AI disclosure (seconds 0–5):** "Hello, you've reached [Agent Name]'s office. [Agent Name] is unavailable right now — I'm their AI assistant and I'm happy to help. Is now a good time?" (Full scripts in each language: see [./legal.md](./legal.md) Section 3.4)
2. **Qualification questions (3 core):** Budget, timeline, property type
3. **Calendar booking offer:** "I can book you directly with [Agent Name] — they have availability [next Cal.com slots]. Would [slot] work for you?"
4. **Confirmation and close:** Agent notified via WhatsApp summary.
5. **Airtable record:** Created with source field set to "Inbound Direct Call"

### Edge Cases

| Scenario | System Behaviour |
|---|---|
| Caller hangs up immediately (before AI finishes greeting) | Short-duration call logged in Twilio. No Airtable record created (no data captured). No follow-up triggered. |
| Unknown number (not in any lead database) | AI answers, discloses AI status, handles naturally. No sequence enrolment unless caller provides details voluntarily. See [./legal.md](./legal.md) Section 5.3 for consent rules. |
| Agent picks up before 15 seconds | Carrier forwarding never fires. Normal call between agent and lead. System is uninvolved. |
| Agent's line is busy | Carrier "on busy" forwarding is a separate USSD code from "no answer." By default, Service 1 sets up no-answer forwarding only. Busy forwarding can be activated additionally if the agent requests it. |
| AI cannot answer (Vapi unavailable) | Twilio webhook fires but Vapi returns error. n8n logs the failure. Lead receives no AI response — call is not answered. Incident alert sent to Beni. |

### Limitations

- **Requires carrier conditional call forwarding.** Some corporate SIM plans or enterprise contracts with Du/Etisalat may block or restrict conditional call forwarding. Confirm with the agent before promising the feature.
- **Twilio DID is a US number.** The agent's carrier will route the forwarded call internationally. Carrier charges apply — typically small, but confirm with the agent's plan.
- **Does not replace a receptionist.** Service 1 handles missed calls only — it does not answer all incoming calls. If the agent picks up, the system plays no role. Inbound fallback is a safety net, not a switchboard.
- **Forwarding must stay active.** If the agent resets their phone settings, performs a carrier plan change, or gets a new SIM, conditional forwarding may be deactivated. The agent must be informed of this and re-activate if needed.

---

## Service 2: Automated Follow-Up & Nurture System

### What It Does

After the voice agent call — or when a lead cannot be reached — the system automatically moves leads through personalised WhatsApp and email sequences based on their status and behaviour. The agent never needs to manually send follow-up messages. The system handles timing, personalisation, language, and opt-outs.

**All WhatsApp messages are sent via the official WhatsApp Business API through 360dialog — not WhatsApp Web, WhatsApp linked devices, or any unofficial method.** This is mandatory for compliance and for Meta's terms of service.

### Sequence Types

| Sequence | Trigger | Channels | Message Count | Timing |
|---|---|---|---|---|
| New Lead | Lead record created in Airtable (form submission) | WhatsApp + Email | 3 messages | Immediate → +4h → +24h |
| Post-Voice Call (qualified) | Call completed, meeting booked | WhatsApp | 2 messages | +1h (confirmation) → Day before meeting (reminder) |
| Post-Voice Call (unqualified) | Call completed, no booking made | WhatsApp + Email | 3 messages | +2h → +48h → +7 days |
| Unreachable | 3 call attempts, no answer | WhatsApp + Email | 4 messages | +1h → +24h → +3 days → +7 days |
| Post-Viewing | Agent marks lead as "Viewing completed" in Airtable | WhatsApp + Email | 3 messages | +24h → +72h → +7 days |
| Re-Engagement | No activity for 30 days | WhatsApp | 2 messages | Day 30 → Day 37 |

### WhatsApp API Compliance

- **Template messages only** for outbound WhatsApp messages sent more than 24 hours after last lead interaction. Templates must be pre-approved by Meta.
- **Session messages** (free-form) available within 24-hour window after lead initiates contact.
- **Opt-out handling:** Every message includes "Reply STOP to unsubscribe." Opt-outs are processed by n8n webhook within 5 minutes — lead added to suppression list and all active sequences halted.
- **Maximum 3 unanswered messages** across all channels before sequence is paused and lead flagged for agent review.

### Personalisation Variables

All messages are personalised using these variables, drawn from the Airtable lead record:

| Variable | Source | Example |
|---|---|---|
| `{{lead_name}}` | Form submission / CRM | "Ahmed" |
| `{{property_name}}` | Property portal data | "Marina Pinnacle, Dubai Marina" |
| `{{agent_name}}` | Client configuration | "Sarah" |
| `{{brokerage_name}}` | Client configuration | "Elite Properties" |
| `{{language}}` | Detected or CRM field | Used for routing only; not inserted in message |
| `{{viewing_date}}` | Agent input in Airtable | "Monday, 3 March at 2:00 PM" |
| `{{booking_link}}` | Cal.com per-agent link | Direct URL |

### Message Language Policy

- Message language matches the lead's preferred language (set during voice call or inferred from nationality field)
- **Arabic messages:** Native-quality pre-written templates for common sequences. Do not use AI-generated Arabic for WhatsApp templates without native review — once a Meta template is approved, it's expensive to change.
- **Russian and Hindi:** AI-generated drafts reviewed by Beni before template submission; native review required for final approval.
- **Multilingual leads:** If language is ambiguous, default to English and include an Arabic PS: "نتحدث العربية أيضاً — أخبرنا بلغتك المفضلة" ("We speak Arabic too — let us know your preferred language")

---

## Service 3: AI-Powered Property Matching & Listing Assistant

### What It Does

The agent opens a structured preference form, inputs the client's requirements, and receives — within 30 seconds — a ranked shortlist of matching properties from their database, with a personalised pitch paragraph per property written in the buyer's preferred language. This replaces 30–60 minutes of manual cross-referencing and pitch writing per client.

**This service operates on the agent's own property database maintained in Airtable.** ScaleWithBeni sets up the Airtable structure and the GPT-4o integration; the agent is responsible for keeping property data current.

### Technical Architecture

```
Agent opens preference form (Airtable form or n8n webhook interface)
        │
        ▼
Input: budget range, bedrooms, area preference, lifestyle signals, buyer nationality / language
        │
        ▼
n8n workflow: query Airtable property database (filters: budget range, bedroom count, area)
        │
        ▼
Filtered results passed to GPT-4o with:
  - Property data (name, location, price, features, developer)
  - Buyer preference profile
  - Buyer nationality and language preference
  - Prompt: "Rank these properties for this buyer profile. For each, write a 2-sentence personalised pitch in [language]."
        │
        ▼
GPT-4o returns: ranked list with pitch per property
        │
        ▼
Output delivered to agent via:
  - WhatsApp (formatted message, top 3 properties)
  - Airtable record (full ranked list with pitches, saved to buyer's record)
```

### Input Format

The preference form captures:

| Field | Type | Notes |
|---|---|---|
| Budget range | Dropdown (AED ranges) | e.g., AED 1M–1.5M, AED 2M–3M, AED 5M+ |
| Bedrooms | Dropdown | Studio, 1BR, 2BR, 3BR, 4BR+, Penthouse |
| Preferred area | Multi-select | Dubai Marina, Downtown, JVC, Palm Jumeirah, Business Bay, etc. |
| Property type | Dropdown | Apartment, Villa, Townhouse, Commercial |
| Purpose | Dropdown | End-use, Investment (rental yield focus), Investment (capital gain focus) |
| Lifestyle signals | Free text (optional) | "Wants pool", "Near school", "Gym essential", "Pet-friendly" |
| Buyer nationality | Text | Used for language selection and cultural pitch framing |
| Preferred language | Dropdown | Arabic, English, Russian, Hindi, Mandarin |
| Notes | Free text | Any additional context for the AI |

### Output Format

Each property match includes:

- **Rank** (1 = best match for this buyer profile)
- **Match score rationale** (2–3 words: "Budget fit, Marina view")
- **Property details** (name, location, price, bedrooms, key features — pulled from Airtable)
- **Personalised pitch paragraph** (~50–80 words) in the buyer's preferred language

**Example output (English):**

> **#1 — Stella Maris, Dubai Marina — AED 1.45M — 2BR**
> *Match: Budget fit, waterfront view, investment yield 6.2%*
>
> "Ahmed, Stella Maris is the kind of address that works for you financially and personally — a 2-bedroom with a full Marina view at AED 1.45M, generating a 6.2% rental yield if you keep it as an investment. The developer Ellington is known for build quality, and the tower is 85% sold — there's a reason inventory here moves quickly. Worth 20 minutes to view it?"

### Limitations

- **Property data quality depends on the agent.** If the Airtable property database is outdated (sold units not removed, incorrect prices), the matching output will be wrong. ScaleWithBeni is not responsible for inaccurate property data — the agent must maintain their own Airtable.
- **Not a property search tool.** The system matches from the agent's existing listings, not from a live property database or portal.
- **GPT-4o hallucination risk.** Pitch paragraphs are AI-generated. The agent must review before sending to a buyer. Do not forward AI output directly to leads without reading it. (This is also a legal requirement — see [./legal.md](./legal.md) Section 4.)
- **Portfolio size:** Works best with 20–500 active listings in Airtable. Below 20: limited matching value. Above 500: query optimisation required (n8n filtering must narrow before GPT-4o call).

---

## Service SLAs

| Metric | Starter | Growth | Pro | Team |
|---|---|---|---|---|
| Inbound call answer time (from forwarding trigger) | N/A | <3 rings | <3 rings | <3 rings |
| Post-call WhatsApp summary to agent | <5 minutes | <3 minutes | <2 minutes | <2 minutes |
| System uptime | 99.0% | 99.5% | 99.5% | 99.5% |
| Support response (business hours) | 4 hours | 4 hours | 2 hours | 2 hours |
| Monthly reporting delivery | Email summary by 5th of month | Live dashboard + email by 3rd | Live dashboard + video call | Live dashboard + video call |
| Property matching output delivery | — | — | <30 seconds | <30 seconds |
| Onboarding go-live | 14 business days | 14 business days | 14 business days | 21 business days |

**SLA exclusions:** Downtime caused by Vapi, OpenAI, 360dialog, WhatsApp, or Cal.com API outages does not count against ScaleWithBeni's uptime SLA. ScaleWithBeni will notify affected clients within 60 minutes of detecting a third-party outage and provide estimated resolution time.

---

## Service Exclusions

The following are explicitly **not** included in any ScaleWithBeni service tier, regardless of client request:

| Excluded Service | Why |
|---|---|
| Real estate strategy consulting | ScaleWithBeni is a technology vendor — see [./legal.md](./legal.md) Section 4 |
| RERA advice or compliance review | Requires a RERA-registered consultant; outside ScaleWithBeni's scope |
| Lead generation / paid advertising | ScaleWithBeni handles lead response, not lead acquisition |
| Property photography, staging, or marketing creative | Not a creative agency |
| Ad management (Meta Ads, Google Ads, Property Finder Ads) | Outside scope |
| WhatsApp account setup / Meta Business verification | Client responsibility; ScaleWithBeni connects to an existing verified number |
| CRM migration from existing system | Custom projects only; quoted separately |
| 24/7 live human support | Async only; no live phone or chat support outside business hours |
| Inbound call fallback as full receptionist | Service 1 handles missed calls only (no-answer forwarding). It does not answer all incoming calls — if the agent picks up, the system plays no role. It is a safety net for missed calls, not a phone system replacement. |
| Multi-country deployment (outside UAE) | UAE-only in 2025; expansion to be evaluated in 2026 |
| Property valuations or market reports | Requires licensed valuer or data subscription service |
