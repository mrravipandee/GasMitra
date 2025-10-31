import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import CTASection from "@/components/Services/CTASection";

export default function ContactPage() {
    return (
        <div className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <CTASection />
        </div>
    );
}
