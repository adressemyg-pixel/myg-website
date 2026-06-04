import { Brain, Briefcase, Scale, Mic, Globe2, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [
  <Globe2 className="h-8 w-8 text-accent" />,
  <Scale className="h-8 w-8 text-accent" />,
  <Briefcase className="h-8 w-8 text-accent" />,
  <Brain className="h-8 w-8 text-accent" />,
  <Mic className="h-8 w-8 text-accent" />,
  <Shield className="h-8 w-8 text-accent" />,
];

const DOMAIN_IMGS = [
  "https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=800",
  "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800",
  "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
  "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800",
];

export function Domains() {
  const { t } = useLanguage();
  const d = t.domains;

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070')", opacity: 0.35 }} />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif font-bold mb-6 text-accent">{d.h1}</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/60">{d.lead}</p>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-white mb-16 text-center">{d.sixH}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.domains.map((domain, i) => (
            <div key={domain.title} className="bg-zinc-900 border border-white/10 overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="relative h-44 overflow-hidden">
                <img src={DOMAIN_IMGS[i]} alt={domain.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3">{ICONS[i]}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{domain.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-white mb-16 text-center">{d.servicesH}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.services.map((service) => (
              <div key={service.title} className="bg-zinc-900 p-8 border-l-4 border-accent border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/50 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
