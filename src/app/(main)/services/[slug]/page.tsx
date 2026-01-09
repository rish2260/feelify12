import { Metadata } from 'next';
import { servicesData } from '@/lib/services';
import { CheckCircle2, MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Feelify Solutions`,
        description: service.shortDesc,
        openGraph: {
            title: `${service.title} | Feelify Solutions`,
            description: service.shortDesc,
            url: `https://feelifysolutions.com/services/${service.slug}`,
            type: 'website',
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <article className="min-h-screen bg-white dark:bg-[#0B0B0B] pb-24">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gray-50 dark:bg-zinc-900 border-b border-gray-100 dark:border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-yellow mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-gray-900 dark:text-white max-w-4xl">
                        {service.heroHeadline}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                        {service.heroSubhead}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Benefits */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/5">
                            <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">Why Choose This Service?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/5">
                            <h3 className="text-2xl font-bold font-heading mb-8 text-gray-900 dark:text-white">Our Process</h3>
                            <div className="space-y-8">
                                {service.process.map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-black shrink-0">
                                                {i + 1}
                                            </div>
                                            {i !== service.process.length - 1 && (
                                                <div className="w-0.5 h-full bg-gray-200 dark:bg-zinc-800 my-2" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-brand-black text-white rounded-3xl p-8 shadow-xl sticky top-24">
                            <h3 className="text-xl font-bold mb-2">Who is this for?</h3>
                            <ul className="space-y-2 mb-8 text-gray-400 text-sm">
                                {service.whoIsThisFor.map((item, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="border-white/10 mb-8" />

                            <h3 className="text-2xl font-bold mb-4 text-brand-yellow">Ready to Scale?</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Book a free strategy call to discuss how we can help you grow.
                            </p>

                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/916394806825?text=Hello!%20I'm%20interested%20in%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <button className="w-full py-3 bg-brand-yellow text-brand-black rounded-xl font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                        <Phone className="w-4 h-4" /> Book Free Call
                                    </button>
                                </a>
                                <a
                                    href="https://wa.me/916394806825"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <button className="w-full py-3 bg-white/10 text-white border border-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                        <MessageCircle className="w-4 h-4" /> WhatsApp Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
