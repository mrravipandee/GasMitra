"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      icon: <FaTruckFast className="text-3xl" />,
      title: "Fast Delivery",
      description: "30-minute average delivery with real-time tracking",
      value: "30 min"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safe & Verified",
      description: "Background-verified delivery partners with safety training",
      value: "100% Safe"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "24/7 Service",
      description: "Emergency refills available anytime, even on holidays",
      value: "24/7"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "Instant Support",
      description: "Quick customer support for all your queries and bookings",
      value: "Instant"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-9">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-primaryText mb-4"
          >
            Why Choose GasMitra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Reliable LPG delivery service that puts your convenience first
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-iconBg rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-primary mb-4 flex justify-center">
                {service.icon}
              </div>

              {/* Value Number */}
              <div className="text-2xl font-bold text-primaryText mb-2">
                {service.value}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-primaryText mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-secondaryText text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;