import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyFeelify } from "@/components/WhyFeelify";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <SocialProof />
            <About />
            <Services />
            <WhyFeelify />
            <CTA />
            <Contact />
        </>
    );
}
