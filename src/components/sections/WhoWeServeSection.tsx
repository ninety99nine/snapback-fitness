import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const postpartumImg = "/images/postpartum-moms.png";
const everyWomanImg = "/images/every-woman.png";
const girlsTeensImg = "/images/girls-and-teens.png";

const audiences = [
  {
    image: postpartumImg,
    imageAlt: "Woman walking confidently in teal fitness wear",
    kicker: "POSTPARTUM MOMS",
    headline: "Your Body Isn't Broken. It's Been Waiting.",
    body: "You don't need to rush back to anything. You need to heal, rebuild your confidence, and find the version of you that still exists on the other side of motherhood. This is where you start.",
    cta: "See Your Options",
    ctaHref: "/services?for=postpartum",
  },
  {
    image: everyWomanImg,
    imageAlt: "Woman powering through a lunge in teal fitness wear",
    kicker: "EVERY WOMAN",
    headline: "This Time, You Finish.",
    body: "No 21-day challenges. No plan built for someone else's body. Just a programme that fits your schedule, your goals, and your real life — with a coach who actually holds you to it.",
    cta: "See Your Options",
    ctaHref: "/services?for=every-woman",
  },
  {
    image: girlsTeensImg,
    imageAlt: "Girls and teens fitness session",
    kicker: "GIRLS & TEENS",
    headline: "Strong Before the World Says Otherwise.",
    body: "Confidence isn't something you find later. Our sessions teach young women to move well, feel strong, and trust their bodies — so they grow up knowing what they're capable of.",
    cta: "See Your Options",
    ctaHref: "/services?for=girls-teens",
  },
] as const;

// ── Individual card with its own scroll ref for parallax ──────────────────────
type Audience = (typeof audiences)[number];

const AudienceCard = ({
  item,
  index,
  sectionInView,
}: {
  item: Audience;
  index: number;
  sectionInView: boolean;
}) => {
  const cardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Image drifts 15% upward as you scroll past the card
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-secondary/15 bg-white shadow-[0_6px_28px_rgba(233,32,133,0.06)] transition-all duration-300 hover:-translate-y-3 hover:border-secondary/60 hover:shadow-[0_32px_64px_rgba(233,32,133,0.22)] cursor-pointer"
    >
      {/* Stretched link — makes the whole card clickable */}
      <Link to={item.ctaHref} className="absolute inset-0 z-10 rounded-3xl" aria-label={`${item.cta} — ${item.kicker}`} />

      {/* ── Image ── */}
      <div className="relative h-96 overflow-hidden lg:h-[420px]">
        <motion.img
          src={item.image}
          alt={item.imageAlt}
          style={{ y }}
          className="h-[115%] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Pink tint overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />

        {/* Gradient fade into card content */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/55 to-transparent" />

        {/* Kicker badge */}
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center rounded-full bg-secondary px-3.5 py-1 font-body text-[10px] font-bold tracking-widest text-white uppercase shadow-md transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(233,32,133,0.5)] group-hover:scale-105">
            {item.kicker}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col px-6 pb-7 pt-2 md:px-7">
        <h3 className="mb-3 font-body text-[1.15rem] font-bold leading-snug text-[#0D0D0D] transition-colors duration-300 group-hover:text-secondary md:text-xl">
          {item.headline}
        </h3>
        <p className="mb-6 font-body text-sm leading-relaxed text-[#0D0D0D]/65">{item.body}</p>

        {/* CTA — visual only, card click is handled by the stretched link above */}
        <div className="mt-auto flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:gap-3 group-hover:px-7 group-hover:shadow-[0_8px_24px_rgba(233,32,133,0.45)] group-hover:scale-105">
            {item.cta}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
const WhoWeServeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-off-white pt-8 pb-16 lg:pt-10 lg:pb-24"
      id="who-we-serve"
      ref={ref}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-secondary/[0.06] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-secondary/[0.05] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
        >
          <p className="mb-3 font-body text-xs font-medium tracking-wide-custom text-secondary uppercase">
            WHO WE WORK WITH
          </p>
          <h2 className="font-display text-h2 uppercase leading-tight text-[#0D0D0D]">
          BUILT FOR EVERY WOMAN.
          </h2>
          <p className="mt-3 font-display text-xl uppercase tracking-wide text-[#0D0D0D]/85 md:text-2xl">
          STARTED WITH MOMS. BUILT FOR EVERY WOMAN WHO'S DONE STARTING OVER.
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-[#0D0D0D]/70">
          Started with moms. Grown for every woman done with plans built for someone else's body. Postpartum, starting over, or starting right — you belong here.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {audiences.map((item, i) => (
            <AudienceCard key={item.kicker} item={item} index={i} sectionInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
