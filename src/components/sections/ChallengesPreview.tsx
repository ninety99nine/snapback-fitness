import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
const postpartumMomsImg = "/images/postpartum-moms.png";
const everyWomanImg = "/images/every-woman.png";
const girlsAndTeensImg = "/images/girls-and-teens.png";

const communities = [
  {
    tag: "FOR POSTPARTUM MOMS",
    name: "THE SNAPBACK MOMS",
    tagline: "Your body has been through everything. Now it's time to feel like yourself again.",
    activity: [
      "Weekly postpartum-safe challenges",
      "Daily check-ins & progress photos",
      "Real moms in your corner every single day",
    ],
    image: postpartumMomsImg,
    cardGlow: "rgba(233,32,133,0.25)",
    topBar: "from-secondary via-pink-400 to-purple-500",
    badgeBg: "from-secondary to-pink-500",
    tagColor: "text-secondary",
    tagBorder: "border-secondary/20 bg-secondary/10",
    whatsappUrl: "https://chat.whatsapp.com/HzhuCUtEqgBA0u7ZsLRb4Q?mode=gi_t",
  },
  {
    tag: "FOR EVERY WOMAN",
    name: "THE GLOW UP COLLECTIVE",
    tagline: "Done starting over. Ready to finally finish something — together.",
    activity: [
      "Weekly fitness & mindset challenges",
      "Sweat selfies, meal preps & wins",
      "A community that pulls you back when life gets hard",
    ],
    image: everyWomanImg,
    cardGlow: "rgba(168,85,247,0.25)",
    topBar: "from-purple-500 via-secondary to-pink-400",
    badgeBg: "from-purple-500 to-purple-400",
    tagColor: "text-purple-400",
    tagBorder: "border-purple-400/20 bg-purple-500/10",
    whatsappUrl: "https://chat.whatsapp.com/LmF5w8A8i1A6j7dnLssPDm?mode=gi_t",
  },
  {
    tag: "FOR GIRLS & TEENS",
    name: "STRONG GIRLS RISING",
    tagline: "Learn to love what your body can do — before the world tries to tell you otherwise.",
    activity: [
      "Weekly strength & confidence challenges",
      "Personal bests & peer encouragement",
      "A safe, empowering space built for young women",
    ],
    image: girlsAndTeensImg,
    cardGlow: "rgba(251,191,36,0.2)",
    topBar: "from-amber-400 via-pink-400 to-secondary",
    badgeBg: "from-amber-400 to-yellow-500",
    tagColor: "text-amber-400",
    tagBorder: "border-amber-400/20 bg-amber-400/10",
    whatsappUrl: "https://chat.whatsapp.com/L4o8QeOiouNFVmmKsnLbAX?mode=gi_t",
  },
];

const ORBS = [
  { top: "-8%", left: "10%", w: 420, color: "bg-secondary/[0.06]" },
  { top: "50%", left: "-4%", w: 300, color: "bg-purple-600/[0.07]" },
  { top: "65%", left: "72%", w: 380, color: "bg-secondary/[0.05]" },
  { top: "-4%", left: "62%", w: 260, color: "bg-purple-400/[0.06]" },
];

const ChallengesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden gradient-hero py-20 lg:py-28"
      ref={ref}
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        {ORBS.map((o, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${o.color} blur-3xl`}
            style={{ top: o.top, left: o.left, width: o.w, height: o.w }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center lg:mb-18"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
            FREE CHALLENGES
          </p>
          <h2 className="font-display text-h2 uppercase leading-tight text-white">
            YOUR CHALLENGE.<br />YOUR COMMUNITY.<br className="sm:hidden" /> YOUR COMEBACK.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-white/50">
            I built these communities because every woman deserves a place where she is seen,
            cheered on, and challenged to keep going — completely free. Pick your community.
            Show up every week. Watch what happens when women do it together.
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {communities.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#130D1E] transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
              whileHover={{
                boxShadow: `0 20px 56px ${c.cardGlow}, 0 4px 24px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${c.topBar}`} />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#130D1E] via-[#130D1E]/20 to-transparent" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${c.cardGlow} 0%, transparent 70%)` }}
                />

                {/* WhatsApp badge — top right */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-1.5 shadow-lg">
                  <WhatsAppIcon className="h-3 w-3 text-white" />
                  <span className="font-body text-[9px] font-bold uppercase tracking-widest text-white">WhatsApp</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tag pill */}
                <span
                  className={`mb-4 inline-flex items-center self-start rounded-full border px-2.5 py-0.5 font-body text-[10px] font-semibold uppercase tracking-widest ${c.tagBorder} ${c.tagColor}`}
                >
                  {c.tag}
                </span>

                <h3 className="mb-2 font-display text-xl leading-snug text-white">
                  {c.name}
                </h3>
                <p className="mb-5 font-body text-sm leading-relaxed text-white/45">
                  {c.tagline}
                </p>

                {/* Activity list */}
                <ul className="mb-6 space-y-2.5">
                  {c.activity.map((item, ai) => (
                    <li key={ai} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary/60" />
                      <span className="font-body text-xs leading-relaxed text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/8" />
                  <span className="flex items-center gap-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-[#25D366]">
                    <WhatsAppIcon className="h-2.5 w-2.5" />
                    FREE ON WHATSAPP
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href={c.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-xl bg-gradient-to-r ${c.badgeBg} py-3 text-center font-body text-xs font-semibold uppercase tracking-wide-custom text-white shadow-md transition-all duration-300 hover:scale-[1.02]`}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${c.cardGlow}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                  >
                    JOIN THIS COMMUNITY
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="mt-12 text-center"
        >
          <Link
            to="/challenges"
            className="inline-flex items-center gap-2 font-body text-sm text-white/40 underline-offset-4 transition-colors hover:text-secondary hover:underline"
          >
            See how the communities work →
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ChallengesPreview;
