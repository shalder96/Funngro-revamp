import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  FolderKanban,
  TrendingUp,
} from "lucide-react";

const experiencePoints = [
  "Work on practical projects",
  "Apply your existing skills",
  "Learn from real challenges",
  "Build work you can showcase",
];

export default function ExperienceSection() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative order-2 lg:order-1"
      >
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[36px] bg-slate-950 p-7 shadow-2xl sm:p-9">
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border border-emerald-400/10" />
          <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full border border-cyan-400/10" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Your Experience
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  Build as you learn
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                <Award size={24} />
              </div>
            </div>

            {/* Progress Cards */}
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <FolderKanban size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">
                        Project Experience
                      </span>
                      <span className="text-sm text-emerald-400">
                        Build
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <TrendingUp size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">
                        Skill Development
                      </span>
                      <span className="text-sm text-cyan-400">
                        Grow
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-cyan-500 to-sky-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-emerald-400"
                />

                <p className="text-sm font-medium leading-6 text-emerald-200">
                  Every project can become another step in your learning
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="order-1 lg:order-2"
      >
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
          Build Your Experience
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Don't Just Learn.
          <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Put Your Skills to Work.
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Learning becomes more meaningful when you get the opportunity to
          apply it. Practical projects can help you understand your strengths,
          discover areas to improve, and create work you can be proud of.
        </p>

        <div className="mt-8 space-y-4">
          {experiencePoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={21}
                className="shrink-0 text-emerald-500"
              />

              <span className="font-medium text-slate-700">
                {point}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
            <Award size={20} className="text-emerald-600" />
          </div>

          <div>
            <p className="font-bold text-slate-900">
              Experience matters
            </p>
            <p className="text-sm text-slate-500">
              Turn projects into proof of what you can do.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}