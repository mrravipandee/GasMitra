"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-white to-orange-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryText leading-tight"
            >
              Need Gas{" "}
              <span className="text-primary">Urgently?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-secondaryText mt-6 mb-8 leading-relaxed"
            >
              We&apos;re just a call away. Contact <span className="text-primary font-semibold">GasMitra</span> and get 
              your LPG cylinder delivered within hours. Fast, safe, and reliable service.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div className="text-left">
                  <p className="text-secondaryText text-sm">Call us now</p>
                  <p className="text-primaryText font-bold text-xl">+91 70585 48204</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div className="text-left">
                  <p className="text-secondaryText text-sm">WhatsApp</p>
                  <p className="text-primaryText font-bold text-xl">+91 70585 48204</p>
                </div>
              </div>
            </motion.div>

            {/* Service Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-secondaryText"
            >
              <FaClock className="text-primary" />
              <span className="text-sm">24/7 Emergency Service Available</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </motion.a>
              
              <motion.a
                href="/order"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Online
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                src="/images/gasmitra-conact-hero.png"
                alt="Fast Gas Delivery Service - Contact GasMitra"
                width={500}
                height={400}
                className=""
              />
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-primaryText text-sm">Fast Delivery</div>
                    <div className="text-secondaryText text-xs">Within hours</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}