import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";
import asv from "@/assets/asv-gate.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/gallery-6.jpg";
import p3 from "@/assets/gallery-1.jpg";
import p4 from "@/assets/gallery-2.jpg";
import p5 from "@/assets/gallery-3.jpg";
import p6 from "@/assets/gallery-4.jpg";
import p7 from "@/assets/gallery-5.jpg";
import p8 from "@/assets/cta-bg.jpg";
import vaibhavii from "@/assets/project-vaibhavii.jpg";
import padmavathi from "@/assets/project-padmavathi.jpg";
import srr from "@/assets/project-srr.jpg";
import img1 from "@/assets/img 1.jpg";
import img2 from "@/assets/img 2.jpg";
import img3 from "@/assets/img 3.jpg";
import img4 from "@/assets/img 4.jpg";
import img5 from "@/assets/img 5.jpg";
import img6 from "@/assets/img 6.jpg";
import img7 from "@/assets/img 7.jpg";
import img8 from "@/assets/img 8.jpg";
import img9 from "@/assets/img 9.jpg";
import img10 from "@/assets/img 10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img 12.jpg";
import img13 from "@/assets/img 13.jpg";
import img14 from "@/assets/img 14.jpg";
import img15 from "@/assets/4.png";
import img16 from "@/assets/6.png";
import img17 from "@/assets/7.png";
import img18 from "@/assets/8.png";
import img19 from "@/assets/9.png";
import img20 from "@/assets/10.png";
import img21 from "@/assets/11.png";
import img22 from "@/assets/13.png";
import img23 from "@/assets/14.png";
import img24 from "@/assets/15.png";
import img25 from "@/assets/16.png";
import img26 from "@/assets/17.png";
import img27 from "@/assets/18.png";
import img28 from "@/assets/19.png";
import img29 from "@/assets/20.png";
import img30 from "@/assets/21.png";
import img31 from "@/assets/22.png";

import img32 from "@/assets/sai1.jpeg";
import img33 from "@/assets/sai2.jpeg";
import img34 from "@/assets/sai3.jpeg";
import img35 from "@/assets/pbr1.jpeg";
import img36 from "@/assets/pbr2.jpeg";
import img37 from "@/assets/pbr3.jpeg";

const projects = [
  {
    images: [img1 , img2 ,img3],
    name: "SRR Temple Bells",
    location: "RR Nagar, Bangalore",
    badge: "Completed Project",
    highlights: ["Premium Layout", "Landscaped Park", "Gated Community"],
    status: "Completed",
  },
  {
    images: [img4 , img5, img6 ],
    name: "Vaibhavii Residential Layout",
    location: "HSR Extension, Bangalore",
    badge: "Completed Project",
    highlights: ["Project Cost: ₹21L – ₹1Cr", "30×40 & 30×50 ft Plots", "Wide Asphalt Roads"],
    status: "Completed",
  },
  {
    images: [img35 , img36 , img37 ],
    name: "Padmavathi Balaji Layout",
    location: "Sarjapur, Bangalore",
    badge: "Completed Project",
    highlights: ["Project Cost: ₹21L – ₹1Cr", "30×40 & 30×50 ft Plots", "Excellent Connectivity"],
    status: "Completed",
  },
  {
    images: [img10 , img11, img12],
    name: "Pragathi Woods",
    location: "Bangalore Outskirts",
    badge: "Completed Project",
    highlights: ["Serene Surroundings", "Premium Plotting", "Investment Ready"],
    status: "Completed",
  },
  {
    images: [img32 , img33 , img34],
    name: "Sri Sai Nagara",
    location: "Bommasandra, Bangalore",
    badge: "Completed Project",
    highlights: ["Project Cost: ₹21L – ₹1Cr", "30×40 & 30×50 ft Plots", "Industrial Corridor"],
    status: "Completed",
  },
  {
    images: [img16, img17, img18],
    name: "Sunshine Meadows",
    location: "Hosakote, Bangalore",
    badge: "Completed Project",
    highlights: ["Project Cost: ₹21L – ₹1Cr", "30×40 & 30×50 ft Plots", "Wide Internal Roads"],
    status: "Completed",
  },
  {
    images: [img19 ,img20, img21],
    name: "Akshaya Quiet Lands",
    location: "Bommanahalli, Bangalore",
    badge: "Completed Project",
    highlights: ["Project Cost: ₹21L – ₹1Cr", "30×40 & 30×50 ft Plots", "Peaceful Community"],
    status: "Completed",
  },
  {
    images: [img22 , img23 , img24],
    name: "Sunshine Layout",
    location: "Bangalore",
    badge: "Completed Project",
    highlights: ["DTCP Approved", "A-Katha Certified", "Ready to Register"],
    status: "Completed",
  },
];

function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const next = (e: React.MouseEvent) => { e.preventDefault(); setI((v) => (v + 1) % images.length); };
  const prev = (e: React.MouseEvent) => { e.preventDefault(); setI((v) => (v - 1 + images.length) % images.length); };
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-foreground shadow-md backdrop-blur transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-foreground shadow-md backdrop-blur transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
                Featured Projects
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground max-w-xl">
                Premium plotted developments, thoughtfully placed.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Each Sunshine project is selected for its location advantage, legal
              clarity, and long-term appreciation potential.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {projects.map((p, i) => {
            const isSecondLast = i === projects.length - 2;
            const isLast = i === projects.length - 1;
            const lgClasses = isSecondLast
              ? "lg:col-span-2 lg:col-start-2"
              : isLast
              ? "lg:col-span-2 lg:col-start-4"
              : "lg:col-span-2";
            return (
            <Reveal key={p.name} delay={i * 0.08} className={lgClasses}>
              <article className="group rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative">
                  <ProjectCarousel images={p.images} alt={p.name} />
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-brand-green">
                    {p.badge}
                  </span>
                  <span className="absolute top-4 right-4 z-10 rounded-full bg-brand-orange px-3 py-1 text-xs font-medium text-white">
                    {p.status}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-brand-green" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-orange transition-colors"
                  >
                    Enquire about this project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}