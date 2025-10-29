"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaHeadset, FaTruck } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-3xl" />,
    title: "Fast Delivery",
    desc: "Get your gas cylinder delivered within hours — no more long waits or delays.",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Safe & Reliable",
    desc: "We ensure every delivery is handled safely and cylinders are checked for quality.",
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: "Wide Coverage",
    desc: "Serving multiple localities to make gas delivery available to everyone, anywhere.",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "24/7 Support",
    desc: "Need help? Our team is always ready to assist you with your orders and queries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-9">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-primaryText mb-4"
          >
            Why Choose GasMitra?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            We&apos;re not just delivering gas — we&apos;re delivering convenience, safety, and trust
            right to your doorstep.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className="text-primaryText mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-iconBg">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primaryText mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-md">
            Start Ordering Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}