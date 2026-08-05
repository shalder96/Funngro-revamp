import { motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Clock3,
  Wallet,
  Users,
} from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl"
    >
      {/* Header */}
      <div
        className={`bg-linear-to-r ${project.color} p-6 text-white`}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
            {project.company}
          </span>

          <button className="rounded-full bg-white/20 p-2 transition hover:bg-white hover:text-slate-900">
            <Bookmark size={18} />
          </button>
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {project.title}
        </h3>
      </div>

      {/* Body */}

      <div className="p-6">

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-600">
            {project.category}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
            {project.level}
          </span>

        </div>

        <div className="space-y-4 text-slate-600">

          <div className="flex items-center gap-3">
            <Wallet size={18} />
            <span>{project.stipend}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 size={18} />
            <span>{project.duration}</span>
          </div>

          <div className="flex items-center gap-3">
            <Users size={18} />
            <span>{project.applicants} Applicants</span>
          </div>

        </div>

        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-emerald-500">
          Apply Now
          <ArrowRight size={18} />
        </button>

      </div>
    </motion.div>
  );
}