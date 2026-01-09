"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { servicesData } from "@/lib/services";
import Link from "next/link";
import { useState } from "react";

export function Services() {
    const [viewAll, setViewAll] = useState(false);

    // Show first 6 by default, then others on "View More"
    const displayedServices = viewAll ? servicesData : servicesData.slice(0, 6);

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-[#0B0B0B] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 shadow-sm"
                    >
                        Our Ecosystem
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black font-heading mb-6 text-gray-900 dark:text-white"
                    >
                        Solutions Built to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-500">Scale Brands.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        A full-service digital, creative, app, and game development studio focused on ROI and premium craftsmanship.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, idx) => (
                        <Link href={`/services/${service.slug}`} key={service.id} className="block group perspective-1000">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                                whileHover={{
                                    rotateX: 2,
                                    rotateY: -2,
                                    scale: 1.02,
                                    translateZ: 20
                                }}
                                className="h-full relative p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-100 dark:border-white/5 group-hover:border-brand-yellow/30 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none overflow-hidden transform-style-3d"
                            >
                                {/* Glass Layer Inner */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* 3D Glow Corner */}
                                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.bgColor} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-16 h-16 rounded-[1.25rem] ${service.bgColor} flex items-center justify-center transition-transform duration-500 shadow-inner`}
                                        >
                                            <service.icon className={`w-8 h-8 ${service.color}`} />
                                        </motion.div>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-black transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight transform translate-z-10">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base font-medium mb-6 line-clamp-3">
                                        {service.shortDesc}
                                    </p>

                                    <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        Explore Service <Plus className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Subtle Mesh Pattern Reveal */}
                                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay">
                                    <svg width="100%" height="100%">
                                        <pattern id={`pattern-${service.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill={`url(#pattern-${service.id})`} />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {!viewAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-16 text-center"
                    >
                        <button
                            onClick={() => setViewAll(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 shadow-sm"
                        >
                            Explore All 13 Services
                            <Plus className="w-4 h-4 text-brand-yellow" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
