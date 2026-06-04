import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Briefcase, Scale, Mic, Globe2, Shield } from "lucide-react";

export function Domains() {
  const domains = [
    { icon: <Globe2 className="h-8 w-8 text-accent" />, title: "MUN & Diplomacy", desc: "Immersive Model United Nations simulations, fostering negotiation, international relations, and global awareness." },
    { icon: <Scale className="h-8 w-8 text-accent" />, title: "Law", desc: "Judicial simulations and Settlement & Trial experiences designed to sharpen legal reasoning and advocacy." },
    { icon: <Briefcase className="h-8 w-8 text-accent" />, title: "Business", desc: "Corporate strategy, entrepreneurship challenges, and economic policy debates for aspiring executives." },
    { icon: <Brain className="h-8 w-8 text-accent" />, title: "AI", desc: "Exploring the governance, ethics, and societal impact of artificial intelligence and emerging technologies." },
    { icon: <Mic className="h-8 w-8 text-accent" />, title: "Eloquence", desc: "The art of public speaking, rhetoric, and persuasive communication to command any room." },
    { icon: <Shield className="h-8 w-8 text-accent" />, title: "Leadership & Governance", desc: "Core organizational leadership, ethical decision making, and institutional management." },
  ];

  const services = [
    { title: "Intercommunity Events", desc: "Large-scale congresses bringing together delegates from across the nation." },
    { title: "Specialized Training", desc: "Focused workshops on debate, legal drafting, and strategic planning." },
    { title: "Simulations", desc: "High-fidelity MUN, S&T (Settlement & Trial), and business crisis simulations." },
    { title: "School Integration", desc: "Partnering with educational institutions to establish and run MYG clubs." }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-5xl font-serif font-bold mb-6 text-accent">Domains & Services</h1>
        <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
          The structural pillars of the MYG experience. Rigorous arenas designed to test and forge specific competencies.
        </p>
      </section>

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Our Six Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, i) => (
            <Card key={i} className="border-border rounded-none bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{domain.icon}</div>
                <CardTitle className="font-serif text-2xl text-primary">{domain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{domain.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Services & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-background p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
