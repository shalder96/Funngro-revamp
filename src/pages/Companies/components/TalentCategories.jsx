import { motion } from "framer-motion";
import { talentCategoriesData } from "../data/talentCategoriesData";

const accentStyles = {
  emerald: {
    icon: "from-emerald-500 to-green-400",
    hover: "hover:border-emerald-300",
  },
  cyan: {
    icon: "from-cyan-500 to-sky-400",
    hover: "hover:border-cyan-300",
  },
  violet: {
    icon: "from-violet-500 to-fuchsia-400",
    hover: "hover:border-violet-300",
  },
  amber: {
    icon: "from-amber-500 to-orange-400",
    hover: "hover:border-amber-300",
  },
  rose: {
    icon: "from-rose-500 to-pink-400",
    hover: "hover:border-rose-300",
  },
  indigo: {
    icon: "from-indigo-500 to-blue-400",
    hover: "hover:border-indigo-300",
  },
  sky: {
    icon: "from-sky-500 to-blue-400",
    hover: "hover:border-sky-300",
  },
  green: {
    icon: "from-green-500 to-lime-400",
    hover: "hover:border-green-300",
  },
};

export default function TalentCategories() {
  return (
    <div>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
          Explore Talent
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Find Skills for Your
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Explore different skill areas and find young talent whose interests
          and abilities match your project requirements.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {talentCategoriesData.map((category, index) => {
          const Icon = category.icon;

          const accent =
            accentStyles[category.accent] ?? accentStyles.emerald;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{ y: -6 }}
              className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${accent.hover}`}
            >
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.icon} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={25} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              {/* Indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                Explore talent
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}