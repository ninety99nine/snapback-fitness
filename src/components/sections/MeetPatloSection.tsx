import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
const myStory = "/images/my-story.png";

const MeetPatloSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-off-white pb-8 pt-4 lg:pb-16 lg:pt-6"
      id="patlo-story"
      ref={ref}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[52%]">
        <svg
          className="h-full w-full opacity-38"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="meetPatloContourMidGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="8%" stopColor="#e92085" stopOpacity="0.025" />
              <stop offset="36%" stopColor="#e92085" stopOpacity="0.12" />
              <stop offset="58%" stopColor="#e92085" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#e92085" stopOpacity="0.008" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#meetPatloContourMidGlow)" strokeWidth="1.35">
            <path d="M-110 220C140 120 365 120 600 205C845 295 1095 305 1360 215C1480 175 1600 170 1715 205" />
            <path d="M-145 305C105 205 345 210 580 290C830 380 1085 392 1345 305C1470 265 1595 260 1720 295" />
            <path d="M-170 400C80 300 330 305 565 380C815 465 1075 480 1335 400C1465 360 1595 355 1730 390" />
            <path d="M-195 505C60 405 315 410 550 480C805 565 1060 582 1325 505C1455 470 1590 465 1735 500" />
            <path d="M-215 615C45 520 300 525 540 592C790 670 1050 692 1320 620C1450 585 1588 580 1740 610" />
          </g>
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 top-0 z-0 h-[78%] w-[52%] bg-off-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[20%]">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="meetPatloFeetContour" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e92085" stopOpacity="0.03" />
              <stop offset="40%" stopColor="#e92085" stopOpacity="0.06" />
              <stop offset="75%" stopColor="#e92085" stopOpacity="0.095" />
              <stop offset="100%" stopColor="#e92085" stopOpacity="0.13" />
            </linearGradient>
          </defs>
          <path
            d="M-235 168C35 128 285 132 530 168C780 208 1045 224 1310 180C1445 160 1585 156 1750 170"
            fill="none"
            stroke="url(#meetPatloFeetContour)"
            strokeWidth="1.8"
          />
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Founder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-lg flex items-center justify-center w-full mb-12 lg:mb-0"
          >
            <img
              src={myStory}
              alt="Patlo from SnapBack Fitness"
              className="max-w-xs h-auto object-contain object-left"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-4">
            FOUNDED BY A MOM, BUILT FOR MOMS.
            </p>
            <h2 className="font-display text-h2 scroll-mt-28 text-[#0D0D0D] uppercase mb-6">
              I'VE BEEN WHERE YOU ARE.
            </h2>
            <p className="font-body text-base text-[#0D0D0D]/70 leading-relaxed mb-4">
            Three kids. 25kg gained. Countless moments of doubt — and wondering if I'll ever feel like me again, not just someone's mum.
            </p>
            <p className="font-body text-base text-[#0D0D0D]/70 leading-relaxed mb-8">
            I started SnapBack because I needed it — and no one was building it for women like me. Five years and hundreds of women across Botswana later, I know this: your body isn't broken. It just needs the right plan and someone who actually shows up with you.
            </p>

            <div className="flex flex-nowrap gap-2 mb-8">
              {["MOM OF THREE", "25KG LOST", "5+ YEARS COACHING"].map((stat) => (
                <div
                  key={stat}
                  className="group relative overflow-hidden rounded-lg border border-[#ff84bf]/45 bg-gradient-to-r from-[#e92085] via-[#f02f96] to-[#d91578] px-3 py-3 sm:px-6 sm:py-3.5 shadow-[0_10px_24px_rgba(233,32,133,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(233,32,133,0.3)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent opacity-90" />
                  <span className="relative font-body text-xs sm:text-sm font-semibold tracking-wide text-foreground whitespace-nowrap">
                    {stat}
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-secondary transition-colors hover:text-secondary-light"
              >
                <span className="relative">
                  READ MY FULL STORY
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default MeetPatloSection;
