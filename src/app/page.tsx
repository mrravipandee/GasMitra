import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function home() {
  return (
    <>
      <div className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
        <HeroSection />
        <Services />
      </div>
    </>
  )
}