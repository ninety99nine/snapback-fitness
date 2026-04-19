import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ig1 = "/images/instagram-1.jpg";
const ig2 = "/images/instagram-2.jpg";
const ig3 = "/images/instagram-3.jpg";
const ig4 = "/images/instagram-4.jpg";
const ig5 = "/images/instagram-5.png";
const ig6 = "/images/instagram-6.jpg";

const InstagramStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-primary py-16" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-h2 text-foreground uppercase mb-2"
        >
          FOLLOW THE JOURNEY
        </motion.h2>
        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          href="https://instagram.com/snapbackwithmrsk"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xl text-secondary hover:text-secondary-light transition-colors"
        >
          @SNAPBACKWITHMRSK
        </motion.a>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-10">
          {[ig1, ig2, ig3, ig4, ig5, ig6].map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/snapbackwithmrsk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="aspect-square bg-primary-deep rounded-sm flex items-center justify-center overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: [0, 2, 5].includes(i) ? '50% 25%' : 'top' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramStrip;
