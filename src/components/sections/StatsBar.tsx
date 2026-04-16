import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "25KG", label: "Patlo's own postpartum loss" },
  { value: "100+", label: "Women transformed" },
  { value: "5 YRS", label: "In operation since 2020" },
  { value: "P800", label: "First month, full virtual program" },
];

const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="gradient-cta py-16" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-4xl lg:text-5xl text-foreground">{stat.value}</p>
              <p className="font-body text-xs text-foreground/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
