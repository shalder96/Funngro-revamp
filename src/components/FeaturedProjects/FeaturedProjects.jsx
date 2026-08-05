import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/homeData";
import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";
import { fadeLeft } from "@/utils/motion";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeLeft}
        >
          <SectionHeading
            badge="Featured Opportunities"
            title="Start Working on"
            highlight="Real Projects"
            description="Discover exciting opportunities from top companies and start building your career today."
          />
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
