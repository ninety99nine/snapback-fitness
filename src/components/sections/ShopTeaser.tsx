import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Star, Package } from "lucide-react";
const bandImg = "/images/3 bands.png";
const matImg = "/images/yoga mat.png";
const ropeImg = "/images/pull rope.png";

const PRODUCTS = [
  {
    img: bandImg,
    alt: "SnapBack Resistance Bands",
    popular: true,
    review: "Loved by 100+ clients",
    name: "SNAPBACK RESISTANCE BANDS",
    tagline: "THREE LEVELS. ONE SET. ZERO EXCUSES.",
    description:
      "My personally curated set of three SnapBack-branded resistance bands — Light, Medium, and Heavy. Whether you're just starting out or pushing hard, these bands meet you where you are. Perfect for home workouts, postpartum recovery, and travelling light.",
    price: "P350",
    waText: "Hi Patlo! I'd like to order the Resistance Bands Set 💪",
  },
  {
    img: matImg,
    alt: "SnapBack Yoga Mat",
    popular: false,
    review: "Train anywhere, anytime",
    name: "SNAPBACK YOGA MAT",
    tagline: "YOUR FOUNDATION FOR EVERY SESSION.",
    description:
      "A thick, non-slip SnapBack-branded yoga mat built for women who train hard. Whether it's stretching, Pilates, floor workouts, or postpartum recovery exercises — this mat gives you the grip and comfort to show up fully every single time.",
    price: "P420",
    waText: "Hi Patlo! I'd like to order the SnapBack Yoga Mat 🧘‍♀️",
  },
  {
    img: ropeImg,
    alt: "SnapBack Skipping Rope",
    popular: false,
    review: "Great for all levels",
    name: "SNAPBACK SKIPPING ROPE",
    tagline: "CARDIO THAT FITS IN YOUR POCKET.",
    description:
      "My go-to cardio tool — a SnapBack-branded skipping rope that delivers serious results without a treadmill or gym. Adjustable length, lightweight, and built for every fitness level. Burn calories, improve coordination, and get your heart pumping anywhere.",
    price: "P180",
    waText: "Hi Patlo! I'd like to order the SnapBack Skipping Rope 🪢",
  },
];

const WA_NUMBER = "26774268899";

const ShopTeaser = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-dark pt-20 lg:pt-28 pb-28 lg:pb-36 overflow-hidden" ref={ref}>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">
            GEAR UP
          </p>
          <h2 className="font-display text-h2 text-foreground uppercase mb-4">
            TRAIN WITH THE RIGHT TOOLS.
          </h2>
          <p className="font-body text-base text-foreground/70">
            Equipment curated by Patlo — built for women who mean business.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="relative rounded-2xl border border-border bg-[#110D1A] overflow-hidden flex flex-col"
            >
              {/* Most Popular badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="gradient-cta px-3 py-1 rounded-full font-body text-xs font-semibold text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
                {/* Physical badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1">
                  <Package className="w-3 h-3 text-foreground/70" />
                  <span className="font-body text-xs font-medium text-foreground/70 uppercase tracking-wide">Physical</span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                  <span className="font-body text-xs text-foreground/40 ml-1.5">{product.review}</span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
                  {product.tagline}
                </p>
                <p className="font-body text-sm text-foreground/60 mb-6 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center gap-4 mt-auto">
                  <span className="font-display text-4xl text-secondary">{product.price}</span>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(product.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 gradient-cta px-5 py-2.5 rounded-full font-body text-sm font-semibold tracking-wide-custom text-white hover:opacity-90 transition-opacity"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    ORDER ON WHATSAPP
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 gradient-cta px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide-custom text-white hover:opacity-90 transition-opacity"
          >
            VIEW ALL PRODUCTS
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default ShopTeaser;
