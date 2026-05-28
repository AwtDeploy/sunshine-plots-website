import { CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import asvGate from "@/assets/asv-gate.jpg";

const highlights = [
  "DTCP Approved Layout",
  "A-Katha Certified Plots",
  "Bank Loan Available up to 70%",
  "Project Location - Kolar",
];

export function OnGoingProject() {
  return (
    <section id="ongoing-project" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Our Current Launch
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
              On Going Project
            </h2>
          </div>
        </Reveal>

        <div className="relative grid lg:grid-cols-12 items-center gap-8 lg:gap-0">
          {/* Image */}
          <Reveal className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={asvGate}
                alt="ASV 135 GOLD project gate"
                className="h-[420px] md:h-[520px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Floating card */}
          <Reveal delay={0.15} className="lg:col-span-5 lg:-ml-24 z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-border/60 p-8 md:p-10">
              <p className="text-sm font-semibold text-foreground/80">
                On Going Project
              </p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl font-semibold text-brand-orange">
                ASV 135 GOLD
              </h3>

              {/* Diamond divider */}
              <div className="mt-5 flex items-center gap-2 text-brand-orange/70">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-2 w-2 rotate-45 bg-brand-orange/60"
                  />
                ))}
              </div>

              <ul className="mt-8 space-y-5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-base text-foreground">
                    <CheckCircle2 className="h-6 w-6 text-brand-green flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20ASV%20135%20GOLD"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full md:w-auto bg-[#25D366] hover:bg-[#1faa54] text-white px-7 py-3.5 rounded-md font-medium transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}