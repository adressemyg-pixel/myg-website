import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export function Events() {
  const events = [
    {
      title: "MUN MYG 1st Edition",
      type: "Conference / Simulation",
      date: "TBC 2024",
      location: "Casablanca, Morocco",
      desc: "Our flagship Model United Nations conference. Hundreds of delegates convening to debate global policy, draft resolutions, and forge diplomatic consensus.",
      status: "Coming Soon",
      img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=800",
    },
    {
      title: "S&T Settlement & Trial",
      type: "Judicial Simulation",
      date: "TBC",
      location: "Casablanca",
      desc: "A rigorous legal simulation where participants act as plaintiffs, defendants, and judges in complex domestic and international cases.",
      status: "In Planning",
      img: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800",
    },
    {
      title: "Nexus of Leaders Congress",
      type: "Congress",
      date: "TBC",
      location: "Morocco",
      desc: "An exclusive gathering of MYG club presidents, executive members, and distinguished speakers focusing on institutional governance.",
      status: "Coming Soon",
      img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800",
    },
    {
      title: "Conferences & Meetups",
      type: "Speaker Series",
      date: "Ongoing",
      location: "Various Campuses",
      desc: "Periodic sessions featuring industry leaders, diplomats, and academics sharing insights with the MYG community.",
      status: "TBC",
      img: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif font-bold mb-6 text-accent">
            Upcoming Events
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-white/60">
            The arenas where preparation meets practice. Discover where the next
            generation of leaders will convene.
          </p>
        </div>
      </section>

      {/* Event Cards */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-zinc-900 border border-white/10 overflow-hidden hover:border-accent/50 transition-colors group"
            >
              {/* Image */}
              <div className="md:w-72 h-48 md:h-auto overflow-hidden shrink-0">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 flex-1">
                <div>
                  <Badge
                    variant="outline"
                    className="mb-4 text-accent border-accent/30 rounded-none bg-accent/5"
                  >
                    {event.type}
                  </Badge>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-accent transition-colors mb-3">
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">{event.desc}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
                  <div className="flex flex-wrap gap-6 text-sm font-medium text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-white/10 text-white/60 hover:bg-white/10 rounded-none font-medium">
                    {event.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Host CTA */}
      <section className="py-24 bg-black border-t border-white/10 text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">
          Want to host an MYG event?
        </h2>
        <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
          We are always looking for institutional partners and venues to host our
          simulations and congresses.
        </p>
        <Button
          asChild
          className="rounded-none text-lg px-8 h-14 bg-accent text-black hover:bg-accent/90"
        >
          <a href="/contact">Become a Host Venue</a>
        </Button>
      </section>
    </div>
  );
}
