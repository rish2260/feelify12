"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";

const mediaItems = [
    { type: "Ad", title: "Product Launch Ad", video: "https://assets.mixkit.co/videos/preview/mixkit-business-woman-using-a-tablet-40787-large.mp4", wide: true },
    { type: "Reel", title: "Fashion Reveal", video: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-smiling-at-the-camera-40660-large.mp4", wide: false },
    { type: "VFX", title: "Motion Graphics Demo", video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-architecture-animation-41314-large.mp4", wide: false },
    { type: "Gaming", title: "Game Cinematic", video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-keyboard-and-a-gaming-mouse-41316-large.mp4", wide: true },
    { type: "Influencer", title: "Creator Collab", video: "https://assets.mixkit.co/videos/preview/mixkit-friends-walking-and-talking-in-the-city-40654-large.mp4", wide: false },
    { type: "Ad", title: "Brand Identity", video: "https://assets.mixkit.co/videos/preview/mixkit-hands-drawing-on-a-digital-tablet-40679-large.mp4", wide: false },
    { type: "Reel", title: "Lifestyle Snippet", video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-drinking-coffee-at-home-40651-large.mp4", wide: true },
];

export function Media() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section id="media" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-5 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-black uppercase tracking-[0.3em]">
                            Our Media House
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black font-heading text-gray-900 dark:text-white mb-6">
                        Stories That <span className="text-brand-yellow">Move.</span> <br />
                        Content That Converts.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        Ads, reels, influencers & VFX built for attention and action.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {mediaItems.map((item, idx) => (
                        <MediaCard
                            key={idx}
                            item={item}
                            onOpen={() => setSelectedVideo(item.video)}
                        />
                    ))}
                </div>
            </div>

            {/* Fullscreen Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/95 backdrop-blur-xl"
                    >
                        <motion.button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-8 right-8 text-white hover:text-brand-yellow transition-colors z-[110]"
                        >
                            <X className="w-10 h-10" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                        >
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                onError={(e) => console.log('Modal video error')}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function MediaCard({ item, onOpen }: { item: any, onOpen: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => {
                setIsHovered(true);
                videoRef.current?.play();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                videoRef.current?.pause();
            }}
            onClick={onOpen}
            className={`group relative rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:z-10 break-inside-avoid ${item.wide ? 'aspect-video' : 'aspect-[9/16]'}`}
        >
            <video
                ref={videoRef}
                src={item.video}
                muted
                loop
                playsInline
                onError={(e) => e.currentTarget.style.display = 'none'}
                className={`w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
            />

            {/* Label Overlay */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-brand-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                {item.type}
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg shadow-yellow-500/20">
                        <Maximize2 className="w-6 h-6 text-brand-black" />
                    </div>
                </div>
            </div>

            {/* Central Play Indicator */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100`}>
                <Play className="w-6 h-6 text-white fill-white" />
            </div>
        </motion.div>
    );
}
