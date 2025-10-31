import CTASection from "@/components/Services/CTASection";
import Process from "@/components/Services/Process";
import ServiceCards from "@/components/Services/ServiceCards";
import ServicesHero from "@/components/Services/ServicesHero";
import PricingSection from "@/components/shop/PricingSection";

export default  function ServicePage() {
    return (
        <div className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
            <ServicesHero />
            <ServiceCards />
            <Process />
            <PricingSection />
            <CTASection />
        </div>
    );
}