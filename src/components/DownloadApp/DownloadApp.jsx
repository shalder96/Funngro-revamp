import {
  BriefcaseBusiness,
  Wallet,
  Download,
  Star,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/Common/Container/Container";
import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";
import Button from "@/components/Common/Button";

import PhoneMockup from "./PhoneMockup";
import FloatingCard from "./FloatingCard";

import { fadeLeft } from "@/utils/motion";
import { fadeRight } from "@/utils/motion";
import GradientText from "@/components/Common/GradientText";

export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-emerald-700 to-cyan-600 py-28">
      {/* Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div {...fadeLeft}>
            <SectionHeading
              align="left"
              theme="dark"
              badge="Mobile App"
              title="Take Funngro"
              highlight="Everywhere"
              description="Manage projects, chat with companies, track your earnings and build your future — all from one beautifully designed mobile app."
            />

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                className={`bg-white ${GradientText} hover:bg-slate-100`}
              >
                Download App
              </Button>

              <Button variant="outline">
                Learn More
              </Button>
            </div>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap gap-10">
              <div className="flex items-center gap-2 text-white">
                <Star size={18} className="fill-yellow-300 text-yellow-300" />
                <span>4.9 App Rating</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Download size={18} />
                <span>100K+ Downloads</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <ShieldCheck size={18} />
                <span>Trusted Platform</span>
              </div>
            </div>

            {/* Store Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-3xl bg-black px-6 py-5 text-left text-white transition hover:scale-105">
                <p className="text-xs opacity-70">Download on the</p>

                <p className="font-semibold">App Store</p>
              </button>

              <button className="rounded-3xl bg-black px-6 py-5 text-left text-white transition hover:scale-105">
                <p className="text-xs opacity-70">Get it on</p>

                <p className="font-semibold">Google Play</p>
              </button>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            {...fadeRight}
            className="relative mt-8 flex items-center justify-center"
          >
            {/* Floating Card */}

            <FloatingCard
              icon={BriefcaseBusiness}
              title="Live Projects"
              value="120+"
              color="emerald"
              className="absolute -left-14 top-28 hidden xl:block"
            />

            {/* Phone */}

            <PhoneMockup />

            {/* Floating Card */}

            <FloatingCard
              icon={Wallet}
              title="Monthly Earnings"
              value="₹18,500"
              color="cyan"
              className="absolute -right-14 bottom-28 hidden xl:block"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
