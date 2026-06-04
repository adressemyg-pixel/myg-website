export function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-zinc-950 text-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-accent">Who We Are</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
            Moroccan Youth Governance is a premier platform dedicated to empowering the next generation of leaders. We believe leadership is not a trait, but a discipline forged through practice.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To cultivate a robust ecosystem where young Moroccans can experience the weight of decision-making. Through high-fidelity simulations, rigorous debate, and comprehensive training, we bridge the gap between theoretical knowledge and practical execution.
              </p>
              <div className="pl-6 border-l-4 border-accent italic text-lg text-primary font-serif">
                "Nous ne formons pas seulement des participants; nous forgeons des architectes du changement."
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MYG operates at the intersection of diplomacy, law, business, and technology. Our methodology relies on experiential learning. By placing students in the roles of diplomats, executives, and judicial figures, we force them to grapple with nuance, negotiate consensus, and construct compelling arguments under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">The MYG Vision</h2>
          <blockquote className="text-2xl md:text-4xl font-serif text-primary leading-tight">
            "A Morocco propelled by a generation of precise thinkers, articulate speakers, and decisive actors, seamlessly integrated into the global conversation."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
