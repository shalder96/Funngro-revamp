import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* ===========================
            Background Glow
      =========================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />

        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ===========================
                Left Content
          =========================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">
              <Mail size={16} />
              Contact Funngro
            </span>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
              Let's Build the
              <span className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Have questions, ideas, or partnership opportunities? We'd love to
              hear from you. Our team is here to help teenagers, parents,
              educators, and companies connect and grow together.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                Contact Us
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                <MessageCircle size={18} />
                Live Chat
              </button>
            </div>
          </motion.div>

          {/* ===========================
                Right Illustration
          =========================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />

            {/* Glass Card */}

            <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">
              {/* Floating Icon */}

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-xl">
                <Mail size={40} className="text-white" />
              </div>

              <h3 className="mt-8 text-center text-3xl font-bold text-slate-900">
                We Reply Fast 🚀
              </h3>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Most emails are answered within
                <span className="font-semibold text-emerald-600">
                  {" "}
                  24 hours
                </span>
                . Our team is always happy to help you with your questions.
              </p>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h4 className="text-3xl font-bold text-emerald-600">24h</h4>
                  <p className="mt-1 text-sm text-slate-500">Avg Response</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h4 className="text-3xl font-bold text-cyan-600">100%</h4>
                  <p className="mt-1 text-sm text-slate-500">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
