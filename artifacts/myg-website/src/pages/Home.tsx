import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col max-w-4xl pt-20">
          <div className="inline-flex items-center space-x-2 border border-accent/30 bg-accent/10 text-accent px-4 py-1.5 w-fit mb-8 backdrop-blur-sm">
            <span className="text-sm font-semibold uppercase tracking-wider">Casablanca, Morocco</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Façonner les leaders de demain
            <span className="block text-accent mt-2 text-4xl md:text-6xl italic">Shaping Tomorrow's Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
            MYG is where ambitious Moroccan youth step into tomorrow's world. A high-stakes movement for serious governance, diplomacy, and leadership development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-none text-base h-14 px-8">
              <Link href="/contact">Join the Movement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none text-base h-14 px-8 backdrop-blur-sm">
              <Link href="/about">Discover Our Vision</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Not a club.<br/>
                A <span className="text-accent italic">Movement.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Moroccan Youth Governance bridges the gap between potential and global impact. We assemble the brightest young minds in Morocco, placing them in simulations of real-world power structures.
                </p>
                <p>
                  From judicial trials to United Nations assemblies, from business strategy to AI governance, MYG provides the arena. You provide the ambition.
                </p>
              </div>
              <Button asChild variant="link" className="mt-8 text-primary p-0 h-auto font-semibold hover:text-accent">
                <Link href="/about" className="flex items-center gap-2 text-lg">
                  Read our full story <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-8 aspect-square flex flex-col justify-end">
                <h3 className="font-serif text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Delegates Trained</p>
              </div>
              <div className="bg-accent text-accent-foreground p-8 aspect-square flex flex-col justify-end translate-y-8">
                <h3 className="font-serif text-4xl font-bold text-black mb-2">12</h3>
                <p className="text-black/70">School Partners</p>
              </div>
              <div className="bg-accent text-black p-8 aspect-square flex flex-col justify-end">
                <h3 className="font-serif text-4xl font-bold mb-2">6</h3>
                <p className="font-medium opacity-80">Core Domains</p>
              </div>
              <div className="bg-muted p-8 aspect-square flex flex-col justify-end translate-y-8">
                <h3 className="font-serif text-4xl font-bold text-primary mb-2">3</h3>
                <p className="text-muted-foreground">Annual Congresses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Domains & Expertise</h2>
              <p className="text-muted-foreground text-lg">Comprehensive tracks designed to forge multifaceted leaders ready for modern challenges.</p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary rounded-none">
              <Link href="/domains">Explore All Domains</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "MUN & Diplomacy", desc: "Master international relations, debate, and consensus building in high-fidelity UN simulations." },
              { title: "Law & Judicial", desc: "Rigorous Settlement & Trial simulations demanding critical analysis and rhetorical precision." },
              { title: "Business & Strategy", desc: "Navigate complex corporate scenarios, leadership challenges, and organizational governance." }
            ].map((domain, i) => (
              <div key={i} className="bg-background p-10 border-t-4 border-accent hover:shadow-xl transition-shadow group">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{domain.title}</h3>
                <p className="text-muted-foreground">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zinc-950 text-center px-4 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to step into the arena?</h2>
          <p className="text-xl text-foreground/70 mb-12">Whether you're a student looking to join, or a school seeking partnership, the MYG network awaits.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-none h-14 px-8 text-lg">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg">
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
