import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/investment-advantage", label: "Investment Advantage" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Sunshine Marketing & Promoters" className="h-12 w-auto" />
          <div className="hidden lg:flex flex-col leading-tight">
            <span className="font-serif text-lg text-foreground">Sunshine</span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              Marketing &amp; Promoters
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[15px] xl:text-base font-semibold tracking-wide uppercase text-foreground/85 hover:text-brand-orange transition-colors"
              activeProps={{ className: "text-brand-green" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden xl:flex items-center gap-2 text-[15px] font-semibold text-foreground/85 hover:text-brand-green whitespace-nowrap"
          >
            <Phone className="h-4 w-4" /> +91 98765 43210
          </a>
          <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-6 h-11 text-[14px] font-semibold uppercase tracking-wide whitespace-nowrap shadow-md shadow-orange-900/20">
            <Link to="/contact">Book Site Visit</Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>

    {/* Full-screen overlay menu (Godrej-style) */}
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-xl" />
      <div className="relative h-full w-full overflow-y-auto pt-24 pb-10 px-6">
        <div className="mx-auto max-w-md flex flex-col">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-white/10 py-5 text-white"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: l.to === "/" }}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              <span className="font-serif text-2xl">{l.label}</span>
              <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-brand-orange transition-colors" />
            </Link>
          ))}

          <div className="mt-10 grid grid-cols-2 gap-3">
            <Button
              asChild
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full h-12"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book Site Visit
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full h-12 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </a>
            </Button>
          </div>

          <p className="mt-8 text-center text-xs tracking-[0.18em] uppercase text-white/40">
            Sunshine Marketing &amp; Promoters
          </p>
        </div>
      </div>
    </div>
    </>
  );
}