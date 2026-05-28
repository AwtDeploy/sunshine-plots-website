import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg shadow-orange-900/30 hover:scale-105 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}