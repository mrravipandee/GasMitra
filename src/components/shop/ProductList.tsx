"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaCheck } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "14.2 Kg LPG Cylinder",
    price: 1100,
    description: "Ideal for households. Safe, reliable, and easy to connect.",
    image: "/images/gasmitra-lpg-domestic.png",
    features: ["For home use", "Easy installation", "Government approved"],
    delivery: "30 min delivery"
  },
  {
    id: 2,
    name: "Commercial 19 Kg LPG Cylinder",
    price: 1600,
    description: "Perfect for restaurants, hotels, and commercial kitchens.",
    image: "/images/gasmitra-shop-commercialLPG.png",
    features: ["Commercial grade", "High capacity", "Bulk discount available"],
    delivery: "1 hour delivery"
  },
  {
    id: 3,
    name: "Regulator + Pipe Combo",
    price: 350,
    description: "High-quality regulator and pipe set for LPG safety.",
    image: "/images/gasmitra-shop-regulator.png",
    features: ["ISI certified", "Leak-proof", "Easy to install"],
    delivery: "Same day delivery"
  },
];

export default function ProductList() {
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
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Choose from our range of high-quality LPG cylinders and safety accessories. 
            Fast delivery guaranteed.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="p-6 flex justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 pt-0">
                  {/* Delivery Badge */}
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-medium">{product.delivery}</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-primaryText mb-3">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-secondaryText mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <FaCheck className="text-green-500 text-sm flex-shrink-0" />
                        <span className="text-primaryText text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primaryText">₹{product.price}</span>
                      <span className="text-secondaryText text-sm ml-2">incl. taxes</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/order?product=${product.id}`}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                  >
                    <FaShoppingCart className="text-lg group-hover/btn:scale-110 transition-transform duration-300" />
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-secondaryText text-lg mb-6">
            Need help choosing the right product?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Experts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}