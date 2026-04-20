import { motion } from "framer-motion";
import { Download, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const { whatsappNumber, guidePdfUrl } = siteConfig;

const WA_URL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Patlo! I'd love the free postpartum fitness guide 🙏")}`;

const WHAT_YOU_GET = [
  "The 5 things every postpartum woman must know before starting fitness",
  "Why most programmes fail postpartum moms — and what actually works",
  "How to start moving again safely, no matter how long it's been",
  "Simple habits you can build around a newborn and real life",
  "A clear first step so you're not guessing where to begin",
];

export default function FreeGuide() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-28 pb-24 lg:pt-36 lg:pb-32 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-4">
              FREE RESOURCE — NO SIGN-UP REQUIRED
            </p>
            <h1 className="font-display text-hero text-white uppercase leading-none mb-6">
              YOUR FREE<br />STARTER GUIDE.
            </h1>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto leading-relaxed">
              5 things every postpartum woman must know before beginning her fitness journey. From Patlo. No cost. No email. Just tap and it's yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download card */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl bg-white border border-[#F0EBFF] shadow-[0_8px_40px_rgba(123,47,190,0.10)] overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-1.5 w-full gradient-cta" />

            <div className="px-8 py-10 sm:px-12 sm:py-12">

              <p className="font-body text-xs font-semibold tracking-wide-custom text-secondary uppercase mb-6">
                WHAT'S INSIDE
              </p>

              <ul className="space-y-4 mb-10">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                    <span className="font-body text-sm text-[#0D0D0D]/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Download CTA */}
              <a
                href={guidePdfUrl}
                download="SnapBack-Fitness-Free-Guide.pdf"
                className="flex items-center justify-center gap-3 gradient-cta text-white w-full py-4 rounded-2xl font-body text-sm font-semibold tracking-wide-custom hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-secondary/25 mb-4"
              >
                <Download className="h-4 w-4" />
                DOWNLOAD THE FREE GUIDE
              </a>

              {/* WhatsApp alternative */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 border border-[#E5DFF5] bg-[#FAF5FF] text-[#0D0D0D]/70 w-full py-3.5 rounded-2xl font-body text-sm font-semibold tracking-wide-custom hover:border-secondary/40 hover:text-[#0D0D0D] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                GET IT ON WHATSAPP INSTEAD
              </a>

              <p className="mt-6 text-center font-body text-xs text-[#0D0D0D]/30">
                No sign-up. No email required. Completely free.
              </p>
            </div>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-[#0D0D0D]/40 hover:text-[#0D0D0D]/70 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
