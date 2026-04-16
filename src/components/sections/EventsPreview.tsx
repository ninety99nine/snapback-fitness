import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  { name: "FAITH & FITNESS", date: "Coming Soon", location: "Gaborone, Botswana", price: "P200" },
  { name: "MAUN FAMILY COLOR RUN", date: "Coming Soon", location: "Maun, Botswana", price: "P80-P250" },
  { name: "SNAPBACK KIDS FUN RUN", date: "Coming Soon", location: "Maun, Botswana", price: "P80" },
];

const EventsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark-mid py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-h2 text-foreground uppercase text-center mb-12"
        >
          JOIN THE MOVEMENT.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1025] border-t-4 border-secondary rounded-lg p-6"
            >
              <h3 className="font-display text-2xl text-foreground mb-2">{e.name}</h3>
              <p className="font-body text-sm text-secondary mb-1">{e.date}</p>
              <p className="font-body text-sm text-foreground/50 mb-1">{e.location}</p>
              <p className="font-body text-sm font-semibold text-foreground mb-6">{e.price}</p>
              <a
                href="https://wa.me/26774268899?text=Hi%20Patlo!%20I%27d%20like%20to%20know%20more%20about%20upcoming%20events"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-cta px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide-custom text-foreground inline-block hover:scale-105 transition-transform"
              >
                REGISTER ON WHATSAPP
              </a>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-xs text-foreground/40 text-center mt-8">
          Past events: Faith & Fitness, Maun Family Color Run, SnapBack Kids Academy
        </p>
      </div>
    </section>
  );
};

export default EventsPreview;
