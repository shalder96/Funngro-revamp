import Section from "@/components/Common/Section";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";

import FeaturesGrid from "./FeaturesGrid";

import { whyChooseData } from "@/data/homeData";

export default function WhyChoose() {
  return (
    <Section id="why-choose" background="light" spacing="xl">
      <Container>
        <SectionHeading
          badge="Why Choose Funngro"
          title="Everything You Need to"
          highlight="Learn, Earn & Grow"
          description="Funngro empowers teenagers with practical opportunities to gain experience, earn money, and prepare for future careers."
        />

        <FeaturesGrid features={whyChooseData} />
      </Container>
    </Section>
  );
}
