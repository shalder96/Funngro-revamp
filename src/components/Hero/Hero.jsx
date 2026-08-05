//Third party imports
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

//Utils
import { fadeRight, fadeLeft } from "@/utils/motion";

// Components
import Container from "@/components/Common/Container/Container";
import Button from "@/components/Common/Button";
import HeroImage from "./HeroImage";
import StatCard from "./StatCard";
import Section from "@/components/Common/Section";

// Data
import { heroStats } from "@/data/homeData";

export default function Hero() {
  return (
    <Section
      id="hero"
      background="transparent"
      spacing="none"
      className="min-h-screen flex items-center pb-16"
    >
      {/* Background Blobs */}

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}

          <motion.div {...fadeLeft}>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-6"
            >
              🥇 India's #1 Teen Gig Platform
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-slate-900">
              Learn.
              <br />
              Earn.
              <br />
              Grow.
            </h1>

            <p className="mt-8 text-lg text-slate-600 max-w-xl leading-8">
              Funngro connects talented teenagers with real companies to work on
              exciting projects, earn money, build practical skills, and prepare
              for a successful future.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                variant="primary"
                rightIcon={ArrowRight}
                className="gap-2"
              >
                Start Earning
              </Button>

              <Button variant="outline" leftIcon={PlayCircle} className="gap-2">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">
              {heroStats.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            {...fadeRight}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <HeroImage />

            {/* Floating Card 1 */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-6 -left-8 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-sm text-slate-500">💰 Earnings</p>

              <h3 className="text-2xl font-bold text-emerald-500">₹15,000</h3>
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-8 right-0 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-sm text-slate-500">📁 Projects Completed</p>

              <h3 className="text-2xl font-bold text-cyan-600">124+</h3>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
