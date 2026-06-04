import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-foreground py-16 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-2">
          <h3 className="font-serif text-3xl font-bold text-accent">MYG</h3>
          <p className="text-foreground/60 max-w-sm">
            Moroccan Youth Governance. Façonner les leaders de demain. Shaping Tomorrow's Leaders. A serious governance and leadership movement based in Casablanca, Morocco.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide uppercase text-foreground/50">Navigation</h4>
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/domains" className="hover:text-accent transition-colors">Domains & Services</Link>
            <Link href="/schools" className="hover:text-accent transition-colors">Schools Dept.</Link>
            <Link href="/events" className="hover:text-accent transition-colors">Events</Link>
            <Link href="/brochures" className="hover:text-accent transition-colors">Brochures</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide uppercase text-foreground/50">Connect</h4>
          <div className="flex flex-col space-y-2 text-foreground/60">
            <p>Casablanca, Morocco</p>
            <p>contact@myg.ma</p>
            <div className="pt-4">
              <Link href="/contact" className="text-accent hover:underline font-medium">Contact Us &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40">
        <p>&copy; {new Date().getFullYear()} Moroccan Youth Governance. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-accent transition-colors">FR</span>
          <span>|</span>
          <span className="font-semibold text-foreground">EN</span>
        </div>
      </div>
    </footer>
  );
}
