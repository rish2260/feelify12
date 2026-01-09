"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
                        <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">About Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white leading-tight">
                            We Bridge the Gap Between <br />
                            <span className="text-gray-500 dark:text-gray-500">Strategy & Execution.</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Feelify Solutions isn't just another agency. We are your growth partners.
                            While others focus on vanity metrics, we obsess over your ROI.
                            Our team combines creative storytelling with data-driven performance marketing
                            to build brands that people actually feel connected to.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Data-Driven Strategy",
                                "Creative That Converts",
                                "Transparent Reporting",
                                "24/7 Dedicated Support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="text-brand-yellow font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Learn More About Our Process &rarr;
                        </button>
                    </motion.div>

                    {/* 3D Stats */}
                    <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 preserve-3d"
                        >
                            {/* Stat 1 */}
                            <motion.div
                                whileHover={{ translateZ: 20 }}
                                className="absolute top-10 left-10 w-64 p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-gray-100 dark:border-white/5 z-10"
                            >
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">100+</div>
                                <div className="text-sm text-gray-500">Campaigns Delivered</div>
                                <div className="h-1 w-full bg-brand-yellow/20 mt-4 rounded-full overflow-hidden">
                                    <div className="h-full w-4/5 bg-brand-yellow"></div>
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                whileHover={{ translateZ: 30 }}
                                className="absolute top-40 right-10 w-64 p-6 bg-brand-yellow shadow-2xl rounded-2xl border-none z-20"
                            >
                                <div className="text-lg font-bold text-brand-black mb-1">ROI Focused</div>
                                <div className="text-brand-black/80 text-sm">Every campaign is optimized for maximum returns.</div>
                                <div className="mt-4 flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-black/20" />
                                    <div className="w-8 h-8 rounded-full bg-black/20" />
                                    <div className="w-8 h-8 rounded-full bg-black/20" />
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                whileHover={{ translateZ: 40 }}
                                className="absolute bottom-20 left-20 w-72 p-6 glass-dark shadow-xl rounded-2xl border border-white/10 z-30 backdrop-blur-md"
                            >
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <CheckCircle2 />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">24×7 Support</div>
                                        <div className="text-white/60 text-xs">Always here for you</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
