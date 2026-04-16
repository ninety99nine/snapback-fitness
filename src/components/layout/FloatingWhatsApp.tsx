import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%27d%20like%20to%20start%20my%20SnapBack%20journey"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with Patlo on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-secondary animate-pulse-ring" />
        <div className="relative w-14 h-14 rounded-full gradient-cta flex items-center justify-center shadow-lg shadow-secondary/30 hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6 text-foreground" />
        </div>
      </div>
      <span className="hidden md:group-hover:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-body font-medium whitespace-nowrap">
        Chat with Patlo
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
