import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { ArrowRight, ArrowLeft, Check, MessageCircle, MapPin, Users, Star } from "lucide-react";

const WA_NUMBER = "26774268899";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const EXPERIENCE_LEVELS = ["Complete beginner", "Some experience", "Regular gym-goer"];
const OBJECTIVES = ["Weight loss", "Strength building", "Postpartum recovery", "Sport-specific", "Flexibility & mobility", "Accountability & motivation"];
const FREQUENCY = ["Once a week", "Twice a week", "3× per week", "4+ times a week"];
const TIME_SLOTS = ["Early morning (6am–8am)", "Morning (8am–10am)", "Midday (12pm–2pm)", "Afternoon (4pm–6pm)", "Evening (6pm–8pm)"];
const STEP_TITLES = ["Your Profile", "Your Goals", "Your Schedule"];

interface FormData {
  name: string;
  isPostpartum: string;
  experienceLevel: string;
  objectives: string[];
  specialConsiderations: string;
  frequency: string;
  preferredDays: string[];
  timeSlot: string;
}

const init: FormData = {
  name: "", isPostpartum: "", experienceLevel: "",
  objectives: [], specialConsiderations: "",
  frequency: "", preferredDays: [], timeSlot: "",
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

export default function PersonalTrainingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(init);
  const [dir, setDir] = useState(1);

  const toggleArr = (key: "objectives" | "preferredDays", val: string) =>
    setForm(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(v => v !== val) : [...f[key], val] }));

  const canNext = () => {
    if (step === 1) return !!form.name.trim() && !!form.isPostpartum && !!form.experienceLevel;
    if (step === 2) return form.objectives.length > 0 && !!form.frequency;
    if (step === 3) return form.preferredDays.length > 0 && !!form.timeSlot;
    return true;
  };

  const next = () => { if (!canNext()) return; setDir(1); setStep(s => s + 1); };
  const back = () => { setDir(-1); setStep(s => s - 1); };

  const waURL = () => {
    const msg = `Hi Patlo! 👋 I'd like to book Personal Training sessions with you!

*Name:* ${form.name}
*Postpartum:* ${form.isPostpartum}
*Experience Level:* ${form.experienceLevel}
*Training Objectives:* ${form.objectives.join(", ")}${form.specialConsiderations ? `\n*Special Considerations:* ${form.specialConsiderations}` : ""}
*Sessions Per Week:* ${form.frequency}
*Preferred Days:* ${form.preferredDays.join(", ")}
*Preferred Time:* ${form.timeSlot}
*Location:* Maun, Botswana

I'm excited to train with you in person! When can we start? 🏋️‍♀️`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const isDone = step === 4;

  return (
    <div className="min-h-screen bg-off-white">
      <SEO
        title="In-Person Personal Training in Maun, Botswana"
        description="One-on-one coaching sessions in Maun with real-time form correction and goal-aligned training. The most hands-on experience available. P600/session."
        path="/plans/personal-training"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-28 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
              <ArrowLeft className="w-3 h-3" /> Back to home
            </Link>
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">PLAN 04</p>
            <h1 className="font-display text-h1 text-white uppercase mb-4 leading-none">Personal Training</h1>
            <p className="font-body text-base text-white/65 max-w-lg mb-3">One-on-one sessions in Maun with Patlo. The most direct path to your goals — fully personalised, fully focused on you.</p>
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <p className="font-body text-sm text-secondary font-medium">In-person sessions in Maun, Botswana only</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Users, label: "1-on-1 with Patlo" },
                { icon: Star, label: "Fully tailored sessions" },
                { icon: MapPin, label: "Maun, Botswana" },
                { icon: MessageCircle, label: "WhatsApp coordination" },
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
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Training experience *</label>
                          <div className="flex gap-2 flex-wrap">
                            {EXPERIENCE_LEVELS.map(l => (
                              <Chip key={l} label={l} selected={form.experienceLevel === l} onClick={() => setForm(f => ({ ...f, experienceLevel: l }))} />
                            ))}
                          </div>
                        </div>

                        {/* Location notice */}
                        <div className="flex gap-3 bg-secondary/5 border border-secondary/20 rounded-xl p-4">
                          <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <p className="font-body text-xs text-[#0D0D0D]/65 leading-relaxed">Personal training sessions are conducted in person in <strong>Maun, Botswana</strong>. If you're not in Maun, consider our Virtual Training plan instead.</p>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">What do you want to achieve?</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Training objectives — choose all that apply *</label>
                          <div className="flex gap-2 flex-wrap">
                            {OBJECTIVES.map(o => (
                              <Chip key={o} label={o} selected={form.objectives.includes(o)} onClick={() => toggleArr("objectives", o)} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">
                            Injuries, medical conditions, or special needs <span className="text-[#0D0D0D]/35 font-normal">optional</span>
                          </label>
                          <textarea
                            value={form.specialConsiderations}
                            onChange={e => setForm(f => ({ ...f, specialConsiderations: e.target.value }))}
                            placeholder="e.g. diastasis recti, recent surgery, pelvic floor issues, chronic pain…"
                            rows={3}
                            className="w-full border border-[#0D0D0D]/12 rounded-xl px-4 py-3 font-body text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/30 focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary/60 transition-all resize-none"
                          />
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">How often would you like to train? *</label>
                          <div className="flex gap-2 flex-wrap">
                            {FREQUENCY.map(f => (
                              <Chip key={f} label={f} selected={form.frequency === f} onClick={() => setForm(fm => ({ ...fm, frequency: f }))} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">When works for you?</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-3">Preferred training days *</label>
                          <div className="grid grid-cols-7 gap-1.5">
                            {DAYS.map(d => (
                              <button
                                key={d}
                                type="button"
                                onClick={() => toggleArr("preferredDays", d)}
                                className={`py-3 rounded-xl text-xs font-body font-semibold text-center transition-all duration-200 ${
                                  form.preferredDays.includes(d)
                                    ? "gradient-cta text-white shadow-md"
                                    : "bg-[#F8F5FF] text-[#0D0D0D]/45 hover:bg-secondary/10 hover:text-secondary"
                                }`}
                              >
                                {d}
                              </button>
                            ))}
                          </div>
                          {form.preferredDays.length > 0 && (
                            <p className="font-body text-xs text-secondary mt-2">{form.preferredDays.length} day{form.preferredDays.length > 1 ? "s" : ""} selected</p>
                          )}
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Preferred session time *</label>
                          <div className="space-y-2">
                            {TIME_SLOTS.map(t => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, timeSlot: t }))}
                                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 ${
                                  form.timeSlot === t
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
                  <h2 className="font-display text-2xl text-[#0D0D0D] mb-2">You're all set!</h2>
                  <p className="font-body text-sm text-[#0D0D0D]/55 max-w-xs mx-auto">Patlo will receive your details and get in touch to confirm your first session.</p>
                </div>

                <div className="bg-[#F8F5FF] rounded-xl p-5 space-y-3 mb-6">
                  <SummaryRow label="Name" value={form.name} />
                  <SummaryRow label="Postpartum" value={form.isPostpartum} />
                  <SummaryRow label="Experience" value={form.experienceLevel} />
                  <SummaryRow label="Objectives" value={form.objectives.join(", ")} />
                  {form.specialConsiderations && <SummaryRow label="Special needs" value={form.specialConsiderations} />}
                  <SummaryRow label="Frequency" value={form.frequency} />
                  <SummaryRow label="Preferred Days" value={form.preferredDays.join(", ")} />
                  <SummaryRow label="Preferred Time" value={form.timeSlot} />
                  <div className="pt-2 border-t border-[#0D0D0D]/8">
                    <SummaryRow label="Plan" value="Personal Training — Maun, Botswana" highlight />
                  </div>
                </div>

                <a
                  href={waURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full gradient-cta text-white py-4 rounded-xl font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-secondary/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message Patlo on WhatsApp
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
