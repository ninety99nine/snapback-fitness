import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  MessageCircle, Mail, MapPin, Instagram, Facebook,
  ArrowRight, Clock, Send,
} from "lucide-react";

const WA_NUMBER = "26774268899";

const TOPICS = [
  "General enquiry",
  "Virtual Training",
  "Meal Plans",
  "Workout Plans",
  "Personal Training",
  "Collaboration / Partnership",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  city: string;
  topic: string;
  message: string;
}

const init: FormState = { name: "", email: "", city: "", topic: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(init);
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const canSend = form.name.trim() && form.topic && form.message.trim();

  const handleSend = () => {
    if (!canSend) return;
    const msg =
      `Hi Patlo! 👋 I'm reaching out via the SnapBack Fitness website.\n\n` +
      `*Name:* ${form.name}\n` +
      (form.email ? `*Email:* ${form.email}\n` : "") +
      (form.city ? `*Location:* ${form.city}\n` : "") +
      `*Topic:* ${form.topic}\n\n` +
      `*Message:*\n${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full border border-white/10 bg-white/5 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/50 transition-all";

  return (
    <div className="min-h-screen bg-dark">
      <SEO
        title="Contact SnapBack Fitness"
        description="Get in touch with Patlo via WhatsApp or the contact form. Based in Maun, Botswana. Book a free 15-minute consultation today."
        path="/contact"
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        </div>
        {/* Decorative grid dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-block font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-4 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10">
              REACH OUT
            </span>
            <h1 className="font-display text-h1 text-white uppercase leading-none mb-5">
              Let's Talk.
            </h1>
            <p className="font-body text-base text-white/55 max-w-md mx-auto leading-relaxed">
              Whether you're ready to start, have questions, or just want an honest chat, I'm here. The fastest way to reach me is by WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ── Left: form ──────────────────────────────────────────────── */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 sm:p-8">
                {!sent ? (
                  <>
                    <h2 className="font-display text-2xl text-white uppercase mb-1">Send a message</h2>
                    <p className="font-body text-sm text-white/40 mb-8">Fills in a WhatsApp message — Patlo responds personally.</p>

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block font-body text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input type="text" value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                      </div>

                      {/* Email + WhatsApp row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wide">Email <span className="text-white/25 normal-case font-normal">optional</span></label>
                          <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" className={inputCls} />
                        </div>
                        <div>
                          <label className="block font-body text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wide">City / Town <span className="text-white/25 normal-case font-normal">optional</span></label>
                          <input type="text" value={form.city} onChange={set("city")} placeholder="e.g. Maun, Gaborone…" className={inputCls} />
                        </div>
                      </div>

                      {/* Topic */}
                      <div>
                        <label className="block font-body text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wide">What's this about? *</label>
                        <select value={form.topic} onChange={set("topic")} className={`${inputCls} appearance-none`}>
                          <option value="" disabled className="bg-[#1a0d2e] text-white/50">Select a topic…</option>
                          {TOPICS.map(t => (
                            <option key={t} value={t} className="bg-[#1a0d2e] text-white">{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-body text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wide">Message *</label>
                        <textarea
                          value={form.message}
                          onChange={set("message")}
                          placeholder="Tell Patlo what's on your mind…"
                          rows={5}
                          className={`${inputCls} resize-none`}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!canSend}
                      className="mt-6 w-full flex items-center justify-center gap-2.5 gradient-cta text-white py-4 rounded-xl font-body font-semibold text-sm tracking-wide-custom transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-secondary/25"
                    >
                      <MessageCircle className="w-4 h-4" />
                      SEND VIA WHATSAPP
                    </button>
                    <p className="text-center font-body text-xs text-white/25 mt-3">Opens WhatsApp with your message to send to me</p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 gradient-cta rounded-full flex items-center justify-center mb-5 shadow-lg shadow-secondary/30">
                      <Send className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl text-white uppercase mb-2">Message ready!</h3>
                    <p className="font-body text-sm text-white/50 max-w-xs mb-8">Your WhatsApp should have opened. If not, tap below to try again.</p>
                    <button
                      type="button"
                      onClick={handleSend}
                      className="flex items-center gap-2 gradient-cta text-white px-6 py-3 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" /> Open WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => { setForm(init); setSent(false); }}
                      className="mt-4 font-body text-xs text-white/30 hover:text-white/60 transition-colors"
                    >
                      Start over
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* ── Right: contact info ──────────────────────────────────────── */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >

              {/* WhatsApp — primary CTA */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%20Patlo!%20I%27d%20like%20to%20chat%20about%20SnapBack%20Fitness.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl gradient-cta p-6 flex items-center gap-4 hover:opacity-95 transition-opacity shadow-xl shadow-secondary/25"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                <div className="relative w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="relative flex-1 min-w-0">
                  <p className="font-body text-xs font-semibold text-white/70 uppercase tracking-wide mb-0.5">Fastest response</p>
                  <p className="font-display text-xl text-white">WhatsApp Patlo</p>
                  <p className="font-body text-xs text-white/60 mt-0.5">+267 742 68899</p>
                </div>
                <ArrowRight className="relative w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              {/* Contact detail cards */}
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "snapbackfitness8@gmail.com",
                  sub: "I'll reply within 24–48 hours",
                  href: "mailto:snapbackfitness8@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Maun, Botswana",
                  sub: "Serving clients nationwide",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Availability",
                  value: "Mon – Sat",
                  sub: "7am – 7pm (CAT)",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-sm text-white font-medium hover:text-secondary transition-colors truncate block">{value}</a>
                    ) : (
                      <p className="font-body text-sm text-white font-medium">{value}</p>
                    )}
                    <p className="font-body text-xs text-white/35 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-4">Follow Patlo</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "https://instagram.com/snapbackwithmrsk" },
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/SnapbackFitnessMrsK" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-secondary/40 hover:bg-secondary/10 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-secondary transition-colors" />
                      <span className="font-body text-[10px] text-white/30 group-hover:text-white/60 transition-colors">{label}</span>
                    </a>
                  ))}
                  {/* WhatsApp — uses brand SVG, not lucide Phone */}
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-secondary/40 hover:bg-secondary/10 transition-all group"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/50 group-hover:fill-secondary transition-colors" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="font-body text-[10px] text-white/30 group-hover:text-white/60 transition-colors">WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-body text-sm text-white/40 mb-4">Not sure which plan is right for you?</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-secondary hover:text-white transition-colors tracking-wide-custom uppercase"
            >
              Browse all plans <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
