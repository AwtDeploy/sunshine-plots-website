import { SiteNav } from "./nav";
import { SiteFooter } from "./footer";
import { FloatingContact } from "./floating-contact";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">{eyebrow}</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}