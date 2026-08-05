import { motion } from "framer-motion";
import clsx from "clsx";

const accentStyles = {
  emerald: {
    gradient: "from-emerald-500 to-green-400",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },

  cyan: {
    gradient: "from-cyan-500 to-sky-400",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
  },

  violet: {
    gradient: "from-violet-500 to-fuchsia-400",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/20",
  },

  amber: {
    gradient: "from-amber-500 to-orange-400",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/20",
  },
};

export default function TimelineCard({ step, left }) {
  const Icon = step.icon;

  const accent = accentStyles[step.accent] ?? accentStyles.emerald;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={clsx(
        "relative w-full lg:w-[460px]",
        left ? "lg:mr-auto" : "lg:ml-auto",
      )}
    >
      {/* Glow */}

      <div
        className={clsx(
          "absolute inset-0 rounded-3xl blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          accent.glow,
        )}
      />

      {/* Card */}

      <div
        className={clsx(
          "group relative overflow-hidden rounded-3xl border bg-white/5 p-8 backdrop-blur-xl",
          accent.border,
        )}
      >
        {/* Icon */}

        <div
          className={clsx(
            "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
            accent.gradient,
          )}
        >
          <Icon size={30} />
        </div>

        {/* Title */}

        <h3 className="mt-8 text-3xl font-bold text-white">{step.title}</h3>

        {/* Description */}

        <p className="mt-5 leading-8 text-slate-300">{step.description}</p>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-slate-400">{step.duration}</span>

          <span className="font-semibold text-emerald-400">{step.cta} →</span>
        </div>
      </div>
    </motion.div>
  );
}
