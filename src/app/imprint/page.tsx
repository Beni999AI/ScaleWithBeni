import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Imprint — ScaleWithBeni",
};

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
            Imprint
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-6">
            <h2 className="text-white text-lg font-semibold mt-8">Company Information</h2>
            <p>
              <strong className="text-white">Company Name:</strong> ScaleWithBeni Korl&aacute;tolt Felelőss&eacute;gű T&aacute;rsas&aacute;g (Kft.)
            </p>
            <p>
              <strong className="text-white">Legal Form:</strong> Hungarian Private Limited Liability Company (Kft.)
            </p>
            <p>
              <strong className="text-white">Registration Number:</strong> [Registration number to be added]
            </p>
            <p>
              <strong className="text-white">Registered Address:</strong> [Business address to be added], Hungary
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">Managing Director</h2>
            <p>Beni [Last name to be added]</p>

            <h2 className="text-white text-lg font-semibold mt-8">Contact</h2>
            <p>
              Email: hello@scalewithbeni.com
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">Tax Information</h2>
            <p>
              <strong className="text-white">Tax Authority:</strong> Nemzeti Ad&oacute;- &eacute;s V&aacute;mhivatal (NAV)
            </p>
            <p>
              <strong className="text-white">Corporate Income Tax Rate:</strong> 9% (Hungarian standard rate)
            </p>
            <p>
              VAT: Services to UAE-based B2B clients are exempt under EU VAT place-of-supply rules (Art. 37 EU VAT Directive).
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">Data Protection Authority</h2>
            <p>
              Nemzeti Adatv&eacute;delmi &eacute;s Inform&aacute;ci&oacute;szabads&aacute;g Hat&oacute;s&aacute;g (NAIH) — naih.hu
            </p>

            <h2 className="text-white text-lg font-semibold mt-8">Dispute Resolution</h2>
            <p>
              Disputes arising from services provided by ScaleWithBeni are governed by Hungarian law and shall be submitted to binding arbitration in Budapest under the rules of the Budapest Chamber of Commerce and Industry (BCCI) Arbitration Court.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
