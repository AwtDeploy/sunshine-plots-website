import { Reveal } from "./reveal";
import { Coins, Building2, Banknote, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Coins, t: "Below-Market Entry", d: "₹2,999/sqft pricing in a high-growth corridor near Bangalore." },
  { icon: Building2, t: "Industrial Demand", d: "Honda, Mahindra, TATA, Scania & more — driving sustained land demand." },
  { icon: Banknote, t: "Bank Loans Up To 70%", d: "Easy documentation, smooth registration, financing made simple." },
  { icon: ShieldCheck, t: "Safe & Verified", d: "DTCP approved, A-Katha certified, clear legal documentation." },
];

export function Investment() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #F4A43A 0%, transparent 40%), radial-gradient(circle at 80% 80%, #6EA300 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Investment Benefits
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-white">
              Smart investors don't wait for opportunity —<br className="hidden md:block" />
              <span className="italic text-brand-orange">they create it</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/10 transition-colors">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange text-white">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-white">{b.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}