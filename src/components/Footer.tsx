"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-iconBg text-primaryText pt-10 pb-6 mt-10 border-t border-gray-200">
      <div className="w-80 mx-auto text-center">
        {/* Logo */}
        <Image
          src="/gasmitra.svg"
          alt="GasMitra Logo"
          width={120}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-[#b2b3b6] text-sm mb-5">
          Your trusted partner for clean and safe LPG solutions.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="p-3 bg-[#f6f5f5] rounded-full text-[#3c4756] hover:text-white hover:bg-[#f55c03] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#3c4756] font-medium mb-4">
          <Link href="/" className="hover:text-[#f55c03] transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#f55c03] transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="hover:text-[#f55c03] transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#f55c03] transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-[#b2b3b6]">
          © {new Date().getFullYear()} GasMitra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
