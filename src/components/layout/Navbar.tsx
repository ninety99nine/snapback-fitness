import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services" },
  { label: "TRANSFORMATION", path: "/transformation" },
  { label: "EVENTS", path: "/events" },
  { label: "BLOG", path: "/blog" },
  { label: "SHOP", path: "/shop" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-dark/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          <Link to="/" className="font-display text-2xl tracking-wider text-foreground">
            SNAPBACK<span className="text-secondary">.</span>FITNESS
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-xs font-medium tracking-wide-custom transition-colors hover:text-secondary ${
                  location.pathname === link.path ? "text-secondary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%27d%20like%20to%20start%20my%20SnapBack%20journey"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2"
            >
              <MessageCircle className="w-5 h-5 text-foreground" />
              <span className="absolute inset-0 rounded-full border-2 border-secondary animate-pulse-ring" />
            </a>
            <Link
              to="/services"
              className="gradient-cta px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide-custom text-foreground hover:scale-105 transition-transform"
            >
              START MY JOURNEY
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-secondary"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark/98 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="font-display text-4xl text-foreground hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/services"
              className="gradient-cta px-8 py-3 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground mt-4"
            >
              START MY JOURNEY
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
