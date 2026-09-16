import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { faqData } from "@/data/faqData";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Find quick answers to the most common questions about Funngro,
            projects, payments, and getting started.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-5">
          {faqData.map((item, index) => {
            const open = active === index;

            return (
              <motion.div
                key={item.id}
                layout
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                "
              >
                {/* Header */}

                <button
                  onClick={() => setActive(open ? -1 : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-7
                    py-6
                    text-left
                  "
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: open ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown className="text-emerald-500" />
                  </motion.div>
                </button>

                {/* Body */}

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-slate-100 px-7 pb-7 pt-5">
                        <p className="leading-8 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
