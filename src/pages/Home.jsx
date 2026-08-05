import Hero from "../components/Hero/Hero";
import CompanyMarquee from "../components/TrustedCompanies/CompanyMarquee";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ImpactStats from "../components/ImpactStats/ImpactStats";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import SkillCategories from "../components/SkillCategories/SkillCategories";
import FAQ from "../components/FAQ/FAQ";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <CompanyMarquee />
      <WhyChoose />
      <FeaturedProjects />
      <HowItWorks />
      <ImpactStats />
      <SuccessStories />
      <SkillCategories />
      <FAQ />
      <DownloadApp />
      <CTA />
    </main>
  );
}
