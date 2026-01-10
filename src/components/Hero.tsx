"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, BarChart3, TrendingUp, Box } from "lucide-react";
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
        <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden md:overflow-visible bg-white dark:bg-[#0B0B0B]">
            {/* Background Studio Grids */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-[180px] -z-10 opacity-40 dark:opacity-20 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] -z-10 opacity-40 dark:opacity-20 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 text-gray-900 dark:text-brand-yellow text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                        </span>
                        Your Growth Partner
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-8 tracking-tighter text-gray-900 dark:text-white">
                        JOIN HANDS TO <br />
                        TRANSFORM YOUR BUSINESS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-400 to-yellow-600">
                            INTO A BRAND🤝
                        </span>
                    </h1>

                    <div className="mb-10 max-w-xl">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-snug">
                            We Don't Just Market - We Build Brands that People Feel
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Empowering startups, local businesses & entrepreneurs <br className="hidden md:block" />
                            with affordable, impactful digital growth solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="group px-10 py-5 bg-brand-yellow text-brand-black rounded-2xl font-black text-lg hover:scale-[1.05] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-yellow-500/30">
                            Get Free Growth Audit
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/916394806825"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-5 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-black text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            WhatsApp Now
                        </a>
                    </div>

                    <div className="mt-16 flex items-center gap-10">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full border-4 border-white dark:border-[#0B0B0B] bg-gray-200 dark:bg-gray-800 bg-[url('https://i.pravatar.cc/100?img=${i + 20}')] bg-cover shadow-lg`} />
                            ))}
                        </div>
                        <div className="text-sm font-bold text-gray-500 dark:text-gray-500 tracking-wide">
                            <span className="text-gray-900 dark:text-white block text-lg font-black tracking-normal">10+ Brands Trust Us</span>
                            Join the digital revolution
                        </div>
                    </div>
                </motion.div>

                {/* Right 3D Visual Module */}
                <div className="flex justify-center lg:justify-end perspective-1000 h-[420px] sm:h-[480px] lg:h-[650px] items-center mt-12 lg:mt-0" onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-[480px] h-[580px]"
                    >
                        {/* 3D Glass Card */}
                        <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-10 transform-style-3d">
                            {/* Content Inner */}
                            <div className="h-full flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-xl">
                                            <TrendingUp className="w-8 h-8 text-brand-black" />
                                        </div>
                                        <div className="text-xs font-black uppercase tracking-widest text-gray-400">System Ready</div>
                                    </div>
                                    <h3 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">Growth <br /> Engine v1.1</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="glass p-5 rounded-2xl border border-white/10 flex items-center gap-4 transition-transform hover:translate-z-10 group cursor-default">
                                        <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-black">+127%</div>
                                        <div>
                                            <div className="text-gray-900 dark:text-white font-black text-lg">Revenue Spike</div>
                                            <div className="text-xs text-brand-yellow font-bold uppercase tracking-widest">Performance Active</div>
                                        </div>
                                    </div>
                                    <div className="glass p-5 rounded-2xl border border-white/10 flex items-center gap-4 transition-transform hover:translate-z-10 cursor-default">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black">4.9/5</div>
                                        <div>
                                            <div className="text-gray-900 dark:text-white font-black text-lg">Client Rating</div>
                                            <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Service Excellence</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    <span>FEELIFY CORE</span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        OPERATIONAL
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating VFX Elements Simulation */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [10, -10, 10]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-brand-yellow to-yellow-600 rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white/20"
                        >
                            <Box className="w-16 h-16 text-brand-black" />
                        </motion.div>

                        <motion.div
                            style={{ transform: "translateZ(40px)" }}
                            animate={{
                                y: [10, -10, 10],
                                rotate: [-5, 5, -5]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-white dark:bg-zinc-800 rounded-[2rem] shadow-2xl flex items-center justify-center border border-gray-100 dark:border-white/10"
                        >
                            <div className="relative">
                                <span className="absolute -inset-2 bg-brand-yellow/20 blur-lg rounded-full" />
                                <BarChart3 className="relative w-12 h-12 text-brand-yellow" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
