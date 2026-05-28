import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[#1E1E1E] text-white/80">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sunshine" className="h-12 w-auto" />
            <div>
              <div className="font-serif text-xl text-white">Sunshine</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-white/55">
                Marketing &amp; Promoters
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-xs">
            Premium plotted developments designed for smart investors and growing
            families across Karnataka.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-brand-orange hover:border-brand-orange transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-serif text-white text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[{to:"/",l:"Home"},{to:"/about",l:"About"},{to:"/projects",l:"Projects"},{to:"/gallery",l:"Gallery"},{to:"/contact",l:"Contact"}].map((x)=>(
              <li key={x.to}><Link to={x.to} className="hover:text-brand-orange transition-colors">{x.l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-serif text-white text-lg mb-4">Projects</h4>
          <ul className="space-y-2 text-sm">
            <li>ASV 135 GOLD</li>
            <li>Sunshine Greens Phase II</li>
            <li>Sunshine Heritage</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-serif text-white text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand-orange" /><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand-orange" /><a href="mailto:sales@sunshinepromoters.in" className="hover:text-white">sales@sunshinepromoters.in</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-orange" />Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} Sunshine Marketing &amp; Promoters. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}