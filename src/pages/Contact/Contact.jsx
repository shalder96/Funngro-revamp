import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";
import MapSection from "./components/MapSection";
import CTASection from "./components/CTASection";

export default function Contact() {
  return (
    <>
      {/* ========================================
                    Hero
      ======================================== */}

      <Section background="light" spacing="lg">
        <Container>
          <ContactHero />
        </Container>
      </Section>

      {/* ========================================
          Contact Info + Contact Form
      ======================================== */}

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <ContactInfo />

            <div className="sticky top-28">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================
                    Map
      ======================================== */}

      <Section background="light" spacing="lg">
        <Container>
          <MapSection />
        </Container>
      </Section>

      {/* ========================================
                    FAQ
      ======================================== */}

      <Section background="white" spacing="lg">
        <Container>
          <FAQSection />
        </Container>
      </Section>

      {/* ========================================
                    CTA
      ======================================== */}

      <Section background="transparent" spacing="lg">
        <Container>
          <CTASection />
        </Container>
      </Section>
    </>
  );
}
