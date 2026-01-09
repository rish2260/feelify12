"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LogoModal } from "./LogoModal";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", type: "page" },
    { name: "Services", href: "/#services", type: "anchor" },
    { name: "Work", href: "/work", type: "page" },
    { name: "Brands", href: "/brands", type: "page" },
    { name: "Media", href: "/media", type: "page" },
    { name: "About", href: "/#about", type: "anchor" },
    { name: "Contact", href: "/#contact", type: "anchor" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
        if (item.type === "anchor" && pathname === "/") {
            e.preventDefault();
            const id = item.href.replace("/#", "");
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/5"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 md:space-x-4 z-50 group">
                        <button
                            onClick={() => setIsLogoModalOpen(true)}
                            className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 cursor-pointer flex-shrink-0"
                            aria-label="View logo"
                        >
                            <Image
                                src="/logo.png"
                                alt="Feelify Solutions Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </button>
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl md:text-3xl font-bold font-heading text-brand-black dark:text-white tracking-tight">
                                Feelify<span className="text-brand-yellow">Solutions</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className={cn(
                                    "px-3 py-2 text-sm font-bold transition-all duration-300 hover:text-brand-yellow relative group",
                                    pathname === item.href ? "text-brand-yellow" : "text-gray-600 dark:text-gray-400"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow"
                                    />
                                )}
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
                            className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-black hover:bg-yellow-400 transition-all flex items-center space-x-2 shadow-lg shadow-yellow-500/20 active:scale-95"
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
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={cn(
                                        "block px-4 py-3 rounded-xl text-lg font-bold transition-colors",
                                        pathname === item.href
                                            ? "bg-brand-yellow/10 text-brand-yellow"
                                            : "text-gray-700 dark:text-gray-300"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <a
                                    href="https://wa.me/916394806825"
                                    className="block w-full text-center bg-brand-yellow text-brand-black py-4 rounded-2xl font-black shadow-xl"
                                >
                                    WhatsApp Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Logo Modal */}
            <LogoModal isOpen={isLogoModalOpen} onClose={() => setIsLogoModalOpen(false)} />
        </nav>
    );
}
