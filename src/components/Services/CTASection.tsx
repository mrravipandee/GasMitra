"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaTruck, FaShieldAlt, FaClock } from "react-icons/fa";

export default function CTASection() {
  const phoneNumber = "+91 70585 48204";
  const whatsappNumber = "917058548204";
  const whatsappMessage = "Hello! I need gas delivery service.";

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-orange-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Need Gas Delivery?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-orange-100 mb-8"
            >
              Get your LPG cylinder delivered within hours. Safe, reliable, and hassle-free service.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3 mb-8"
            >
              {[
                { icon: <FaTruck />, text: "2-4 Hours Delivery" },
                { icon: <FaShieldAlt />, text: "Safety Verified" },
                { icon: <FaClock />, text: "24/7 Service" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-orange-100">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primaryText mb-4">
                Emergency Delivery
              </h3>
              <p className="text-secondaryText mb-6">
                Urgent gas requirement? Get priority delivery within 30 minutes.
              </p>

              <div className="space-y-3">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt />
                  Call Now: {phoneNumber}
                </Link>
                
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  className="w-full border-2 border-green-500 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp />
                  WhatsApp Order
                </Link>
              </div>
            </motion.div>

            {/* Standard CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Link
                href="/order"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Book Standard Delivery
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}