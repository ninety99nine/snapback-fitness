import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Camera, Mic, Zap, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
const postpartumMomsImg = "/images/postpartum-moms.png";
const everyWomanImg = "/images/every-woman.png";
const girlsAndTeensImg = "/images/girls-and-teens.png";

const communities = [
  {
    number: "01",
    tag: "FOR POSTPARTUM MOMS",
    name: "THE SNAPBACK MOMS",
    description:
      "You've had a baby — maybe one, maybe four. Your body has been through pregnancy, birth, and everything that comes after. You may be dealing with exhaustion, low confidence, or just the desperate need to feel like yourself again. You don't need to be pushed harder. You need to be held and challenged at the same time. This community does both.",
    challenges: [
      "7-day morning movement challenge (10 minutes before the kids wake up)",
      "Resistance band glute challenge — post your reps",
      "Postpartum core rebuild — safe exercises, daily check-ins",
      "Hydration challenge — share your water bottle every morning",
      "Skip rope challenge — how many can you do without stopping?",
    ],
    gain: "Safe weekly challenges designed around your postpartum body, a community of moms who truly get it, and the accountability to show up for yourself — even on the hard days.",
    image: postpartumMomsImg,
    cardGlow: "rgba(233,32,133,0.22)",
    topBar: "from-secondary via-pink-400 to-purple-500",
    badgeBg: "from-secondary to-pink-500",
    tagColor: "text-secondary",
    tagBorder: "border-secondary/20 bg-secondary/10",
    ctaGlow: "rgba(233,32,133,0.5)",
    ctaMsg: "Hi Patlo! I want to join the Snapback Moms community!",
  },
  {
    number: "02",
    tag: "FOR EVERY WOMAN",
    name: "THE GLOW UP COLLECTIVE",
    description:
      "She's not necessarily postpartum — she's just a woman who has tried, stopped, tried again, and is ready to finally finish something. She wants to feel strong, feel confident, and be around other women who are doing the same work. She is motivated by progress, by community energy, and by seeing other women show up.",
    challenges: [
      "Full body home workout challenge — post your sweat selfie",
      "Step count challenge — who hits 10,000 steps daily this week?",
      "Meal prep Sunday — share what you prepared",
      "Jump rope cardio blast — time yourself and share your score",
      "Mindset challenge — one journaling prompt per day, share your reflection",
    ],
    gain: "Weekly challenges that push you forward, a collective of women who are doing the work alongside you, and a community so active you'll never have an excuse to disappear again.",
    image: everyWomanImg,
    cardGlow: "rgba(168,85,247,0.22)",
    topBar: "from-purple-500 via-secondary to-pink-400",
    badgeBg: "from-purple-500 to-purple-400",
    tagColor: "text-purple-400",
    tagBorder: "border-purple-400/20 bg-purple-500/10",
    ctaGlow: "rgba(168,85,247,0.5)",
    ctaMsg: "Hi Patlo! I want to join the Glow Up Collective community!",
  },
  {
    number: "03",
    tag: "FOR GIRLS & TEENS",
    name: "STRONG GIRLS RISING",
    description:
      "A young woman, roughly 13–19 years old. She is learning to love her body before the world tries to tell her to hate it. She wants to feel capable, strong, and confident — not to look a certain way, but to know what her body can do. This community is age-appropriate, safe, empowering, and fun.",
    challenges: [
      "Flexibility challenge — share your progress stretch",
      "5-minute daily workout streak — how many days in a row can you do it?",
      "Confidence challenge — one thing you did this week that scared you",
      "Skip rope challenge — beat your personal best",
      "Strength challenge — how many push-ups can you do? Post your count",
    ],
    gain: "Weekly challenges that build real strength and confidence, a safe community of young women who lift each other up, and a space where showing up is always celebrated.",
    image: girlsAndTeensImg,
    cardGlow: "rgba(251,191,36,0.2)",
    topBar: "from-amber-400 via-pink-400 to-secondary",
    badgeBg: "from-amber-400 to-yellow-500",
    tagColor: "text-amber-400",
    tagBorder: "border-amber-400/20 bg-amber-400/10",
    ctaGlow: "rgba(251,191,36,0.45)",
    ctaMsg: "Hi Patlo! I want to join the Strong Girls Rising community!",
  },
];

const steps = [
  {
    num: "01",
    title: "Pick Your Community",
    body: "Choose the group that matches your season of life. Postpartum mom, every woman, or young woman — there is a community built specifically for you.",
  },
  {
    num: "02",
    title: "Join on WhatsApp",
    body: "Tap the button to send me a message. I will add you to your community group and welcome you personally. No forms. No subscriptions. No payment. Just a message.",
  },
  {
    num: "03",
    title: "Show Up for the Challenge",
    body: "Every week, I drop a new challenge into the group. You do it, you share it — a photo, a video, a voice note, whatever feels right. The community shows up with you.",
  },
  {
    num: "04",
    title: "Keep Going Together",
    body: "On the days you don't feel like it, someone in the group will post their check-in and pull you back. This is accountability that actually works — because it's real women, not an app.",
  },
];

const insideItems = [
  {
    icon: Camera,
    title: "Photos & Videos",
    body: "Members share progress photos, workout clips, and before-and-after moments in real time. Every post is a spark for someone else.",
  },
  {
    icon: Mic,
    title: "Voice Notes",
    body: "Because sometimes you just need to talk it out. Members send voice notes about tough sessions, big wins, and everything in between.",
  },
  {
    icon: Zap,
    title: "Weekly Challenges",
    body: "A new challenge drops every single week without fail. There is always something to show up for — and a community waiting to cheer you on.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. Always. No hidden costs, no subscriptions, no upsells. I built these communities because I believe every woman deserves access — regardless of budget.",
  },
  {
    q: "Where does the community live?",
    a: "On WhatsApp. All you need is the app you already have on your phone. No new platforms, no downloads, no logins.",
  },
  {
    q: "How often are challenges posted?",
    a: "Every week, without fail. I drop a new challenge into each group every single week. There is always something to show up for.",
  },
  {
    q: "Can I join more than one community?",
    a: "You can, but we recommend starting with the one that matches your current season of life. You will get far more out of it when every woman around you shares the same lived experience.",
  },
  {
    q: "What if I miss a week?",
    a: "You pick back up. There is no failing here — only starting again. The community is still there waiting. Nobody tracks your absences. They only celebrate your return.",
  },
  {
    q: "Is this suitable for postpartum women?",
    a: "There is an entire community built specifically for postpartum moms. Every challenge in The Snapback Moms group is designed with your postpartum body in mind. You are exactly who it was made for.",
  },
];

const ORBS = [
  { top: "5%", left: "5%", w: 500, color: "bg-secondary/[0.06]" },
  { top: "40%", left: "80%", w: 400, color: "bg-purple-600/[0.07]" },
  { top: "70%", left: "10%", w: 350, color: "bg-secondary/[0.04]" },
];

const Challenges = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          {ORBS.map((o, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${o.color} blur-3xl`}
              style={{ top: o.top, left: o.left, width: o.w, height: o.w }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary"
          >
            FREE COMMUNITIES · WEEKLY CHALLENGES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-h1 uppercase leading-tight text-white"
          >
            THIS IS WHERE WOMEN<br />SHOW UP FOR EACH OTHER.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/50"
          >
            I didn't want to just give you a programme and leave you alone with it. I wanted
            to give you something better — a community of women who are in the exact same season
            of life as you, showing up every week, sharing their progress, cheering you on,
            and being cheered on in return. No payment. No pressure. Just women doing the work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#communities"
              className="gradient-cta inline-flex items-center gap-2 rounded-full px-8 py-3 font-body text-sm font-semibold uppercase tracking-wide-custom text-white transition-transform hover:scale-105"
            >
              FIND MY COMMUNITY <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Three Communities */}
      <section
        id="communities"
        className="relative overflow-hidden bg-[#0D0D0D] py-20 lg:py-28"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              CHOOSE YOUR COMMUNITY
            </p>
            <h2 className="font-display text-h2 uppercase text-white">
              THREE COMMUNITIES.<br />ONE FOR EVERY WOMAN.
            </h2>
          </div>

          <div className="space-y-8">
            {communities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-white/8 bg-[#130D1E]"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
              >
                {/* Top bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${c.topBar}`} />

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden lg:h-[480px]">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#130D1E] hidden lg:block" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#130D1E] via-[#130D1E]/20 to-transparent lg:hidden" />

                    {/* Community number badge */}
                    <div
                      className={`absolute left-4 top-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${c.badgeBg} px-3 py-2 shadow-xl`}
                    >
                      <span className="font-display text-3xl leading-none text-white">{c.number}</span>
                      <span className="font-body text-[7px] font-bold uppercase tracking-widest text-white/80">COMMUNITY</span>
                    </div>

                    {/* WhatsApp badge */}
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-1.5 shadow-lg">
                      <WhatsAppIcon className="h-3 w-3 text-white" />
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-white">WhatsApp</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-5 lg:p-7">
                    <span
                      className={`mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-widest ${c.tagBorder} ${c.tagColor}`}
                    >
                      <Users className="h-2.5 w-2.5" />
                      {c.tag}
                    </span>

                    <h3 className="mb-2 font-display text-xl leading-snug text-white lg:text-2xl">
                      {c.name}
                    </h3>
                    <p className="mb-3 font-body text-xs leading-relaxed text-white/50">
                      {c.description}
                    </p>

                    {/* Challenge examples */}
                    <div className="mb-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="mb-2 font-body text-[10px] font-bold uppercase tracking-widest text-white/30">
                        EXAMPLE WEEKLY CHALLENGES
                      </p>
                      <ul className="space-y-1.5">
                        {c.challenges.map((ch, ci) => (
                          <li key={ci} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary/50" />
                            <span className="font-body text-xs leading-relaxed text-white/55">{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What she gains */}
                    <div className="mb-3">
                      <p className="mb-1 font-body text-[10px] font-bold uppercase tracking-widest text-white/30">
                        WHAT YOU GAIN
                      </p>
                      <p className="font-body text-xs leading-relaxed text-white/60">{c.gain}</p>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/26774268899?text=${encodeURIComponent(c.ctaMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${c.badgeBg} px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide-custom text-white shadow-md transition-all duration-300 hover:scale-[1.02]`}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${c.ctaGlow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      JOIN ON WHATSAPP — IT'S FREE
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              HOW IT WORKS
            </p>
            <h2 className="font-display text-3xl uppercase text-white lg:text-4xl">
              FOUR STEPS. ONE COMMUNITY. REAL RESULTS.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
              >
                <p className="mb-3 font-display text-4xl text-secondary/30">{s.num}</p>
                <h3 className="mb-2 font-display text-lg text-white">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/45">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Inside */}
      <section
        className="relative overflow-hidden gradient-hero py-16 lg:py-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              WHAT HAPPENS INSIDE
            </p>
            <h2 className="font-display text-3xl uppercase text-white lg:text-4xl">
              IT'S NOT QUIET IN HERE.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-white/50">
              These are not groups where one person posts and everyone scrolls. These are active,
              loud, joyful, sweaty communities. Every week there is a new challenge. Every day
              someone posts their check-in. And when someone has a hard day, the group holds her.
              That is what this is.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {insideItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 font-display text-lg text-white">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/45">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patlo's Note */}
      <section
        className="relative overflow-hidden gradient-hero py-16 lg:py-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl border border-secondary/20 bg-secondary/5 px-8 py-10 text-center"
          >
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              A NOTE FROM PATLO
            </p>
            <blockquote className="font-body text-base leading-relaxed text-white/70 italic">
              "I know what it feels like to be doing this completely alone. No one to check in on
              you. No one to notice when you disappear. No one to say 'I see you, keep going.'
              I built these communities because I didn't want a single woman going through her
              journey in silence. You deserve to be surrounded by women who get it — because they
              are living it too. Come join us. It's free. It's real. And we are waiting for you."
            </blockquote>
            <p className="mt-5 font-display text-sm uppercase tracking-widest text-secondary">
              — Your Coach
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D0D0D] py-16 lg:py-20">
        <div className="container mx-auto max-w-2xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              FAQ
            </p>
            <h2 className="font-display text-3xl uppercase text-white lg:text-4xl">
              QUESTIONS? ANSWERED.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5"
              >
                <p className="mb-2 font-display text-base text-white">{f.q}</p>
                <p className="font-body text-sm leading-relaxed text-white/45">{f.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-secondary/20 bg-secondary/5 px-8 py-8 text-center"
          >
            <p className="mb-2 font-display text-xl text-white">Still have questions?</p>
            <p className="mb-5 font-body text-sm text-white/45">
              Message me directly on WhatsApp. I respond to every message.
            </p>
            <a
              href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%20have%20a%20question%20about%20the%20communities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-pink-500 px-8 py-3 font-body text-sm font-semibold uppercase tracking-wide-custom text-white transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              ASK ME ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Challenges;
