import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { ArrowRight, ArrowLeft, Check, MessageCircle, Utensils, Target, Clock } from "lucide-react";

const WA_NUMBER = "26774268899";
const EATING_STYLES = ["Omnivore", "Vegetarian", "Vegan", "Pescatarian"];
const ALLERGIES = ["Nuts", "Dairy", "Gluten", "Eggs", "Shellfish", "None"];
const GOAL_TYPES = ["Lose fat", "Build muscle", "Maintain weight", "Postpartum nutrition", "Improve energy"];
const TIMELINES = ["1 month", "3 months", "6 months", "Long-term lifestyle"];
const COOK_TIMES = ["Less than 30 min/day", "30–60 min/day", "More than 1 hr/day"];
const MEALS_PER_DAY = ["2 meals", "3 meals", "4–5 meals (smaller)"];
const BUDGETS = ["Budget-friendly", "Mid-range", "No budget limit"];
const STEP_TITLES = ["Your Profile", "Your Goals", "Your Lifestyle"];

interface FormData {
  name: string;
  isPostpartum: string;
  eatingStyle: string;
  allergies: string[];
  goalType: string;
  weightTarget: string;
  timeline: string;
  cookTime: string;
  mealsPerDay: string;
  budget: string;
}

const init: FormData = {
  name: "", isPostpartum: "", eatingStyle: "", allergies: [],
  goalType: "", weightTarget: "", timeline: "",
  cookTime: "", mealsPerDay: "", budget: "",
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

export default function MealPlansPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(init);
  const [dir, setDir] = useState(1);

  const toggleAllergy = (val: string) => {
    if (val === "None") {
      setForm(f => ({ ...f, allergies: f.allergies.includes("None") ? [] : ["None"] }));
      return;
    }
    setForm(f => ({
      ...f,
      allergies: f.allergies.includes(val)
        ? f.allergies.filter(a => a !== val)
        : [...f.allergies.filter(a => a !== "None"), val],
    }));
  };

  const canNext = () => {
    if (step === 1) return !!form.name.trim() && !!form.isPostpartum && !!form.eatingStyle;
    if (step === 2) return !!form.goalType && !!form.timeline;
    if (step === 3) return !!form.cookTime && !!form.mealsPerDay && !!form.budget;
    return true;
  };

  const next = () => { if (!canNext()) return; setDir(1); setStep(s => s + 1); };
  const back = () => { setDir(-1); setStep(s => s - 1); };

  const waURL = () => {
    const msg = `Hi Patlo! 👋 I'd love a custom Meal Plan from SnapBack Fitness!

*Name:* ${form.name}
*Postpartum:* ${form.isPostpartum}
*Eating Style:* ${form.eatingStyle}
*Allergies/Restrictions:* ${form.allergies.length ? form.allergies.join(", ") : "None"}
*Goal:* ${form.goalType}${form.weightTarget ? `\n*Weight Target:* ${form.weightTarget}` : ""}
*Timeline:* ${form.timeline}
*Cooking Time:* ${form.cookTime}
*Meals Per Day:* ${form.mealsPerDay}
*Budget:* ${form.budget}

Please set up my personalised nutrition plan! 🥗`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const isDone = step === 4;

  return (
    <div className="min-h-screen bg-off-white">
      <SEO
        title="Custom Meal Plans — Nutrition Built for Your Body & Goals"
        description="A personalised meal plan built around your body, your goals, and your lifestyle — not a generic template. Includes recipes and shopping guidance. P400/month."
        path="/plans/meal-plans"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-28 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
              <ArrowLeft className="w-3 h-3" /> Back to home
            </Link>
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">PLAN 02</p>
            <h1 className="font-display text-h1 text-white uppercase mb-4 leading-none">Meal Plans</h1>
            <p className="font-body text-base text-white/65 max-w-lg mb-8">Customised nutrition built for your body, your goals, and your lifestyle. No generic diets — every plan is crafted by Patlo specifically for you.</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Utensils, label: "100% personalised" },
                { icon: Target, label: "Goal-aligned nutrition" },
                { icon: Clock, label: "Fits your schedule" },
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
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">How do you eat? *</label>
                          <div className="flex gap-2 flex-wrap">
                            {EATING_STYLES.map(s => (
                              <Chip key={s} label={s} selected={form.eatingStyle === s} onClick={() => setForm(f => ({ ...f, eatingStyle: s }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">
                            Food allergies or restrictions? <span className="text-[#0D0D0D]/35 font-normal">select all that apply</span>
                          </label>
                          <div className="flex gap-2 flex-wrap">
                            {ALLERGIES.map(a => (
                              <Chip key={a} label={a} selected={form.allergies.includes(a)} onClick={() => toggleAllergy(a)} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">What's your nutrition goal?</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Primary goal *</label>
                          <div className="flex gap-2 flex-wrap">
                            {GOAL_TYPES.map(g => (
                              <Chip key={g} label={g} selected={form.goalType === g} onClick={() => setForm(f => ({ ...f, goalType: g }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">
                            Weight or size target <span className="text-[#0D0D0D]/35 font-normal">optional</span>
                          </label>
                          <input
                            type="text"
                            value={form.weightTarget}
                            onChange={e => setForm(f => ({ ...f, weightTarget: e.target.value }))}
                            placeholder="e.g. Lose 10kg, fit into size 12, feel less bloated…"
                            className="w-full border border-[#0D0D0D]/12 rounded-xl px-4 py-3 font-body text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/30 focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary/60 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Timeline *</label>
                          <div className="flex gap-2 flex-wrap">
                            {TIMELINES.map(t => (
                              <Chip key={t} label={t} selected={form.timeline === t} onClick={() => setForm(f => ({ ...f, timeline: t }))} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="font-display text-2xl text-[#0D0D0D]">Tell us about your lifestyle</h2>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">How much time can you cook per day? *</label>
                          <div className="space-y-2">
                            {COOK_TIMES.map(t => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, cookTime: t }))}
                                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 ${
                                  form.cookTime === t
                                    ? "bg-secondary/5 border-secondary text-secondary font-semibold"
                                    : "border-[#0D0D0D]/10 text-[#0D0D0D]/60 hover:border-secondary/35"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Preferred meals per day *</label>
                          <div className="flex gap-2 flex-wrap">
                            {MEALS_PER_DAY.map(m => (
                              <Chip key={m} label={m} selected={form.mealsPerDay === m} onClick={() => setForm(f => ({ ...f, mealsPerDay: m }))} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm font-medium text-[#0D0D0D]/65 mb-2">Weekly grocery budget *</label>
                          <div className="flex gap-2 flex-wrap">
                            {BUDGETS.map(b => (
                              <Chip key={b} label={b} selected={form.budget === b} onClick={() => setForm(f => ({ ...f, budget: b }))} />
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
                  <h2 className="font-display text-2xl text-[#0D0D0D] mb-2">Your profile is ready!</h2>
                  <p className="font-body text-sm text-[#0D0D0D]/55 max-w-xs mx-auto">Patlo will use these details to build your personalised nutrition plan.</p>
                </div>

                <div className="bg-[#F8F5FF] rounded-xl p-5 space-y-3 mb-6">
                  <SummaryRow label="Name" value={form.name} />
                  <SummaryRow label="Postpartum" value={form.isPostpartum} />
                  <SummaryRow label="Eating Style" value={form.eatingStyle} />
                  {form.allergies.length > 0 && <SummaryRow label="Restrictions" value={form.allergies.join(", ")} />}
                  <SummaryRow label="Goal" value={form.goalType} />
                  {form.weightTarget && <SummaryRow label="Target" value={form.weightTarget} />}
                  <SummaryRow label="Timeline" value={form.timeline} />
                  <SummaryRow label="Cooking Time" value={form.cookTime} />
                  <SummaryRow label="Meals/Day" value={form.mealsPerDay} />
                  <SummaryRow label="Budget" value={form.budget} />
                  <div className="pt-2 border-t border-[#0D0D0D]/8">
                    <SummaryRow label="Plan" value="Custom Meal Plan — SnapBack Fitness" highlight />
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
