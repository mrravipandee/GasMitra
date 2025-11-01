"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Types for better scalability
type NavLink = {
    name: string;
    href: string;
    icon?: React.ReactNode;
};

type CartItem = {
    id: string;
    name: string;
    href: string;
    icon: React.ReactNode;
    description: string;
    badge?: string;
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Scalable navigation configuration
    const navConfig = {
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Shop", href: "/shop" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
        ] as NavLink[],
        cartItems: [
            {
                id: "order",
                name: "Order LPG",
                href: "/order",
                icon: <FiShoppingCart className="w-4 h-4" />,
                description: "Book gas delivery",
                badge: "Fast"
            },
            {
                id: "sell",
                name: "Sell LPG",
                href: "/sell",
                icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                ),
                description: "Become a partner",
                badge: "New"
            }
        ] as CartItem[]
    };

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const throttledScroll = () => {
            let ticking = false;
            return () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            };
        };

        window.addEventListener("scroll", throttledScroll(), { passive: true });
        return () => window.removeEventListener("scroll", throttledScroll());
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsCartOpen(false);
        document.body.style.overflow = "unset";
    }, [pathname]);

    // Close cart dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        setIsCartOpen(false);
        document.body.style.overflow = newState ? "hidden" : "unset";
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsCartOpen(false);
        document.body.style.overflow = "unset";
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <nav
            ref={navRef}
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-out ${
                isScrolled
                    ? "bg-white/98 backdrop-blur-xl shadow-2xl py-3"
                    : "bg-white/95 backdrop-blur-lg shadow-lg py-4"
            } ${isMounted ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group relative"
                        onClick={closeMenu}
                    >
                        <div className="relative transition-all duration-300 group-hover:scale-105">
                            <Image
                                src="/gasmitra.svg"
                                alt="GasMitra Logo"
                                width={140}
                                height={50}
                                className="rounded-lg"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Navigation Links */}
                        <ul className="flex items-center gap-1">
                            {navConfig.links.map((link) => (
                                <NavLinkItem 
                                    key={link.href} 
                                    link={link} 
                                    pathname={pathname} 
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>

                        {/* Cart Dropdown */}
                        <div ref={cartRef} className="relative">
                            <button
                                onClick={toggleCart}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-orange-50 hover:text-orange-600 group"
                            >
                                <FiShoppingCart className="w-5 h-5" />
                                <span>Quick Actions</span>
                                <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                    isCartOpen ? "rotate-180" : ""
                                }`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isCartOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50"
                                >
                                    {navConfig.cartItems.map((item) => (
                                        <CartDropdownItem key={item.id} item={item} onClick={closeMenu} />
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 rounded-xl text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu 
                    isOpen={isOpen} 
                    navConfig={navConfig} 
                    pathname={pathname} 
                    onClose={closeMenu} 
                />
            </div>
        </nav>
    );
}

// Reusable NavLink Component
const NavLinkItem = ({ 
    link, 
    pathname, 
    onClick 
}: { 
    link: NavLink; 
    pathname: string; 
    onClick: () => void; 
}) => {
    const isActive = pathname === link.href;
    
    return (
        <li>
            <Link
                href={link.href}
                onClick={onClick}
                className={`relative px-4 py-2 font-medium rounded-xl transition-all duration-300 group ${
                    isActive
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/60"
                }`}
            >
                <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                {isActive && (
                    <span className="absolute inset-0 bg-orange-50 rounded-xl scale-105" />
                )}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-500 group-hover:w-3/4" />
            </Link>
        </li>
    );
};

// Reusable Cart Dropdown Item Component
const CartDropdownItem = ({ 
    item, 
    onClick 
}: { 
    item: CartItem; 
    onClick: () => void; 
}) => {
    return (
        <Link
            href={item.href}
            onClick={onClick}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
        >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                {item.icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {item.name}
                    </span>
                    {item.badge && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {item.badge}
                        </span>
                    )}
                </div>
                <p className="text-gray-500 text-sm truncate">{item.description}</p>
            </div>
        </Link>
    );
};

// Reusable Mobile Menu Component
const MobileMenu = ({ 
    isOpen, 
    navConfig, 
    pathname, 
    onClose 
}: { 
    isOpen: boolean; 
    navConfig: any; 
    pathname: string; 
    onClose: () => void; 
}) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-16"
                onClick={onClose}
            />

            {/* Menu Content */}
            <div className="lg:hidden absolute left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 mt-2">
                <div className="p-4">
                    {/* Navigation Links */}
                    <ul className="space-y-2">
                        {navConfig.links.map((link: NavLink) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 border-l-4 ${
                                        pathname === link.href
                                            ? "text-orange-600 bg-orange-50 border-orange-500"
                                            : "text-gray-700 border-transparent hover:text-orange-600 hover:bg-orange-50"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Quick Actions Section */}
                    <div className="border-t border-gray-200 mt-4 pt-4">
                        <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Quick Actions
                        </h3>
                        <div className="space-y-2">
                            {navConfig.cartItems.map((item: CartItem) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                                >
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                            {item.name}
                                        </span>
                                        {item.badge && (
                                            <span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};