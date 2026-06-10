import { ShieldCheck, FileCheck2, Landmark, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "DTCP Approved Layout" },
  { icon: FileCheck2, label: "A-Katha Certified Plots" },
  { icon: Landmark, label: "Bank Loans up to 70%" },
  { icon: TrendingUp, label: "Prime Growth Corridor" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <it.icon className="h-6 w-6" />
            </span>
            <span className="text-base md:text-lg font-semibold text-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}