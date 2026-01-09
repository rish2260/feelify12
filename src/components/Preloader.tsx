"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if we've already shown the preloader in this session
        const hasLoaded = sessionStorage.getItem("hasLoaded");

        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
            sessionStorage.setItem("hasLoaded", "true");
        }, 2500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-24 h-24 mb-6"
                    >
                        <Image
                            src="/logo.png"
                            alt="Feelify Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(246,216,76,0.5)]"
                            priority
                        />
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl font-bold font-heading tracking-widest text-white uppercase text-center"
                        >
                            Feelify Solutions
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 100, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        className="h-0.5 bg-brand-yellow mt-4"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
