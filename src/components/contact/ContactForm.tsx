"use client";

import { motion } from "framer-motion";
import { FaUser, FaPhone, FaMapMarkerAlt, FaGasPump, FaCalendar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primaryText mb-4"
            >
              Book Gas Delivery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-secondaryText text-lg"
            >
              Fill this form and we&apos;ll deliver your LPG cylinder within hours
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Name & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-primaryText font-semibold text-sm">Full Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondaryText text-sm" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText placeholder-formText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-primaryText font-semibold text-sm">Phone Number *</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondaryText text-sm" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText placeholder-formText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="block text-primaryText font-semibold text-sm">Delivery Address *</label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-secondaryText text-sm" />
                <textarea
                  rows={3}
                  placeholder="Enter your complete address with landmarks"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText placeholder-formText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Gas Type & Delivery Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-primaryText font-semibold text-sm">Gas Type *</label>
                <div className="relative">
                  <FaGasPump className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondaryText text-sm" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 appearance-none">
                    <option value="">Select cylinder type</option>
                    <option value="14kg">14.2kg Domestic Cylinder</option>
                    <option value="19kg">19kg Commercial Cylinder</option>
                    <option value="5kg">5kg Portable Cylinder</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-primaryText font-semibold text-sm">Delivery Preference</label>
                <div className="relative">
                  <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondaryText text-sm" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 appearance-none">
                    <option value="">Select delivery time</option>
                    <option value="emergency">Emergency (Within 2 hours)</option>
                    <option value="4hours">Within 4 hours</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-2">
              <label className="block text-primaryText font-semibold text-sm">Special Instructions</label>
              <div className="relative">
                <FaMessage className="absolute left-3 top-3 text-secondaryText text-sm" />
                <textarea
                  rows={3}
                  placeholder="Any special delivery instructions or emergency notes..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-formField text-primaryText placeholder-formText focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Book Gas Delivery Now
              </motion.button>
              
              <p className="text-center text-secondaryText text-sm mt-4">
                We&apos;ll confirm your order via call/SMS within 15 minutes
              </p>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}