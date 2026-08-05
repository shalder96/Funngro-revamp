import { motion } from "framer-motion";
import clsx from "clsx";

import { cardHover } from "@/utils/motion";

export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={hover ? cardHover : undefined}
      className={clsx(
        "rounded-3xl",
        "border border-white/20",
        "bg-white/70",
        "backdrop-blur-xl",
        "shadow-lg",
        "transition-all duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
