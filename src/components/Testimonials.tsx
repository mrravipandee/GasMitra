"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "GasMitra ne toh 25 minute mein delivery kar diya jab mere guests aa rahe the! Literal lifesaver hai!",
      avatar: "PS",
      deliveryTime: "25 min"
    },
    {
      name: "Rahul Kumar",
      location: "Delhi",
      rating: 5,
      text: "Delivery boy bahut professional tha, leak check bhi kiya. Bilkul tension-free service!",
      avatar: "RK",
      deliveryTime: "30 min"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 4.5,
      text: "Local vendors se kaafi better hai. No hidden charges, aur price bhi acha hai!",
      avatar: "AP",
      deliveryTime: "28 min"
    },
    {
      name: "Sanjay Mehta",
      location: "Chennai",
      rating: 5,
      text: "10 PM tak delivery mil gayi emergency mein! 24/7 service is just awesome!",
      avatar: "SM",
      deliveryTime: "35 min"
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "30min", label: "Avg. Delivery" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={
          index < Math.floor(rating)
            ? "text-yellow-400"
            : index < rating
            ? "text-yellow-400 opacity-70"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <span className="text-primary text-sm font-semibold">Customer Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-primaryText mb-6">
            What Our Customers{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Say</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1 -z-0"></div>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-secondaryText max-w-2xl mx-auto"
          >
            Trusted by hundreds for quick and safe LPG delivery across India.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>

                {/* Delivery Time Badge */}
                <div className="absolute top-4 right-4 bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {testimonial.deliveryTime}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-primaryText leading-relaxed mb-6 text-sm min-h-[80px]">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-primaryText">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondaryText text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/10 transition-all duration-500 -z-10"></div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-20"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-primaryText mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-secondaryText text-sm font-medium">
                  {stat.label}
                </div>
                <div className="w-8 h-0.5 bg-primary/30 rounded-full mx-auto mt-3 group-hover:bg-primary transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-secondaryText text-lg mb-6">
            Join 500+ satisfied customers today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
          >
            Experience Fast Delivery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;