import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { About } from "@/components/site/about";
import { WhyUs } from "@/components/site/why";
import { Testimonials } from "@/components/site/testimonials";
import { CTA } from "@/components/site/cta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sunshine Marketing & Promoters" },
      { name: "description", content: "Trusted real estate developers delivering transparent, high-growth plotted developments in Karnataka." },
      { property: "og:title", content: "About Sunshine Marketing & Promoters" },
      { property: "og:description", content: "Trusted real estate developers delivering transparent, high-growth plotted developments in Karnataka." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Our Story" title={<>Built on <span className="italic text-brand-green">trust</span> &amp; transparency.</>} subtitle="A professionally managed real estate company focused on high-value plotted developments in emerging growth corridors." />
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
    </PageShell>
  ),
});
