import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200 hover:shadow-2xl"
    >
      <div
        className={`bg-gradient-to-r ${category.color} p-6 text-white`}
      >
        <Icon size={40} />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {category.title}
        </h3>

        <p className="mt-2 text-slate-500">
          {category.projects}+ Active Projects
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-emerald-600 group-hover:gap-3 transition-all">
          Explore
          <ArrowUpRight size={18} />
        </button>

      </div>

    </motion.div>
  );
}