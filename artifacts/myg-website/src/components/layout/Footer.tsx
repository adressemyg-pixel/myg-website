import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-zinc-950 text-foreground py-16 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-2">
          <h3 className="font-serif text-3xl font-bold text-accent">MYG</h3>
          <p className="text-foreground/60 max-w-sm">{t.footer.desc}</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide uppercase text-foreground/50">{t.footer.nav}</h4>
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-accent transition-colors">{t.nav.about}</Link>
            <Link href="/domains" className="hover:text-accent transition-colors">{t.nav.domains}</Link>
            <Link href="/schools" className="hover:text-accent transition-colors">{t.nav.schools}</Link>
            <Link href="/events" className="hover:text-accent transition-colors">{t.nav.events}</Link>
            <Link href="/brochures" className="hover:text-accent transition-colors">{t.nav.brochures}</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide uppercase text-foreground/50">{t.footer.connect}</h4>
          <div className="flex flex-col space-y-2 text-foreground/60">
            <p>Casablanca, Maroc</p>
            <p>adresse.myg@gmail.com</p>
            <div className="pt-4">
              <Link href="/contact" className="text-accent hover:underline font-medium">{t.footer.contactLink}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40">
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
      </div>
    </footer>
  );
}
