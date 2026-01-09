"use client";

import { motion } from "framer-motion";
import { Handshake, Rocket, Users, Globe, ArrowRight } from "lucide-react";
import { submitPartnerInquiry } from "@/app/actions";

const partnerTypes = [
    { icon: Globe, label: "Brand Partners" },
    { icon: Users, label: "Influencer Partners" },
    { icon: Rocket, label: "Startup Collaborators" },
    { icon: Handshake, label: "App & Game Studios" },
];

export function FuturePartner() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 text-gray-900 dark:text-white leading-tight">
                            Our Future <span className="text-brand-yellow">Partners.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            <p>
                                At Feelify Solutions, we don’t just work for brands — we grow <span className="text-brand-yellow">with</span> them.
                            </p>
                            <p>
                                We believe the best partnerships are built on trust, creativity, and a shared vision for long-term success.
                            </p>
                            <p>
                                Whether you’re a startup, creator, local business, or global brand, we’re always open to meaningful collaborations that push boundaries and create real impact.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-brand-yellow text-brand-black rounded-2xl font-black flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-500/20">
                                Partner With Us <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-black flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                                Let's Build Something Together
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
                        {partnerTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 flex flex-col items-center text-center group hover:border-brand-yellow transition-colors"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <type.icon className="w-8 h-8 text-brand-yellow" />
                                </div>
                                <span className="font-bold text-gray-900 dark:text-white">{type.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 text-gray-900 dark:text-white leading-tight">
                            Partner With <span className="text-brand-yellow">Us.</span>
                        </h2>

                        <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-xl">
                            <form action={submitPartnerInquiry} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                                    />
                                    <input
                                        name="company"
                                        placeholder="Company / Brand"
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Work Email"
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                                    />
                                    <select
                                        name="partnershipType"
                                        className="w-full px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none"
                                    >
                                        <option value="brand">Brand Partner</option>
                                        <option value="influencer">Influencer</option>
                                        <option value="startup">Startup</option>
                                        <option value="studio">Creative Studio</option>
                                    </select>
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about the collaboration..."
                                    rows={3}
                                    className="w-full px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                                />
                                <button type="submit" className="w-full py-4 bg-brand-yellow text-brand-black rounded-xl font-black hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group">
                                    Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
