"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);
        };

        // Throttle scroll event for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        return () => window.removeEventListener("scroll", throttledScroll);
    }, []);

    // Separate useEffect for route changes
    useEffect(() => {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    }, [pathname]);

    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        // Prevent body scroll when menu is open
        if (newState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Shop", href: "/shop" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            ref={navRef}
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? "bg-white/98 backdrop-blur-xl shadow-2xl py-4"
                : "bg-white/95 backdrop-blur-lg shadow-lg py-3"
                } ${isMounted ? 'translate-y-0' : '-translate-y-full'}`}
            style={{
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group relative"
                        onClick={closeMenu}
                    >
                        <div className="relative transition-all duration-500 ease-out group-hover:scale-105 group-active:scale-95">
                            <Image
                                src="/gasmitra.svg"
                                alt="GasMitra Logo"
                                width={140}
                                height={50}
                                className="rounded-lg transition-all duration-300"
                                priority
                            />
                            {/* Subtle shine effect on hover */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                        <ul className="flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`relative px-4 py-2 font-medium rounded-xl transition-all duration-300 ease-out hover:scale-105 active:scale-95 group ${pathname === link.href
                                            ? "text-orange-600 bg-orange-50/80"
                                            : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/60"
                                            }`}
                                    >
                                        <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                                        {pathname === link.href && (
                                            <span className="absolute inset-0 bg-orange-50/80 rounded-xl scale-105 transition-all duration-300" />
                                        )}
                                        {/* Centered underline */}
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500 ease-out group-hover:w-3/4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button - Smooth Gradient */}
                        <div className="ml-4">
                            <Link
                                href="/order"
                                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ease-in-out hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-orange-400/40 active:scale-95 group overflow-hidden"
                            >
                                {/* subtle moving gradient effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-[shine_1.5s_linear_infinite]"></span>

                                {/* icon + text */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 9V5a1 1 0 00-1-1H9a1 1 0 00-1 1v4M4 11h16M4 11a9 9 0 0016 0"
                                    />
                                </svg>

                                <span className="relative z-10">Order Now</span>
                            </Link>

                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 rounded-2xl text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 ease-out hover:scale-110 active:scale-95 relative group"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FiX className="text-2xl transition-transform duration-500 ease-out rotate-180" />
                        ) : (
                            <FiMenu className="text-2xl transition-transform duration-500 ease-out" />
                        )}
                        {/* Ripple effect */}
                        <span className="absolute inset-0 rounded-2xl bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ease-in-out z-40 ${isOpen
                        ? "opacity-100 pointer-events-auto top-16"
                        : "opacity-0 pointer-events-none top-16"
                        }`}
                    onClick={closeMenu}
                />

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-500 ease-out z-50 ${isOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto mt-2"
                        : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                        }`}
                    style={{
                        transformOrigin: 'top right'
                    }}
                >
                    <ul className="flex flex-col p-4">
                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`block px-4 py-4 text-lg font-medium rounded-xl transition-all duration-400 ease-out active:scale-95 border-l-4 ${pathname === link.href
                                        ? "text-orange-600 bg-orange-50/80 border-orange-500 scale-105"
                                        : "text-gray-700 border-transparent hover:text-orange-600 hover:bg-orange-50/60"
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-3 mt-2 border-t border-gray-200/60">
                            <Link
                                href="/order"
                                onClick={closeMenu}
                                className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-400 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-300/50 group overflow-hidden relative"
                            >
                                <span className="relative z-10">Order Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}