import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";

export default function TeensHero() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-slate-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Decorative Shapes */}
      <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-emerald-400/10 sm:block" />
      <div className="absolute bottom-10 left-10 hidden h-20 w-20 rounded-full border border-cyan-400/10 sm:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-300"
            >
              <Sparkles size={16} />
              Built for Young Talent
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Turn Your Skills Into
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Real Experience
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Discover practical opportunities, work on real projects,
              develop valuable skills, and start building experience for
              your future.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
              >
                How It Works
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />

            <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Your journey
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Learn. Build. Grow.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                  <BriefcaseBusiness size={24} />
                </div>
              </div>

              <div className="mt-9 space-y-4">
                {[
                  {
                    number: "01",
                    title: "Create Your Profile",
                    text: "Showcase your interests and skills.",
                  },
                  {
                    number: "02",
                    title: "Discover Opportunities",
                    text: "Find projects that match your abilities.",
                  },
                  {
                    number: "03",
                    title: "Build Experience",
                    text: "Work on practical projects and grow.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-sm font-bold text-emerald-300">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}