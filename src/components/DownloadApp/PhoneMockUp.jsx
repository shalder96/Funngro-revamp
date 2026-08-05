import { motion } from "framer-motion";

import { CircleCheckBig, Clock3, BellDot } from "lucide-react";

import AppHeader from "./AppHeader";
import EarningsCard from "./EarningsCard";
import ProjectCard from "./ProjectCard";
import BottomNav from "./BottomNav";

import { fadeRight } from "@/utils/motion";

export default function PhoneMockup() {
  return (
    <motion.div
      {...fadeRight}
      initial={{
        rotate: -4,
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        rotate: -4,
        opacity: 1,
        x: 0,
      }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
      }}
      className="relative"
    >
      {/* Phone Body */}

      <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[42px] border-[6px] border-slate-900 bg-white shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900 z-20"></div>

        {/* Screen */}

        <div className="flex h-full flex-col bg-slate-50 pb-2">
          <AppHeader />

          <EarningsCard />

          {/* Today's Tasks */}

          <div className="mt-6 px-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                Today's Tasks
              </h3>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                3 Pending
              </span>
            </div>

            <div className="space-y-3">
              {/* Task 1 */}

              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-100 p-2">
                    <BellDot size={16} className="text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Adobe replied
                    </p>

                    <p className="text-xs text-slate-500">
                      Review submitted design
                    </p>
                  </div>
                </div>

                <Clock3 size={16} className="text-orange-500" />
              </div>

              {/* Task 2 */}

              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-2">
                    <CircleCheckBig size={16} className="text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Google approved
                    </p>

                    <p className="text-xs text-slate-500">
                      Content writing project
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  Done
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}

          <div className="mt-4 flex-1 space-y-3 overflow-hidden px-5">
            <ProjectCard
              company="Adobe"
              project="Social Media Design"
              progress={75}
              status="Active"
              color="emerald"
            />

            <ProjectCard
              company="Google"
              project="Content Writing"
              progress={45}
              status="Review"
              color="cyan"
            />
          </div>

          <BottomNav />
        </div>
      </div>
    </motion.div>
  );
}
