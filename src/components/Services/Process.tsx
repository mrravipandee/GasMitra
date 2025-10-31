"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaClipboardCheck, FaTruck, FaHome } from "react-icons/fa";

const steps = [
  { 
    title: "1. Place Order", 
    desc: "Book your LPG cylinder online or via call. Choose your preferred delivery time and cylinder type.",
    icon: <FaShoppingCart className="text-2xl" />,
  },
  { 
    title: "2. Order Confirmation", 
    desc: "Get instant confirmation with order details and estimated delivery time via SMS/WhatsApp.",
    icon: <FaClipboardCheck className="text-2xl" />,
  },
  { 
    title: "3. Fast Delivery", 
    desc: "Our verified delivery partner brings your cylinder safely to your doorstep within hours.",
    icon: <FaTruck className="text-2xl" />,
  },
  { 
    title: "4. Safe Installation", 
    desc: "Professional installation with safety checks and leak testing for complete peace of mind.",
    icon: <FaHome className="text-2xl" />,
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primaryText mb-4">
            Our Delivery Process
          </h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto">
            Simple, transparent, and efficient - from booking to safe installation at your doorstep.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-iconBg rounded-full flex items-center justify-center text-primaryText font-bold text-lg shadow-lg border border-gray-200">
                  {index + 1}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 pt-12 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-iconBg text-primaryText group-hover:text-primary shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primaryText mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText leading-relaxed">
                  {step.desc}
                </p>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-6 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>

              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 w-6 h-0.5 bg-gray-300 z-10">
                  <div className="w-full h-full bg-secondaryText rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-secondaryText text-lg mb-6">
            Ready to experience hassle-free LPG delivery?
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md">
            Start Your Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}