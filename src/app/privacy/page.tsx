import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy — ScaleWithBeni",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-6">
            <p>Last updated: February 2026</p>

            <h2 className="text-white text-lg font-semibold mt-8">1. Data Controller</h2>
            <p>
              ScaleWithBeni Korl&aacute;tolt Felelőss&eacute;gű T&aacute;rsas&aacute;g (Kft.), a private limited liability company registered in Hungary. For data processing activities related to client lead data, ScaleWithBeni acts as a data processor on behalf of its clients (the data controllers).
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">2. Data We Process</h2>
            <p>
              In the course of providing our services, we process: lead names, phone numbers, email addresses, language preferences, property enquiry details, call recordings (retained for 90 days), and call transcripts (retained for 60 days).
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">3. Legal Basis</h2>
            <p>
              We process data on the basis of contractual necessity (GDPR Article 6(1)(b)) under our service agreements with clients. We do not rely on consent from leads as a lawful basis.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">4. Sub-Processors</h2>
            <p>
              We use the following sub-processors: Vapi (voice AI), Twilio (call routing), OpenAI (language model), Airtable (CRM), 360dialog (WhatsApp API), Brevo (email), and Cal.com (calendar booking). Full sub-processor details are provided in the Data Processing Agreement with each client.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">5. Data Retention</h2>
            <p>
              Call recordings: 90 days. Call transcripts: 60 days. Lead records: 12 months from last activity. WhatsApp logs: 6 months. Billing records: 7 years (Hungarian tax law). Contracts: 10 years post-termination.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">6. Your Rights</h2>
            <p>
              Under GDPR, you have the right to access, rectify, erase, restrict processing, and port your personal data. Requests should be directed to your real estate agent (data controller), who will coordinate with us. We respond within 30 days.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">7. Contact</h2>
            <p>
              For privacy-related enquiries: hello@scalewithbeni.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
