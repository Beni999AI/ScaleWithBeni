import { PremiumHero } from "@/components/ui/hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SocialProof } from "@/components/sections/social-proof";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { TrustCompliance } from "@/components/sections/trust-compliance";
import { LanguagesShowcase } from "@/components/sections/languages-showcase";
import { AboutMe } from "@/components/sections/about-me";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PremiumHero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <ROICalculator />
        <Testimonials />
        <Pricing />
        <TrustCompliance />
        <LanguagesShowcase />
        <AboutMe />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
