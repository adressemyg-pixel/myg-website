import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.about,   href: "/about" },
    { name: t.nav.domains, href: "/domains" },
    { name: t.nav.schools, href: "/schools" },
    { name: t.nav.events,  href: "/events" },
    { name: t.nav.brochures, href: "/brochures" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">MYG</span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-sm font-semibold border border-white/15 px-3 py-1.5">
            <button
              onClick={() => setLang("fr")}
              className={cn(
                "transition-colors",
                lang === "fr" ? "text-accent" : "text-white/40 hover:text-white/70"
              )}
            >
              FR
            </button>
            <span className="text-white/20 mx-1">|</span>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "transition-colors",
                lang === "en" ? "text-accent" : "text-white/40 hover:text-white/70"
              )}
            >
              EN
            </button>
          </div>
          <Button asChild variant="default" className="rounded-none">
            <Link href="/contact">{t.nav.cta}</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-lg font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang("fr")}
              className={cn("text-sm font-semibold", lang === "fr" ? "text-accent" : "text-white/40")}
            >
              FR
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLang("en")}
              className={cn("text-sm font-semibold", lang === "en" ? "text-accent" : "text-white/40")}
            >
              EN
            </button>
          </div>
          <div className="pt-2 border-t border-border">
            <Button asChild className="w-full rounded-none">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.cta}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
