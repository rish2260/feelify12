"use client";

import { motion } from "framer-motion";

export function SocialProof() {
    return (
        <section className="py-12 border-y border-gray-100 dark:border-white/5 bg-white dark:bg-[#0B0B0B]">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by growing companies</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 text-gray-400 dark:text-gray-600">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                            className="flex items-center space-x-2 text-2xl font-bold grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:text-brand-black dark:hover:text-white"
                        >
                            <div className="w-8 h-8 bg-current rounded-full" />
                            <span>BRAND {i}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
