import { FileCheck2, MapPin, TrendingUp, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  { icon: FileCheck2, t: "Transparent Documentation", d: "DTCP approved, A-Katha certified, with clear titles you can verify." },
  { icon: MapPin, t: "Prime Locations", d: "Strategically chosen near industrial corridors with proven demand." },
  { icon: TrendingUp, t: "Future Appreciation", d: "Early-stage pricing in zones primed for sustained growth." },
  { icon: Handshake, t: "Trusted Guidance", d: "Real estate analysts and legal experts guide every decision." },
  { icon: Sparkles, t: "Hassle-Free Process", d: "From inquiry to registration — handled end-to-end by our team." },
  { icon: ShieldCheck, t: "Investment Security", d: "Legally verified properties so your capital stays protected." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Why Choose Sunshine
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
              Built on trust. Designed for <span className="italic text-brand-green">generations</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group h-full rounded-2xl bg-white p-8 border border-border/60 hover:border-brand-green/40 hover:shadow-xl transition-all duration-500">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}