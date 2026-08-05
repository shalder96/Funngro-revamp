import clsx from "clsx";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

import { buttonHover } from "@/utils/motion";

const variants = {
  primary:
    "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl",

  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 shadow-md hover:shadow-lg",

  outline:
    "border-2 border-emerald-500 bg-transparent text-emerald-600 hover:bg-emerald-500 hover:text-white",

  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",

  danger: "bg-red-500 text-white hover:bg-red-600",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",

    md: "px-7 py-3.5 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={!disabled && !loading ? buttonHover : undefined}
      whileTap={!disabled && !loading ? { scale: 0.96 } : undefined}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-3",
        "rounded-full font-semibold transition-all duration-300",
        "focus:outline-none",
        "focus:ring-4 focus:ring-emerald-200",
        "disabled:cursor-not-allowed disabled:opacity-60",

        variants[variant],

        sizes[size],

        fullWidth && "w-full",

        className,
      )}
      {...props}
    >
      {loading ? (
        <>
          <LoaderCircle size={18} className="animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {LeftIcon && <LeftIcon size={20} />}

          {children}

          {RightIcon && <RightIcon size={20} />}
        </>
      )}
    </motion.button>
  );
}
