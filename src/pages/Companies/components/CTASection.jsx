import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      {/* Background decoration */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-white/10 sm:block" />
      <div className="absolute bottom-8 left-8 hidden h-16 w-16 rounded-full border border-white/10 sm:block" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm"
        >
          <Sparkles size={16} />
          Start Building Your Team
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Have a Project?
          <span className="block text-emerald-50">
            Find the Right Young Talent.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50 sm:text-xl"
        >
          Create a project opportunity, define the skills you need, and
          connect with young talent ready to learn, contribute, and grow.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/register"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-emerald-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <Building2 size={19} />
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Talk to Us
          </a>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-emerald-50/80"
        >
          Create an opportunity that matches your project requirements.
        </motion.p>
      </div>
    </div>
  );
}