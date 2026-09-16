import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardCheck,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const collaborationPoints = [
  {
    id: 1,
    title: "Clear Requirements",
    description:
      "Share your project goals, required skills, expected deliverables, and relevant details from the beginning.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Direct Collaboration",
    description:
      "Communicate around the project, clarify requirements, and provide feedback as the work progresses.",
    icon: MessageCircle,
  },
  {
    id: 3,
    title: "Shared Responsibility",
    description:
      "Create a clear understanding of responsibilities, timelines, and deliverables for everyone involved.",
    icon: Users,
  },
  {
    id: 4,
    title: "Fresh Ideas",
    description:
      "Give young talent an opportunity to contribute their creativity, perspective, and digital skills.",
    icon: Lightbulb,
  },
];

export default function CollaborationSection() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-slate-950 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/15 blur-[110px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
            Built for Collaboration
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
            Turn Ideas Into
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Meaningful Projects
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Give young talent the opportunity to contribute to real project
            requirements while your company gains access to fresh skills,
            ideas, and perspectives.
          </p>

          <a
            href="/register"
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30"
          >
            Start Collaborating
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Right Content */}
        <div className="grid gap-4 sm:grid-cols-2">
          {collaborationPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}