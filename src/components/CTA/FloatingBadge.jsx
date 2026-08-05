import { motion } from "framer-motion";

export default function FloatingBadge({ text, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`rounded-full bg-white/20 px-5 py-3 backdrop-blur-md text-white font-medium ${className}`}
    >
      {text}
    </motion.div>
  );
}
