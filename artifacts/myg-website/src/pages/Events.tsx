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
      status: "Coming Soon"
    },
    {
      title: "S&T Settlement & Trial",
      type: "Judicial Simulation",
      date: "TBC",
      location: "Casablanca",
      desc: "A rigorous legal simulation where participants act as plaintiffs, defendants, and judges in complex domestic and international cases.",
      status: "In Planning"
    },
    {
      title: "Nexus of Leaders Congress",
      type: "Congress",
      date: "TBC",
      location: "Morocco",
      desc: "An exclusive gathering of MYG club presidents, executive members, and distinguished speakers focusing on institutional governance.",
      status: "Coming Soon"
    },
    {
      title: "Conferences & Meetups",
      type: "Speaker Series",
      date: "Ongoing",
      location: "Various Campuses",
      desc: "Periodic sessions featuring industry leaders, diplomats, and academics sharing insights with the MYG community.",
      status: "TBC"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-5xl font-serif font-bold mb-6 text-accent">Upcoming Events</h1>
        <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
          The arenas where preparation meets practice. Discover where the next generation of leaders will convene.
        </p>
      </section>

      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 bg-card border border-border p-8 rounded-none hover:border-accent transition-colors group">
              <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
                <div>
                  <Badge variant="outline" className="mb-4 text-primary border-primary/20 rounded-none bg-primary/5">{event.type}</Badge>
                  <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-4">{event.title}</h3>
                </div>
                <Badge className="w-fit bg-muted text-muted-foreground hover:bg-muted rounded-none font-medium">
                  {event.status}
                </Badge>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <p className="text-lg text-muted-foreground mb-6">
                  {event.desc}
                </p>
                <div className="flex flex-wrap gap-6 text-sm font-medium text-primary">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Want to host an MYG event?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          We are always looking for institutional partners and venues to host our simulations and congresses.
        </p>
        <Button className="rounded-none text-lg px-8 h-14 bg-primary hover:bg-primary/90">
          Become a Host Venue
        </Button>
      </section>
    </div>
  );
}
