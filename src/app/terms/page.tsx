import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Terms of Service — ScaleWithBeni",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-6">
            <p>Last updated: February 2026</p>

            <h2 className="text-white text-lg font-semibold mt-8">1. Service Description</h2>
            <p>
              ScaleWithBeni provides fully managed AI voice and messaging automation services for RERA-licensed real estate agents and brokerages in Dubai. Services include multilingual AI voice agents, automated follow-up systems, property matching, and inbound call fallback, as described on our website and in the service agreement.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">2. Subscription Terms</h2>
            <p>
              All services are provided on a rolling monthly subscription basis, paid in advance in USD. Either party may terminate with 30 days&apos; written notice. Annual subscriptions (2 months free) are non-refundable except in cases of service failure by ScaleWithBeni.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">3. Client Responsibilities</h2>
            <p>
              The client is responsible for: maintaining a valid RERA license, providing accurate portal access credentials, maintaining their WhatsApp Business number and property database, and reviewing all AI-generated content before sharing with leads.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">4. AI Disclaimer</h2>
            <p>
              ScaleWithBeni does not provide real estate brokerage, advisory, valuation, or investment services. All AI-generated content constitutes a draft tool only. The client is solely responsible for reviewing, approving, and taking responsibility for all communications sent to third parties.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">5. Intellectual Property</h2>
            <p>
              All automation systems, scripts, and workflows built by ScaleWithBeni remain the intellectual property of ScaleWithBeni. Clients receive a non-exclusive, non-transferable licence to use these systems during the subscription period.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">6. Liability</h2>
            <p>
              ScaleWithBeni&apos;s total liability shall not exceed 3 months of subscription fees paid in the most recent 3-month period. ScaleWithBeni is not liable for downtime caused by third-party API providers (Vapi, OpenAI, WhatsApp, etc.).
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">7. Governing Law</h2>
            <p>
              This agreement is governed by the laws of Hungary. Disputes shall be submitted to binding arbitration in Budapest under the rules of the Budapest Chamber of Commerce and Industry (BCCI) Arbitration Court.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">8. Contact</h2>
            <p>
              For legal enquiries: hello@scalewithbeni.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
