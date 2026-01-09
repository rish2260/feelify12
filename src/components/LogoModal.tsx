"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LogoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LogoModal({ isOpen, onClose }: LogoModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-gray-100 dark:border-white/10">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            </button>

                            {/* Logo Container */}
                            <div className="p-8 md:p-12 flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                    className="relative w-48 h-48 md:w-64 md:h-64"
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="Feelify Solutions Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-8 text-center"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                                        Feelify<span className="text-brand-yellow">Solutions</span>
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Digital Marketing & Influencer Solutions
                                    </p>
                                </motion.div>

                                {/* Download Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 p-4 bg-gray-50 dark:bg-zinc-800 rounded-xl"
                                >
                                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                                        Right-click to download the logo image
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
