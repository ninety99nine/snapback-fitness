import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CalendarCheck2, ClipboardCheck, Target } from "lucide-react";
const findYourPlanImage = "/images/find-your-plan.png";

// ── Pre-defined background effect data ───────────────────────────────────────

// Arc of dots above the image head — equally spaced, symmetric, varying sizes
// Positions: odd indices (dots), even indices (pluses) alternating across arc
const PARTICLES = [
  { id: 1, left: "5%",  top: "18%", size: 2, color: "bg-secondary/55",  delay: 0,   dur: 4   },
  { id: 2, left: "27%", top: "5%",  size: 4, color: "bg-purple-400/60", delay: 0.6, dur: 3.5 },
  { id: 3, left: "50%", top: "0%",  size: 6, color: "bg-secondary/65",  delay: 1.2, dur: 5   },
  { id: 4, left: "73%", top: "5%",  size: 4, color: "bg-purple-400/60", delay: 0.4, dur: 3.5 },
  { id: 5, left: "95%", top: "18%", size: 2, color: "bg-secondary/55",  delay: 0.8, dur: 4   },
];

const SPARKLES = [
  { left: "16%", top: "11%", size: "12px", delay: 0.3 },
  { left: "38%", top: "2%",  size: "16px", delay: 1.0 },
  { left: "62%", top: "2%",  size: "16px", delay: 0.7 },
  { left: "84%", top: "11%", size: "12px", delay: 1.4 },
];

// ── Services data ─────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    name: "VIRTUAL TRAINING",
    desc: "Full coaching from anywhere in Botswana",
    price: "Starts from P800/month",
    href: "/plans/virtual-training",
    actions: ["Create a flexible weekly schedule"],
  },
  {
    num: "02",
    name: "MEAL PLANS",
    desc: "Customized nutrition built for your body and goals",
    price: "Starts from P400/month",
    href: "/plans/meal-plans",
    actions: ["Take a nutrition assessment", "Align plan with your body goals"],
  },
  {
    num: "03",
    name: "WORKOUT PLANS",
    desc: "Structured programs you can do at home or gym",
    price: "Starts from P300/month",
    href: "/plans/workout-plans",
    actions: ["Complete a fitness assessment", "Align training to your goals"],
  },
  {
    num: "04",
    name: "PERSONAL TRAINING",
    desc: "One-on-one sessions in Maun with Patlo",
    price: "Starts from P600/session",
    href: "/plans/personal-training",
    actions: ["Build a session schedule that suits you", "Align coaching to your training goals"],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const ServicesOverview = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-14%"]);

  return (
    <section
      className="relative bg-off-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden"
      ref={sectionRef}
    >

      {/* ── Background effects ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute -top-16 left-1/4 h-96 w-96 rounded-full bg-secondary/[0.06] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-400/[0.06] blur-3xl" />
        <div className="absolute top-1/2 left-8 h-56 w-56 rounded-full bg-secondary/[0.05] blur-2xl" />
        <div className="absolute top-1/4 right-1/3 h-40 w-40 rounded-full bg-pink-300/[0.07] blur-2xl" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-display text-h2 text-[#0D0D0D] uppercase mb-4">
            FIND YOUR PLAN.
          </h2>
          <p className="font-body text-base text-[#0D0D0D]/70">
            Every plan is built by Patlo. Personally. For you.
          </p>
        </motion.div>

        {/* Cards + Image */}
        <div className="relative">

          {/* Cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 lg:pr-[220px] xl:pr-[260px]"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={s.href}
                  className="group relative flex flex-col h-full rounded-2xl border border-[#EDE8FF] bg-white p-6 shadow-[0_2px_16px_rgba(123,47,190,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-[0_16px_40px_rgba(233,32,133,0.10)] sm:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 font-body text-base font-bold text-secondary">
                      {s.num}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-secondary/25 to-transparent" />
                  </div>

                  <h3 className="font-display text-2xl text-[#0D0D0D] mb-2">{s.name}</h3>
                  <p className="font-body text-sm text-[#0D0D0D]/55 mb-5 leading-relaxed">{s.desc}</p>

                  {s.price && (
                    <span className="mb-5 inline-block self-start rounded-full bg-secondary/10 px-3 py-1 font-body text-xs font-semibold text-secondary">
                      {s.price}
                    </span>
                  )}

                  <div className="flex-1 space-y-2 mb-6">
                    {s.actions.map((action) => (
                      <div
                        key={action}
                        className="flex items-center gap-2.5 rounded-xl border border-[#EDE8FF] bg-[#FDF8FF] px-3.5 py-2.5"
                      >
                        {action.toLowerCase().includes("schedule") ? (
                          <CalendarCheck2 className="h-3.5 w-3.5 shrink-0 text-secondary/60" />
                        ) : action.toLowerCase().includes("assessment") ? (
                          <ClipboardCheck className="h-3.5 w-3.5 shrink-0 text-secondary/60" />
                        ) : (
                          <Target className="h-3.5 w-3.5 shrink-0 text-secondary/60" />
                        )}
                        <p className="font-body text-xs text-[#0D0D0D]/65 leading-relaxed">{action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#EDE8FF] pt-4">
                    <span className="inline-flex items-center gap-2 font-body text-xs font-semibold text-secondary tracking-wide-custom uppercase transition-all duration-200 group-hover:gap-3 group-hover:text-secondary-light">
                      <span className="relative">
                        Start this plan
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute right-[-150px] top-0 z-0 hidden h-full w-[420px] items-center justify-center lg:flex xl:right-[-170px] xl:w-[480px]"
          >
            {/* Particle effects around the image */}
            <div className="absolute inset-0 overflow-visible">

              {/* Floating particles */}
              {PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  className={`absolute rounded-full ${p.color}`}
                  style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
                  animate={{ y: [0, -38, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {/* Sparkle + markers */}
              {SPARKLES.map((s, i) => (
                <motion.span
                  key={i}
                  className="absolute font-bold text-secondary/60 select-none"
                  style={{ left: s.left, top: s.top, fontSize: s.size }}
                  animate={{ scale: [0.7, 1.4, 0.7], opacity: [0.3, 0.8, 0.3], rotate: [0, 90, 180] }}
                  transition={{ duration: 4, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
                >
                  +
                </motion.span>
              ))}

            </div>

            <motion.img
              src={findYourPlanImage}
              alt="Patlo demonstrating a fitness pose"
              style={{ y: imageY }}
              className="relative w-full h-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full border-2 border-primary px-8 py-3 font-body text-sm font-semibold tracking-wide-custom transition-all duration-500 hover:border-transparent hover:shadow-[0_6px_24px_rgba(123,47,190,0.30)]"
          >
            {/* gradient fill fades in on hover */}
            <span className="pointer-events-none absolute inset-0 gradient-cta opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative text-primary transition-colors duration-500 group-hover:text-white">
              SEE ALL SERVICES
            </span>
            <span className="relative ml-0 max-w-0 overflow-hidden transition-all duration-500 group-hover:ml-2 group-hover:max-w-[1rem]">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Not ready yet — free entry points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-3xl overflow-hidden"
        >
          <div className="relative bg-dark px-8 py-12 sm:px-12 sm:py-14 lg:px-16">

            {/* Background glow blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
              <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-96 rounded-full bg-secondary/10 blur-2xl" />
            </div>

            {/* Decorative corner lines */}
            <div className="pointer-events-none absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-secondary/40 rounded-tl-xl" />
            <div className="pointer-events-none absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-secondary/40 rounded-tr-xl" />
            <div className="pointer-events-none absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-secondary/40 rounded-bl-xl" />
            <div className="pointer-events-none absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-secondary/40 rounded-br-xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-16">

              {/* Left: copy */}
              <div className="flex-1 mb-10 lg:mb-0">
                <span className="inline-block font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-4 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10">
                  NOT READY TO COMMIT YET?
                </span>
                <h3 className="font-display text-h2 text-white uppercase leading-none mb-5">
                  That's completely<br />
                  <span className="text-secondary">okay.</span>
                </h3>
                <p className="font-body text-base text-white/55 leading-relaxed max-w-md">
                  Starting doesn't have to cost anything. Grab a free resource or jump on a free 15-minute chat — no pressure, no pitch. Just an honest conversation.
                </p>

                {/* Trust signals */}
                <div className="mt-6 flex flex-wrap gap-4">
                  {["No payment needed", "No obligation", "Just a conversation"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="font-body text-xs text-white/45">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CTAs */}
              <div className="flex flex-col gap-4 lg:min-w-[280px]">
                <Link
                  to="/free-guide"
                  className="group relative overflow-hidden gradient-cta text-white px-8 py-4 rounded-2xl font-body font-semibold tracking-wide-custom text-sm text-center transition-transform hover:scale-[1.02] shadow-lg shadow-secondary/30"
                >
                  <span className="relative z-10">GET THE FREE GUIDE</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="group px-8 py-4 rounded-2xl font-body font-semibold tracking-wide-custom text-sm text-white text-center transition-all hover:bg-white/10 border border-white/20 hover:border-white/40"
                >
                  BOOK A FREE CONSULTATION
                </Link>
                <p className="text-center font-body text-xs text-white/25 mt-1">
                  15 minutes. Completely free.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
