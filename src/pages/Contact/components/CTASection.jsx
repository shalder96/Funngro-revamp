import { motion } from "framer-motion";
import { ArrowRight, Briefcase, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          bg-gradient-to-br
          from-emerald-600
          via-emerald-500
          to-cyan-500
          px-8
          py-20
          shadow-2xl
          lg:px-20
        "
      >
        {/* ===============================
                Background Glow
        =============================== */}

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[140px]" />

        {/* Floating Circles */}

        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-16 top-16 h-10 w-10 rounded-full bg-white/20"
        />

        <motion.div
          animate={{
            y: [0, 16, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-24 top-24 h-6 w-6 rounded-full bg-white/20"
        />

        <motion.div
          animate={{
            y: [0, -14, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-16 left-1/2 h-8 w-8 rounded-full bg-white/20"
        />

        {/* ===============================
                    Content
        =============================== */}

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
            Let's Build Amazing
            <br />
            Opportunities Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
            Whether you're a talented teenager looking for exciting
            projects or a company searching for young innovators,
            Funngro is the perfect place to connect, collaborate,
            and grow.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to="/signup"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-emerald-600
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <UserPlus size={20} />

              Join as Teen

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/companies"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/30
                bg-white/10
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
              "
            >
              <Briefcase size={20} />

              Hire Talent
            </Link>
          </div>

          {/* Bottom Stats */}

          <div className="mt-16 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-black text-white">
                50K+
              </h3>

              <p className="mt-2 text-emerald-100">
                Teen Users
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                1000+
              </h3>

              <p className="mt-2 text-emerald-100">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                500+
              </h3>

              <p className="mt-2 text-emerald-100">
                Partner Companies
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}