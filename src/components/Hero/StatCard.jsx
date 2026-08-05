import { motion } from "framer-motion";
import clsx from "clsx";

export default function StatCard({ number, label, icon, className = "" }) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "rounded-2xl border border-emerald-200",
        "bg-white/70 backdrop-blur-sm",
        "p-5 text-center shadow-md",
        className,
      )}
    >
      {Icon && <Icon className="mx-auto mb-3 text-emerald-500" size={22} />}

      <h3 className="text-3xl font-bold text-emerald-500">{number}</h3>

      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </motion.div>
  );
}
