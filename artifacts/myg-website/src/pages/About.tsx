import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070')", opacity: 0.35 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 to-zinc-950" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-accent">{a.h1}</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70">{a.lead}</p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">{a.missionH}</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">{a.missionP}</p>
              <div className="pl-6 border-l-4 border-accent italic text-lg text-accent/80 font-serif">{a.quote}</div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">{a.approachH}</h2>
              <p className="text-lg text-white/60 leading-relaxed">{a.approachP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="bg-zinc-950">
        <div className="grid grid-cols-3 h-64 md:h-80">
          {[
            { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", alt: "Modern HQ interior" },
            { src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=800", alt: "Dark boardroom" },
            { src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800", alt: "City skyline" },
          ].map((img) => (
            <div key={img.src} className="overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-75 hover:brightness-90" />
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-12">{a.visionH}</h2>
          <blockquote className="text-2xl md:text-4xl font-serif text-white/80 leading-tight">{a.visionQ}</blockquote>
        </div>
      </section>
    </div>
  );
}
