import { motion } from "framer-motion";
import { categories } from "@/data/homeData";
import CategoryCard from "./CategoryCard";
import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";
import { fadeUp } from "@/utils/motion";

export default function SkillCategories() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp}
          className="text-center"
        >
          <SectionHeading
            badge="Explore Skills"
            title="Find Projects That Match"
            highlight="Your Passion"
            description="Choose from coding, design, marketing, AI, writing, and many more exciting career paths."
          />
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
