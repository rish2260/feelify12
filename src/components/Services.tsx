"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/services";
import Link from "next/link";

export function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-[#0B0B0B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-3 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                        Our Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white"
                    >
                        Everything You Need to Grow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We provide end-to-end digital solutions tailored to scale your brand effectively.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, idx) => (
                        <Link href={`/services/${service.slug}`} key={service.id} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group h-full relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/5 hover:border-brand-yellow/50 dark:hover:border-brand-yellow/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-yellow/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-brand-yellow transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-yellow/90 dark:group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                    {service.shortDesc}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
