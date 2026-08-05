import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/motion";

export default function FeaturesGrid({
  features,
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={staggerItem}
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}