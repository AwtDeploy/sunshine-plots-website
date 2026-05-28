import { Reveal } from "./reveal";
import {
  ThumbsUp,
  Rocket,
  Home,
  Trees,
  Construction,
  Lamp,
  Droplets,
  Baby,
  Accessibility,
  Zap,
  Wrench,
  Factory,
  Building2,
  Plane,
  TramFront,
  CheckCircle2,
} from "lucide-react";

const amenities = [
  { icon: Wrench, t: "Secured Compound Wall" },
  { icon: Construction, t: "Roads with Footpaths" },
  { icon: Zap, t: "Underground Electricity" },
  { icon: Trees, t: "Landscaped Park" },
  { icon: Baby, t: "Children's Play Area" },
  { icon: Lamp, t: "Modern Street Lighting" },
  { icon: Droplets, t: "Under Ground Drainage" },
  { icon: Accessibility, t: "Senior Citizen Park" },
];

const location = [
  { icon: Factory, t: "Narsapur Industrial Area", v: "2 km" },
  { icon: Building2, t: "Malur Town", v: "5 km" },
  { icon: TramFront, t: "Bengaluru–Kolar Highway", v: "6 km" },
  { icon: Plane, t: "30–40 Minutes to East Bangalore", v: "" },
];

export function AsvFeatures() {
  return (
    <>
      {/* Amenities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-serif text-3xl md:text-5xl text-foreground">
              Project <span className="text-brand-orange">Amenities</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-border hover:shadow-xl transition-all p-6 md:p-8 text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <a.icon className="h-8 w-8" />
                  </span>
                  <div className="mt-5 font-serif text-base md:text-lg text-foreground leading-snug">
                    {a.t}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20 md:py-28 bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-serif text-3xl md:text-5xl text-foreground">
              Location <span className="text-brand-orange">Advantage</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {location.map((l, i) => (
              <Reveal key={l.t} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all p-7 text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <l.icon className="h-8 w-8" />
                  </span>
                  <div className="mt-5 font-serif text-lg text-foreground leading-snug">
                    {l.t} {l.v && <span className="text-brand-orange">— {l.v}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Why Invest / Bank Loan */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl p-8 md:p-10 text-white shadow-xl" style={{ background: "linear-gradient(135deg,#0F3A5F,#1E5F8C)" }}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0F3A5F]">
                <ThumbsUp className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-serif text-2xl">Pricing &amp; Investment Value</h3>
              <div className="mt-2 font-semibold">Price: ₹2,999/- Per Sqft</div>
              <ul className="mt-5 space-y-2.5 text-white/90 text-sm">
                {["Early Investor Advantage", "Below Market Entry Pricing", "High ROI Growth Potential"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl p-8 md:p-10 bg-[#F2F2F2] shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white">
                <Rocket className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">Why Invest</h3>
              <ul className="mt-5 space-y-2.5 text-foreground/80 text-sm">
                {["Rapid Industrial Growth Nearby", "Increasing Land Demand", "Ideal for Villa Construction", "Strong Future Appreciation"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-foreground" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl p-8 md:p-10 text-white shadow-xl" style={{ background: "linear-gradient(135deg,#6EA300,#588300)" }}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-green">
                <Home className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-serif text-2xl">Bank Loan Support</h3>
              <ul className="mt-5 space-y-2.5 text-white/95 text-sm">
                {["Loans Available up to 70%", "Easy Documentation Assistance", "Smooth Registration Process"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

