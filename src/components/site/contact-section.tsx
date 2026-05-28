import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <Reveal>
          <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
            Get In Touch
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-foreground">
            Speak to our <span className="italic text-brand-green">investment advisor</span> today.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Share your details and our team will reach out within one working day to
            schedule a personalized site visit.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, label: "Email", value: "sales@sunshinepromoters.in", href: "mailto:sales@sunshinepromoters.in" },
              { icon: MapPin, label: "Office", value: "Bengaluru, Karnataka, India" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat · 9:30 AM – 7:00 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-foreground font-medium hover:text-brand-green">
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-foreground font-medium">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-border/60 shadow-sm">
            <iframe
              title="Sunshine office location"
              src="https://www.google.com/maps?q=Narsapur%20Industrial%20Area%2C%20Karnataka&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl bg-white p-8 md:p-10 shadow-xl border border-border/60"
          >
            <h3 className="font-serif text-2xl text-foreground">Schedule a Free Site Visit</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fill the form and we'll get back to you within 24 hours.
            </p>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</label>
                <Input required placeholder="Your name" className="mt-2 h-11 rounded-lg" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                  <Input required type="tel" placeholder="+91" className="mt-2 h-11 rounded-lg" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input type="email" placeholder="you@example.com" className="mt-2 h-11 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Budget Range</label>
                <Input placeholder="e.g. ₹15 – ₹25 Lakhs" className="mt-2 h-11 rounded-lg" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your investment goals…"
                  className="mt-2 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full h-12"
              >
                {sent ? "Thank you — we'll be in touch" : (<><Send className="mr-2 h-4 w-4" /> Send Enquiry</>)}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted by Sunshine Marketing &amp; Promoters.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}