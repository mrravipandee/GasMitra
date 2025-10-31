"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Service Area",
      content: "Nashik, Maharashtra",
      description: "Fast delivery across the city",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Call Support",
      content: "+91 70585 48204",
      description: "24/7 customer support",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      content: "+91 70585 48204",
      description: "Quick order & support",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "support@gasmitra.in",
      description: "For detailed queries",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Service Hours",
      content: "6 AM - 11 PM",
      description: "Emergency: 24/7",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primaryText mb-4">
            Get in Touch
          </h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto">
            Multiple ways to reach us for quick gas delivery and support
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full text-center transform hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-iconBg text-primaryText group-hover:text-primary shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primaryText mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-primaryText font-semibold text-sm mb-1">
                  {item.content}
                </p>

                {/* Description */}
                <p className="text-secondaryText text-xs">
                  {item.description}
                </p>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-4 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-6 text-white max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Emergency Gas Delivery</h3>
            <p className="text-orange-100 mb-4">
              Running out of gas? Call us anytime for 24/7 emergency service
            </p>
            <a
              href="tel:+917058548204"
              className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Call Emergency Hotline
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
