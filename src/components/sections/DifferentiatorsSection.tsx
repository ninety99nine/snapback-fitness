import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Zap, Target, ShieldCheck, Heart, Star } from "lucide-react";

const diffs = [
  { icon: ShieldCheck, title: "NO SUPPLEMENTS. NO DETOX TEAS.", desc: "Just real training and real nutrition" },
  { icon: Heart, title: "BUILT FOR THE POSTPARTUM BODY.", desc: "We know diastasis recti. We know the pelvic floor." },
  { icon: Star, title: "GOD-FIRST COACHING.", desc: "Your faith belongs in your wellness journey" },
  { icon: Target, title: "100% CUSTOMIZED BY PATLO.", desc: "Not a template. Your exact body, your exact goals." },
  { icon: Zap, title: "VIRTUAL OR IN-PERSON.", desc: "Maun-based or anywhere in Botswana" },
  { icon: Dumbbell, title: "REAL RESULTS. VERIFIED.", desc: "5+ years of documented client transformations" },
];

const DifferentiatorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-primary-deep py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-foreground/60 uppercase mb-4">
            THE DIFFERENCE
          </p>
          <h2 className="font-display text-h2 text-foreground uppercase">
            THIS IS NOT A GYM. THIS IS A MOVEMENT.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <d.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-body text-sm font-bold text-foreground mb-1">{d.title}</h3>
                <p className="font-body text-sm text-foreground/60">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
