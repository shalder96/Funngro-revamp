import { motion } from "framer-motion";
import {
  UserRoundPlus,
  Search,
  Send,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Profile",
    description:
      "Tell us about your interests, skills, and what you would like to explore.",
    icon: UserRoundPlus,
    accent: "emerald",
  },
  {
    id: 2,
    title: "Discover Projects",
    description:
      "Explore opportunities that match your skills, interests, and learning goals.",
    icon: Search,
    accent: "cyan",
  },
  {
    id: 3,
    title: "Apply for Projects",
    description:
      "Choose suitable opportunities and submit your application to the company.",
    icon: Send,
    accent: "violet",
  },
  {
    id: 4,
    title: "Work & Learn",
    description:
      "Collaborate on the project, solve real problems, and gain practical experience.",
    icon: BriefcaseBusiness,
    accent: "amber",
  },
  {
    id: 5,
    title: "Build Your Experience",
    description:
      "Complete your work, strengthen your portfolio, and continue growing your skills.",
    icon: Trophy,
    accent: "rose",
  },
];

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
};

export default function HowTeensWork() {
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
          How It Works
        </span>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          From Skills to
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Experience
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Follow a simple journey from creating your profile to working on
          projects and building valuable experience.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative mx-auto mt-16 max-w-6xl">
        {/* Desktop Connecting Line */}
        <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-emerald-400 via-cyan-400 to-rose-400 lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const accent =
              accentStyles[step.accent] ?? accentStyles.emerald;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative text-center"
              >
                {/* Step Icon */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-slate-50 to-white shadow-lg">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent.icon} text-white`}
                  >
                    <Icon size={23} />
                  </div>
                </div>

                {/* Step Number */}
                <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  Step {step.id}
                </span>

                {/* Content */}
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {/* Accent */}
                <div
                  className={`mx-auto mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${accent.line}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}