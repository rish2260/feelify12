"use client";

import { motion } from "framer-motion";
import { Smartphone, Gamepad2, ArrowRight, Box, Cpu, Zap } from "lucide-react";
import Link from "next/link";

export function AppGamingStudio() {
    return (
        <section id="studio" className="py-24 bg-white dark:bg-[#0B0B0B] relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Interactive Visuals (3D Mockups Simulation) */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                            {/* Inner Visual Layers */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-x-10 top-10 flex justify-center perspective-1000"
                            >
                                {/* Phone Mockup */}
                                <div className="w-56 h-[450px] bg-brand-black rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden transform rotate-y-[-15deg] rotate-x-[10deg]">
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/20 to-transparent" />
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
                                    {/* App UI Simulation */}
                                    <div className="p-6 pt-12 space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-brand-yellow/30" />
                                        <div className="space-y-2">
                                            <div className="w-full h-4 bg-white/10 rounded-full" />
                                            <div className="w-2/3 h-4 bg-white/10 rounded-full" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mt-8">
                                            <div className="h-20 bg-white/5 rounded-2xl border border-white/10" />
                                            <div className="h-20 bg-white/5 rounded-2xl border border-white/10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Gaming Elements */}
                                <motion.div
                                    animate={{ x: [-10, 10, -10], y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -right-10 top-1/4 w-32 h-32 bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 flex items-center justify-center -rotate-12"
                                >
                                    <Gamepad2 className="w-12 h-12 text-brand-yellow" />
                                </motion.div>

                                <motion.div
                                    animate={{ x: [10, -10, 10], y: [-5, 5, -5] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="absolute -left-5 bottom-1/4 w-24 h-24 bg-brand-yellow rounded-3xl shadow-2xl flex items-center justify-center rotate-12"
                                >
                                    <Box className="w-10 h-10 text-brand-black" />
                                </motion.div>
                            </motion.div>

                            {/* Lighting Effects */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-yellow/10 to-transparent opacity-50" />
                        </div>
                    </div>

                    {/* Right: Copy & Features */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-4 block">New Frontiers</span>
                            <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 text-gray-900 dark:text-white leading-tight">
                                Feelify <br />
                                <span className="relative">
                                    Studio Labs
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            d="M1 6.5C1 6.5 50 1.5 100 1.5C150 1.5 199 6.5 199 6.5"
                                            stroke="#F6D84C" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
                                We've expanded our borders. Beyond marketing, we are now a dedicated creative studio building high-performance apps and interactive gaming experiences.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors duration-300">
                                        <Smartphone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">App Development</h4>
                                        <p className="text-gray-500 text-sm">Flutter & Native solutions for iOS/Android focusing on modern UI/UX and startup MVPs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors duration-300">
                                        <Gamepad2 className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Gaming Studio</h4>
                                        <p className="text-gray-500 text-sm">Building hyper-casual games and gamified brand experiences where creativity meets play.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/services/app-development" className="px-8 py-4 bg-brand-black dark:bg-white text-white dark:text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-xl shadow-black/10 dark:shadow-white/5">
                                    Explore Studio <ArrowRight className="w-5 h-5" />
                                </Link>
                                <button className="px-8 py-4 bg-transparent border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                                    Get a Quote <Zap className="w-4 h-4 text-brand-yellow" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
