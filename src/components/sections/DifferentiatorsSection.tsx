import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const diffs = [
  {
    title: "BUILT FOR THE POSTPARTUM BODY.",
    desc: "We know diastasis recti. We know the pelvic floor. We know what your body has been through.",
  },
  {
    title: "NO SUPPLEMENTS. NO DETOX TEAS.",
    desc: "Just real training and real nutrition — the kind that actually lasts.",
  },
  {
    title: "100% CUSTOMISED BY PATLO.",
    desc: "Not a template. Your exact body, your exact goals, your exact life.",
  },
  {
    title: "REAL RESULTS. VERIFIED.",
    desc: "Real women, real results. No stock photos, no exaggerated claims — just honest progress.",
  },
  {
    title: "VIRTUAL OR IN-PERSON.",
    desc: "Maun-based — but we show up for women anywhere in Botswana.",
  },
  {
    title: "GOD-FIRST COACHING.",
    desc: "Your faith belongs in your wellness journey. We honour that.",
  },
];

const DifferentiatorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(170deg, #1A0A2E 0%, #2D0B6B 50%, #1A0A2E 100%)" }}
      ref={ref}
    >
      {/* Subtle radial light */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(233,32,133,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header — two-column editorial */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-xl"
          >
            <p className="mb-4 font-body text-xs font-medium tracking-wide-custom text-secondary uppercase">
              THE DIFFERENCE
            </p>
            <h2 className="font-display text-h2 text-foreground uppercase leading-none">
              THIS IS NOT A GYM.
              <br />
              THIS IS A MOVEMENT.
            </h2>
            <p className="mt-5 font-body text-base text-foreground/55 leading-relaxed max-w-lg">
              Everything here is built around real women, real bodies, and real life — not a one-size-fits-all programme.
            </p>
          </motion.div>

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:flex flex-col items-center justify-center shrink-0 select-none"
          >
            <span
              className="font-display leading-none tracking-widest"
              style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", color: "rgba(255,255,255,0.12)" }}
            >
              SNAPBACK
            </span>
            <div
              className="my-2 h-px w-full"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--secondary)), transparent)",
              }}
            />
            <span
              className="font-display leading-none tracking-[0.35em]"
              style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)", color: "rgba(255,255,255,0.12)" }}
            >
              FITNESS
            </span>
          </motion.div>
        </div>

        {/* Manifesto list */}
        <div
          className="divide-y"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_1.4fr] items-start gap-x-5 gap-y-2 py-6 lg:py-7"
            >
              {/* Number */}
              <span
                className="font-body text-xs tabular-nums pt-1 w-6 text-right shrink-0"
                style={{ color: "rgba(233,32,133,0.5)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl text-foreground leading-tight group-hover:text-secondary transition-colors duration-200">
                {d.title}
              </h3>

              {/* Description */}
              <p className="col-start-2 lg:col-start-3 font-body text-sm text-foreground/55 leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center gap-4"
        >
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(233,32,133,0.4), transparent)",
            }}
          />
          <p className="font-body text-xs uppercase tracking-wide-custom text-foreground/35 shrink-0">
            Snapback Fitness · Maun, Botswana
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
