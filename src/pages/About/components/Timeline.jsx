import { motion } from "framer-motion";

export default function Timeline({ items = [] }) {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      {/* Center Line */}
      <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-400 md:block md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: isLeft ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 top-8 z-10 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-emerald-500 shadow-lg md:flex md:left-1/2" />

              {/* Content */}
              <div
                className={`ml-10 md:ml-0 ${
                  isLeft
                    ? "md:col-start-1 md:text-right"
                    : "md:col-start-2 md:text-left"
                }`}
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                  {/* Period */}
                  <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-600">
                    {item.period}
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}