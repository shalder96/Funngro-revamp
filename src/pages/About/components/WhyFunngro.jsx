import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  LineChart,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Real-World Experience",
    description:
      "Move beyond theory by working on practical projects that help turn skills into experience.",
    icon: BriefcaseBusiness,
    accent: "emerald",
  },
  {
    id: 2,
    title: "Learn New Skills",
    description:
      "Explore different areas of work and continuously develop skills through hands-on experiences.",
    icon: GraduationCap,
    accent: "cyan",
  },
  {
    id: 3,
    title: "Meaningful Connections",
    description:
      "Connect young talent with companies and create opportunities for collaboration and learning.",
    icon: Handshake,
    accent: "violet",
  },
  {
    id: 4,
    title: "Build Confidence",
    description:
      "Taking responsibility for real projects can help young people become more confident in their abilities.",
    icon: LineChart,
    accent: "amber",
  },
  {
    id: 5,
    title: "Turn Ideas Into Action",
    description:
      "Encourage creativity by giving young people opportunities to apply their ideas to real challenges.",
    icon: Lightbulb,
    accent: "rose",
  },
  {
    id: 6,
    title: "Responsible Opportunities",
    description:
      "Create a structured environment where young talent and companies can work together responsibly.",
    icon: ShieldCheck,
    accent: "indigo",
  },
];

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
};

export default function WhyFunngro() {
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
          Why Funngro
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          More Than Just
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Opportunities
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Funngro focuses on creating experiences that help young people
          learn, contribute, and prepare for the future.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          const accent = accentStyles[item.accent];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className={`group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${accent.hover}`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.icon} text-white shadow-lg`}
              >
                <Icon size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}