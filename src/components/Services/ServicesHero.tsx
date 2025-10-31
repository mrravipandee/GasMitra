"use client";

import { motion } from "framer-motion";
import { FaGasPump, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function ServicesHero() {
  const services = [
    {
      icon: <FaGasPump className="text-2xl" />,
      title: "LPG Gas Delivery",
      description: "Fast and reliable gas cylinder delivery to your doorstep"
    },
    {
      icon: <FaTruckFast className="text-2xl" />,
      title: "Express Service",
      description: "Emergency delivery within hours when you need it most"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safety Assurance",
      description: "Verified delivery partners and leak-proof service"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    }
  ];

  return (
    <section className="relative py-16 mt-10 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary text-sm font-semibold">Our Premium Services</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryText mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Services</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1 -z-0"></div>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-secondaryText max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive LPG gas delivery solutions designed for your convenience and safety. 
            From quick home delivery to commercial supply, we&apos;ve got you covered.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-2xl bg-iconBg group-hover:bg-primary transition-all duration-300">
                    <div className="text-primaryText group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primaryText mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-secondaryText text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Animated Border Bottom */}
                <div className="w-0 h-1 bg-primary rounded-full mt-4 mx-auto group-hover:w-3/4 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-secondaryText text-lg mb-6">
            Ready to experience reliable LPG delivery?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Your Gas Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}