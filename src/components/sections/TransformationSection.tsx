import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transformations = [
  { name: "Client A", result: "18kg in 4 months" },
  { name: "Client B", result: "12kg in 3 months" },
  { name: "Client C", result: "Postpartum recovery" },
  { name: "Client D", result: "Complete lifestyle change" },
];

const TransformationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-4">
            REAL RESULTS
          </p>
          <h2 className="font-display text-h2 text-foreground uppercase">
            THEY SHOWED UP. THEY DID THE WORK.<br className="hidden md:block" /> THEY SNAPBACK'D.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-2 aspect-[2/3]">
                <div className="bg-[#2a2a2a] flex items-end justify-center p-3">
                  <span className="font-body text-xs font-bold uppercase text-foreground/50">BEFORE</span>
                </div>
                <div className="bg-primary-deep flex items-end justify-center p-3">
                  <span className="font-body text-xs font-bold uppercase text-secondary">AFTER</span>
                </div>
              </div>
              <div className="bg-[#1A1025] p-3 text-center">
                <p className="font-body text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-secondary">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-base italic text-foreground/70 max-w-2xl mx-auto mt-16 leading-relaxed"
        >
          "Physical change is more mental than physical. The body follows the mind. Every time." — Patlo
        </motion.p>

        <div className="text-center mt-10">
          <Link
            to="/transformation"
            className="gradient-cta px-8 py-3 rounded-full font-body text-sm font-semibold tracking-wide-custom text-foreground hover:scale-105 transition-transform inline-block"
          >
            SEE ALL TRANSFORMATIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
