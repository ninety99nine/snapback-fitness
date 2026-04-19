import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Ban,
  HeartPulse,
  Moon,
  RotateCcw,
  UserCheck,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const painPoints: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: UserRound,
    title: "YOU DON'T RECOGNIZE YOUR BODY ANYMORE.",
    desc: "I know that feeling. Pregnancy changes everything — not just your body, but how you see yourself. You deserve more than guesswork. You deserve a clear path back to you.",
  },
  {
    icon: RotateCcw,
    title: "YOU'VE STARTED OVER SO MANY TIMES YOU'VE LOST COUNT.",
    desc: "I've been there too. The difference this time isn't willpower — it's having a real plan and someone who won't let you disappear when life gets hard.",
  },
  {
    icon: Ban,
    title: "PEOPLE ARE PUSHING DETOX TEAS AND QUICK FIXES AT YOU.",
    desc: "I built SnapBack because I was tired of that too. No teas. No shakes. No shortcuts that don't work. Just real training, real food, and real results that actually last.",
  },
  {
    icon: Moon,
    title: "YOU'RE EXHAUSTED AND DON'T KNOW WHERE TO BEGIN.",
    desc: "You don't need to have energy to start. You just need to show up. I'll meet you exactly where you are and we'll build from there — together.",
  },
  {
    icon: HeartPulse,
    title: "YOU WANT SAFE EXERCISE BUT NOBODY EXPLAINS DIASTASIS RECTI.",
    desc: "I do. Postpartum recovery is my speciality. I understand what your body has been through and exactly how to bring it back safely — no guessing, no risk.",
  },
  {
    icon: UserCheck,
    title: "YOU NEED ACCOUNTABILITY, NOT ANOTHER APP.",
    desc: "I'm not an algorithm. I'm a real person who checks in, shows up, and genuinely cares whether you reach your goal. Your transformation matters to me — not just your subscription.",
  },
];

/* Explicit rgba — theme `secondary/opacity` in gradients often fails to render on thin lines */
const streakH =
  "pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(233,32,133,0.28)] to-transparent";
const streakV =
  "pointer-events-none absolute right-0 top-0 bottom-0 z-0 w-px bg-gradient-to-b from-transparent via-[rgba(233,32,133,0.28)] to-transparent";

/** Horizontal / vertical lines between cells (1 / 2 / 3 column layouts). */
function PainPointCellStreaks({ index: i }: { index: number }) {
  const showVertMd = i % 2 === 0;
  const showVertLg = i % 3 !== 2;

  let vertVisibility: string;
  if (!showVertMd && !showVertLg) vertVisibility = "hidden";
  else if (showVertMd && showVertLg) vertVisibility = "hidden md:block";
  else if (showVertMd && !showVertLg) vertVisibility = "hidden md:block lg:hidden";
  else vertVisibility = "hidden md:hidden lg:block";

  return (
    <>
      {i < 5 && (
        <div
          className={cn(streakH, i >= 4 && "md:hidden", i >= 3 && "lg:hidden")}
          aria-hidden
        />
      )}
      <div className={cn(streakV, vertVisibility)} aria-hidden />
    </>
  );
}

const PainPointsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-off-white pb-8 pt-16 lg:pb-10 lg:pt-24" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
        >
          <p className="mb-4 font-body text-xs font-medium tracking-wide-custom text-secondary uppercase">
            IF THIS FEELS LIKE YOU
          </p>
          <h2 className="font-display text-h2 leading-tight text-[#0D0D0D]">
            We See You. And We&apos;ve Been There.
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[#0D0D0D]/70">
            You haven&apos;t failed. You&apos;ve just been doing this alone, without a plan built for your body, your
            life, and where you actually are right now.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="relative p-5 md:p-6"
              >
                <PainPointCellStreaks index={i} />
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fde8f2]/90 text-secondary"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="mb-2 font-body text-sm font-bold leading-snug text-[#0D0D0D]">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-[#0D0D0D]/70">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="mx-auto mt-8 max-w-xl text-center lg:mt-10"
        >
          <p className="font-body text-base italic text-secondary">
            SnapBack was built exactly for this.
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-[#0D0D0D]/60">
            I lived it first — the doubt, the weight, the restarts.{" "}
            <Link
              to="/about"
              className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 transition-colors hover:text-secondary-light hover:decoration-secondary-light"
            >
              Here&apos;s my story.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
