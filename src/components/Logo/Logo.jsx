import { Link } from "react-router-dom";
import clsx from "clsx";

import logo from "@/assets/logo/index";

export default function Logo({ to = "/", size = "md", className = "" }) {
  const sizes = {
    sm: {
      image: "h-8",
    },
    md: {
      image: "h-10",
    },
    lg: {
      image: "h-12",
    },
  };

  return (
    <Link
      to={to}
      className={clsx(
        "inline-flex items-center gap-3",
        "transition-transform duration-300 hover:shadow-sm",
        className,
      )}
    >
      <img
        src={logo}
        alt="Funngro Logo"
        className={clsx("w-auto object-contain", sizes[size].image)}
      />
    </Link>
  );
}
