import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Schools() {
  const offerings = [
    { title: "Club Creation", desc: "End-to-end support in establishing an official MYG club within your institution." },
    { title: "In-School Events", desc: "Organization of bespoke simulations and conferences hosted on your campus." },
    { title: "Student Training", desc: "Expert-led workshops in debate, parliamentary procedure, and public speaking." },
    { title: "Internal Governance", desc: "Consulting on establishing effective student councils and student-led governance." },
    { title: "Network & Visibility", desc: "Connecting your students to the broader MYG national network and prestige." },
    { title: "Custom Packages", desc: "Tailored leadership programs designed to align with your school's pedagogical goals." },
  ];

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/60 to-zinc-950" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">
            Schools Department
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10">
            Partner with Moroccan Youth Governance to bring premier leadership and
            diplomacy training directly to your students.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-black hover:bg-accent/90 rounded-none h-14 px-8 text-lg font-semibold"
          >
            <Link href="/contact">Request Partnership Details</Link>
          </Button>
        </div>
      </section>

      {/* Image + Text Row */}
      <section className="bg-black border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-72 lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1000"
              alt="Dark conference room"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Empower Your Campus
            </h2>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
              An MYG partnership elevates a school's extracurricular profile, offering
              students rigorous, structured environments to develop critical soft skills
              that traditional curricula often miss.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {offerings.map((offer, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="text-accent font-serif text-5xl font-bold opacity-30 leading-none">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {offer.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">
            Join the MYG Network
          </h2>
          <p className="text-lg text-white/50 mb-10">
            Current partners include some of the most prestigious educational
            institutions in Casablanca and beyond. Equip your students with the MYG
            advantage.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/5 rounded-none h-14 px-8 text-lg"
          >
            <Link href="/contact">Contact the Schools Dept</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
