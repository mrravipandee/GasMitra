"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeadset } from "react-icons/fa";

const faqs = [
  {
    question: "How fast is gas delivery with GasMitra?",
    answer: "We ensure delivery within 2 to 4 hours of booking, depending on your location. Our team prioritizes emergency deliveries and offers express delivery options for urgent requirements.",
  },
  {
    question: "Is there any extra charge for booking gas online?",
    answer: "No additional charges are applied for booking through our website or app. You only pay for the gas cylinder as per government pricing. Our service is completely transparent with no hidden fees.",
  },
  {
    question: "Can I book gas for someone else?",
    answer: "Yes! You can book a cylinder for your family or friends by entering their delivery address and contact details in the booking form. We'll coordinate with them directly for delivery timing.",
  },
  {
    question: "What if I face an issue during delivery?",
    answer: "You can contact our 24x7 support team through phone, WhatsApp, or email. We'll resolve your issue immediately, reassign your order if needed, or provide a full refund in case of service failure.",
  },
  {
    question: "Do you support bulk gas delivery for businesses?",
    answer: "Yes, GasMitra offers bulk supply for restaurants, hotels, hostels, and industrial use with special subscription options and volume discounts. Contact our business team for customized solutions.",
  },
  {
    question: "What safety measures do you follow during delivery?",
    answer: "All our delivery partners are trained in safety protocols. We conduct leak checks, ensure proper handling, and follow all safety standards. Each cylinder is inspected before delivery.",
  },
  {
    question: "Can I schedule delivery for a specific time?",
    answer: "Yes, you can choose your preferred delivery time slot during booking. We offer flexible scheduling including same-day, next-day, and specific time window deliveries.",
  },
  {
    question: "What areas do you currently serve?",
    answer: "We currently serve multiple localities across Nashik and expanding to other cities. Enter your address during booking to check service availability in your area.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Have questions? We&apos;ve got answers. Learn more about how GasMitra works and how we can serve you better.
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg text-primaryText hover:text-primary transition-colors duration-300"
                >
                  <span className="text-left pr-4">{faq.question}</span>
                  <FaChevronDown
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
                      <p className="text-secondaryText leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHeadset className="text-primary text-2xl" />
              <h3 className="text-2xl font-bold text-primaryText">Still Have Questions?</h3>
            </div>
            <p className="text-secondaryText text-lg mb-6 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions or concerns about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                Call Support: +91 98765 43210
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                WhatsApp Quick Help
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}