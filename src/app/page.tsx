import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function home() {
  return (
    <>
      <div className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
        <HeroSection />
        <Services />
        <HowItWorks />
        <Testimonials />
      </div>
    </>
  )
}