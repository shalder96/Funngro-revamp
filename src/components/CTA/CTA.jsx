import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/Common/Container/Container";
import Button from "@/components/Common/Button";
import FloatingBadge from "./FloatingBadge";
import { fadeUp } from "@/utils/motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-emerald-900 to-slate-900" />

      {/* Glow */}

      <div className="absolute -top-32 left-20 h-80 w-80 rounded-full bg-emerald-500/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container className="relative">
        <motion.div
         {...fadeUp}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 px-10 py-20 backdrop-blur-xl lg:px-20"
        >
          {/* Floating badges */}

          <FloatingBadge
            text="50,000+ Students"
            className="absolute left-10 top-10 hidden lg:block"
          />

          <FloatingBadge
            text="1,200+ Companies"
            className="absolute right-10 bottom-10 hidden lg:block"
          />

          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
              Start Today
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">
              Your Future Doesn't
              <br />
              Start After College.
              <span className="block text-emerald-400">It Starts Today.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Build real skills. Earn money. Work with top companies. Create an
              impressive portfolio before graduation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button variant="primary">Get Started</Button>

              <Button variant="outline" rightIcon={ArrowRight}>
                Explore Projects
              </Button>
            </div>

            {/* Trust */}

            <div className="mt-14 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Free Registration
              </div>

              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Verified Companies
              </div>

              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Secure Payments
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
