import { PremiumHero } from "@/components/ui/hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SocialProof } from "@/components/sections/social-proof";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutMe } from "@/components/sections/about-me";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { PainAmplifier } from "@/components/sections/pain-amplifier";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PremiumHero />
        <PainAmplifier />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Testimonials />
        <AboutMe />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
