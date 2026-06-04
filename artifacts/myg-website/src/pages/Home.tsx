import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-zinc-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col max-w-4xl pt-20">
          <div className="inline-flex items-center border border-white/20 bg-white/5 text-white/70 px-4 py-1.5 w-fit mb-8 backdrop-blur-sm">
            <span className="text-sm font-semibold uppercase tracking-widest">Casablanca, Morocco</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Façonner les leaders
            <br />de demain
            <span className="block text-accent mt-2 text-4xl md:text-6xl italic">
              Shaping Tomorrow's Leaders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            MYG is where ambitious Moroccan youth step into tomorrow's world. A
            high-stakes movement for serious governance, diplomacy, and leadership
            development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 rounded-none text-base h-14 px-8 font-semibold"
            >
              <Link href="/contact">Join the Movement</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-none text-base h-14 px-8 backdrop-blur-sm"
            >
              <Link href="/about">Discover Our Vision</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-black border-y border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { num: "500+", label: "Delegates Trained" },
              { num: "12",   label: "School Partners" },
              { num: "6",    label: "Core Domains" },
              { num: "3",    label: "Annual Congresses" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center">
                <p className="font-serif text-3xl font-bold text-accent">{s.num}</p>
                <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Not a club.
                <br />
                A{" "}
                <span className="text-accent italic">Movement.</span>
              </h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Moroccan Youth Governance bridges the gap between potential and
                  global impact. We assemble the brightest young minds in Morocco,
                  placing them in simulations of real-world power structures.
                </p>
                <p>
                  From judicial trials to United Nations assemblies, from business
                  strategy to AI governance, MYG provides the arena. You provide
                  the ambition.
                </p>
              </div>
              <Button
                asChild
                variant="link"
                className="mt-8 text-accent p-0 h-auto font-semibold hover:text-white"
              >
                <Link href="/about" className="flex items-center gap-2 text-lg">
                  Read our full story <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800"
                  alt="Youth leadership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
                  alt="Conference session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800"
                  alt="Business discussion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Teaser */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                Domains & Expertise
              </h2>
              <p className="text-white/50 text-lg">
                Comprehensive tracks designed to forge multifaceted leaders ready
                for modern challenges.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white/70 hover:text-white rounded-none"
            >
              <Link href="/domains">Explore All Domains</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                title: "MUN & Diplomacy",
                desc: "Master international relations, debate, and consensus building in high-fidelity UN simulations.",
                img: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=800",
              },
              {
                title: "Law & Judicial",
                desc: "Rigorous Settlement & Trial simulations demanding critical analysis and rhetorical precision.",
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
              },
              {
                title: "Business & Strategy",
                desc: "Navigate complex corporate scenarios, leadership challenges, and organizational governance.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
              },
            ].map((domain) => (
              <div
                key={domain.title}
                className="bg-zinc-950 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={domain.img}
                    alt={domain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                </div>
                <div className="p-8 border-t-2 border-accent">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-white/50">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to step into the arena?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Whether you're a student looking to join, or a school seeking
            partnership, the MYG network awaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 rounded-none h-14 px-8 text-lg font-semibold"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
            >
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
