import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ShopTeaser = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-off-white py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-h2 text-[#0D0D0D] uppercase text-center mb-12"
        >
          TRAIN WITH THE RIGHT TOOLS.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto bg-foreground border border-primary/10 rounded-lg p-8 text-center"
        >
          <div className="bg-[#1A1025] rounded-lg aspect-square mb-6 flex items-center justify-center">
            <span className="font-display text-xl text-foreground tracking-wider">BOOTY BANDS</span>
          </div>
          <h3 className="font-display text-2xl text-[#0D0D0D]">RESISTANCE BANDS SET</h3>
          <p className="font-body text-sm text-[#0D0D0D]/60 mt-2 mb-4">Light 10kg / Medium 20kg / Heavy 30kg — Set of 3</p>
          <p className="font-display text-3xl text-secondary mb-6">P350</p>
          <a
            href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%27d%20like%20to%20order%20Booty%20Bands"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta px-8 py-3 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground inline-block hover:scale-105 transition-transform"
          >
            ORDER ON WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopTeaser;
