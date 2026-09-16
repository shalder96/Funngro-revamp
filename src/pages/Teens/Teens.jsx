import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";

import TeensHero from "./components/TeensHero";
import Benefits from "./components/Benefits";
import HowTeensWork from "./components/HowTeensWork";
import SkillCategories from "./components/SkillCategories";
import ExperienceSection from "./components/ExperienceSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Teens() {
  return (
    <>
      {/* Hero */}
      <Section
        background="light"
        spacing="lg"
        className="relative overflow-hidden"
      >
        <Container>
          <TeensHero />
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="white" spacing="xl">
        <Container>
          <Benefits />
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="light" spacing="xl">
        <Container>
          <HowTeensWork />
        </Container>
      </Section>

      {/* Skill Categories */}
      <Section background="white" spacing="xl">
        <Container>
          <SkillCategories />
        </Container>
      </Section>

      {/* Experience */}
      <Section background="light" spacing="xl">
        <Container>
          <ExperienceSection />
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white" spacing="xl">
        <Container>
          <FAQSection />
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