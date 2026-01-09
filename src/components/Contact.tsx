"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">Let's Build Something Great Together</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Whether you're a startup looking to make your mark or an established business ready to scale, we're here to help you achieve your digital marketing goals.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">contact@feelifysolution.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+91 63948 06825 | +91 95547 39955</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Visit Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Vikas Nagar , Mama Chauraha , Lucknow, Uttar Pradesh</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Vikas+Nagar+Mama+Chauraha+Lucknow+Uttar+Pradesh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-yellow text-sm font-semibold hover:underline mt-1 inline-block"
                                    >
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-2 placeholder-transparent focus:outline-none focus:border-brand-yellow transition-colors text-gray-900 dark:text-white"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-yellow"
                                >
                                    Name
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-2 placeholder-transparent focus:outline-none focus:border-brand-yellow transition-colors text-gray-900 dark:text-white"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-yellow"
                                >
                                    Email
                                </label>
                            </div>

                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-2 placeholder-transparent focus:outline-none focus:border-brand-yellow transition-colors resize-none text-gray-900 dark:text-white"
                                    placeholder="Message"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-yellow"
                                >
                                    Message
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-brand-yellow text-brand-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/20">
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
