import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-cyan-dim bg-background">
      {/* Gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src="/logo.jpg" alt="ScaleWithBeni" className="h-7 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Navigate</h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <div className="flex flex-col gap-2">
              <a
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/imprint"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Imprint
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-2">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-white hover:drop-shadow-[0_0_8px_rgba(171,171,171,0.4)] transition-all duration-200"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-muted-foreground hover:text-white hover:drop-shadow-[0_0_8px_rgba(171,171,171,0.4)] transition-all duration-200"
              >
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-white hover:drop-shadow-[0_0_8px_rgba(171,171,171,0.4)] transition-all duration-200"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-cyan-dim" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ScaleWithBeni Kft. All rights
          reserved. &nbsp;·&nbsp; Made by Beni, Dubai 🇦🇪
        </p>
      </div>
    </footer>
  );
}
