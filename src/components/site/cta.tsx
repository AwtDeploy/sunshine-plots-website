import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import bg from "@/assets/cta-bg.jpg";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={bg}
        alt="Sunrise over Karnataka landscape"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Limited Plots Available
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
              Ready to secure your<br />
              <span className="italic text-brand-orange">future investment?</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg max-w-lg">
              Book a free site visit. Walk the layout, review the documents, and
              meet our investment advisors in person.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-7 h-12"
              >
                <Link to="/contact">
                  Book Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur"
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-4 w-4" /> Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}