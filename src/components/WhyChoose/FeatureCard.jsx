import { motion } from "framer-motion";
import GlassCard from "@/components/Common/GlassCard";

export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <GlassCard className="group h-full rounded-3xl p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon size={30} />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">{title}</h3>

        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </GlassCard>
    </motion.div>
  );
}
