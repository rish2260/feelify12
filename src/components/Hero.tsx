"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, BarChart3, TrendingUp } from "lucide-react";
import React from "react";

export function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0B0B0B]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[150px] -z-10 opacity-50 dark:opacity-20 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -z-10 opacity-50 dark:opacity-20 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-yellow-700 dark:text-brand-yellow text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                        Your Growth Partner
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight mb-6 tracking-tight text-gray-900 dark:text-white">
                        JOIN HANDS TO <br />
                        TRANSFORM YOUR BUSINESS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-500">
                            INTO A BRAND🤝
                        </span>
                    </h1>
                    <div className="mb-8 max-w-lg">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            We Don't Just Market - We Build Brands that People Feel
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Empowering startups, local businesses & entrepreneurs with affordable, impactful digital growth solutions
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/916394806825?text=Hello!%20I'd%20like%20to%20get%20a%20Free%20Growth%20Audit."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <button className="group px-8 py-4 bg-brand-yellow text-brand-black rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 cursor-pointer">
                                Get Free Growth Audit
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <a
                            href="https://wa.me/916394806825"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <button className="group px-8 py-4 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                WhatsApp Now
                            </button>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-200 dark:bg-gray-800 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`} />
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold">+1k</div>
                        </div>
                        <div>Trusted by 100+ Brands</div>
                    </div>
                </motion.div>

                {/* Right 3D Card (Desktop only interactions) */}
                <div className="hidden lg:flex justify-end perspective-1000 h-[600px] items-center" onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-[420px] h-[540px] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2rem] shadow-2xl p-8"
                    >
                        {/* Floating Elements */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute -top-10 -right-10 bg-brand-yellow text-brand-black p-4 rounded-2xl shadow-xl border border-white/20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <TrendingUp className="w-8 h-8" />
                        </motion.div>

                        <motion.div
                            style={{ transform: "translateZ(20px)" }}
                            className="h-full flex flex-col"
                        >
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 w-16 h-16 rounded-2xl mb-8 flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-gray-700 dark:text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Growth Engine</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-auto">Activation sequence initiated.</p>

                            <div className="space-y-4 mt-8">
                                <div className="glass p-5 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 font-bold shrink-0">+127%</div>
                                    <div>
                                        <div className="text-gray-900 dark:text-white font-bold text-lg">Revenue Spike</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Q4 Performance</div>
                                    </div>
                                </div>

                                <div className="glass p-5 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">9.8/10</div>
                                    <div>
                                        <div className="text-gray-900 dark:text-white font-bold text-lg">Client Satisfaction</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Based on feedback</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center text-sm font-medium text-gray-500">
                                <span>System Status</span>
                                <span className="text-green-500 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Operational
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
