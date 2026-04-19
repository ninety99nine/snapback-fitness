import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SlantDivider from "@/components/layout/SlantDivider";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] text-foreground/[0.03] tracking-wider">SNAPBACK</span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-6"
            >
              FITNESS RE-DEFINED
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
              Real coaching. Customised meal plans. Workouts built around your life — not someone else's programme. No pills. No shakes. Just you, the work, and a coach who's done it herself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("who-we-serve")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="gradient-cta px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground text-center hover:scale-105 transition-transform"
              >
                START MY JOURNEY
              </button>
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
              className="font-body text-xs text-foreground/50 tracking-wide-custom mb-32"
            >
              5+ Years · Hundreds of Women Transformed · Maun & Nationwide
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src="/images/hero.png"
              alt="Snapback Fitness transformation"
              className="max-w-lg w-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>

      <SlantDivider fill="#F8F5FF" />
    </section>
  );
};

export default HeroSection;
