"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Target, Eye } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-[#0B0B0B] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">
                            About Feelify Solutions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-heading mb-6 text-gray-900 dark:text-white leading-tight">
                            Transforming Small Businesses <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-600">Into Powerful Brands.</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                    <Rocket className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Who We Are</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        A passionate digital marketing startup dedicated to helping small businesses grow and thrive in the digital landscape. We combine creativity with data-driven strategies to deliver real results.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        To empower startups, local businesses & entrepreneurs with affordable, impactful digital growth solutions that drive measurable results and sustainable growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                    <Eye className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        To make every small business a Recognized Brand. We believe every business, regardless of size, deserves to shine and connect meaningfully with their audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Visual Module */}
                    <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                {/* Decorative elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/20 rounded-full blur-[100px]" />

                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 left-10 p-6 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5 z-20 w-64"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Live Growth</span>
                                    </div>
                                    <div className="text-3xl font-black text-gray-900 dark:text-white">+127%</div>
                                    <div className="text-sm text-gray-500 mt-2">Organic reach increase</div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 right-10 p-6 bg-brand-yellow rounded-[2rem] shadow-2xl z-30 w-64"
                                >
                                    <h4 className="text-brand-black font-black text-xl mb-2">Partner with Purpose</h4>
                                    <p className="text-brand-black/70 text-sm">We don't just work for you, we work with you.</p>
                                    <div className="flex -space-x-2 mt-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-yellow bg-gray-200" />
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ rotate: -15 }}
                                    animate={{ rotate: [-15, -10, -15] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[480px] border-2 border-brand-yellow/20 rounded-[3rem] -z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
