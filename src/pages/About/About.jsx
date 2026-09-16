import SEO from "@/components/Common/SEO/SEO";
import { seoData } from "@/components/Common/SEO/seoData";

import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";

import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import MissionVision from "./components/MissionVision";
import WhyFunngro from "./components/WhyFunngro";

import CoreValues from "./components/CoreValues";
import TeamSection from "./components/TeamSection";
import Timeline from "./components/Timeline";
import CTASection from "./components/CTASection";

import { timelineData } from "./data/timelineData";

export default function About() {
  return (
    <>
      <SEO {...seoData.about} />
      {/* Hero */}
      <Section
        background="light"
        spacing="lg"
        className="relative overflow-hidden"
      >
        <Container>
          <AboutHero />
        </Container>
      </Section>

      {/* Our Story */}
      <Section background="white" spacing="xl">
        <Container>
          <OurStory />
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="light" spacing="xl">
        <Container>
          <MissionVision />
        </Container>
      </Section>

      {/* Why Funngro */}
      <Section background="white" spacing="xl">
        <Container>
          <WhyFunngro />
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="white" spacing="xl">
        <Container>
          <CoreValues />
        </Container>
      </Section>

      {/* Team */}
      <Section background="light" spacing="xl">
        <Container>
          <TeamSection />
        </Container>
      </Section>

      {/* Story Timeline */}
      <Section background="white" spacing="xl">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
              Our Journey
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              From an Idea to a
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Growing Movement
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the journey of creating better ways for young people to
              learn, work, and grow.
            </p>
          </div>

          <Timeline items={timelineData} />
        </Container>
      </Section>

      {/* CTA */}
      <Section background="light" spacing="lg">
        <Container>
          <CTASection />
        </Container>
      </Section>
    </>
  );
}
