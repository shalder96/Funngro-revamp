import { motion } from "framer-motion";

import TimelineCard from "./TimelineCard";

export default function Timeline({ steps }) {
  return (
    <div className="relative mx-auto mt-24 max-w-7xl">
      {/* ==========================================================
                            CENTER TIMELINE
      ========================================================== */}

      <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
        {/* Glow */}

        <div className="absolute left-1/2 h-full w-8 -translate-x-1/2 bg-emerald-500/20 blur-2xl" />

        {/* Animated Line */}

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          className="absolute left-1/2 w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500"
        />
      </div>

      {/* ==========================================================
                              ITEMS
      ========================================================== */}

      <div className="space-y-28">
        {steps.map((step, index) => {
          const left = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative flex flex-col items-center gap-10 lg:flex-row ${
                left ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* ======================================
                          CARD
              ====================================== */}

              <div className="w-full lg:w-5/12">
                <TimelineCard step={step} left={left} />
              </div>

              {/* ======================================
                      STEP NUMBER
              ====================================== */}

              <div className="relative z-20 hidden lg:flex w-2/12 justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="relative flex h-24 w-24 items-center justify-center"
                >
                  {/* Outer Glow */}

                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl" />

                  {/* Rotating Ring */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-dashed border-emerald-400/40"
                  />

                  {/* Outer Border */}

                  <div className="absolute inset-2 rounded-full border border-cyan-400/30" />

                  {/* Inner Circle */}

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-500 shadow-[0_0_35px_rgba(16,185,129,.35)]">
                    <span className="text-xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* ======================================
                        EMPTY SPACE
              ====================================== */}

              <div className="hidden lg:block lg:w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
