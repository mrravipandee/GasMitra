"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Ravi Pandey",
    role: "Founder & Web Developer",
    img: "/gasmitra-founder.png",
    desc: "A passionate MERN developer with a vision to make LPG delivery faster and smarter across India.",
  },
  {
    name: "Delivery Partners",
    role: "Local GasMitra Heroes",
    img: "/gasmitra-delivery.png",
    desc: "Our on-ground delivery team ensures safety and timely gas delivery — every single time.",
  },
  {
    name: "Support Team",
    role: "Customer Assistance",
    img: "/gasmitra-support.png",
    desc: "Always here to help you with your orders, updates, and safety guidance.",
  },
];

export default function OurTeam() {
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
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondaryText text-lg max-w-2xl mx-auto"
          >
            Behind GasMitra is a team of passionate people working to make your gas delivery
            experience faster, safer, and more reliable every day.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-iconBg">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-primaryText mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-primary text-sm font-semibold mb-4">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-secondaryText leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}