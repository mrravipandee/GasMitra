"use client";

import { motion } from "framer-motion";
import { FaGasPump, FaFileAlt, FaArrowRight } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6"
import Link from "next/link";

const steps = [
  {
    id: 1,
    icon: <FaGasPump className="text-2xl" />,
    title: "Choose Your Cylinder",
    description: "Select the LPG cylinder type that fits your needs — 14.2kg for home or 19kg for commercial use.",
  },
  {
    id: 2,
    icon: <FaFileAlt className="text-2xl" />,
    title: "Fill Booking Form",
    description: "Enter your name, address, and contact details. Confirm your order in just a few clicks.",
  },
  {
    id: 3,
    icon: <FaTruckFast className="text-2xl" />,
    title: "Fast Delivery",
    description: "Our delivery partner will bring your cylinder to your doorstep safely within hours.",
  },
];

export default function HowToOrder() {
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
            How to Order
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Getting your LPG cylinder delivered is simple and hassle-free. Follow these 3 easy steps.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-iconBg rounded-full flex items-center justify-center text-primaryText font-bold text-lg shadow-lg border border-gray-200">
                  {step.id}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 pt-12 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-iconBg text-primaryText shadow-md group-hover:text-primary group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primaryText mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-6 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>

              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-8 w-8 h-0.5 bg-gray-300 z-10">
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
            Ready to place your order?
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg group"
          >
            Start Ordering Now
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}