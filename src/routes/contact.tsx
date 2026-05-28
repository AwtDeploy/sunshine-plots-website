import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { ContactSection } from "@/components/site/contact-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sunshine Marketing & Promoters" },
      { name: "description", content: "Schedule a free site visit or speak to our investment advisor today." },
      { property: "og:title", content: "Contact Sunshine Marketing & Promoters" },
      { property: "og:description", content: "Book a free site visit to ASV 135 GOLD or speak to our investment advisor." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Get In Touch" title={<>Let's plan your <span className="italic text-brand-green">next investment</span>.</>} subtitle="Our team responds within one working day. Free site visits available on weekends." />
      <ContactSection />
    </PageShell>
  ),
});
