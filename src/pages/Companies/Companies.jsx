import SEO from "@/components/Common/SEO/SEO";
import { seoData } from "@/components/Common/SEO/seoData";

import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";

import CompaniesHero from "./components/CompaniesHero";
import Benefits from "./components/Benefits";
import HowCompaniesWork from "./components/HowCompaniesWork";
import TalentCategories from "./components/TalentCategories";
import CollaborationSection from "./components/CollaborationSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Companies() {
  return (
    <>
      <SEO {...seoData.companies} />
      {/* Hero */}
      <Section
        background="light"
        spacing="lg"
        className="relative overflow-hidden"
      >
        <Container>
          <CompaniesHero />
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="white" spacing="xl">
        <Container>
          <Benefits />
        </Container>
      </Section>

      {/* How It Works */}
      <Section
        background="light"
        spacing="xl"
      >
        <Container>
          <HowCompaniesWork />
        </Container>
      </Section>

      {/* Talent Categories */}
      <Section background="white" spacing="xl">
        <Container>
          <TalentCategories />
        </Container>
      </Section>

      {/* Collaboration */}
      <Section background="light" spacing="xl">
        <Container>
          <CollaborationSection />
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