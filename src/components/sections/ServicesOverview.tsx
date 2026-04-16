import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { num: "01", name: "VIRTUAL TRAINING", desc: "Full coaching from anywhere in Botswana", price: "P800 first month" },
  { num: "02", name: "MEAL PLANS", desc: "Customized nutrition built for your body and goals", price: "Contact for pricing" },
  { num: "03", name: "WORKOUT PLANS", desc: "Structured programs you can do at home or gym", price: "Contact for pricing" },
  { num: "04", name: "PERSONAL TRAINING", desc: "One-on-one sessions in Maun with Patlo", price: "Contact for pricing" },
];

const ServicesOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-off-white py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-medium tracking-wide-custom text-secondary uppercase mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="font-display text-h2 text-[#0D0D0D] uppercase mb-4">FIND YOUR PLAN.</h2>
          <p className="font-body text-base text-[#0D0D0D]/60">
            Every plan is built by Patlo. Personally. For you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group bg-foreground border border-primary/10 rounded-lg p-6 hover:border-l-4 hover:border-l-secondary hover:translate-x-1 transition-all duration-200 cursor-pointer"
            >
              <span className="font-display text-3xl text-secondary/30">{s.num}</span>
              <h3 className="font-display text-xl text-[#0D0D0D] mt-3 mb-2">{s.name}</h3>
              <p className="font-body text-sm text-[#0D0D0D]/60 mb-4">{s.desc}</p>
              <p className="font-body text-sm font-semibold text-secondary">{s.price}</p>
              <p className="font-body text-xs font-medium text-secondary/70 uppercase mt-4 tracking-wide-custom group-hover:text-secondary transition-colors">
                LEARN MORE
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block border-2 border-primary px-8 py-3 rounded-full font-body text-sm font-semibold text-primary tracking-wide-custom hover:gradient-cta hover:text-foreground hover:border-transparent transition-all"
          >
            SEE ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
