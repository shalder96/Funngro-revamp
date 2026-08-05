import clsx from "clsx";

export default function Section({
  as: Component = "section",
  id,
  children,
  background = "white",
  spacing = "xl",
  className = "",
}) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-slate-50",
    dark: "bg-slate-900",
    gradient: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500",
    transparent: "bg-transparent",
  };

  const spacings = {
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-28",
    none: "",
  };

  return (
    <Component
      id={id}
      className={clsx(
        "relative overflow-hidden",
        backgrounds[background],
        spacings[spacing],
        className,
      )}
    >
      {children}
    </Component>
  );
}
