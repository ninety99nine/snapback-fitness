import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, ShoppingBag, Package, Download, Tag, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
const bandsImg = "/images/3 bands.png";
const yogaMatImg = "/images/yoga mat.png";
const pullRopeImg = "/images/pull rope.png";
const ankleWeightsImg = "/images/ankle-weights.png";
const handGripImg = "/images/hand-grip -strengtheners.png";
const jumpRopeImg = "/images/jump-rope.png";

const ORBS = [
  { top: "5%", left: "5%", w: 500, color: "bg-secondary/[0.07]" },
  { top: "45%", left: "75%", w: 400, color: "bg-purple-600/[0.07]" },
  { top: "75%", left: "10%", w: 350, color: "bg-secondary/[0.04]" },
];

type Category = "ALL" | "EQUIPMENT" | "DIGITAL" | "MERCH";

const COMING_SOON: Category[] = ["DIGITAL", "MERCH"];

const categories: { label: string; value: Category; icon: React.ReactNode }[] = [
  { label: "ALL PRODUCTS", value: "ALL", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
  { label: "EQUIPMENT", value: "EQUIPMENT", icon: <Package className="w-3.5 h-3.5" /> },
  { label: "DIGITAL", value: "DIGITAL", icon: <Download className="w-3.5 h-3.5" /> },
  { label: "MERCH", value: "MERCH", icon: <Tag className="w-3.5 h-3.5" /> },
];

const products = [
  {
    id: "resistance-bands",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK RESISTANCE BANDS",
    tagline: "Three levels. One set. Zero excuses.",
    description:
      "My personally curated set of three SnapBack-branded fabric resistance bands — Light, Medium, and Heavy. Whether you're just finding your feet again after baby or you're ready to push harder, these bands meet you exactly where you are. Perfect for glute work, postpartum recovery, home workouts, and travelling light. No gym. No excuses. Just results.",
    image: bandsImg,
    price: "P350",
    badges: ["Set of 3", "Home-friendly", "Postpartum safe"],
    badgeColors: ["bg-secondary/10 text-secondary", "bg-primary/10 text-primary", "bg-emerald-500/10 text-emerald-400"],
    stars: 5,
    reviewNote: "Loved by 100+ clients",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Resistance Bands Set (P350). Please send me the details!",
    topBar: "from-secondary via-pink-400 to-purple-500",
    type: "physical",
    highlight: true,
  },
  {
    id: "yoga-mat",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK YOGA MAT",
    tagline: "Your foundation for every session.",
    description:
      "This is where your comeback begins. A thick, dual-layer non-slip SnapBack-branded yoga mat — pink on top, grey underneath — built for women who show up. Whether it's stretching, Pilates, floor workouts, or postpartum recovery exercises, it gives you the grip, the cushioning, and the support to train fully and safely. Roll it out. Show up. That's all.",
    image: yogaMatImg,
    price: "P420",
    badges: ["Non-slip", "Extra thick", "SnapBack branded"],
    badgeColors: ["bg-emerald-500/10 text-emerald-400", "bg-purple-500/10 text-purple-400", "bg-secondary/10 text-secondary"],
    stars: 5,
    reviewNote: "Train anywhere, anytime",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Yoga Mat (P420). Please send me the details!",
    topBar: "from-emerald-400 via-teal-400 to-purple-500",
    type: "physical",
    highlight: false,
  },
  {
    id: "pull-rope",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK CABLE RESISTANCE SYSTEM",
    tagline: "Your home gym. No membership required.",
    description:
      "This is the one that changes everything. A full multi-band cable resistance system — three resistance levels in one set, complete with carabiner clips, padded handles, and a door anchor strap. Rows, chest presses, shoulder work, glute kickbacks — all from your living room. Whether you're rebuilding after baby or building serious strength, this system grows with you. No gym. No excuses. Just work.",
    image: pullRopeImg,
    price: "P180",
    badges: ["3 resistance levels", "Door anchor included", "Full body training"],
    badgeColors: ["bg-purple-500/10 text-purple-400", "bg-secondary/10 text-secondary", "bg-emerald-500/10 text-emerald-400"],
    stars: 5,
    reviewNote: "Great for all levels",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Cable Resistance System (P180). Please send me the details!",
    topBar: "from-purple-500 via-secondary to-pink-400",
    type: "physical",
    highlight: false,
  },
  {
    id: "ankle-weights",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK ANKLE WEIGHTS",
    tagline: "Add resistance. Multiply results.",
    description:
      "My go-to tool for levelling up leg and glute work without stepping foot in a gym. These soft, padded SnapBack-branded ankle weights in pink and mint strap on securely with a velcro band — adding just the right amount of resistance to your home workouts, walks, and postpartum recovery sessions. Comfortable enough to wear through a full session. Effective enough to feel it the next day.",
    image: ankleWeightsImg,
    price: "P290",
    badges: ["Adjustable weight", "Glute & leg focused", "Postpartum safe"],
    badgeColors: ["bg-secondary/10 text-secondary", "bg-purple-500/10 text-purple-400", "bg-emerald-500/10 text-emerald-400"],
    stars: 5,
    reviewNote: "A SnapBack client favourite",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Ankle Weights (P290). Please send me the details!",
    topBar: "from-pink-500 via-secondary to-purple-400",
    type: "physical",
    highlight: false,
  },
  {
    id: "hand-grip-strengtheners",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK HAND GRIP STRENGTHENERS",
    tagline: "Strong hands. Stronger you.",
    description:
      "A set of three SnapBack-branded hand grip strengtheners — mint, pink, and light pink — each with a different resistance level so you can progress at your own pace. Stronger grip means better performance across every workout you do, from resistance training to everyday life. Use them at your desk, between sets, or whenever you have a spare moment. Small tool. Real gains.",
    image: handGripImg,
    price: "P220",
    badges: ["Set of 3", "3 resistance levels", "Forearm & grip strength"],
    badgeColors: ["bg-secondary/10 text-secondary", "bg-purple-500/10 text-purple-400", "bg-emerald-500/10 text-emerald-400"],
    stars: 5,
    reviewNote: "Train anywhere",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Hand Grip Strengtheners (P220). Please send me the details!",
    topBar: "from-teal-400 via-emerald-400 to-secondary",
    type: "physical",
    highlight: false,
  },
  {
    id: "jump-rope",
    category: "EQUIPMENT" as Category,
    name: "SNAPBACK JUMP ROPE",
    tagline: "Pick it up. Jump. Repeat.",
    description:
      "Cardio doesn't have to be complicated. This pink SnapBack-branded jump rope with black handles is lightweight, fast, and built to go wherever you go — complete with its own mesh drawstring storage bag so it's always ready when you are. Use it as a warm-up, a standalone cardio session, or a finisher. No treadmill. No gym. Just you, this rope, and the work.",
    image: jumpRopeImg,
    price: "P150",
    badges: ["Includes storage bag", "Lightweight", "Great for cardio"],
    badgeColors: ["bg-secondary/10 text-secondary", "bg-purple-500/10 text-purple-400", "bg-emerald-500/10 text-emerald-400"],
    stars: 5,
    reviewNote: "Ready for anywhere",
    whatsappMsg: "Hi Patlo! I'd like to order the SnapBack Jump Rope (P150). Please send me the details!",
    topBar: "from-secondary via-pink-400 to-purple-400",
    type: "physical",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How do I place an order?",
    a: "Tap any 'Order on WhatsApp' button. It opens a pre-filled message to me. I'll confirm availability, send payment details, and arrange delivery.",
  },
  {
    q: "How do I pay?",
    a: "I accept Orange Money, MyZaka, and bank transfers. I'll send you the full payment instructions on WhatsApp once you message me.",
  },
  {
    q: "How do I receive digital products?",
    a: "Digital guides (PDF plans) are sent directly to your WhatsApp once payment is confirmed — usually within a few hours.",
  },
  {
    q: "Do you deliver physical products?",
    a: "Yes! Physical products like bands and merch can be delivered nationwide in Botswana. Delivery fees depend on your location. I'll confirm the details on WhatsApp.",
  },
  {
    q: "Can I collect in person?",
    a: "Yes — if you're based in Maun or nearby, you can arrange an in-person collection. Just mention it when you message me.",
  },
  {
    q: "Are the resistance bands suitable for beginners?",
    a: "Absolutely. The set comes in three resistances so you can start light and build up. I'll guide you on which level to use based on your current fitness.",
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          {ORBS.map((o, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${o.color} blur-3xl`}
              style={{ top: o.top, left: o.left, width: o.w, height: o.w }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary"
          >
            SNAPBACK SHOP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-h1 uppercase leading-tight text-white"
          >
            GEAR. GUIDES.<br />RESULTS.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/50"
          >
            Everything in this store is personally approved by me. No unnecessary extras —
            just the tools that actually move the needle. See something you want?
            Message me on WhatsApp and I'll sort you out.
          </motion.p>

          {/* How it works strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/8 bg-white/[0.03] px-8 py-4"
          >
            {[
              { num: "01", text: "Browse the store" },
              { num: "02", text: "Tap 'Order on WhatsApp'" },
              { num: "03", text: "Pay & receive your order" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="font-display text-sm text-secondary/50">{s.num}</span>
                <span className="font-body text-sm text-white/60">{s.text}</span>
                {i < 2 && <span className="hidden text-white/15 sm:block">→</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ───────────────────────────────────────── */}
      <section className="sticky top-[68px] z-40 border-b border-white/8 bg-[#0D0D0D]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide-custom transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/70"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden gradient-hero py-16 lg:py-24"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border bg-[#130D1E] ${
                    product.highlight
                      ? "border-secondary/30 shadow-[0_4px_40px_rgba(233,32,133,0.12)]"
                      : "border-white/8"
                  }`}
                >
                  {/* Top colour bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${product.topBar}`} />

                  {/* Best value badge */}
                  {product.highlight && (
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-secondary to-pink-500 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Product image */}
                  <div className="relative h-36 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full mx-auto object-contain transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#130D1E] via-transparent to-transparent" />

                    {/* Type pill */}
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                        {product.type === "digital" ? (
                          <><Download className="h-2.5 w-2.5" /> Digital</>
                        ) : (
                          <><Package className="h-2.5 w-2.5" /> Physical</>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Stars */}
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(product.stars)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-secondary text-secondary" />
                      ))}
                      <span className="ml-1.5 font-body text-[10px] text-white/35">{product.reviewNote}</span>
                    </div>

                    <h3 className="mb-1 font-display text-xl text-white lg:text-2xl">{product.name}</h3>
                    <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wide-custom text-secondary/70">
                      {product.tagline}
                    </p>
                    <p className="mb-5 font-body text-sm leading-relaxed text-white/45">
                      {product.description}
                    </p>

                    {/* Price + CTA */}
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <span className="font-display text-4xl text-secondary">{product.price}</span>
                      <a
                        href={`https://wa.me/26774268899?text=${encodeURIComponent(product.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-pink-500 px-5 py-3 font-body text-xs font-semibold uppercase tracking-wide-custom text-white shadow-md shadow-secondary/20 transition-all duration-200 hover:scale-[1.03] hover:shadow-secondary/40"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        ORDER ON WHATSAPP
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {COMING_SOON.includes(activeCategory) && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-28 text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/20 bg-secondary/5">
                <Clock className="h-7 w-7 text-secondary" />
              </div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-wide-custom text-secondary">
                COMING SOON
              </p>
              <h3 className="mb-3 font-display text-2xl uppercase text-white lg:text-3xl">
                {activeCategory === "DIGITAL" ? "Digital Products" : "Merch"} On The Way
              </h3>
              <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-white/40">
                {activeCategory === "DIGITAL"
                  ? "Workout plans, nutrition guides, and more — I'm putting the finishing touches on these. Check back soon."
                  : "SnapBack-branded gear is coming. Stay tuned — it's going to be worth the wait."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              NO CHECKOUT. NO FUSS.
            </p>
            <h2 className="font-display text-3xl uppercase text-white lg:text-4xl">
              HOW ORDERING WORKS
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-white/40">
              There's no online checkout here. Every order goes directly through WhatsApp —
              because I want to speak to every single customer personally.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Browse & Choose",
                body: "Find the product you want and tap the 'Order on WhatsApp' button.",
              },
              {
                num: "02",
                title: "Message Me",
                body: "A pre-filled WhatsApp message opens. Hit send — I get it instantly.",
              },
              {
                num: "03",
                title: "Confirm & Pay",
                body: "I'll confirm availability and send you payment details (Orange Money, MyZaka, or bank transfer).",
              },
              {
                num: "04",
                title: "Receive Your Order",
                body: "Digital products are sent to your WhatsApp. Physical products are delivered or ready for collection.",
              },
            ].map((s, i, arr) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                {/* Circle + connector row — desktop only */}
                <div className="relative hidden lg:flex items-center mb-5">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                    <span className="font-display text-sm text-secondary">{s.num}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex-1 h-px ml-2 bg-gradient-to-r from-secondary/40 to-secondary/10" />
                  )}
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex-1">
                  {/* Number circle inside card — mobile only */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 mb-4 lg:hidden">
                    <span className="font-display text-sm text-secondary">{s.num}</span>
                  </div>
                  <h3 className="mb-2 font-display text-base text-white">{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-white/40">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-hero py-16 lg:py-20">
        <div className="container mx-auto max-w-2xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-xs font-medium uppercase tracking-wide-custom text-secondary">
              FAQ
            </p>
            <h2 className="font-display text-3xl uppercase text-white lg:text-4xl">
              SHOP QUESTIONS ANSWERED
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5"
              >
                <p className="mb-2 font-display text-base text-white">{f.q}</p>
                <p className="font-body text-sm leading-relaxed text-white/45">{f.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-secondary/20 bg-secondary/5 px-8 py-8 text-center"
          >
            <p className="mb-2 font-display text-xl text-white">Not sure what to get?</p>
            <p className="mb-5 font-body text-sm text-white/45">
              Message me and tell me your goals. I'll point you to exactly what you need.
            </p>
            <a
              href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%20need%20help%20choosing%20a%20product%20from%20the%20shop."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-pink-500 px-8 py-3 font-body text-sm font-semibold uppercase tracking-wide-custom text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              MESSAGE ME ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Shop;
