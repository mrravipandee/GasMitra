"use client";

import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primaryText mb-4">
                        Book Your Gas Now
                    </h2>
                    <p className="text-secondaryText text-lg max-w-2xl mx-auto">
                        Need Gas? We&apos;ll deliver within hours! Fill out the form below or contact our support team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Address & Map Section */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Google Map Box */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-primaryText mb-4 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                Find Us
                            </h3>
                            <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                                {/* Google Map Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6640.522422290885!2d73.7294653!3d19.999399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecbe9b3a34ed%3A0x74fedb8c4f18f530!2sSanjeev%20Nagar%2C%20Nasik%2C%20Maharashtra%20422010!5e1!3m2!1sen!2sin!4v1761659212690!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                                Get Directions
                            </button>
                        </div>

                        {/* Contact Info Box */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-primaryText mb-6 flex items-center gap-2">
                                <FaWhatsapp className="text-green-500" />
                                Contact Info
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <FaWhatsapp className="text-green-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-primaryText font-semibold">+91 70585 48204</p>
                                        <p className="text-secondaryText text-sm">WhatsApp Quick Order</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <FaPhoneAlt className="text-blue-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-primaryText font-semibold">+91 70585 48204</p>
                                        <p className="text-secondaryText text-sm">Call Support</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <MdEmail className="text-purple-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-primaryText font-semibold">gasmitra@gmail.com</p>
                                        <p className="text-secondaryText text-sm">Email Support</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <FaMapMarkerAlt className="text-orange-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-primaryText font-semibold">Nashik, Maharashtra</p>
                                        <p className="text-secondaryText text-sm">Service Area</p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Hours */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaClock className="text-primary" />
                                    <h4 className="font-semibold text-primaryText">Service Hours</h4>
                                </div>
                                <div className="text-sm text-secondaryText space-y-1">
                                    <div className="flex justify-between">
                                        <span>Mon - Sat:</span>
                                        <span className="font-medium">9 AM - 10 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sun & Holidays:</span>
                                        <span className="font-medium">10 AM - 5 PM</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-medium">
                                        <span>Emergency:</span>
                                        <span>24/7 Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-primaryText mb-2">Quick Gas Booking</h3>
                            <p className="text-secondaryText mb-8">Fill this form and get delivery within hours</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="transform transition-all duration-300 hover:scale-105">
                                        <label className="block text-primaryText font-semibold mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-formField focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-formText"
                                            required
                                        />
                                    </div>

                                    <div className="transform transition-all duration-300 hover:scale-105">
                                        <label className="block text-primaryText font-semibold mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-formField focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-formText"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="transform transition-all duration-300 hover:scale-105">
                                    <label className="block text-primaryText font-semibold mb-2">Delivery Address *</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter your complete address with landmarks"
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-formField focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-formText resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <div className="transform transition-all duration-300 hover:scale-105">
                                    <label className="block text-primaryText font-semibold mb-2">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Any special instructions or emergency notes..."
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-formField focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-formText resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    Book Gas Delivery
                                </button>

                                <p className="text-center text-secondaryText text-sm">
                                    We&apos;ll confirm your order via WhatsApp within 5 minutes
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;