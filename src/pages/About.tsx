import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Heart, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
const myStory = "/images/my-story.png";
const whereItStarted = "/images/where-it-started.png";

// ── Timeline milestones ───────────────────────────────────────────────────────
const milestones = [
  {
    year: "2020",
    title: "I pressed record anyway.",
    body: "My baby was two months old. My helper was holding my phone. My kids were running around me in the sand. I couldn't even complete one skip. But I shared that video — shaky, breathless, and unfiltered — because something told me I wasn't the only one who needed to see that it was okay to start from zero. That video was the beginning of everything.",
  },
  {
    year: "2021",
    title: "The grind nobody saw.",
    body: "No gym clothes. No perfect lighting. Hyperpigmentation, self-doubt, and days where I genuinely didn't want to show up. But I kept going. One skip became ten. Ten became a hundred. A hundred became a thousand. Fitness was slowly putting me back together — not just my body, but my mind and my sense of self.",
  },
  {
    year: "2022",
    title: "You started showing up.",
    body: "And not just for the workouts. You showed up because I was honest. I talked about diastasis recti. I talked about pelvic floor dysfunction. I talked about the loneliness of postpartum and the pressure to pretend everything was fine. Women across Botswana finally exhaled and said: someone gets it. That's when I knew this was bigger than me.",
  },
  {
    year: "2023",
    title: "A movement, not just a brand.",
    body: "Faith & Fitness events. Kids Fun Runs. Speaking alongside Connie Ferguson. Featured on Gabz FM. Nominated for Health & Wellness Advocate at the Women's Awards Botswana. SnapBack had become something I never fully planned — a community of women who were done being told to shrink, rush, and perform recovery on someone else's timeline.",
  },
  {
    year: "2024–25",
    title: "Healing out loud.",
    body: "I'll be honest with you: there were months I didn't work out at all. My mental health declined. Life happened — hard and heavy. And instead of hiding it, I shared it. Because that's what I'd always done. I talked about starting again, not by fighting my body, but by listening to it. And something beautiful happened — you didn't leave. You stayed. And loved me more for it, not less.",
  },
  {
    year: "Now",
    title: "Still here. Still building.",
    body: "Five years in. Three kids who still cheer me on. Hundreds of women transformed. A studio dream loading. And a purpose that gets clearer with every woman who messages me at midnight saying she finally feels like herself again. I'm not done. We're not done. The best of SnapBack is still coming.",
  },
];

// ── Values ────────────────────────────────────────────────────────────────────
const values = [
  {
    title: "God first, always.",
    body: "Faith is not a footnote in this brand — it is the foundation. Every coaching decision, every plan, every conversation I have begins with the belief that you are fearfully and wonderfully made. Your body is not a problem to be fixed. It is a temple that has been through something extraordinary.",
  },
  {
    title: "No shortcuts. Ever.",
    body: "No detox teas. No weight-loss shakes. No 21-day challenges designed to disappear the moment you need them most. I don't consume those things. I don't sell those things. Real food, real movement, real accountability — if it isn't something you can sustain for life, I won't put my name on it.",
  },
  {
    title: "Your body has been through something.",
    body: "Three pregnancies taught me things no textbook could. I know what diastasis recti feels like from the inside. I know what pelvic floor dysfunction does to your confidence. I know what hormonal shifts do to your mood, your hunger, your ability to push. I built my knowledge around what women's bodies actually go through — not what gym culture pretends they do.",
  },
  {
    title: "Discipline over motivation.",
    body: "Motivation is a feeling. It comes and goes. Discipline is a decision you make even on the days you don't feel like it — and trust me, half the time I don't feel like it either. But I show up anyway. And that's the muscle I'll help you build. Not just in your body. In your character.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
const About = () => {
  const heroRef      = useRef(null);
  const storyRef     = useRef(null);
  const quoteRef     = useRef(null);
  const timelineRef  = useRef(null);
  const valuesRef    = useRef(null);
  const letterRef    = useRef(null);
  const ctaRef       = useRef(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: "-80px" });
  const storyInView    = useInView(storyRef,    { once: true, margin: "-80px" });
  const quoteInView    = useInView(quoteRef,    { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const valuesInView   = useInView(valuesRef,   { once: true, margin: "-80px" });
  const letterInView   = useInView(letterRef,   { once: true, margin: "-80px" });
  const ctaInView      = useInView(ctaRef,      { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen flex flex-col bg-[#08040F]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-end pb-0 pt-32 overflow-hidden min-h-[80vh]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,47,190,0.45) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(233,32,133,0.15) 0%, transparent 60%), #08040F",
        }}
      >
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-0">
            {/* Text */}
            <div className="pb-16 lg:pb-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-5"
              >
                PATLO KGOSIDIALWA · FOUNDER
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] text-white uppercase mb-8"
              >
                I DIDN'T ARRIVE
                <br />
                HERE BY{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #E92085, #7B2FBE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ACCIDENT.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className="font-body text-lg text-white/55 max-w-md leading-relaxed mb-10"
              >
                I arrived here by choosing myself — again and again and again. After three babies, 25kg gained, and a season where I genuinely didn't recognise the woman staring back at me in the mirror.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {["Mom of Three", "25kg Lost Naturally", "5+ Years Coaching", "Maun, Botswana"].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs text-white/50 px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex justify-center items-end"
            >
              <img
                src={myStory}
                alt="Patlo Kgosidialwa — SnapBack Fitness founder"
                className="max-h-[620px] w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, #08040F)" }}
        />
      </section>

      {/* ── The raw beginning ────────────────────────────────────────────── */}
      <section ref={storyRef} className="px-4 pt-20 pb-0 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="relative flex"
            >
              <img
                src={whereItStarted}
                alt="Patlo during her fitness journey"
                className="w-full h-auto object-contain"
              />
              {/* Glow */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: "radial-gradient(ellipse, rgba(233,32,133,0.25) 0%, transparent 70%)" }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="pb-16 sm:pb-20"
            >
              <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
                WHERE IT STARTED
              </p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase mb-6">
                THREE KIDS. 25KG. A HELPER AND ONE PHONE.
              </h2>

              <div className="space-y-4 font-body text-base text-white/65 leading-relaxed">
                <p>
                  March 2020. My youngest was two months old. I was standing in my backyard in Maun — dusty grey sand everywhere, three kids under five running circles around me — and I told my helper to hold my phone and press record.
                </p>
                <p>
                  I couldn't skip rope. Not even once. I didn't have nice gym clothes. I had hyperpigmentation I was trying to hide and a mind that was telling me I wasn't enough. But something deep inside me — something I can only describe as God — said: <em>start anyway.</em>
                </p>
                <p>
                  My boys would stand there and cheer me on. <em>"Jump, Mommy, jump!"</em> And I'd take the longest breaks between each attempt, catching my breath, fighting my own doubt. But I kept going back. Day after day. And slowly — one skip at a time — fitness started piecing me back together.
                </p>
                <p>
                  I didn't start SnapBack because I wanted to be a fitness influencer. I started it because I was desperate. After three pregnancies, I needed someone who understood what a woman's body actually goes through. Someone who could tell me the truth without trying to sell me a detox tea. That person didn't exist. So I decided to become her.
                </p>
                <p>
                  Nobody told me about diastasis recti. Nobody warned me my pelvic floor would feel completely foreign. Nobody told me it was okay to not bounce back in six weeks — that healing has its own timeline, and rushing it only sets you back further. I had to find all of that out on my own, sometimes the hard way.
                </p>
                <p>
                  So I studied. I got certified. I read everything I could find about postpartum recovery, women's hormones, and the real science behind fat loss and rebuilding. Not to build a business — but because I needed women to have what I never had: the truth, given with grace and zero judgment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ───────────────────────────────────────────────────── */}
      <section
        ref={quoteRef}
        className="relative px-4 py-20 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(123,47,190,0.14) 0%, rgba(233,32,133,0.08) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[clamp(1.5rem,4vw,2.6rem)] text-white/90 leading-snug uppercase mb-6">
              "I have found the hill to die on. I hope you find yours."
            </p>
            <p className="font-body text-sm text-secondary font-semibold tracking-widest uppercase">
              — Patlo Kgosidialwa
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section ref={timelineRef} className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="mb-14"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
              THE JOURNEY
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase">
              HOW WE GOT HERE.
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "linear-gradient(180deg, rgba(233,32,133,0.6), rgba(123,47,190,0.2))" }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="sm:pl-10 relative"
                >
                  {/* Dot */}
                  <div
                    className="hidden sm:block absolute left-0 top-1 h-[22px] w-[22px] rounded-full"
                    style={{ background: "linear-gradient(135deg, #E92085, #7B2FBE)", boxShadow: "0 0 12px rgba(233,32,133,0.4)" }}
                  />
                  <p
                    className="font-display text-sm mb-1"
                    style={{
                      background: "linear-gradient(90deg, #E92085, #7B2FBE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.year}
                  </p>
                  <h3 className="font-display text-xl text-white uppercase mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-white/55 leading-relaxed max-w-2xl">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What she believes ────────────────────────────────────────────── */}
      <section
        ref={valuesRef}
        className="px-4 py-20 sm:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-14 max-w-xl"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
              WHAT I BELIEVE
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white uppercase">
              THE PRINCIPLES BEHIND EVERYTHING.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.09 }}
                className="rounded-2xl p-6 sm:p-7"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Heart className="h-5 w-5 text-secondary/50 mb-4" />
                <h3 className="font-display text-xl text-white uppercase mb-3">{v.title}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Letter excerpt ───────────────────────────────────────────────── */}
      <section
        ref={letterRef}
        className="relative px-4 py-20 sm:py-24 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,47,190,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={letterInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-6">
              A LETTER TO MY BODY
            </p>
            <div
              className="rounded-2xl px-8 py-8 sm:px-10 sm:py-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Left accent */}
              <div className="flex gap-6">
                <div
                  className="shrink-0 w-1 rounded-full"
                  style={{ background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
                />
                <div className="space-y-4 font-body text-base italic text-white/70 leading-relaxed">
                  <p>
                    "Dear Body —
                  </p>
                  <p>
                    I hope I carry you the way you want to be carried. I hope I nourish you the way you want to be nourished.
                  </p>
                  <p>
                    I have seen how powerful and strong you are. You go through everything — the aches, the pains, the illnesses, the impossible seasons — and you still bring me back. You have a beautiful healing power that I am still learning to trust.
                  </p>
                  <p>
                    I'm sorry that the world sees a woman's body as something to be commented on, compared, and corrected. I want you — my body — to show the younger women watching that their bodies are temples to be kept safe. Not tools. Not performance. Not an apology.
                  </p>
                  <p>
                    Thank you for being strong when I wasn't.
                  </p>
                  <p>
                    Thank you for not giving up on me."
                  </p>
                  <p className="not-italic font-semibold text-secondary text-sm tracking-wide">
                    — Patlo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Social proof ─────────────────────────────────────────────────── */}
      <section
        className="px-4 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-6">Follow the journey</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/snapbackwithmrsk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-sm text-white/60 hover:text-secondary transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "9999px", padding: "0.6rem 1.2rem" }}
            >
              <Instagram className="h-4 w-4" />
              @snapbackwithmrsk
            </a>
            <a
              href="https://www.facebook.com/SnapbackFitnessMrsK/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-sm text-white/60 hover:text-secondary transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "9999px", padding: "0.6rem 1.2rem" }}
            >
              <Facebook className="h-4 w-4" />
              SnapbackFitnessMrsK
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="relative px-4 py-24 text-center overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{ background: "radial-gradient(circle, rgba(233,32,133,0.5) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
              YOUR TURN
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white uppercase leading-tight mb-5">
              READY TO WRITE YOUR OWN STORY?
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
              I started exactly where you are right now. Doubting myself. Not knowing where to begin. Wondering if it was even worth trying again. I built SnapBack for the woman in that exact moment — because she deserved better than guesswork and generic plans. The only thing standing between where you are and where you want to be is the decision to begin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                state={{ scrollTo: "who-we-serve" }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide text-white transition-all hover:scale-105 hover:shadow-[0_0_32px_rgba(233,32,133,0.35)]"
                style={{ background: "linear-gradient(135deg, #E92085, #7B2FBE)" }}
              >
                START MY JOURNEY
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide text-white/70 transition-all hover:text-white"
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

export default About;
