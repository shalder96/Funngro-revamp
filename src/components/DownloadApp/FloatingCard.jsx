import { motion } from "framer-motion";
import { floatingAnimation } from "@/utils/motion";

export default function FloatingCard({
  icon: Icon,
  title,
  value,
  className = "",
  color = "emerald",
}) {
  const colors = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
  };

  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...floatingAnimation}
      className={`absolute rounded-3xl border border-white/30 bg-white/90 p-5 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors[color].bg}`}
        >
          <Icon size={26} className={colors[color].text} />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h3 className="mt-1 text-xl font-black text-slate-900">{value}</h3>
        </div>
      </div>
    </motion.div>
  );
}
