export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-zinc-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 to-zinc-950" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-accent">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70">
            Moroccan Youth Governance is a premier platform dedicated to empowering the
            next generation of leaders. We believe leadership is not a trait, but a
            discipline forged through practice.
          </p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                To cultivate a robust ecosystem where young Moroccans can experience the
                weight of decision-making. Through high-fidelity simulations, rigorous
                debate, and comprehensive training, we bridge the gap between theoretical
                knowledge and practical execution.
              </p>
              <div className="pl-6 border-l-4 border-accent italic text-lg text-accent/80 font-serif">
                "Nous ne formons pas seulement des participants; nous forgeons des
                architectes du changement."
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Approach</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                MYG operates at the intersection of diplomacy, law, business, and
                technology. Our methodology relies on experiential learning. By placing
                students in the roles of diplomats, executives, and judicial figures, we
                force them to grapple with nuance, negotiate consensus, and construct
                compelling arguments under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="bg-zinc-950">
        <div className="grid grid-cols-3 h-64 md:h-80">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
              alt="Modern headquarters interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-75 hover:brightness-90"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=800"
              alt="Dark boardroom meeting"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-75 hover:brightness-90"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800"
              alt="City skyline at night"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-75 hover:brightness-90"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-12">The MYG Vision</h2>
          <blockquote className="text-2xl md:text-4xl font-serif text-white/80 leading-tight">
            "A Morocco propelled by a generation of precise thinkers, articulate
            speakers, and decisive actors, seamlessly integrated into the global
            conversation."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
