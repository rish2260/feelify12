"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
    {
        title: "Growth Engine Campaign",
        category: "Performance Marketing",
        video: "https://assets.mixkit.co/videos/preview/mixkit-business-statistics-on-a-screen-1335-large.mp4",
        slug: "performance-marketing-campaign"
    },
    {
        title: "Fashion Hub App",
        category: "App Development",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-scrolling-on-her-smartphone-40555-large.mp4",
        slug: "app-development-project"
    },
    {
        title: "Neon Strike",
        category: "Game UI/UX",
        video: "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-neon-lights-and-a-keyboard-41315-large.mp4",
        slug: "game-ui-demo"
    },
    {
        title: "The Urban Brand",
        category: "Brand Advertisement",
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-front-of-a-graffiti-wall-41614-large.mp4",
        slug: "brand-advertisement"
    },
    {
        title: "Eco Landing Page",
        category: "Web Design",
        video: "https://assets.mixkit.co/videos/preview/mixkit-opening-a-green-website-on-a-laptop-42996-large.mp4",
        slug: "website-redesign"
    },
    {
        title: "Creator Fest",
        category: "Influencer Launch",
        video: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-taking-a-selfie-40656-large.mp4",
        slug: "influencer-launch"
    }
];

export function Work() {
    return (
        <section id="work" className="py-24 bg-white dark:bg-[#0B0B0B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-black uppercase tracking-[0.2em]"
                        >
                            Our Portfolio
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-gray-900 dark:text-white leading-tight">
                            Selected <span className="text-brand-yellow">Work.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm font-medium">
                        A showcase of metrics-driven campaigns, premium web builds, and creative media content.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <WorkCard key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WorkCard({ project, index }: { project: any, index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => {
                setIsHovered(true);
                videoRef.current?.play();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                videoRef.current?.pause();
            }}
            className="group relative rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-white/5 aspect-[4/5] perspective-1000"
        >
            {/* Video Background */}
            <video
                ref={videoRef}
                src={project.video}
                loop
                muted
                playsInline
                onError={(e) => {
                    console.log('Video load error (using poster instead):', project.title);
                    e.currentTarget.style.display = 'none';
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Content Wrap */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <div className="text-brand-yellow text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-yellow" />
                        {project.category}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-6 leading-tight">
                        {project.title}
                    </h3>

                    <button className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">
                        View Case Study <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Play Icon Reveal */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-brand-yellow/90 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
                <Play className="w-8 h-8 fill-brand-black text-brand-black" />
            </div>

            {/* 3D Reflection Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-gradient-to-br from-white to-transparent transition-opacity" />
        </motion.div>
    );
}
