import { motion } from "framer-motion";

export default function GalaxyBackground() {
  const stars = Array.from({ length: 80 }, (_, index) => ({
    id: index,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: 2 + Math.random() * 4,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 bg-slate-950" />

      {/* Nebula */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[140px]" />

      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute bottom-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Stars */}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
