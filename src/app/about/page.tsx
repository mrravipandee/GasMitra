import AboutHero from "@/components/about/AboutHero";
import ContactCTA from "@/components/about/ContactCTA";
import FaqSection from "@/components/about/FaqSection";
import MissionVision from "@/components/about/MissionVision";
import OurTeam from "@/components/about/OurTeam";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <OurTeam />
      <ContactCTA />
      <Contact />
      <FaqSection />
    </main>
  );
}
