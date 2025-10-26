"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaBox, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaShoppingCart className="text-3xl" />,
            step: "Step 1",
            title: "Place Your Order",
            description: "Book your gas refill online with just a few clicks."
        },
        {
            icon: <FaBox className="text-3xl" />,
            step: "Step 2",
            title: "We Process It",
            description: "Our verified delivery partner picks up your refill instantly."
        },
        {
            icon: <FaTruck className="text-3xl" />,
            step: "Step 3",
            title: "Delivery at Doorstep",
            description: "Get your LPG cylinder safely delivered within hours."
        },
    ];

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
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-secondaryText text-lg max-w-2xl mx-auto"
                    >
                        Fast and simple steps to get your LPG delivered safely.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className={`w-12 h-12 bg-iconBg rounded-full flex items-center justify-center text-primaryText font-bold text-lg shadow-lg`}>
                                    {index + 1}
                                </div>
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-xl shadow-lg p-8 pt-12 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Icon */}
                                <div className={`text-primaryText mb-6 flex justify-center`}>
                                    <div className={`p-4 rounded-2xl bg-iconBg`}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Step */}
                                <div className="text-primary font-semibold text-sm mb-2">
                                    {step.step}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-primaryText mb-4">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-secondaryText leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Line (for desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 -right-8git add .
git commit -m "feat: add 'Benefits' section highlighting GasMitra advantages with icons and animations"
 w-8 h-0.5 bg-gray-300 z-10">
                                    <div className={`w-full h-full bg-secondaryText rounded-full`}></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-md">
                        Get Started Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;