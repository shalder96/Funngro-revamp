import { ArrowUpRight, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function EarningsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mx-5 mt-8 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 via-emerald-400 to-cyan-500 p-6 text-white shadow-xl"
    >
      {/* Top */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-100">
            Total Earnings
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight">
            ₹18,500
          </h2>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
          <Wallet size={28} />
        </div>
      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-white/20"></div>

      {/* Bottom */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-wider text-emerald-100">
            This Month
          </p>

          <div className="mt-2 flex items-center gap-2">
            <ArrowUpRight
              size={18}
              className="text-lime-200"
            />

            <span className="font-semibold">
              + ₹2,400
            </span>
          </div>

        </div>

        <div className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur">
          +14%
        </div>

      </div>
    </motion.div>
  );
}