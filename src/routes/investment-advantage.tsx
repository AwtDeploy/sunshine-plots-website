import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { InvestmentAdvantage } from "@/components/site/investment-advantage";
import { CTA } from "@/components/site/cta";

export const Route = createFileRoute("/investment-advantage")({
  head: () => ({
    meta: [
      { title: "Investment Advantage — Sunshine Marketing & Promoters" },
      { name: "description", content: "Why Sunshine plots near Narsapur are a smart investment — high appreciation, industrial demand, bank loans, zero legal risk." },
      { property: "og:title", content: "Investment Advantage — Sunshine" },
      { property: "og:description", content: "Strategically located plots engineered for transparency, liquidity and long-term wealth creation." },
      { property: "og:url", content: "/investment-advantage" },
    ],
    links: [{ rel: "canonical", href: "/investment-advantage" }],
  }),
  component: () => (
    <PageShell>
      <InvestmentAdvantage />
      <CTA />
    </PageShell>
  ),
});