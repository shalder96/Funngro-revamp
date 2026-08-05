import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";

import Timeline from "./Timeline";

import { howItWorksData } from "@/data/homeData";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      background="dark"
      spacing="xl"
      className="relative overflow-hidden"
    >
      {/* ======================================
              Background Glow
      ====================================== */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Emerald Glow */}

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[140px]" />

        {/* Cyan Glow */}

        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Violet Glow */}

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      {/* ======================================
              Content
      ====================================== */}

      <Container className="relative z-10">
        <SectionHeading
          badge="How It Works"
          title="Start Your Journey in"
          highlight="4 Simple Steps"
          description="Join Funngro in just four easy steps. Discover projects, work with companies, build your portfolio, and earn while you learn."
          theme="dark"
        />

        <Timeline steps={howItWorksData} />
      </Container>
    </Section>
  );
}
