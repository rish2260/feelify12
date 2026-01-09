import { ArrowRight, CheckCircle2, MessageCircle, TrendingUp, Zap, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Get More Leads & Sales | Feelify Solutions",
    description: "ROI-focused digital marketing campaigns that generate high-quality leads and measurable growth.",
};

export default function AdsLandingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans">
            {/* Minimal Header */}
            <header className="fixed w-full top-0 left-0 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5 z-50 h-16 flex items-center">
                <div className="max-w-6xl w-full mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2 font-bold text-xl">
                        <span className="text-brand-black dark:text-white">Feelify<span className="text-brand-yellow">Solutions</span></span>
                    </div>
                    <a
                        href="https://wa.me/916394806825"
                        className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-brand-yellow flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full transition-all"
                    >
                        <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp Us
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-bold mb-6 border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Accepting New Clients for Q1
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black font-heading leading-[1.1] mb-6 tracking-tight">
                        Get More Leads, Sales & <br /> Growth for Your Business
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Stop relying on guesswork. We build data-driven marketing funnels that turn strangers into paying customers consistently.
                    </p>

                    <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 text-left">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                                <span className="font-medium">Guaranteed Performance Tracking</span>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                                <span className="font-medium">Custom Strategy for Your Niche</span>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                                <span className="font-medium">24/7 Dedicated Support Team</span>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/916394806825?text=Hello%20Feelify%20Solutions!%20I'm%20interested%20in%20the%20Free%20Growth%20Audit."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <button className="w-full py-4 bg-brand-yellow text-brand-black rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-yellow-500/20 mb-3 cursor-pointer">
                                Get Free Growth Audit
                            </button>
                        </a>
                        <a
                            href="https://wa.me/916394806825"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <button className="w-full py-3 bg-transparent text-gray-500 dark:text-gray-400 font-medium hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                <MessageCircle className="w-4 h-4" /> WhatsApp Instantly
                            </button>
                        </a>
                    </div>

                    <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">Trusted by 100+ Fast Growing Brands</p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50 dark:bg-zinc-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">ROI-Focused</h3>
                            <p className="text-gray-500 leading-relaxed">We don't care about vanity metrics. We focus on leads, sales, and money in the bank.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Setup</h3>
                            <p className="text-gray-500 leading-relaxed">Launch your campaigns in days, not weeks. Our onboarding is streamlined.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                            <p className="text-gray-500 leading-relaxed">Always here to answer questions and optimize your campaigns in real-time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Don't Let Your Competitors Win</h2>
                <p className="text-gray-500 mb-8 max-w-lg mx-auto">Your business deserves the best growth strategies. Book your free strategy call today and see the difference.</p>
                <a
                    href="https://wa.me/916394806825?text=I'd%20like%20to%20claim%20my%20free%20audit"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="px-10 py-4 bg-brand-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-xl">
                        Claim Your Free Audit Now 🚀
                    </button>
                </a>
            </section>

            {/* Simple Footer */}
            <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100 dark:border-white/5">
                <p>© 2025 Feelify Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    );
}
