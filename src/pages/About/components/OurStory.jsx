import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Practical learning beyond the classroom",
  "Real-world project experience",
  "Opportunities to discover new skills",
  "Connections between young talent and companies",
];

export default function OurStory() {
  return (
    <div
      id="our-story"
      className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
          Our Story
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Education Shouldn't
          <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Stop at the Classroom
          </span>
        </h2>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          Young people have skills, ideas, and the curiosity to build
          something meaningful. But traditional education does not always
          provide enough opportunities to apply those skills in real-world
          situations.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Funngro is designed to help bridge that gap by connecting young
          talent with practical opportunities where they can learn by doing,
          develop confidence, and gain experience.
        </p>

        <div className="mt-8 space-y-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2
                size={22}
                className="shrink-0 text-emerald-500"
              />
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 p-8 shadow-2xl sm:p-10">
          {/* Decorative circles */}
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border border-emerald-400/20" />
          <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full border border-cyan-400/20" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-400">
                The Funngro Approach
              </span>

              <ArrowUpRight
                size={22}
                className="text-emerald-400"
              />
            </div>

            <div className="mt-12">
              <div className="flex items-end gap-3">
                <div className="h-24 w-14 rounded-t-2xl bg-gradient-to-t from-emerald-600 to-emerald-400" />
                <div className="h-36 w-14 rounded-t-2xl bg-gradient-to-t from-cyan-600 to-cyan-400" />
                <div className="h-48 w-14 rounded-t-2xl bg-gradient-to-t from-violet-600 to-violet-400" />
                <div className="h-60 w-14 rounded-t-2xl bg-gradient-to-t from-amber-500 to-orange-400" />
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-2xl font-bold text-white">
                  Learn → Build → Grow
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  A practical journey where every opportunity can become a
                  chance to develop skills and build meaningful experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}