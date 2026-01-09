import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyFeelify } from "@/components/WhyFeelify";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { AppGamingStudio } from "@/components/AppGamingStudio";
import { Work } from "@/components/Work";
import { Media } from "@/components/Media";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Work />
            <SocialProof />
            <AppGamingStudio />
            <WhyFeelify />
            <Media />
            <CTA />
            <Contact />
        </>
    );
}
