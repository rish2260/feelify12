"use client";

import { MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 bg-brand-yellow relative overflow-hidden md:overflow-visible">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-brand-black mb-6 leading-tight"
                >
                    Ready to Grow Faster Than <br /> Your Competition?
                </motion.h2>
                <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto font-medium">
                    Get a free strategy session with our experts. No fluff, just actionable insights.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://wa.me/916394806825?text=I'd%20like%20to%20book%20a%20free%20strategy%20session."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl shadow-black/20 cursor-pointer">
                            <Calendar className="w-5 h-5" /> Book Free Call
                        </button>
                    </a>
                    <a
                        href="https://wa.me/916394806825"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/20 border-2 border-brand-black/10 text-brand-black rounded-xl font-bold text-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer">
                            <MessageCircle className="w-5 h-5" /> WhatsApp Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
