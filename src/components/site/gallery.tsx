import { Reveal } from "./reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Project entrance arch at sunset", span: "row-span-2" },
  { src: g2, alt: "Wide concrete road through development", span: "" },
  { src: g3, alt: "Happy family at site visit", span: "" },
  { src: g6, alt: "Aerial layout view", span: "row-span-2" },
  { src: g4, alt: "Modern villa on a plot", span: "" },
  { src: g5, alt: "Landscaped park with play area", span: "" },
];

export function Gallery({ heading = true }: { heading?: boolean }) {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {heading && (
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
                Gallery
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
                A glimpse of our <span className="italic text-brand-green">developments</span>.
              </h2>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05} className={g.span}>
              <div className="group h-full w-full overflow-hidden rounded-xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}