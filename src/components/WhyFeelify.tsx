"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "1. Research & Audit",
        desc: "We dive deep into your brand, competitors, and audience to find hidden opportunities."
    },
    {
        icon: Lightbulb,
        title: "2. Strategy & Plan",
        desc: "We craft a tailored roadmap with clear KPIs and actionables."
    },
    {
        icon: Zap,
        title: "3. Execution",
        desc: "Our experts deploy campaigns, build assets, and optimize in real-time."
    },
    {
        icon: TrendingUp,
        title: "4. Growth & Scale",
        desc: "We analyze data, refine strategies, and scale what works."
    }
];

export function WhyFeelify() {
    return (
        <section id="why-feelify" className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Why Choose Us?</h2>
                    <p className="text-gray-600 dark:text-gray-400">Our proven 4-step process for guaranteed results.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-1 bg-gray-200 dark:bg-white/10 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 bg-transparent"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full bg-white dark:bg-zinc-900 border-4 border-gray-100 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-lg group hover:border-brand-yellow transition-colors duration-300">
                                        <step.icon className="w-12 h-12 text-gray-400 dark:text-gray-500 group-hover:text-brand-yellow transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-4">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
