import { motion } from "framer-motion";
import { benefitsData } from "../data/benefitsData";

const accentStyles = {
  emerald: {
    icon: "from-emerald-500 to-green-400",
    border: "hover:border-emerald-300",
  },
  cyan: {
    icon: "from-cyan-500 to-sky-400",
    border: "hover:border-cyan-300",
  },
  violet: {
    icon: "from-violet-500 to-fuchsia-400",
    border: "hover:border-violet-300",
  },
  amber: {
    icon: "from-amber-500 to-orange-400",
    border: "hover:border-amber-300",
  },
  rose: {
    icon: "from-rose-500 to-pink-400",
    border: "hover:border-rose-300",
  },
  indigo: {
    icon: "from-indigo-500 to-blue-400",
    border: "hover:border-indigo-300",
  },
};

export default function Benefits() {
  return (
    <div>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
          Why Join Funngro
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Build Skills That
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Matter
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Get more than just project experience. Develop practical skills,
          build confidence, and prepare yourself for future opportunities.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefitsData.map((benefit, index) => {
          const Icon = benefit.icon;

          const accent =
            accentStyles[benefit.accent] ?? accentStyles.emerald;

          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className={`group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${accent.border}`}
            >
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.icon} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={26} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>

              {/* Accent Line */}
              <div
                className={`mt-6 h-1 w-10 rounded-full bg-gradient-to-r ${accent.icon} transition-all duration-500 group-hover:w-16`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}