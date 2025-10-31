import ProductList from "@/components/shop/ProductList";
import ShopHero from "@/components/shop/ShopHero";
import HowToOrder from "@/components/shop/HowToOrder";
import DeliveryInfo from "@/components/shop/DeliveryInfo";
import PricingSection from "@/components/shop/PricingSection";

export default function ShopPage() {
  return (
    <div className="bg-gradient-to-br from-orange-50/50 to-gray-50/30">
      <ShopHero />
      <ProductList />
      <HowToOrder />
      <DeliveryInfo />
      <PricingSection />
    </div>
  );
}