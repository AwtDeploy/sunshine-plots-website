import { Quote } from "lucide-react";
import { Reveal } from "./reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  {
    quote: "Excellent location with clear documentation. The Sunshine team handled everything from site visit to registration.",
    name: "Rakesh Kumar",
    role: "Investor · Bangalore",
    img: t1,
  },
  {
    quote: "Best priced DTCP plots near Bangalore. We invested early and already see strong appreciation in value.",
    name: "Lakshmi Devi",
    role: "Investor · Hyderabad",
    img: t2,
  },
  {
    quote: "Very professional team with complete support throughout. Transparent, trustworthy and genuinely helpful.",
    name: "Suresh Patel",
    role: "NRI Investor · Dubai",
    img: t3,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Testimonials
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
              Trusted by families &amp; <span className="italic text-brand-green">investors</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-2xl bg-white border border-border/60 p-8 shadow-sm hover:shadow-xl transition-shadow">
                <Quote className="h-7 w-7 text-brand-orange" />
                <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border/60">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}