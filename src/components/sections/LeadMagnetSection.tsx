import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LeadMagnetSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="font-body text-base text-foreground/70 mb-3">
            5 things every postpartum woman must know before beginning her fitness journey. From Patlo. No cost.
          </p>
          <p className="font-body text-sm text-foreground/40 mb-10">
            No sign-up. No email. Just tap and it's yours.
          </p>

          <Link
            to="/free-guide"
            className="inline-block gradient-cta px-8 py-3 rounded-lg font-body text-sm font-semibold tracking-wide-custom text-foreground hover:scale-105 transition-transform text-center"
          >
            GET THE FREE GUIDE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
