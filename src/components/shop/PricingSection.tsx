"use client";

import { motion } from "framer-motion";
import { FaRupeeSign, FaGasPump, FaCheck, FaArrowRight } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import Link from "next/link";

const pricingCards = [
  {
    id: 1,
    icon: <FaGasPump className="text-2xl" />,
    title: "Standard LPG Cylinder",
    subtitle: "14.2 KG Domestic LPG Cylinder",
    price: "₹900",
    description: "Base Dealer Price",
    features: ["Government pricing", "Quality assured", "Safety certified"],
    popular: true,
  },
  {
    id: 2,
    icon: <FaTruckFast className="text-2xl" />,
    title: "Customer Price",
    subtitle: "Including local delivery and handling",
    price: "₹1100",
    description: "Same-area delivery within 2-4 hours",
    features: ["Free local delivery", "2-4 hours delivery", "Safe handling", "Real-time tracking"],
    popular: false,
  },
  {
    id: 3,
    icon: <FaRupeeSign className="text-2xl" />,
    title: "Distant Area Delivery",
    subtitle: "Delivery charge for far areas (beyond 5 km)",
    price: "₹50 – ₹60",
    description: "Extra per delivery",
    features: ["Beyond 5km radius", "Transparent pricing", "No hidden charges"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-primaryText mb-4"
          >
            Transparent & Affordable Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            At <span className="text-primary font-semibold">GasMitra</span>, we keep things simple and honest.
            No hidden charges — just fast, fair, and reliable LPG delivery.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {card.popular && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                card.popular ? 'border-primary' : 'border-gray-100'
              } h-full transform hover:-translate-y-2 overflow-hidden`}>
                
                {/* Card Header */}
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-iconBg text-primaryText group-hover:text-primary shadow-md`}>
                      {card.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primaryText mb-2">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-secondaryText text-sm mb-4">
                    {card.subtitle}
                  </p>

                  {/* Price */}
                  <div className="text-3xl font-bold text-primaryText mb-2">
                    {card.price}
                  </div>

                  {/* Description */}
                  <p className="text-secondaryText text-sm mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="px-8 pb-6">
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <FaCheck className="text-green-500 text-sm flex-shrink-0" />
                        <span className="text-primaryText text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-8 pb-8">
                  <Link
                    href="/order"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                      card.popular 
                        ? 'bg-primary text-white hover:bg-orange-600 shadow-md hover:shadow-lg' 
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {card.popular ? 'Order Now' : 'Learn More'}
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mx-auto mb-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-primaryText mb-4">Need Commercial or Bulk Pricing?</h3>
          <p className="text-secondaryText text-lg mb-6 max-w-3xl mx-auto">
            We offer special rates for restaurants, hotels, hostels, and businesses requiring regular bulk LPG supply.
            Contact us for customized pricing and subscription plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get Commercial Quote
            </Link>
            <Link
              href="/order"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Order Regular Cylinder
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}