import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const MeetPatloSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-off-white py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="gradient-hero rounded-lg aspect-[3/4] flex items-center justify-center"
          >
            <span className="font-display text-2xl text-secondary tracking-wider">PATLO PHOTO HERE</span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-4">
              THE FOUNDER
            </p>
            <h2 className="font-display text-h2 text-[#0D0D0D] uppercase mb-6">
              I'VE BEEN WHERE YOU ARE.
            </h2>
            <p className="font-body text-base text-[#0D0D0D]/70 leading-relaxed mb-8">
              Three pregnancies. 25kg gained. Countless moments of doubt. Patlo didn't just build SnapBack Fitness — she lived it. From postpartum recovery to 5+ years of coaching hundreds of women across Botswana, her journey is her proof.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {["3 KIDS", "25KG LOST", "5+ YEARS COACHING"].map((stat) => (
                <div key={stat} className="bg-[#0D0D0D] px-5 py-3 rounded-sm">
                  <span className="font-display text-lg text-foreground">{stat}</span>
                  <div className="h-0.5 w-full bg-secondary mt-1" />
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-secondary hover:text-secondary-light transition-colors"
            >
              READ MY FULL STORY <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetPatloSection;
