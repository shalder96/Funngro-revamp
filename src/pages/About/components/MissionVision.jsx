import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To create meaningful opportunities that help young people develop practical skills, gain real-world experience, and become more confident about their future.",
    icon: Target,
    gradient: "from-emerald-500 to-green-400",
    glow: "bg-emerald-500/20",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "A future where every young person can discover their potential, learn through experience, and access opportunities that help turn their ambitions into reality.",
    icon: Eye,
    gradient: "from-cyan-500 to-blue-400",
    glow: "bg-cyan-500/20",
  },
];

export default function MissionVision() {
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
          What Drives Us
        </span>

        <h2 className="mt-5 text-4xl font-black text-slate-900 sm:text-5xl">
          Our Mission &
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Vision
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Everything we build is focused on helping young talent move from
          learning to meaningful real-world experience.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:p-10"
            >
              {/* Glow */}
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full ${card.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {card.description}
                </p>

                {/* Bottom accent */}
                <div
                  className={`mt-8 h-1.5 w-20 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-500 group-hover:w-32`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}