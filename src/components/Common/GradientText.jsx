export default function GradientText({ children }) {
  return (
    <span className="bg-linear-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}