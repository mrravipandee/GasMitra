"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaMotorcycle, FaCheck } from "react-icons/fa";

const infoCards = [
  {
    id: 1,
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: "Our Coverage Areas",
    description: "Currently delivering LPG cylinders across Nashik city and nearby areas. We're expanding soon!",
    features: ["Nashik City", "Satpur Area", "Gangapur Road", "CIDCO"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: <FaClock className="text-2xl" />,
    title: "Fast Delivery Time",
    description: "Same-area deliveries are completed within 2-4 hours. Distant areas may take up to 6 hours.",
    features: ["2-4 hours local", "6 hours maximum", "Express delivery", "Real-time tracking"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: <FaMotorcycle className="text-2xl" />,
    title: "Affordable Charges",
    description: "Free delivery for local areas. ₹50-₹60 extra for longer distances — fair and transparent pricing.",
    features: ["Free local delivery", "₹50-60 distance charge", "No hidden fees", "Transparent pricing"],
    color: "from-orange-500 to-red-500"
  },
];

export default function DeliveryInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-primaryText mb-4"
          >
            Delivery Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Clear and transparent delivery details to ensure you get your LPG cylinder on time, every time.
          </motion.p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2 p-8">
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-iconBg text-primaryText shadow-md group-hover:text-primary group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primaryText mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText leading-relaxed text-center mb-6">
                  {card.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <FaCheck className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-primaryText text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-6 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-primaryText mb-4">Need Delivery Outside Our Current Areas?</h3>
          <p className="text-secondaryText text-lg mb-6 max-w-3xl mx-auto">
            We&apos;re constantly expanding our service areas. If your location is not currently covered, 
            contact us and we&apos;ll prioritize your area for our next expansion phase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Check Service Availability
            </button>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
              Request Area Expansion
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}