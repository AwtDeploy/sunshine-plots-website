import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { Projects } from "@/components/site/projects";
import { Investment } from "@/components/site/investment";
import { AsvFeatures } from "@/components/site/asv-features";
import { CTA } from "@/components/site/cta";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ASV 135 GOLD & More | Sunshine" },
      { name: "description", content: "Explore our premium DTCP-approved plotted developments including ASV 135 GOLD near Narsapur Industrial Area." },
      { property: "og:title", content: "Sunshine Projects — Premium DTCP Plots" },
      { property: "og:description", content: "Premium plotted developments near Bangalore's fastest-growing industrial corridor." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Our Projects" title={<>Premium plotted <span className="italic text-brand-green">developments</span>.</>} subtitle="Strategically located, legally verified, and designed for long-term appreciation." />
      <Projects />
      <AsvFeatures />
      <Investment />
      <CTA />
    </PageShell>
  ),
});
