import { motion } from "framer-motion";
import clsx from "clsx";

export default function CompanyLogo({ name, icon: Icon, className = "" }) {
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
        "group flex min-w-[180px] items-center justify-center gap-4",
        "rounded-2xl border border-slate-200",
        "bg-white/80 backdrop-blur-sm",
        "px-6 py-5",
        "shadow-md",
        "transition-all duration-300",
        "hover:border-emerald-300 hover:shadow-xl",
        className,
      )}
    >
      {Icon && (
        <Icon
          size={34}
          className="text-slate-400 transition-colors duration-300 group-hover:text-emerald-500"
        />
      )}

      <span className="text-lg font-semibold tracking-wide text-slate-700">
        {name}
      </span>
    </motion.div>
  );
}
