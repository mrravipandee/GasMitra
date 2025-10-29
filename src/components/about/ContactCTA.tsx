"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white text-primaryText text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-secondaryText text-lg mb-10">
          Have a question or want to partner with us? We’d love to hear from you.
          GasMitra is here to serve you anytime.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#f55c03] text-xl" />
            <p className="text-primaryText font-medium">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#f55c03] text-xl" />
            <p className="text-primaryText font-medium">support@gasmitra.in</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#f55c03] text-xl" />
            <p className="text-primaryText font-medium">Nashik, Maharashtra</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#f55c03] to-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
