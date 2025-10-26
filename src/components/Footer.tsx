"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
    { icon: <FaTwitter size={16} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn size={16} />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const contactInfo = [
    { icon: <FaPhone size={14} />, text: "+91 70585 48204", href: "tel:+917058548204" },
    { icon: <FaEnvelope size={14} />, text: "gasmitra@gmail.com", href: "mailto:gasmitra@gmail.com" },
    { icon: <FaMapMarkerAlt size={14} />, text: "Nashik, Maharashtra", href: "#" },
  ];

  return (
    <footer className="bg-iconBg text-primaryText pt-16 pb-8 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/gasmitra.svg"
                alt="GasMitra Logo"
                width={140}
                height={50}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-primaryText text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner for clean, safe, and reliable LPG solutions. 
              Delivering quality service with over a decade of experience in energy solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gray-800 rounded-xl text-gray-300 hover:text-white hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primaryText relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primaryText/70 hover:text-orange-400 transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primaryText relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.href}
                    className="text-primaryText/70 hover:text-orange-400 transition-all duration-300 flex items-start group"
                  >
                    <span className="text-orange-500 mt-0.5 mr-3 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <span className="text-sm leading-relaxed">{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primaryText relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <p className="text-primaryText/70 text-sm mb-4">
              Subscribe to get updates on our latest offers and services.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-formField border border-gray-700 rounded-xl text-secondaryText placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 text-sm"
              />
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} GasMitra. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}