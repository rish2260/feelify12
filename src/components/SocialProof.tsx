"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const brands = [
    { name: "UrbanEdge", type: "Real Estate", video: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-glass-facade-41398-large.mp4" },
    { name: "GlowTech", type: "SaaS Startup", video: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-with-glowing-signals-41527-large.mp4" },
    { name: "SwiftEat", type: "Food Delivery", video: "https://assets.mixkit.co/videos/preview/mixkit-man-preparing-fajitas-on-a-flame-41619-large.mp4" },
    { name: "FinFlow", type: "Fintech", video: "https://assets.mixkit.co/videos/preview/mixkit-digital-counting-on-a-computer-screen-41318-large.mp4" },
    { name: "AriaFit", type: "Influencer Brand", video: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-warm-up-exercises-for-sports-42646-large.mp4" },
    { name: "PixelPlay", type: "Game Studio", video: "https://assets.mixkit.co/videos/preview/mixkit-playing-a-video-game-on-a-futuristic-console-41344-large.mp4" }
];

export function SocialProof() {
    return (
        <section id="brands" className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50 border-y border-gray-100 dark:border-white/5 overflow-hidden md:overflow-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-2xl md:text-3xl font-black font-heading text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4"
                    >
                        Trusted by Brands, Creators & growing Startups
                    </motion.h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                        From local businesses to digital-first brands, we build results that scale.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {brands.map((brand, idx) => (
                        <BrandItem key={idx} brand={brand} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BrandItem({ brand, index }: { brand: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-32 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
            {/* Background Video on Hover */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <video
                    src={brand.video}
                    loop
                    muted
                    autoPlay
                    playsInline
                    onError={(e) => e.currentTarget.style.display = 'none'}
                    className="w-full h-full object-cover grayscale-0 scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Brand Logo/Name Text */}
            <div className="relative z-10 flex flex-col items-center">
                <span className={`text-xl font-black font-heading tracking-widest transition-all duration-300 ${isHovered ? 'text-white scale-110' : 'text-gray-400 grayscale'}`}>
                    {brand.name}
                </span>
                <span className={`text-[8px] font-black uppercase tracking-[0.3em] mt-2 transition-all duration-300 ${isHovered ? 'text-brand-yellow opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    {brand.type}
                </span>
            </div>
        </motion.div>
    );
}
