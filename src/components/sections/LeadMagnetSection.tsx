import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const LeadMagnetSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-dark py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-4">
            FREE RESOURCE
          </p>
          <h2 className="font-display text-h2 text-foreground uppercase mb-4">
            BEFORE YOU START — READ THIS.
          </h2>
          <p className="font-body text-base text-foreground/70 mb-10">
            5 things every postpartum woman must know before beginning her fitness journey. From Patlo. No cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-[#1A1025] border border-border text-foreground font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#1A1025] border border-border text-foreground font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground"
            />
            <button className="gradient-cta px-6 py-3 rounded-lg font-body text-sm font-semibold tracking-wide-custom text-foreground hover:scale-105 transition-transform whitespace-nowrap">
              SEND ME THE GUIDE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
