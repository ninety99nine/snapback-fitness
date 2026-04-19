import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
const morningBrew = "/images/morning-brew.png";
const womensAwards = "/images/womens-awards-botswana.png";
const theAlchemy = "/images/the-alchemy.png";

const features = [
  {
    img: morningBrew,
    alt: "Patlo Kgosidialwa on Gabz FM Morning Brew",
    label: "Gabz FM · Morning Brew",
    caption: "On-air with Jennifer on Morning Brew — unpacking why your health is your most powerful investment.",
  },
  {
    img: womensAwards,
    alt: "Women's Awards Botswana 2024 — Health and Wellness Advocate Nominee",
    label: "Women's Awards Botswana 2024",
    caption: "Nominated for Health and Wellness Advocate — recognised by the women I've shown up for.",
  },
  {
    img: theAlchemy,
    alt: "Patlo Kgosidialwa — Speaker at The Alchemy of Transformation Seminar",
    label: "PEO Resources International",
    caption: "Speaker at The Alchemy of Transformation Seminar — bridging physical strength and mental resilience.",
  },
];

const AsSeenInSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [mobileDir, setMobileDir] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setLightbox((prev) => {
      if (prev === null) return null;
      return (prev + dir + features.length) % features.length;
    });
  }, []);

  const mobileNavigate = useCallback((dir: number) => {
    setMobileDir(dir);
    setMobileSlide((prev) => (prev + dir + features.length) % features.length);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, navigate]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <>
      <section className="bg-off-white pt-12 pb-2 lg:pt-16 lg:pb-2" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-3">
            RECOGNISED. TRUSTED. RECOMMENDED.
            </p>
            <h2 className="font-display text-h2 text-[#0D0D0D] uppercase">
            AS SEEN IN
            </h2>
          </motion.div>

          {/* Mobile Carousel */}
          <div
            className="sm:hidden relative"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) mobileNavigate(diff > 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={mobileDir}>
                <motion.div
                  key={mobileSlide}
                  custom={mobileDir}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div
                    className="group relative w-full max-w-xs aspect-square overflow-hidden rounded-2xl mb-4 cursor-pointer shadow-[0_8px_32px_rgba(15,23,42,0.14)]"
                    onClick={() => open(mobileSlide)}
                  >
                    <img
                      src={features[mobileSlide].img}
                      alt={features[mobileSlide].alt}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/25">
                      <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </div>
                  <p className="font-body text-sm font-semibold text-secondary uppercase tracking-wide mb-1">
                    {features[mobileSlide].label}
                  </p>
                  <p className="font-body text-sm text-[#0D0D0D]/65 leading-snug max-w-xs">
                    {features[mobileSlide].caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev/Next buttons */}
            <button
              className="absolute left-0 top-[40%] -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-[#0D0D0D] transition hover:bg-secondary hover:text-white"
              onClick={() => mobileNavigate(-1)}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-0 top-[40%] -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-[#0D0D0D] transition hover:bg-secondary hover:text-white"
              onClick={() => mobileNavigate(1)}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="mt-5 flex justify-center gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileSlide ? "w-6 bg-secondary" : "w-2 bg-[#0D0D0D]/20"
                  }`}
                  onClick={() => { setMobileDir(i > mobileSlide ? 1 : -1); setMobileSlide(i); }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-10 items-start">
            {features.map(({ img, alt, label, caption }, i) => {
              const tilt = i === 0 ? -6 : i === 2 ? 6 : 0;
              const isCenter = i === 1;

              return (
                <motion.div
                  key={label}
                  className={`flex flex-col items-center text-center relative ${isCenter ? "sm:mt-0" : "sm:mt-12"}`}
                  initial={{ opacity: 0, y: 40, rotate: tilt * 0.5 }}
                  animate={inView ? { opacity: 1, y: 0, rotate: tilt } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.04, zIndex: 10 }}
                  style={{ zIndex: isCenter ? 2 : 1 }}
                >
                  <div
                    className={`group relative w-full aspect-square overflow-hidden rounded-2xl mb-4 transition-shadow duration-300 cursor-pointer ${
                      isCenter
                        ? "shadow-[0_20px_60px_rgba(123,47,190,0.22)] ring-2 ring-secondary/25"
                        : "shadow-[0_8px_32px_rgba(15,23,42,0.14)] hover:shadow-[0_20px_50px_rgba(233,32,133,0.18)]"
                    }`}
                    onClick={() => open(i)}
                  >
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                      <div className="flex flex-col items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ZoomIn className="h-9 w-9 text-white drop-shadow-lg" strokeWidth={1.5} />
                        <span className="font-body text-xs font-semibold tracking-widest text-white uppercase">View</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-sm font-semibold text-secondary uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm text-[#0D0D0D]/65 leading-snug max-w-xs">
                    {caption}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image + caption */}
            <div
              className="relative flex flex-col items-center px-16 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={lightbox}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <img
                    src={features[lightbox].img}
                    alt={features[lightbox].alt}
                    className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
                  />
                  <p className="mt-5 font-body text-sm font-semibold text-secondary uppercase tracking-wide">
                    {features[lightbox].label}
                  </p>
                  <p className="mt-1 font-body text-sm text-white/70 text-center max-w-sm">
                    {features[lightbox].caption}
                  </p>
                  {/* Dots */}
                  <div className="mt-4 flex gap-2">
                    {features.map((_, i) => (
                      <button
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === lightbox ? "w-6 bg-secondary" : "w-2 bg-white/30"
                        }`}
                        onClick={() => { setDirection(i > lightbox ? 1 : -1); setLightbox(i); }}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AsSeenInSection;
