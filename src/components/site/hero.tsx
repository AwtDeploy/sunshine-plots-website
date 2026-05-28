import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/asv-gate.jpg";

const headlineWords = [
  { t: "Invest", c: "text-white" },
  { t: "In", c: "text-white" },
  { t: "Tomorrow's", c: "text-white" },
  { t: "Landmark", c: "text-brand-orange italic" },
  { t: "Destinations", c: "text-white" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[100svh] w-full">
      <img
        src={hero}
        alt="ASV 135 GOLD — DTCP approved plotted development entrance"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-10 px-4 md:px-6 pt-28 pb-44 md:pb-52">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            ASV 135 GOLD · DTCP Approved
          </span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] flex flex-wrap gap-x-4 gap-y-2">
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${w.c}`}
              >
                {w.t}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed"
          >
            Premium plotted developments designed for smart investors and growing
            families — at just <span className="text-white font-medium">₹2,999/sqft</span>,
            near Narsapur Industrial Area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-7 h-12 shadow-lg shadow-orange-900/30"
            >
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-7 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" /> Schedule Site Visit
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* On Going Project card */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl p-7 xl:p-8">
            <div className="text-xs tracking-[0.22em] uppercase text-brand-orange font-semibold">
              On Going Project
            </div>
            <h3 className="mt-2 font-serif text-3xl xl:text-4xl text-brand-orange">
              ASV 135 GOLD
            </h3>
            <div className="mt-3 flex gap-1.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="block h-1.5 w-1.5 rotate-45 bg-foreground/70" />
              ))}
            </div>
            <ul className="mt-5 space-y-3 text-foreground">
              {[
                "DTCP Approved Layout",
                "A-Katha Certified Plots",
                "Bank Loan Available up to 70%",
                "Project Location — Kolar",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20ASV%20135%20GOLD"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold h-12 transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
        </motion.aside>
      </div>

      {/* Stats overlay — anchored to bottom of hero image, never overlaps CTAs */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 px-4 md:px-6">
        <div className="mx-auto max-w-6xl glass-card rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/30 overflow-hidden">
          {[
            { v: "₹2,999", l: "Per Sqft" },
            { v: "70%", l: "Bank Loan" },
            { v: "100%", l: "DTCP Approved" },
            { v: "A-Katha", l: "Certified" },
          ].map((s) => (
            <div key={s.l} className="px-4 md:px-6 py-4 md:py-5 text-center">
              <div className="font-serif text-lg md:text-2xl text-foreground">{s.v}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}