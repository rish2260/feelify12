"use client";

import { motion } from "framer-motion";
import {
    Users,
    Zap,
    TrendingUp,
    MessageCircle,
    Banknote,
    BarChart3,
    Cpu,
    ShieldCheck,
    Heart
} from "lucide-react";

const whyChooseUs = [
    {
        icon: Users,
        title: "Creative & Young Team",
        desc: "Our energetic, innovative team brings fresh ideas and enthusiasm to every project—so your brand always stands out."
    },
    {
        icon: Zap,
        title: "Fast Execution",
        desc: "No delays, no confusion. We move quickly from idea to action and deliver visible growth, fast—without sacrificing quality!"
    },
    {
        icon: TrendingUp,
        title: "ROI-Focused Marketing",
        desc: "Every rupee you spend is put to work! We obsessively optimize marketing to maximize your returns."
    },
    {
        icon: MessageCircle,
        title: "24×7 Support on WhatsApp",
        desc: "Whenever you need help or a quick update, our dedicated team is always just a ping away—day or night!"
    },
    {
        icon: Banknote,
        title: "Flexible & Budget-Friendly",
        desc: "Transparent plans designed for startups and growing brands—no hidden charges, always full value."
    }
];

const whatMakesUsDifferent = [
    {
        icon: BarChart3,
        title: "Real Data-Driven Approach",
        desc: "We don't guess! We use the latest analytics tools to make smart, informed decisions that grow your brand."
    },
    {
        icon: Cpu,
        title: "Modern Tools & Automation",
        desc: "Save time and boost results with cutting-edge digital tools and streamlined automations."
    },
    {
        icon: ShieldCheck,
        title: "100% Transparency",
        desc: "No hidden fees, no generic reports. You get clear, open updates and full insight into every campaign."
    },
    {
        icon: Heart,
        title: "Client-First & Personal Touch",
        desc: "We take the time to understand your goals and brand voice so every strategy delivers real impact."
    }
];

export function WhyFeelify() {
    return (
        <section id="why-feelify" className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50 relative overflow-hidden md:overflow-visible">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Why Choose Us */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black font-heading mb-6 text-gray-900 dark:text-white"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We combine youthful energy with data-driven precision to give your brand the edge it deserves.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
                    {whyChooseUs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-brand-yellow group-hover:text-brand-black" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* What Makes Us Different */}
                <div className="bg-brand-black dark:bg-zinc-900/40 rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1">
                            <h3 className="text-3xl md:text-4xl font-black font-heading text-white mb-6">
                                What Makes Us <br />
                                <span className="text-brand-yellow">Different?</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                We don't just follow the crowd. We use modern tools and a human-centric approach to redefine digital marketing.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {whatMakesUsDifferent.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <item.icon className="w-6 h-6 text-brand-yellow" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
