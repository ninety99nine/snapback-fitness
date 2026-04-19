import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Heart, Quote, ArrowRight, Star, Flame, Trophy, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "200+", label: "Women transformed" },
  { value: "18kg",  label: "Most weight lost" },
  { value: "94%",   label: "Finish their plan" },
  { value: "6mo",   label: "Avg. journey length" },
];

const testimonials = [
  {
    initial: "L",
    name: "Lerato",
    tag: "Lost 18kg · 4 months",
    tagColor: "text-secondary",
    quote:
      "Patlo doesn't let you give up on yourself. I lost 18kg but honestly I gained so much more — confidence, energy, and myself back.",
  },
  {
    initial: "B",
    name: "Bontle",
    tag: "Lost 12kg · 3 months",
    tagColor: "text-secondary",
    quote:
      "I've tried everything. This is the first time something actually worked because she built a plan around MY life, not a generic programme.",
  },
  {
    initial: "K",
    name: "Kefilwe",
    tag: "Postpartum recovery · 5 months",
    tagColor: "text-purple-300",
    quote:
      "After my baby I didn't recognise myself. SnapBack gave me a safe, guided way back. I feel stronger now than before pregnancy.",
  },
  {
    initial: "T",
    name: "Tshego",
    tag: "Complete lifestyle change · 6 months",
    tagColor: "text-purple-300",
    quote:
      "It's not just the physical change. My whole mindset shifted. My kids see a different mum — a happier, healthier one.",
  },
  {
    initial: "M",
    name: "Mpho",
    tag: "Lost 9kg · 2 months",
    tagColor: "text-secondary",
    quote:
      "I was skeptical at first — I've failed so many diets. But Patlo made it feel achievable. One step, one week at a time.",
  },
  {
    initial: "N",
    name: "Neo",
    tag: "Toned up · 3 months",
    tagColor: "text-secondary",
    quote:
      "The accountability is everything. Knowing Patlo is checking in kept me going even on the days I wanted to quit.",
  },
  {
    initial: "D",
    name: "Dineo",
    tag: "Postpartum recovery · 4 months",
    tagColor: "text-purple-300",
    quote:
      "Six months postpartum and I finally feel like me again. Not just physically — I have energy to actually enjoy my baby.",
  },
  {
    initial: "R",
    name: "Refilwe",
    tag: "Lost 14kg · 5 months",
    tagColor: "text-secondary",
    quote:
      "Patlo saw what I couldn't see in myself. She pushed me past limits I thought were permanent. Game changer.",
  },
];

const journeyTypes = [
  {
    icon: Flame,
    title: "Weight Loss",
    desc: "Sustainable fat loss without starvation. Real food, real movement, real results.",
    count: "80+ women",
  },
  {
    icon: Heart,
    title: "Postpartum Recovery",
    desc: "Safe, progressive return to fitness after pregnancy. Your body did something extraordinary.",
    count: "60+ women",
  },
  {
    icon: Trophy,
    title: "Complete Lifestyle Shift",
    desc: "Beyond the scale — energy, confidence, habits rebuilt from the ground up.",
    count: "40+ women",
  },
  {
    icon: Star,
    title: "Tone & Strengthen",
    desc: "Build lean muscle and feel strong in your skin. No bulk, just shape.",
    count: "30+ women",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

const TestimonialCard = ({
  t,
  index,
  inView,
}: {
  t: (typeof testimonials)[0];
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="group relative flex flex-col rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
    }}
  >
    {/* Hover glow */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ boxShadow: "0 0 40px rgba(233,32,133,0.12), inset 0 0 0 1px rgba(233,32,133,0.2)" }}
    />

    {/* Quote icon */}
    <Quote className="h-5 w-5 text-secondary/40 mb-4 shrink-0" />

    <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed flex-1 mb-6">
      "{t.quote}"
    </p>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full flex items-center justify-center font-body text-sm font-bold text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #7B2FBE, #E92085)" }}
        >
          {t.initial}
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-white">{t.name}</p>
          <p className={`font-body text-xs ${t.tagColor}`}>{t.tag}</p>
        </div>
      </div>
      <Heart className="h-4 w-4 text-white/20 group-hover:text-secondary/60 transition-colors duration-300" />
    </div>
  </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const Transformation = () => {
  const heroRef    = useRef(null);
  const statsRef   = useRef(null);
  const cardsRef   = useRef(null);
  const quoteRef   = useRef(null);
  const videoRef   = useRef(null);
  const typesRef   = useRef(null);
  const ctaRef     = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });
  const videoInView = useInView(videoRef, { once: true, margin: "-80px" });
  const typesInView = useInView(typesRef, { once: true, margin: "-80px" });
  const ctaInView   = useInView(ctaRef,   { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen flex flex-col bg-[#08040F]">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center px-4 pt-36 pb-24 overflow-hidden"
      >
        {/* Background gradient */}
        <motion.div
          style={{ y: heroY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,47,190,0.45) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(233,32,133,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 90%, rgba(123,47,190,0.14) 0%, transparent 60%)",
            }}
          />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(123,47,190,0.2)" }}
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full blur-3xl"
            style={{ background: "rgba(233,32,133,0.15)" }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-4"
          >
            REAL RESULTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.4rem,7vw,5rem)] leading-[1.05] text-white uppercase mb-6"
          >
            THEY SHOWED UP.{" "}
            <br className="hidden sm:block" />
            THEY DID THE WORK.{" "}
            <br />
            THEY{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #E92085, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SNAPBACK'D.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="font-body text-base sm:text-lg text-white/55 max-w-xl mx-auto leading-relaxed"
          >
            Over 200 women — moms, postpartum mamas, busy professionals — have
            been exactly where you are. Here's what they said.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="relative px-4 pb-16"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span
                  className="font-display text-3xl sm:text-4xl text-white mb-1"
                  style={{
                    background: "linear-gradient(135deg, #E92085, #7B2FBE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </span>
                <span className="font-body text-xs text-white/45 uppercase tracking-widest">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Video testimony ─────────────────────────────────────────────── */}
      <section
        ref={videoRef}
        className="px-4 pt-20 sm:pt-24 pb-10 sm:pb-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
              SEE IT FOR YOURSELF
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase mb-4">
              WATCH THE JOURNEY.
            </h2>
            <p className="font-body text-sm text-white/45 max-w-lg mx-auto leading-relaxed">
              Raw, unfiltered, and real. This is what the SnapBack journey actually looks like behind the scenes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-px"
              style={{
                background: "linear-gradient(135deg, rgba(123,47,190,0.6), rgba(233,32,133,0.5))",
              }}
            >
              <div className="rounded-2xl overflow-hidden" style={{ background: "#08040F" }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/0qNPV-LTXlA"
                    title="SnapBack Fitness — Raw BTS of My Body Transformation Journey"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <p className="mt-5 text-center font-body text-xs text-white/30 italic">
              Raw BTS of a real SnapBack transformation journey — no filters, no shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials grid ───────────────────────────────────────────── */}
      <section ref={cardsRef} className="px-4 pt-10 sm:pt-12 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
              CLIENT STORIES
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase">
              IN THEIR OWN WORDS.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} inView={cardsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured quote ──────────────────────────────────────────────── */}
      <section
        ref={quoteRef}
        className="relative px-4 py-20 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.12) 0%, rgba(233,32,133,0.08) 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
            style={{ background: "linear-gradient(90deg, transparent, rgba(233,32,133,0.4), transparent)" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Quote className="h-8 w-8 text-secondary/40 mx-auto mb-6" />
            <p className="font-display text-[clamp(1.4rem,3.5vw,2.2rem)] text-white/90 leading-snug uppercase mb-6">
              "Physical change is mental first. The body follows the mind."
            </p>
            <p className="font-body text-sm text-secondary font-semibold tracking-widest uppercase">
              — Patlo, SnapBack Fitness
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Journey types ───────────────────────────────────────────────── */}
      <section ref={typesRef} className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
              YOUR PATH
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase mb-4">
              EVERY JOURNEY IS DIFFERENT.
            </h2>
            <p className="font-body text-sm text-white/45 max-w-lg mx-auto">
              No two bodies are the same. No two plans are either. See what kind of transformation women like you have taken on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeyTypes.map((j, i) => (
              <motion.div
                key={j.title}
                initial={{ opacity: 0, y: 40 }}
                animate={typesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(233,32,133,0.25)" }}
                />
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.3), rgba(233,32,133,0.2))" }}
                >
                  <j.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-display text-lg text-white uppercase mb-2">{j.title}</h3>
                <p className="font-body text-xs text-white/45 leading-relaxed flex-1 mb-4">{j.desc}</p>
                <div className="flex items-center gap-1.5">
                  <Users className="h-3 w-3 text-secondary/60" />
                  <span className="font-body text-xs text-secondary/80 font-semibold">{j.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="relative px-4 py-24 text-center overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, rgba(233,32,133,0.4) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
              YOUR TURN
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white uppercase leading-tight mb-5">
              READY TO WRITE YOUR OWN STORY?
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
              Every one of those women started exactly where you are. The only difference?
              They took the first step. Let's take yours together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                state={{ scrollTo: "who-we-serve" }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_32px_rgba(233,32,133,0.35)]"
                style={{ background: "linear-gradient(135deg, #E92085, #7B2FBE)" }}
              >
                START MY TRANSFORMATION
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide text-white/70 transition-all duration-200 hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                CHAT WITH ME FIRST
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Transformation;
