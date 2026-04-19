import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
const postpartumImg = "/images/postpartum-moms.png";
const everyWomanImg = "/images/every-woman.png";
const girlsTeensImg = "/images/girls-and-teens.png";
import Navbar from "@/components/layout/Navbar";
import SlantDivider from "@/components/layout/SlantDivider";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  ArrowRight, Check, Wifi, Utensils, Dumbbell, UserCheck,
  MessageCircle, MapPin, Calendar, ClipboardCheck, Target,
  ShieldCheck, RefreshCw, Star,
} from "lucide-react";

const WA_NUMBER = "26774268899";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like a free 15-minute consultation with SnapBack Fitness 💪")}`;

// ── Service data ──────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "virtual-training",
    num: "01",
    name: "VIRTUAL TRAINING",
    image: "/images/virtual training.png",
    tagline: "Full coaching from anywhere in Botswana.",
    description:
      "You don't need to be in Maun to work with me. I build your personalised programme, check in with you regularly on WhatsApp, and adjust your plan as you progress — all remotely. This is my most popular option because it fits real life.",
    price: "P800",
    period: "first month",
    href: "/plans/virtual-training",
    Icon: Wifi,
    includes: [
      { Icon: ClipboardCheck, text: "Personalised weekly workout programme" },
      { Icon: MessageCircle, text: "WhatsApp check-ins and ongoing support" },
      { Icon: RefreshCw,     text: "Progress review every two weeks" },
      { Icon: Calendar,      text: "Schedule built around your availability" },
      { Icon: Target,        text: "Monthly plan adjustments as you grow" },
    ],
    perfectFor: [
      "Women anywhere in Botswana outside Maun",
      "Busy moms who need flexibility in their training",
      "Postpartum women starting or restarting their journey",
      "Anyone who wants full coaching without commuting",
    ],
  },
  {
    id: "meal-plans",
    num: "02",
    name: "MEAL PLANS",
    image: "/images/meal-plan.png",
    tagline: "Customised nutrition built for your body and goals.",
    description:
      "What you eat matters as much as how you train. I create a meal plan around your body, your goals, and your lifestyle — not a generic template. Every plan comes with practical guidance you can actually follow in day-to-day life.",
    price: "P400",
    period: "per month",
    href: "/plans/meal-plans",
    Icon: Utensils,
    includes: [
      { Icon: ClipboardCheck, text: "In-depth nutrition assessment" },
      { Icon: Target,         text: "Custom meal plan matched to your goals" },
      { Icon: ShieldCheck,    text: "Recipes and practical shopping guidance" },
      { Icon: RefreshCw,      text: "Monthly plan review and updates" },
      { Icon: MessageCircle,  text: "WhatsApp support for questions" },
    ],
    perfectFor: [
      "Women who want to lose weight through what they eat",
      "Postpartum moms rebuilding healthy eating habits",
      "Anyone feeling lost about nutrition and where to start",
      "Women who want a plan that works with local foods",
    ],
  },
  {
    id: "workout-plans",
    num: "03",
    name: "WORKOUT PLANS",
    tagline: "Structured programmes you can do at home or the gym.",
    description:
      "A well-built programme makes all the difference. I design structured weekly workouts with the right balance of training and rest — whether you're at home with no equipment or at a gym. You get the plan; you train at your own pace.",
    price: "P300",
    period: "per month",
    href: "/plans/workout-plans",
    Icon: Dumbbell,
    includes: [
      { Icon: ClipboardCheck, text: "Full fitness assessment before I build your plan" },
      { Icon: Calendar,       text: "Structured weekly programme with rest days" },
      { Icon: Target,         text: "Goal-aligned training approach" },
      { Icon: ShieldCheck,    text: "Exercise descriptions and guidance notes" },
      { Icon: RefreshCw,      text: "Monthly programme updates" },
    ],
    perfectFor: [
      "Self-motivated women who prefer to train independently",
      "Women who already have a gym membership or home setup",
      "Anyone who wants a proper structure without live coaching",
      "Women building consistency before upgrading to full coaching",
    ],
  },
  {
    id: "personal-training",
    num: "04",
    name: "PERSONAL TRAINING",
    tagline: "One-on-one sessions in Maun — fully focused on you.",
    description:
      "If you're in Maun and want the most hands-on experience, this is it. We train together in person. I coach your form, push you when you need it, and build sessions around exactly what your body needs. Nothing cookie-cutter.",
    price: "P600",
    period: "per session",
    href: "/plans/personal-training",
    Icon: UserCheck,
    includes: [
      { Icon: MapPin,         text: "In-person sessions in Maun" },
      { Icon: Calendar,       text: "Flexible session scheduling that suits you" },
      { Icon: Target,         text: "Coaching aligned to your specific goals" },
      { Icon: ShieldCheck,    text: "Real-time form correction and guidance" },
      { Icon: Star,           text: "Most personalised experience available" },
    ],
    perfectFor: [
      "Women in Maun who want direct, in-person coaching",
      "Anyone returning from injury or postpartum recovery",
      "Women who want the highest level of accountability",
      "Those who've tried going it alone and want real support",
    ],
  },
];

// ── Subcomponents ─────────────────────────────────────────────────────────────

function ServiceSection({ s, index, nextBg }: { s: typeof SERVICES[0]; index: number; nextBg: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section
      id={s.id}
      ref={ref}
      className={`relative overflow-hidden pt-20 lg:pt-28 pb-28 lg:pb-36 ${isEven ? "bg-off-white" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Body — header lives inside the left column so both sides start flush */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: header + description + includes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Service header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 font-body text-xs font-bold text-secondary">
                  {s.num}
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-secondary/40 to-transparent" />
                <span className="font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase">
                  {s.price} {s.period}
                </span>
              </div>
              <h2 className="font-display text-h1 text-[#0D0D0D] uppercase leading-none mb-4">
                {s.name}
              </h2>
              <p className="font-body text-lg text-[#0D0D0D]/60 leading-relaxed">
                {s.tagline}
              </p>
            </div>

            <p className="font-body text-base text-[#0D0D0D]/65 leading-relaxed">
              {s.description}
            </p>

            <div>
              <p className="font-body text-xs font-semibold tracking-wide-custom text-[#0D0D0D]/40 uppercase mb-4">
                What's included
              </p>
              <ul className="space-y-3">
                {s.includes.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Icon className="h-3.5 w-3.5 text-secondary" />
                    </span>
                    <span className="font-body text-sm text-[#0D0D0D]/75 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

          {/* Perfect for */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-white shadow-[0_8px_32px_rgba(123,47,190,0.09)] border border-[#F0EBFF] h-full flex flex-col overflow-hidden">

              {/* Image or gradient top */}
              {s.image ? (
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-[#FFF0F8]">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                  {/* Plan pill overlaid on image */}
                  <div className="absolute bottom-4 left-5">
                    <span className="inline-flex items-center gap-1.5 gradient-cta text-white px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-wide-custom uppercase shadow-md">
                      <s.Icon className="h-3 w-3" />
                      {s.name}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="px-7 pt-7 pb-0" style={{ background: "linear-gradient(160deg, #FAF5FF 0%, #FFF0F8 100%)" }}>
                  <span className="inline-flex items-center gap-1.5 gradient-cta text-white px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-wide-custom uppercase mb-5">
                    <s.Icon className="h-3 w-3" />
                    {s.name}
                  </span>
                </div>
              )}

              {/* Price area */}
              <div className="px-7 pt-5 pb-4" style={!s.image ? { background: "linear-gradient(160deg, #FAF5FF 0%, #FFF0F8 100%)" } : {}}>
                <div className="flex items-end gap-1.5">
                  <span className="font-display text-5xl text-[#0D0D0D] leading-none">{s.price}</span>
                  <span className="font-body text-sm text-[#0D0D0D]/40 mb-1">{s.period}</span>
                </div>
              </div>

              {/* Body */}
              <div className="px-7 py-6 flex flex-col flex-1">
                <p className="font-body text-[10px] font-semibold tracking-wide-custom text-[#0D0D0D]/35 uppercase mb-4">
                  This plan is for you if…
                </p>

                <ul className="space-y-3 flex-1">
                  {s.perfectFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <Check className="h-3 w-3 text-secondary" />
                      </span>
                      <span className="font-body text-sm text-[#0D0D0D]/65 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={s.href}
                  className="mt-7 flex items-center justify-center gap-2 gradient-cta text-white py-3.5 rounded-2xl font-body text-sm font-semibold tracking-wide-custom hover:opacity-90 hover:scale-[1.02] transition-all shadow-md shadow-secondary/20"
                >
                  Start this plan <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <SlantDivider fill={nextBg} flip={isEven} />
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const AUDIENCE_CONTEXT = {
  "postpartum": {
    img: postpartumImg,
    alt: "Postpartum mom beginning her fitness recovery",
    kicker: "FOR POSTPARTUM MOMS",
    headline: <>YOUR BODY<br /><span className="whitespace-nowrap">ISN'T BROKEN.</span></>,
    sub: "You've already done the hardest part. Now let's find you the right plan to heal, rebuild, and feel like yourself again.",
  },
  "every-woman": {
    img: everyWomanImg,
    alt: "Every woman ready to commit to her fitness",
    kicker: "FOR EVERY WOMAN",
    headline: <>THIS TIME,<br className="hidden sm:block" /> YOU FINISH.</>,
    sub: "No more plans that weren't built for you. Pick what fits your life — I'll hold you to it.",
  },
  "girls-teens": {
    img: girlsTeensImg,
    alt: "Girl building strength and confidence",
    kicker: "FOR GIRLS & TEENS",
    headline: <>STRONG<br /><span className="whitespace-nowrap">STARTS HERE.</span></>,
    sub: "The right foundation changes everything. Let's build it early.",
  },
} as const;

export default function ServicesPage() {
  const heroRef = useRef(null);
  const [searchParams] = useSearchParams();
  const forParam = searchParams.get("for") as keyof typeof AUDIENCE_CONTEXT | null;
  const ctx = forParam ? AUDIENCE_CONTEXT[forParam] ?? null : null;

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-dark pt-28 pb-28 lg:pt-36 lg:pb-32 relative overflow-hidden" ref={heroRef}>
        {/* Subtle glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 gap-10 items-end ${ctx ? "lg:grid-cols-2" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-4">
                {ctx ? ctx.kicker : "SNAPBACK FITNESS"}
              </p>
              <h1 className="font-display text-hero text-white uppercase leading-none mb-6">
                {ctx ? ctx.headline : <> EVERY PLAN.<br className="hidden sm:block" /> BUILT FOR YOU.</>}
              </h1>
              <p className="font-body text-base text-white/60 max-w-xl leading-relaxed mb-10">
                {ctx ? ctx.sub : "I don't do one-size-fits-all. Whether you're starting from scratch, rebuilding postpartum, or ready to level up — there's a plan here for exactly where you are right now."}
              </p>

              {/* Quick-jump nav */}
              <div className="flex flex-wrap gap-2.5">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="flex items-center gap-2 bg-white/8 hover:bg-secondary/20 border border-white/10 hover:border-secondary/40 text-white/70 hover:text-white px-4 py-2 rounded-full font-body text-xs font-medium transition-all duration-200"
                  >
                    <s.Icon className="h-3.5 w-3.5" />
                    {s.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Audience image — only shown when arriving from a card */}
            {ctx && (
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:flex justify-center items-end"
              >
                <img
                  src={ctx.img}
                  alt={ctx.alt}
                  className="w-auto object-contain object-bottom drop-shadow-2xl"
                  style={{ height: "clamp(500px, 68vh, 700px)", marginBottom: "-4rem" }}
                />
              </motion.div>
            )}
          </div>
        </div>
        <SlantDivider fill="#F8F5FF" />
      </section>

      {/* ── Service sections ───────────────────────────────────────────────── */}
      {SERVICES.map((s, i) => {
        const isLast = i === SERVICES.length - 1;
        const nextBg = isLast ? "#0D0D0D" : i % 2 === 0 ? "#ffffff" : "#F8F5FF";
        return <ServiceSection key={s.id} s={s} index={i} nextBg={nextBg} />;
      })}

      {/* ── Not sure which plan ───────────────────────────────────────────── */}
      <section className="bg-dark py-20 lg:py-28 relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-4">
              NOT SURE WHERE TO START?
            </p>
            <h2 className="font-display text-h1 text-white uppercase leading-none mb-6">
              LET'S FIGURE IT<br />OUT TOGETHER.
            </h2>
            <p className="font-body text-base text-white/60 max-w-lg mx-auto leading-relaxed mb-10">
              Jump on a free 15-minute chat with me. No pressure, no pitch. I'll listen to where you are, what you're dealing with, and tell you honestly which plan — if any — makes sense for you right now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 gradient-cta text-white px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide-custom hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-secondary/30 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Book a free consultation
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white font-body text-sm transition-colors"
              >
                Back to home <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-6 font-body text-xs text-white/25">
              No payments. No obligation. Just a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
