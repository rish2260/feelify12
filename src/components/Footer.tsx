"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block text-2xl font-bold font-heading text-brand-black dark:text-white mb-4">
                            Feelify<span className="text-brand-yellow">Solutions</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We build brands that people feel. ROI-focused digital growth for the modern age.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="#about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Services</Link></li>
                            <li><Link href="#work" className="hover:text-brand-yellow transition-colors">Our Work</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-yellow transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">SEO Optimization</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Social Media</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Performance Marketing</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Facebook, href: "#" }
                            ].map((item, i) => (
                                <a key={i} href={item.href} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-900 flex items-center justify-center text-gray-500 hover:bg-brand-yellow hover:text-brand-black transition-all">
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© 2025 Feelify Solutions. All rights reserved.</p>
                    <p className="text-gray-400 text-sm">Made with 💛 in India</p>
                </div>
            </div>
        </footer>
    );
}
