import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Tag, Video } from "lucide-react";
const faithFitnessImg = "/images/womens-awards-botswana.png";
const colorRunImg = "/images/morning-brew.png";
const kidsRunImg = "/images/the-alchemy.png";

const events = [
  {
    name: "FAITH & FITNESS",
    type: "Community Event",
    date: "Coming Soon",
    location: "Gaborone, Botswana",
    price: "P200",
    image: faithFitnessImg,
    cardGlow: "rgba(233,32,133,0.18)",
    topBar: "from-secondary via-pink-400 to-purple-500",
    iconColor: "text-secondary",
    typePill: "bg-secondary/15 text-secondary",
  },
  {
    name: "MAUN FAMILY COLOR RUN",
    type: "Family Event",
    date: "Coming Soon",
    location: "Maun, Botswana",
    price: "P80 – P250",
    image: colorRunImg,
    cardGlow: "rgba(168,85,247,0.18)",
    topBar: "from-purple-500 via-secondary to-pink-400",
    iconColor: "text-purple-400",
    typePill: "bg-purple-500/15 text-purple-400",
  },
  {
    name: "SNAPBACK ONLINE WELLNESS SESSION",
    type: "Online · Zoom",
    date: "Coming Soon",
    location: "Zoom — Anywhere in the World",
    price: "FREE",
    image: kidsRunImg,
    cardGlow: "rgba(233,32,133,0.18)",
    topBar: "from-pink-400 via-secondary to-purple-500",
    iconColor: "text-pink-400",
    typePill: "bg-pink-400/15 text-pink-300",
    isOnline: true,
  },
];

const ORBS = [
  { top: "-10%", left: "15%",  w: 400, color: "bg-secondary/[0.07]"  },
  { top: "40%",  left: "-5%",  w: 320, color: "bg-purple-600/[0.07]" },
  { top: "60%",  left: "70%",  w: 360, color: "bg-secondary/[0.05]"  },
  { top: "-5%",  left: "65%",  w: 280, color: "bg-purple-400/[0.06]" },
];

const EventsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden gradient-hero py-20 lg:py-28"
      ref={ref}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
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

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center lg:mb-18"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
            UPCOMING EVENTS
          </p>
          <h2 className="font-display text-h2 uppercase leading-tight text-white">
            JOIN THE MOVEMENT.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-white/50">
            Real events. Real community. Botswana-based and growing — come sweat, celebrate, and connect.
          </p>
        </motion.div>

        {/* ── Event Cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {events.map((e, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#130D1E] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                boxShadow: `0 16px 48px ${e.cardGlow}, 0 4px 24px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${e.topBar}`} />

              {/* Image header area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay fading into card */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#130D1E] via-[#130D1E]/30 to-transparent" />
                {/* Hover colour wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${e.cardGlow} 0%, transparent 70%)` }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Type pill */}
                <span
                  className={`mb-4 inline-block self-start rounded-full px-3 py-0.5 font-body text-[10px] font-semibold uppercase tracking-widest ${e.typePill}`}
                >
                  {e.type}
                </span>

                <h3 className="mb-5 font-display text-xl leading-snug text-white">
                  {e.name}
                </h3>

                {/* Meta details */}
                <div className="mb-6 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <Clock className={`h-3.5 w-3.5 shrink-0 ${e.iconColor} opacity-70`} />
                    <span className={`font-body text-xs font-medium ${e.iconColor}`}>
                      {e.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {e.isOnline
                      ? <Video className="h-3.5 w-3.5 shrink-0 text-pink-400/70" />
                      : <MapPin className="h-3.5 w-3.5 shrink-0 text-white/35" />
                    }
                    <span className="font-body text-xs text-white/45">{e.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Tag className="h-3.5 w-3.5 shrink-0 text-white/35" />
                    <span className="font-body text-sm font-bold text-white">{e.price}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-5 h-px bg-white/8" />

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%27d%20like%20to%20know%20more%20about%20upcoming%20events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-gradient-to-r from-secondary to-pink-500 py-3 text-center font-body text-xs font-semibold uppercase tracking-wide-custom text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(233,32,133,0.4)]"
                  >
                    Register on WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default EventsPreview;
