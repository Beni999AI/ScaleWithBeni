# Legal & Compliance Reference — ScaleWithBeni

> Cross-reference: [./business.md](./business.md) for company overview | [./operations.md](./operations.md) for data handling procedures | [./financial.md](./financial.md) for invoicing and tax.

---

**INTERNAL COMPLIANCE REFERENCE — NOT LEGAL ADVICE.** This document reflects ScaleWithBeni's internal understanding of applicable regulations. All provisions should be reviewed by qualified legal counsel (Hungarian civil law attorney + UAE legal consultant) before client contracts are finalised. Last reviewed: 2026-02-26. Update upon any regulatory change or at least annually.

---

## 1. Jurisdictional Overview

### Hungary / European Union

ScaleWithBeni operates as a Hungarian Korlátolt Felelősségű Társaság (Kft.) — private limited liability company. Hungarian company registration number: **[REGISTRATION NUMBER PLACEHOLDER]**.

- **Legal framework:** Hungarian Civil Code (Polgári Törvénykönyv), EU GDPR (Regulation 2016/679), Hungarian Data Protection Act (Infotv.)
- **Data protection authority:** Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — [naih.hu](https://naih.hu)
- **Tax authority:** Nemzeti Adó- és Vámhivatal (NAV)
- **Applicable law:** Hungarian law governs all ScaleWithBeni service agreements (see Section 6)

### UAE / Dubai

ScaleWithBeni is a **foreign B2B technology vendor** — the company is not registered in the UAE and does not hold a UAE trade license. This is legally permissible for B2B services delivered remotely.

**Jurisdictional roles under data protection law:**
- ScaleWithBeni's clients (RERA-licensed agents and brokerages) are the **data controllers** — they determine the purposes for which lead data is collected
- ScaleWithBeni is the **data processor** — it processes data on documented instructions from clients
- This distinction is legally critical: it means clients bear primary regulatory responsibility to their leads under UAE PDPL; ScaleWithBeni's obligations flow through the Data Processing Agreement (DPA)

---

## 2. GDPR Compliance (EU)

### 2.1 Controller vs. Processor (Article 28)

ScaleWithBeni acts as a **data processor** under Article 4(8) GDPR. Every client service agreement must include a Data Processing Agreement (DPA) as Appendix A.

The DPA must specify:
- **Data categories processed:** Lead name, phone number, email address, nationality/language preference, property enquiry details, call recording, call transcript
- **Purposes of processing:** Lead qualification, appointment booking, follow-up communication, reporting to data controller (agent)
- **Sub-processors:** The following sub-processors are authorised; clients consent to these by signing the DPA:
  | Sub-Processor | Role | Location | Data Passed |
  |---|---|---|---|
  | Vapi (Voice AI Inc.) | AI voice call infrastructure | USA | Phone number, call audio |
  | Twilio, Inc. | Inbound call routing (DID provisioning and call forwarding to Vapi) | USA | Phone number, call audio (in transit) |
  | OpenAI, LLC | Language model processing | USA | Call transcript text, property preference data |
  | Airtable, Inc. | CRM database | USA | All lead fields |
  | 360dialog GmbH | WhatsApp API gateway | Germany/EU | Phone number, message content |
  | Brevo SAS | Email delivery | France/EU | Name, email address |
  | Cal.com, Inc. | Calendar booking | USA | Name, email, phone (optional) |
- **Data subject rights:** Requests forwarded to ScaleWithBeni by client must be fulfilled within 30 days. Erasure requests trigger immediate deletion from all systems per retention schedule (Section 7).
- **Breach notification:** ScaleWithBeni notifies the client within **24 hours** of confirmed breach; client notifies NAIH within **72 hours** (if EU residents affected). ScaleWithBeni logs and documents all incidents per the breach response protocol in [./operations.md](./operations.md).

### 2.2 Lawful Basis for Processing

- **Primary basis:** Contractual necessity (Article 6(1)(b)) — processing is necessary to perform the service contract between ScaleWithBeni and the agent (client)
- **Secondary basis:** Legitimate interests (Article 6(1)(f)) — follow-up communication with leads who have submitted enquiries is within the legitimate interests of the agent
- **NOT consent** — ScaleWithBeni does not rely on consent from leads as a lawful basis. This is more legally robust for B2B at this scale and does not require opt-in mechanisms within the automation systems (though opt-out must always be honoured — see Section 5).

### 2.3 Special Category Data

Nationality and language preference may constitute special category data in some interpretations. ScaleWithBeni's position: this data is processed for language-matching purposes only (minimisation principle, Article 5(1)(c)). Nationality is not used for any other processing purpose. Do not store nationality as a freestanding field — store only "preferred language" (e.g., "Arabic", "Russian") to reduce special category risk.

### 2.4 Records of Processing Activities (Article 30)

ScaleWithBeni must maintain a RoPA. Template for each processing activity:

| Field | Value |
|---|---|
| Activity name | Lead qualification and follow-up automation |
| Controller | [Client name and trade license number] |
| Processor | ScaleWithBeni Kft., [Registration Number], Hungary |
| Purpose | Automated qualification of property enquiry leads |
| Data categories | Name, phone, email, language preference, property enquiry details |
| Data subjects | Property enquiry leads (UAE residents primarily) |
| Recipients | Vapi, Twilio, OpenAI, Airtable, 360dialog, Brevo, Cal.com |
| Transfers to third countries | USA (Vapi, Twilio, OpenAI, Airtable, Cal.com) — covered by SCCs |
| Retention period | Per Section 7 of this document |
| Security measures | Per Section 8 of this document |

### 2.5 Data Transfers: EU → UAE and EU → USA

- **UAE is not an EU adequacy country.** Do not transfer data to UAE-based systems without SCCs or equivalent safeguards.
- **Practical note:** Data flows are primarily UAE → EU (leads are in Dubai; processing infrastructure is in EU/USA). This is the safer direction for GDPR purposes — GDPR governs data of EU residents, not UAE residents. However, SCCs should still be in place for all sub-processor agreements (USA-based: Vapi, OpenAI, Airtable, Cal.com).
- **Standard Contractual Clauses:** Use Module 2 (Controller-to-Processor) for all USA-based sub-processors. Verify that each sub-processor has current SCCs in place (Vapi, OpenAI, Airtable, Cal.com all publish DPAs with SCC provisions).

---

## 3. UAE Personal Data Protection Law (PDPL) Compliance

**Federal Decree-Law No. 45 of 2021** (UAE PDPL) came into force on 2 January 2022, with enforcement mechanisms phasing in through 2024–2026.

### 3.1 Applicability

The PDPL applies to the processing of personal data of UAE residents. Since ScaleWithBeni's systems process data of leads who are predominantly UAE residents, PDPL compliance is required.

### 3.2 Key Differences from GDPR

| Aspect | GDPR | UAE PDPL |
|---|---|---|
| Enforcement maturity | High — NAIH actively fines | Still maturing — enforcement increasing through 2026 |
| Mandatory DPO | Required at scale (ScaleWithBeni below threshold) | Not required at ScaleWithBeni's scale |
| Data breach notification | 72h to supervisory authority | Notification to UAE Data Office when "significant harm" likely |
| Consent requirements | Similar structure | Explicit consent required; legitimate interests narrower |
| Cross-border transfers | Adequacy / SCCs | UAE Data Office approval or equivalent safeguards |

### 3.3 Client Obligation Awareness

Clients must be informed at contract signing that:
- They are the data controller for their leads under UAE PDPL
- They must have a lawful basis (typically consent) for contacting leads via AI voice and WhatsApp
- Property portal form submissions (Property Finder, Bayut, Dubizzle) typically include consent language — clients should verify this is in place on their listings

### 3.4 AI Voice Agent Disclosure Requirement

Under UAE PDPL and general UAE consumer protection principles, AI-powered voice agents must identify themselves as AI. ScaleWithBeni's voice agent scripts must include disclosure **within the first 5 seconds** of every call.

**AI Inbound Call Fallback opening script (Service 1 — lead called the agent's number directly):**

The inbound script uses a warmer, receptionist-style framing because the caller initiated the contact. AI disclosure is still required and must occur within 5 seconds.

> *English:* "Hello, you've reached [Agent Name]'s office. [Agent Name] is unavailable right now — I'm their AI assistant and I'm happy to help. I can answer questions about their listings and book you a time to speak directly. Is now a good time?"

> *Arabic (Gulf dialect):* "أهلاً، وصلت إلى مكتب [اسم الوكيل]. [اسم الوكيل] غير متاح الآن — أنا مساعده الذكي الاصطناعي وسأكون سعيداً بمساعدتك. بإمكاني الإجابة على أسئلتك حول العقارات وحجز موعد مباشر معه. هل الوقت مناسب؟"

**Rationale:** Disclosure reduces hang-up rates (leads who know it's AI are less likely to feel deceived) and provides legal protection against AI impersonation claims. The inbound framing ("you've reached [Agent Name]'s office") is accurate — the caller did dial the agent's number — and sets a professional tone before the AI disclosure is delivered.

---

## 4. RERA and UAE Real Estate Regulations

ScaleWithBeni is a **technology vendor**, not a RERA licensee. This distinction must be maintained explicitly in all contracts, communications, and system outputs.

**What ScaleWithBeni does not do:**
- Provide real estate brokerage services
- Provide investment advice, property valuations, or market advisory
- Represent buyers or sellers in any transaction

**What remains the agent's responsibility:**
- All advice given to leads regarding property, price, or investment
- RERA-required disclosures in all property communications
- Reviewing and approving all AI-generated content before it is used in client-facing contexts
- Maintaining their RERA license validity

**Mandatory contract clause:**

> "ScaleWithBeni does not provide real estate brokerage, advisory, valuation, or investment services. All AI-generated content (voice scripts, WhatsApp messages, property match summaries) constitutes a draft tool only. The Agent (Client) is solely responsible for reviewing, approving, and taking responsibility for all communications sent to third parties. ScaleWithBeni bears no liability for the content of any client communication to leads or buyers."

---

## 5. Anti-Spam and Marketing Consent (UAE)

### 5.1 UAE Cybercrime Law

**Federal Decree-Law No. 34 of 2021** — Article 42 prohibits sending unsolicited electronic communications. This applies to WhatsApp messages and emails.

### 5.2 WhatsApp API Terms of Service

The WhatsApp Business API (accessed via 360dialog) prohibits:
- Sending marketing messages to users who have not opted in
- Bulk broadcasting without a documented opt-in mechanism
- Contacting users more than 24 hours after their last message without using approved Message Templates

### 5.3 Operational Rules (Non-Negotiable)

1. **Only contact leads who have submitted an enquiry form** — this constitutes implied consent for follow-up regarding their enquiry
2. **STOP opt-out is mandatory** — every WhatsApp sequence message must include: "Reply STOP to unsubscribe"
3. **Maximum 3 unanswered messages per lead** — if no response after 3 messages across all channels, cease outreach
4. **Suppression list** — every client system must maintain a suppression list. Any lead who opts out must be added immediately and never contacted again (even from a different sequence)
5. **Inbound call fallback (Service 1):** Calls handled under the inbound fallback constitute a higher-consent scenario — the lead initiated the contact by dialling the agent's number, which implies consent for the call itself. However, AI disclosure and opt-out rules still apply in full. If a caller asks to stop further contact, they must be added to the suppression list immediately. Calls arriving from unknown numbers that are not in any lead database should be handled cautiously: the AI may answer and disclose AI status, but should not attempt to qualify or enrol the caller in any follow-up sequence unless the caller provides their details voluntarily during the call.

---

## 6. Service Agreement Requirements

All ScaleWithBeni client contracts must include the following clauses. Use this as a checklist before any agreement is signed.

### Mandatory Clauses Checklist

- [ ] **Parties:** Full legal name of ScaleWithBeni Kft. with Hungarian registration number + Client's full legal name, UAE trade license number, and RERA license number
- [ ] **Scope of services:** Specific tier selected, specific features included, explicit exclusions
- [ ] **Term:** Rolling monthly subscription commencing on go-live date; either party may terminate with 30 days written notice
- [ ] **Payment terms:** Monthly in advance; first payment due before build commences; late payment: 7-day grace period, then 1.5%/month interest + service suspension at day 14
- [ ] **Data Processing Agreement (DPA):** Appendix A — includes sub-processor list, data categories, retention periods, and breach notification obligations
- [ ] **AI disclosure clause:** Client confirms that all AI-system interactions with leads comply with UAE PDPL disclosure requirements and that ScaleWithBeni's standard AI disclosure script is in use
- [ ] **RERA responsibility clause:** Client acknowledges sole responsibility for all communications with leads and compliance with RERA regulations (see Section 4 language above)
- [ ] **IP ownership:** All automation systems, scripts, and workflows built by ScaleWithBeni remain the intellectual property of ScaleWithBeni. Client receives a non-exclusive, non-transferable licence to use these systems during the subscription period. On contract termination, licence ends; ScaleWithBeni retains IP.
- [ ] **Confidentiality / NDA:** Mutual NDA covering client's lead data, business processes, and ScaleWithBeni's automation architecture; 3-year term post-contract
- [ ] **Liability cap:** ScaleWithBeni's total liability to the client shall not exceed 3 months of subscription fees paid in the most recent 3-month period
- [ ] **Governing law:** This agreement is governed by the laws of Hungary. Disputes shall be submitted to binding arbitration in Budapest under the rules of the Budapest Chamber of Commerce and Industry (BCCI) Arbitration Court
- [ ] **Force majeure:** Standard clause covering API provider outages (Vapi, OpenAI, 360dialog, WhatsApp), natural disasters, government actions; 48-hour notification obligation; extended outage (>7 days) may trigger pro-rata credit

### Optional Clauses

- **Non-solicitation:** Client shall not solicit or hire any ScaleWithBeni contractor or sub-contractor for a period of 12 months following contract termination
- **SLA:** 99.5% system uptime (excluding scheduled maintenance and third-party API outages); average voice agent response time <90 seconds; SLA breach credit: 5% monthly fee per 0.1% uptime below target
- **Client RERA license validity:** Client warrants that their RERA license is valid and in good standing. License lapse or suspension is a material breach allowing immediate contract termination

---

## 7. Data Retention Policy

| Data Type | Retention Period | Deletion Trigger | Storage Location |
|---|---|---|---|
| Call recordings | 90 days | Auto-delete via Vapi retention settings | Vapi cloud storage |
| Call transcripts | 60 days | Auto-delete via n8n scheduled workflow | Airtable (deleted) |
| CRM lead records | 12 months from last activity | Manual review or client offboarding | Airtable |
| WhatsApp message logs | 6 months | n8n scheduled cleanup | 360dialog / Airtable |
| Email campaign logs | 12 months | Brevo auto-archive | Brevo |
| Billing records | 7 years | Hungarian tax law (Art. 169, Sztv.) | Stripe + local accounting system |
| Client contracts + DPAs | 10 years post-termination | Manual review | Encrypted cloud storage |
| Breach incident logs | 5 years | Manual review | Encrypted cloud storage |

**Deletion verification:** Upon client offboarding, ScaleWithBeni issues a written Data Deletion Confirmation within 14 days confirming removal from all systems. See [./operations.md](./operations.md) for offboarding SOP.

---

## 8. Security Requirements

### Minimum Technical Measures

| Measure | Requirement |
|---|---|
| API key management | All API keys (Vapi, OpenAI, 360dialog, etc.) stored in a secrets manager (e.g., n8n credential vault, Bitwarden). Never in plaintext in code or n8n workflow JSON exports. |
| Transport security | HTTPS enforced on all webhooks and API endpoints. No HTTP fallback. |
| n8n infrastructure | Self-hosted on VPS with UFW/iptables firewall; fail2ban for brute-force protection; SSH key authentication only (no password login); automated security updates enabled. |
| Airtable access | 2FA mandatory on ScaleWithBeni Airtable account. Client workspaces use separate API keys per client — revoked immediately on offboarding. |
| Personal device policy | No client data stored on personal drives, local machines, or consumer cloud (Google Drive, iCloud). All data in designated business tools only. |
| Password management | Bitwarden (or equivalent) for all service credentials. Unique passwords per service. |
| Contractor access | Contractors receive minimum-privilege access only. Access revoked within 24 hours of engagement end. |

### Breach Response Protocol

If a data breach is suspected or confirmed, follow this protocol in sequence:

1. **Detect:** Identify the nature and scope of the breach (which data, which clients, which leads affected)
2. **Contain:** Immediately revoke compromised credentials; isolate affected systems; stop active data flows through the compromised channel
3. **Assess:** Document: what data was exposed, how many individuals affected, likely cause, whether encryption was in place
4. **Notify client (within 24 hours):** Written notification via WhatsApp and email to client point of contact. Include: what happened, what data was affected, what ScaleWithBeni has done to contain it, recommended next steps for the client.
5. **Notify NAIH (within 72 hours):** If EU residents' data is affected, file notification at naih.hu. Use NAIH's online breach notification form. Include all information from step 3.
6. **Document:** Record all actions taken, timeline, decisions made, and outcomes in the incident log. Retain for 5 years.

---

## 9. Hungarian Tax and VAT

### Cross-Border B2B Services

ScaleWithBeni provides B2B services to UAE-based clients. For Hungarian VAT purposes:

- **Place of supply rule:** B2B services are supplied where the customer is established (UAE). Therefore, Hungarian VAT does NOT apply to invoices to UAE clients.
- **Invoice notation:** All invoices to UAE clients must state: *"Reverse charge applies — customer to account for VAT in their jurisdiction"* and *"VAT exempt under Art. 37 of EU VAT Directive (place of supply: UAE)"*
- **UAE VAT (5%):** UAE-registered clients may need to account for UAE VAT via their local reverse charge mechanism. This is the client's responsibility. ScaleWithBeni is not a UAE VAT registrant.

### Currency Conversion for Hungarian Tax

- All invoices issued in USD (client-facing currency)
- For Hungarian tax returns: convert at the Magyar Nemzeti Bank (MNB) official rate on the invoice date
- Record both USD invoice amount and HUF equivalent in accounting system
- Do not use bank conversion rates for tax reporting — use MNB rate specifically

### Hungarian Corporate Income Tax

- Rate: 9% on taxable profit (one of the lowest in the EU)
- All USD revenue is taxable in Hungary; converted at MNB rate
- Allowable deductions include: VPS hosting, SaaS subscriptions directly used in service delivery, contractor payments, professional fees (accounting, legal)

### KATA Note

KATA (Kisadózók Tételes Adója) was substantially restricted by the 2022 reform — it is no longer available for B2B revenue from foreign (non-Hungarian) clients. **Do not use KATA for ScaleWithBeni's revenue.** Standard Kft. taxation applies (9% CIT).
