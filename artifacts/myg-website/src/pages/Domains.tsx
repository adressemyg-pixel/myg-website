import { Brain, Briefcase, Scale, Mic, Globe2, Shield } from "lucide-react";

export function Domains() {
  const domains = [
    {
      icon: <Globe2 className="h-8 w-8 text-accent" />,
      title: "MUN & Diplomacy",
      desc: "Immersive Model United Nations simulations, fostering negotiation, international relations, and global awareness.",
      img: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=800",
    },
    {
      icon: <Scale className="h-8 w-8 text-accent" />,
      title: "Law",
      desc: "Judicial simulations and Settlement & Trial experiences designed to sharpen legal reasoning and advocacy.",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: "Business",
      desc: "Corporate strategy, entrepreneurship challenges, and economic policy debates for aspiring executives.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "AI",
      desc: "Exploring the governance, ethics, and societal impact of artificial intelligence and emerging technologies.",
      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800",
    },
    {
      icon: <Mic className="h-8 w-8 text-accent" />,
      title: "Eloquence",
      desc: "The art of public speaking, rhetoric, and persuasive communication to command any room.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Leadership & Governance",
      desc: "Core organizational leadership, ethical decision making, and institutional management.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    },
  ];

  const services = [
    { title: "Intercommunity Events", desc: "Large-scale congresses bringing together delegates from across the nation." },
    { title: "Specialized Training", desc: "Focused workshops on debate, legal drafting, and strategic planning." },
    { title: "Simulations", desc: "High-fidelity MUN, S&T (Settlement & Trial), and business crisis simulations." },
    { title: "School Integration", desc: "Partnering with educational institutions to establish and run MYG clubs." },
  ];

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070')",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif font-bold mb-6 text-accent">
            Domains & Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-white/60">
            The structural pillars of the MYG experience. Rigorous arenas designed to
            test and forge specific competencies.
          </p>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-white mb-16 text-center">
          Our Six Domains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="bg-zinc-900 border border-white/10 overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={domain.img}
                  alt={domain.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3">{domain.icon}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-white mb-16 text-center">
            Services & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-zinc-900 p-8 border-l-4 border-accent border border-white/10"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/50 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
