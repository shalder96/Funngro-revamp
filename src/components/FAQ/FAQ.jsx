import Container from "@/components/Common/Container/Container";
import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";
import { faqs } from "@/data/homeData";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Got Questions?"
          highlight="We've Got Answers"
          description="Everything you need to know before starting your journey with Funngro."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
