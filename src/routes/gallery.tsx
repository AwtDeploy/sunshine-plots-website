import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { Gallery } from "@/components/site/gallery";
import { CTA } from "@/components/site/cta";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sunshine Marketing & Promoters" },
      { name: "description", content: "Brochure-quality visuals of our plotted developments, project layouts and site progress." },
      { property: "og:title", content: "Gallery — Sunshine Projects" },
      { property: "og:description", content: "A visual tour of our premium plotted developments in Karnataka." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Gallery" title={<>A visual tour of our <span className="italic text-brand-green">developments</span>.</>} subtitle="Real layouts, real progress, real homes — captured at golden hour." />
      <Gallery heading={false} />
      <CTA />
    </PageShell>
  ),
});
