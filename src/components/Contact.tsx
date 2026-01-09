"use client";
"use client";

import { Send, Mail, Phone, MapPin } from "lucide-react";
import { sendMail } from "@/utils/mailto";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

                {/* INFO */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Let’s Build Something Great Together
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Startups, brands, creators — let’s grow together.
                    </p>

                    <div className="space-y-6">
                        <Info icon={<Mail />} title="Email" text="contact@feelifysolution.com" />
                        <Info icon={<Phone />} title="Phone" text="+91 63948 06825" />
                        <Info icon={<MapPin />} title="Location" text="Lucknow, Uttar Pradesh" />
                    </div>
                </div>

                {/* FORM */}
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = new FormData(e.currentTarget);

                            sendMail({
                                subject: "New Contact Inquiry - Feelify Solutions",
                                body: `
Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Business: ${data.get("business")}
Message:
${data.get("message")}
                `,
                            });

                            e.currentTarget.reset();
                        }}
                    >
                        <Input name="name" placeholder="Full Name" required />
                        <Input name="email" placeholder="Email" type="email" required />
                        <Input name="phone" placeholder="Phone" required />
                        <Input name="business" placeholder="Business (Optional)" />
                        <Textarea name="message" placeholder="Message" required />

                        <button className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold flex justify-center gap-2">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* Small reusable components */
function Input(props: any) {
    return <input {...props} className="w-full border-b bg-transparent p-2 outline-none" />;
}
function Textarea(props: any) {
    return <textarea {...props} rows={4} className="w-full border-b bg-transparent p-2 outline-none" />;
}
function Info({ icon, title, text }: any) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 flex items-center justify-center rounded-full">
                {icon}
            </div>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{text}</p>
            </div>
        </div>
    );
}
