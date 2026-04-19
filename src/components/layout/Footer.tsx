import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-foreground tracking-wider">
              SNAPBACK<span className="text-secondary">.</span>FITNESS
            </h3>
            <p className="text-secondary font-body text-sm italic mt-2">Fitness Re-defined</p>
            <p className="text-foreground/40 font-body text-xs italic mt-4 leading-relaxed">
              Your body is fearfully and wonderfully made. — Psalm 139:14
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "My Story", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Challenges", path: "/challenges" },
                { label: "Transformation", path: "/transformation" },
                { label: "Shop", path: "/shop" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-sm text-foreground/70 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/snapbackwithmrsk" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/SnapbackFitnessMrsK" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/26774268899" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a href="https://wa.me/26774268899" className="flex items-center gap-2 font-body text-sm text-foreground/70 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> +267 742 68899
            </a>
            <a href="mailto:snapbackfitness8@gmail.com" className="flex items-center gap-2 font-body text-sm text-foreground/70 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" /> snapbackfitness8@gmail.com
            </a>
            <p className="font-body text-sm text-foreground/50 mt-2">
              Maun, Botswana — Serving clients nationwide
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="font-body text-xs text-foreground/30 text-center">
            SnapBack Fitness. Botswana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
