"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-feelify" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-[#0B0B0B]/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/5"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 z-50 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Feelify Solutions Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-bold font-heading text-brand-black dark:text-white tracking-tight">
                            Feelify<span className="text-brand-yellow">Solutions</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-yellow dark:hover:text-brand-yellow transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="https://wa.me/916394806825"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2 shadow-lg shadow-yellow-500/20"
                        >
                            <Phone className="w-4 h-4" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-white p-2"
                            aria-label="Menu"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#0B0B0B] border-t dark:border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-brand-yellow"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/916394806825"
                                className="block w-full text-center bg-brand-yellow text-brand-black py-3 rounded-lg font-bold"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
