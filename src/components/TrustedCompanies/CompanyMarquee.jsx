import { motion } from "framer-motion";

import { companies } from "@/data/companyData";

import CompanyLogo from "./CompanyLogo";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";

export default function CompanyMarquee() {
  // Duplicate data for seamless infinite scrolling
  const marqueeCompanies = [...companies, ...companies];

  return (
    <>
      {" "}
      <Container>
        <SectionHeading
          badge="Trusted by Industry"
          title="Partnering With"
          highlight="Leading Companies"
          description="Hundreds of organizations trust Funngro to discover talented teenagers for real-world projects."
        />
      </Container>
      <div className="relative mt-10 overflow-hidden">
        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-linear-to-r from-white to-transparent" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-linear-to-l from-white to-transparent" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max gap-6 px-12 py-2"
        >
          {marqueeCompanies.map((company, index) => (
            <CompanyLogo
              key={`${company.id}-${index}`}
              name={company.name}
              icon={company.icon}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
