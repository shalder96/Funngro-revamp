import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeUp } from "@/utils/motion";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  size = "lg",
  theme = "light",
  className = "",
}) {
  const alignment = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  const headingSize = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  };

  const styles = {
    light: {
      badge: "border border-emerald-200 bg-emerald-50 text-emerald-600",
      title: "text-slate-900",
      highlight:
        "bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent",
      description: "text-slate-600",
    },

    dark: {
      badge: "border border-white/20 bg-white/10 text-emerald-300",
      title: "text-white",
      highlight: "text-emerald-400",
      description: "text-slate-300",
    },
  };

  return (
    <motion.div
      {...fadeUp}
      className={clsx("max-w-3xl", alignment[align], className)}
    >
      {badge && (
        <span
          className={clsx(
            "inline-flex rounded-full px-4 py-2 text-sm font-semibold",
            styles[theme].badge,
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={clsx(
          "mt-6 font-black leading-tight",
          headingSize[size],
          styles[theme].title,
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={styles[theme].highlight}>{highlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={clsx("mt-6 text-lg leading-8", styles[theme].description)}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
