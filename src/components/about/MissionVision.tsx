"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-9">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-secondaryText max-w-3xl mx-auto leading-relaxed">
            At GasMitra, we are committed to making gas delivery faster, safer, and more reliable
            — ensuring that no household or business ever runs out of energy.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                    <FaBullseye className="text-3xl md:text-4xl text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primaryText">Our Mission</h3>
              </div>
              <p className="text-secondaryText leading-relaxed text-base md:text-lg">
                To simplify LPG gas access by providing quick, seamless, and safe delivery service
                for everyone — whether it&apos;s a home, hostel, or small business. We aim to empower
                communities with reliable energy solutions that make life easier.
              </p>
              
              {/* Animated Border Bottom */}
              <div className="w-0 h-1 bg-primary rounded-full mt-6 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                    <FaEye className="text-3xl md:text-4xl text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primaryText">Our Vision</h3>
              </div>
              <p className="text-secondaryText leading-relaxed text-base md:text-lg">
                To become India&apos;s most trusted on-demand LPG delivery platform — building a
                connected ecosystem where energy is accessible anytime, anywhere with just one click.
                We envision a future where reliable gas delivery is just a tap away for every Indian.
              </p>
              
              {/* Animated Border Bottom */}
              <div className="w-0 h-1 bg-primary rounded-full mt-6 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-secondaryText text-lg mb-6">
            Join us in our mission to deliver energy reliably
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}