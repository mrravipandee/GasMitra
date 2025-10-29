"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="py-16">
        <section className="max-w-7xl mx-auto text-primaryText py-16 px-9 mt-10 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          About <span className="text-gray-700">GasMitra</span>
        </h1>
        <p className="text-lg text-secondaryText leading-relaxed">
          GasMitra is your trusted companion for quick, reliable, and safe gas delivery. 
          We make your life easier by ensuring your gas needs are fulfilled — 
          anytime, anywhere, with just a few clicks.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/gasmitra-about-hero.png"
          alt="About GasMitra"
          width={500}
          height={400}
          className="rounded-2xl "
        />
      </motion.div>
    </section>
    </div>
  );
}
