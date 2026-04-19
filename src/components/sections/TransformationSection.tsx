import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Heart } from "lucide-react";
const singleLegBridge = "/images/single-leg-bridge.png";

const testimonials = [
  {
    initial: "L",
    name: "Lerato",
    detail: "Lost 18kg · 4 months",
    quote:
      "Patlo doesn't let you give up on yourself. I lost 18kg but honestly I gained so much more — confidence, energy, and myself back.",
  },
  {
    initial: "B",
    name: "Bontle",
    detail: "Lost 12kg · 3 months",
    quote:
      "I've tried everything. This is the first time something actually worked because she built a plan around MY life, not a generic programme.",
  },
  {
    initial: "K",
    name: "Kefilwe",
    detail: "Postpartum recovery · 5 months",
    quote:
      "After my baby I didn't recognise myself. SnapBack gave me a safe, guided way back. I feel stronger now than before pregnancy.",
  },
  {
    initial: "T",
    name: "Tshego",
    detail: "Complete lifestyle change · 6 months",
    quote:
      "It's not just the physical change. My whole mindset shifted. My kids see a different mum — a happier, healthier one.",
  },
];

const TransformationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["14%", "-5%"]);

  return (
    <section
      className="gradient-hero relative overflow-hidden pt-24 lg:pt-32 pb-0"
      ref={ref}
    >
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-display leading-none"
          style={{ fontSize: "22vw", color: "rgba(123,47,190,0.035)", letterSpacing: "0.05em" }}
        >
          REAL
        </span>
      </div>

      {/* Top accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(233,32,133,0.35), transparent)" }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-6 text-center"
        >
          <p className="mb-4 font-body text-xs font-medium tracking-wide-custom text-secondary uppercase">
            REAL RESULTS
          </p>
          <h2 className="font-display text-h2 uppercase text-foreground">
            THEY SHOWED UP. THEY DID THE WORK.
            <br className="hidden md:block" />
            THEY{" "}
            <span
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SNAPBACK'D.
            </span>
          </h2>
          <p className="mt-5 font-body text-base text-foreground/55 max-w-xl mx-auto leading-relaxed">
            Over 200 women — moms, postpartum mamas, busy professionals — have been exactly where you are. Here's what they said.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="relative z-10 mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(33,24,42,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote */}
              <p className="font-body text-base leading-relaxed text-foreground/80 flex-1">
                "{t.quote}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg text-white"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground leading-none">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-secondary mt-1">{t.detail}</p>
                  </div>
                </div>
                <Heart className="h-4 w-4 text-secondary/40 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote + image intersection zone */}
        <div className="relative mt-14">
          {/* Patlo quote — sits above the image via z-index */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65 }}
            className="relative z-10 mx-auto max-w-2xl text-center pb-10 lg:pb-14"
          >
            <p className="font-body text-lg italic text-foreground/70 leading-relaxed">
              "Physical change is more mental than physical. The body follows the mind. Every time."
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div
                className="h-px w-10"
                style={{ background: "hsl(var(--secondary))" }}
              />
              <p className="font-body text-xs uppercase tracking-wide-custom text-secondary">
                Patlo · Founder &amp; Head Coach
              </p>
              <div
                className="h-px w-10"
                style={{ background: "hsl(var(--secondary))" }}
              />
            </div>

            {/* CTA — immediately after attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <Link
                to="/transformation"
                className="gradient-cta inline-flex items-center gap-2 rounded-full px-8 py-3 font-body text-sm font-semibold tracking-wide-custom text-foreground hover:scale-105 transition-transform"
              >
                SEE ALL TRANSFORMATIONS
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image — pulled up to intersect quote + cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-0 -mt-[320px] lg:-mt-[460px] -mb-[100px] lg:-mb-[120px] flex"
          >
            <motion.img
              src={singleLegBridge}
              alt="Single leg bridge exercise"
              className="w-full max-w-none h-auto object-contain [mask-image:linear-gradient(to_bottom,black_0%,black_20%,transparent_60%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_20%,transparent_60%)] sm:[mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_82%)] sm:[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_82%)]"
              style={{
                x: "-12%",
                y: imageY,
                filter: "drop-shadow(0 -8px 40px rgba(233,32,133,0.2))",
              }}
            />
          </motion.div>
        </div>

      </div>

      {/* Bottom accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(123,47,190,0.3), transparent)" }}
      />
    </section>
  );
};

export default TransformationSection;
