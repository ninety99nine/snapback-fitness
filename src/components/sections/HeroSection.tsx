import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] text-foreground/[0.03] tracking-wider">SNAPBACK</span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-6"
          >
            WOMEN'S FITNESS — MAUN, BOTSWANA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-hero text-foreground uppercase leading-[0.9] mb-6"
          >
            YOUR COMEBACK<br />
            <span className="text-secondary">STARTS NOW.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-body text-lg text-foreground/70 max-w-xl mb-10 leading-relaxed"
          >
            Postpartum fitness. Customized meal plans. Real transformation. Built around your life, your body, your faith.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              to="/services"
              className="gradient-cta px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground text-center hover:scale-105 transition-transform"
            >
              START MY JOURNEY
            </Link>
            <Link
              to="/free-guide"
              className="border border-foreground/40 px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground text-center hover:border-foreground transition-colors"
            >
              GET FREE GUIDE
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-body text-xs text-foreground/50 tracking-wide-custom"
          >
            5+ Years · 100+ Women Transformed · Maun & Nationwide
          </motion.p>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/40" />
    </section>
  );
};

export default HeroSection;
