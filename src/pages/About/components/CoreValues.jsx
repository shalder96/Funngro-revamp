import { motion } from "framer-motion";
import { valuesData } from "../data/valuesData";

const accentStyles = {
  emerald: {
    icon: "from-emerald-500 to-green-400",
    line: "from-emerald-500 to-green-400",
  },
  cyan: {
    icon: "from-cyan-500 to-sky-400",
    line: "from-cyan-500 to-sky-400",
  },
  violet: {
    icon: "from-violet-500 to-fuchsia-400",
    line: "from-violet-500 to-fuchsia-400",
  },
  amber: {
    icon: "from-amber-500 to-orange-400",
    line: "from-amber-500 to-orange-400",
  },
  rose: {
    icon: "from-rose-500 to-pink-400",
    line: "from-rose-500 to-pink-400",
  },
  indigo: {
    icon: "from-indigo-500 to-blue-400",
    line: "from-indigo-500 to-blue-400",
  },
};

export default function CoreValues() {
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
          Our Core Values
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          What We
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Believe In
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          These principles guide how we create opportunities, build
          experiences, and connect young talent with the world of work.
        </p>
      </motion.div>

      {/* Values */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valuesData.map((value, index) => {
          const Icon = value.icon;
          const accent =
            accentStyles[value.accent] ?? accentStyles.emerald;

          return (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.icon} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={26} />
                </div>

                <span className="text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                  0{value.id}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>

              <div
                className={`mt-7 h-1 w-12 rounded-full bg-gradient-to-r ${accent.line} transition-all duration-500 group-hover:w-20`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}