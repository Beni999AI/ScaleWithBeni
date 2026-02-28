"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-cyan-dim"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#">
          <img src="/logo.jpg" alt="ScaleWithBeni" className="h-6 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
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

        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-cyan text-black font-semibold hover:bg-cyan/90"
            asChild
          >
            <a href={SITE_CONFIG.calLink} target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-cyan-dim">
            <SheetHeader>
              <SheetTitle className="text-white">ScaleWithBeni</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-cyan text-black font-semibold hover:bg-cyan/90 mt-4"
                asChild
              >
                <a href={SITE_CONFIG.calLink} target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
