import { motion } from "framer-motion";

import HeroImageSrc from "@/assets/images/Hero.webp";

export default function HeroImage() {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative h-160 w-full overflow-hidden rounded-3xl border border-white/60 shadow-2xl"
    >
      <motion.img
        src={HeroImageSrc}
        alt="Teenagers learning and earning with Funngro"
        className="h-full w-full object-cover"
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.5,
        }}
      />
    </motion.div>
  );
}
