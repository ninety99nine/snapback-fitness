import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { ArrowRight, ArrowLeft, Check, MessageCircle, Dumbbell, ClipboardCheck, Calendar } from "lucide-react";

const WA_NUMBER = "26774268899";
const FITNESS_LEVELS = ["Complete beginner", "Some experience", "Intermediate", "Advanced"];
const EQUIPMENT = ["Mat only", "Dumbbells at home", "Resistance bands", "Full home gym", "Gym access"];
const TRAINING_GOALS = ["Fat loss", "Muscle building", "Endurance", "Flexibility", "Core strength", "Postpartum recovery"];
const DAYS_PER_WEEK = ["2 days", "3 days", "4 days", "5 days", "6 days"];
const DURATIONS = ["20 min", "30 min", "45 min", "60 min"];
const TIME_PREFS = ["Morning (6am–12pm)", "Afternoon (12pm–5pm)", "Evening (5pm–9pm)"];
const STEP_TITLES = ["Your Profile", "Your Goals", "Your Schedule"];

interface FormData {
  name: string;
  isPostpartum: string;
  fitnessLevel: string;
  equipment: string[];
  trainingGoals: string[];
  injuries: string;
  daysPerWeek: string;
  duration: string;
  timePreference: string;
}

const init: FormData = {
  name: "", isPostpartum: "", fitnessLevel: "", equipment: [],
  trainingGoals: [], injuries: "",
  daysPerWeek: "", duration: "", timePreference: "",
};

const Chip = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 rounded-full border text-sm font-body font-medium transition-all duration-200 ${
      selected
        ? "gradient-cta text-white border-transparent shadow-md"
        : "bg-white text-[#0D0D0D]/70 border-[#0D0D0D]/15 hover:border-secondary/50 hover:text-secondary"
    }`}
  >
    {label}
  </button>
);

const StepBar = ({ current, total, titles }: { current: number; total: number; titles: string[] }) => (
  <div className="flex items-start mb-8">
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} className="flex items-center flex-1">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-body transition-all duration-300 ${
            i + 1 < current ? "gradient-cta text-white" : i + 1 === current ? "gradient-cta text-white ring-4 ring-secondary/20" : "bg-[#0D0D0D]/8 text-[#0D0D0D]/30"
          }`}>
            {i + 1 < current ? <Check className="w-4 h-4" /> : i + 1}
          </div>
          <span className={`text-[10px] font-body mt-1.5 text-center leading-tight max-w-[60px] ${i + 1 === current ? "text-secondary font-semibold" : "text-[#0D0D0D]/35"}`}>
            {titles[i]}
          </span>
        </div>
        {i < total - 1 && (
          <div className={`h-0.5 flex-1 mx-1 mb-4 transition-all duration-300 ${i + 1 < current ? "bg-secondary" : "bg-[#0D0D0D]/10"}`} />
        )}
      </div>
    ))}
  </div>
);

const SummaryRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex justify-between items-start gap-4">
    <span className="font-body text-xs text-[#0D0D0D]/50 shrink-0">{label}</span>
    <span className={`font-body text-xs text-right ${highlight ? "text-secondary font-semibold" : "text-[#0D0D0D]/80"}`}>{value}</span>
  </div>
);

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 32 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -32 }),
};

export default function WorkoutPlansPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(init);
  const [dir, setDir] = useState(1);

  const toggleArr = (key: "equipment" | "trainingGoals", val: string) =>
    setForm(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(v => v !== val) : [...f[key], val] }));

  const canNext = () => {
    if (step === 1) return !!form.name.trim() && !!form.isPostpartum && !!form.fitnessLevel && form.equipment.length > 0;
    if (step === 2) return form.trainingGoals.length > 0;
    if (step === 3) return !!form.daysPerWeek && !!form.duration && !!form.timePreference;
    return true;
  };

  const next = () => { if (!canNext()) return; setDir(1); setStep(s => s + 1); };
  const back = () => { setDir(-1); setStep(s => s - 1); };

  const waURL = () => {
    const msg = `Hi Patlo! 👋 I want to start a Workout Plan with SnapBack Fitness!

*Name:* ${form.name}
*Postpartum:* ${form.isPostpartum}
*Fitness Level:* ${form.fitnessLevel}
*Equipment Available:* ${form.equipment.join(", ")}
*Training Goals:* ${form.trainingGoals.join(", ")}${form.injuries ? `\n*Injuries/Limitations:* ${form.injuries}` : ""}
*Days Per Week:* ${form.daysPerWeek}
*Session Duration:* ${form.duration}
*Preferred Time:* ${form.timePreference}

Please build my personalised workout plan! 💪`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const isDone = step === 4;

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-28 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
              <ArrowLeft className="w-3 h-3" /> Back to home
            </Link>
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">PLAN 03</p>
            <h1 className="font-display text-h1 text-white uppercase mb-4 leading-none">Workout Plans</h1>
            <p className="font-body text-base text-white/65 max-w-lg mb-8">Structured programs you can do at home or at the gym — built around your goals, your schedule, and your available equipment.</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Dumbbell, label: "Home or gym" },
                { icon: ClipboardCheck, label: "Fitness assessment" },
                { icon: Calendar, label: "Structured schedule" },
                { icon: MessageCircle, label: "WhatsApp support" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 bg-white/8 text-white/70 px-4 py-1.5 rounded-full text-sm font-body">
                  <Icon className="w-3.5 h-3.5" /> {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(15,23,42,0.08)] p-6 sm:p-8"
          >
            {!isDone ? (
              <>
                <StepBar current={step} total={3} titles={STEP_TITLES} />

                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div key={step} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22, ease: "easeOut" }}>

                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">Tell us about yourself</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            placeholder="Your name"
                            className="w-full border border-[#0D0D0D]/12 rounded-xl px-4 py-3 font-body text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/30 focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary/60 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Are you postpartum? *</label>
                          <div className="flex gap-2">
                            {["Yes", "No"].map(o => (
                              <Chip key={o} label={o} selected={form.isPostpartum === o} onClick={() => setForm(f => ({ ...f, isPostpartum: o }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Current Fitness Level *</label>
                          <div className="flex gap-2 flex-wrap">
                            {FITNESS_LEVELS.map(l => (
                              <Chip key={l} label={l} selected={form.fitnessLevel === l} onClick={() => setForm(f => ({ ...f, fitnessLevel: l }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Equipment available — select all that apply *</label>
                          <div className="flex gap-2 flex-wrap">
                            {EQUIPMENT.map(e => (
                              <Chip key={e} label={e} selected={form.equipment.includes(e)} onClick={() => toggleArr("equipment", e)} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">What are you training for?</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Training goals — choose all that apply *</label>
                          <div className="flex gap-2 flex-wrap">
                            {TRAINING_GOALS.map(g => (
                              <Chip key={g} label={g} selected={form.trainingGoals.includes(g)} onClick={() => toggleArr("trainingGoals", g)} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">
                            Any injuries or physical limitations? <span className="text-[#0D0D0D]/35 font-normal">optional</span>
                          </label>
                          <textarea
                            value={form.injuries}
                            onChange={e => setForm(f => ({ ...f, injuries: e.target.value }))}
                            placeholder="e.g. knee pain, diastasis recti, hip issues, recent surgery…"
                            rows={3}
                            className="w-full border border-[#0D0D0D]/12 rounded-xl px-4 py-3 font-body text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/30 focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary/60 transition-all resize-none"
                          />
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">Set your training schedule</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Training days per week *</label>
                          <div className="flex gap-2 flex-wrap">
                            {DAYS_PER_WEEK.map(d => (
                              <Chip key={d} label={d} selected={form.daysPerWeek === d} onClick={() => setForm(f => ({ ...f, daysPerWeek: d }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Preferred session length *</label>
                          <div className="flex gap-2 flex-wrap">
                            {DURATIONS.map(d => (
                              <Chip key={d} label={d} selected={form.duration === d} onClick={() => setForm(f => ({ ...f, duration: d }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Preferred training time *</label>
                          <div className="space-y-2">
                            {TIME_PREFS.map(t => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, timePreference: t }))}
                                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 ${
                                  form.timePreference === t
                                    ? "bg-secondary/5 border-secondary text-secondary font-semibold"
                                    : "border-[#0D0D0D]/10 text-[#0D0D0D]/60 hover:border-secondary/35"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#0D0D0D]/6">
                  <button
                    type="button"
                    onClick={back}
                    className={`flex items-center gap-1.5 font-body text-sm text-[#0D0D0D]/45 hover:text-[#0D0D0D]/70 transition-colors ${step === 1 ? "invisible" : ""}`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canNext()}
                    className="flex items-center gap-2 gradient-cta text-white px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-35 disabled:cursor-not-allowed shadow-md shadow-secondary/25"
                  >
                    {step === 3 ? "Review plan" : "Next step"} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="text-center mb-8">
                  <div className="w-14 h-14 gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-secondary/30">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-display text-2xl text-[#0D0D0D] mb-2">Your plan is ready!</h2>
                  <p className="font-body text-sm text-[#0D0D0D]/55 max-w-xs mx-auto">Patlo will build your structured workout plan based on these details.</p>
                </div>

                <div className="bg-[#F8F5FF] rounded-xl p-5 space-y-3 mb-6">
                  <SummaryRow label="Name" value={form.name} />
                  <SummaryRow label="Postpartum" value={form.isPostpartum} />
                  <SummaryRow label="Fitness Level" value={form.fitnessLevel} />
                  <SummaryRow label="Equipment" value={form.equipment.join(", ")} />
                  <SummaryRow label="Goals" value={form.trainingGoals.join(", ")} />
                  {form.injuries && <SummaryRow label="Limitations" value={form.injuries} />}
                  <SummaryRow label="Days/Week" value={form.daysPerWeek} />
                  <SummaryRow label="Session Length" value={form.duration} />
                  <SummaryRow label="Preferred Time" value={form.timePreference} />
                  <div className="pt-2 border-t border-[#0D0D0D]/8">
                    <SummaryRow label="Plan" value="Workout Plans — SnapBack Fitness" highlight />
                  </div>
                </div>

                <a
                  href={waURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full gradient-cta text-white py-4 rounded-xl font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-secondary/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send to Patlo on WhatsApp
                </a>
                <p className="text-center font-body text-xs text-[#0D0D0D]/35 mt-2.5">Opens WhatsApp with your details pre-filled</p>

                <button
                  type="button"
                  onClick={() => { setStep(1); setForm(init); setDir(1); }}
                  className="w-full text-center font-body text-xs text-[#0D0D0D]/35 hover:text-secondary mt-5 transition-colors"
                >
                  Start over
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
