import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { About } from "@/components/site/about";
import { Projects } from "@/components/site/projects";
import { OnGoingProject } from "@/components/site/ongoing-project";
import { WhyUs } from "@/components/site/why";
import { Investment } from "@/components/site/investment";
import { AsvFeatures } from "@/components/site/asv-features";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { CTA } from "@/components/site/cta";
import { ContactSection } from "@/components/site/contact-section";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <About />
      <OnGoingProject />
      <Projects />
      <AsvFeatures />
      <WhyUs />
      <Investment />
      <Gallery />
      <Testimonials />
      <CTA />
      <ContactSection />
    </PageShell>
  );
}