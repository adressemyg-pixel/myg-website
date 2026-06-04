import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Schools() {
  const { t } = useLanguage();
  const s = t.schools;

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')", opacity: 0.4 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/60 to-zinc-950" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">{s.h1}</h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10">{s.lead}</p>
          <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-none h-14 px-8 text-lg font-semibold">
            <Link href="/contact">{s.cta1}</Link>
          </Button>
        </div>
      </section>

      {/* Image + Text */}
      <section className="bg-black border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-72 lg:h-auto overflow-hidden">
            <img src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1000" alt="Dark conference room" className="w-full h-full object-cover brightness-75" />
          </div>
          <div className="p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{s.empowerH}</h2>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed">{s.empowerP}</p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">{s.offeringsH}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {s.offerings.map((offer, i) => (
            <div key={offer.title} className="flex flex-col gap-4">
              <div className="text-accent font-serif text-5xl font-bold opacity-30 leading-none">0{i + 1}</div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">{s.joinH}</h2>
          <p className="text-lg text-white/50 mb-10">{s.joinP}</p>
          <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 rounded-none h-14 px-8 text-lg">
            <Link href="/contact">{s.cta2}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
