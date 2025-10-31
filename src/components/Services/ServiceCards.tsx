"use client";

import { motion } from "framer-motion";
import { FaGasPump, FaShieldAlt, FaHeadset, FaUsers, FaHome, FaBuilding, FaTools } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";


const services = [
  {
    icon: <FaGasPump className="text-2xl" />,
    title: "Home LPG Delivery",
    desc: "Fast and reliable gas cylinder delivery to your doorstep for households and families.",
  },
  {
    icon: <FaBuilding className="text-2xl" />,
    title: "Commercial Supply",
    desc: "Bulk LPG supply for restaurants, hotels, and businesses with special pricing.",
  },
  {
    icon: <FaTruckFast className="text-2xl" />,

    title: "Emergency Delivery",
    desc: "24/7 emergency gas delivery service for urgent requirements and emergencies.",
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Safety Services",
    desc: "Gas safety checks, leak detection, and equipment inspection for complete safety.",
  },
  {
    icon: <FaTools className="text-2xl" />,
    title: "Equipment Installation",
    desc: "Professional installation of regulators, pipes, and LPG equipment by experts.",
  },
  {
    icon: <FaHeadset className="text-2xl" />,
    title: "Customer Support",
    desc: "24/7 customer support for bookings, queries, and emergency assistance.",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Bulk Orders",
    desc: "Special services for hostels, institutions, and large-scale LPG requirements.",
  },
  {
    icon: <FaHome className="text-2xl" />,
    title: "Home Services",
    desc: "Complete LPG solutions including cylinder replacement and maintenance.",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-9">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primaryText mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-secondaryText text-lg max-w-3xl mx-auto">
            From home delivery to commercial supply, we offer complete LPG solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2 text-center">
                {/* Icon with Gradient Background */}
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-2xl text-primaryText shadow-md group-hover:text-primary group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primaryText mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-4 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>
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
            Can&apos;t find what you&apos;re looking for?
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md">
            Contact Us for Custom Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}