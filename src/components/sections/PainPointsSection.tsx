import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  { title: "YOU DON'T RECOGNIZE YOUR BODY ANYMORE.", desc: "Pregnancy changed everything. You deserve a safe path back to yourself." },
  { title: "YOU'VE STARTED OVER SO MANY TIMES YOU'VE LOST COUNT.", desc: "This time, you'll have a plan and someone holding you accountable." },
  { title: "PEOPLE ARE PUSHING DETOX TEAS AND QUICK FIXES AT YOU.", desc: "SnapBack is the opposite of that. Real training. Real nutrition. Real results." },
  { title: "YOU'RE EXHAUSTED AND DON'T KNOW WHERE TO BEGIN.", desc: "You don't need energy to start. You need a coach who meets you where you are." },
  { title: "YOU WANT SAFE EXERCISE BUT NOBODY EXPLAINS DIASTASIS RECTI.", desc: "Patlo specializes in postpartum recovery. She knows your body." },
  { title: "YOU NEED ACCOUNTABILITY, NOT ANOTHER APP.", desc: "A real human. Real check-ins. Real commitment to your transformation." },
];

const PainPointsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark-mid py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-h2 text-foreground uppercase text-center mb-16"
        >
          DOES ANY OF THIS SOUND FAMILIAR?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1025] border-l-4 border-secondary p-6 rounded-sm"
            >
              <h3 className="font-body text-sm font-bold text-foreground leading-snug mb-3">
                {point.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center font-body text-sm italic text-secondary mt-12"
        >
          SnapBack was built exactly for this.
        </motion.p>
      </div>
    </section>
  );
};

export default PainPointsSection;
