import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import CountUp from "./CountUp";
import { stats } from "@/data/homeData";
import { fadeRight } from "@/utils/motion";

export default function ImpactStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-emerald-500 to-cyan-500 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          {...fadeRight}
          className="text-center"
        >
          <SectionHeading
            badge="Our Impact"
            title="Empowering India's"
            highlight="Next Generation"
            description="Thousands of students have already gained experience, earned money, and built their careers through Funngro."
            theme="dark"
          />
        </motion.div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-lg">
                  <Icon size={32} />
                </div>

                {/* Number */}

                <h3 className="text-5xl font-black text-white">
                  <CountUp
                    end={item.number}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    start={inView}
                  />
                </h3>

                {/* Title */}

                <h4 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="mt-3 leading-7 text-emerald-100">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
