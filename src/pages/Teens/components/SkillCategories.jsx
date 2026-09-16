import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";

const accentStyles = {
  emerald: {
    icon: "from-emerald-500 to-green-400",
    hover: "group-hover:border-emerald-300",
  },
  cyan: {
    icon: "from-cyan-500 to-sky-400",
    hover: "group-hover:border-cyan-300",
  },
  violet: {
    icon: "from-violet-500 to-fuchsia-400",
    hover: "group-hover:border-violet-300",
  },
  amber: {
    icon: "from-amber-500 to-orange-400",
    hover: "group-hover:border-amber-300",
  },
  rose: {
    icon: "from-rose-500 to-pink-400",
    hover: "group-hover:border-rose-300",
  },
  indigo: {
    icon: "from-indigo-500 to-blue-400",
    hover: "group-hover:border-indigo-300",
  },
  sky: {
    icon: "from-sky-500 to-blue-400",
    hover: "group-hover:border-sky-300",
  },
  green: {
    icon: "from-green-500 to-lime-400",
    hover: "group-hover:border-green-300",
  },
};

export default function SkillCategories() {
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
          Explore Your Skills
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Find Opportunities That
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Match You
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Whatever you're good at, explore project areas where you can
          practice your skills and gain practical experience.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          const accent =
            accentStyles[skill.accent] ?? accentStyles.emerald;

          return (
            <motion.div
              key={skill.id}
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
                {skill.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {skill.description}
              </p>

              {/* Explore indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                Explore projects
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