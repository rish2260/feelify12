import { SocialProof } from "@/components/SocialProof";
import { FuturePartner } from "@/components/FuturePartner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Brands & Partners | Feelify Solutions",
    description: "Discover the brands that trust Feelify Solutions. We grow with our partners through long-term collaboration and shared success.",
};

export default function BrandsPage() {
    return (
        <div className="pt-20">
            <SocialProof />
            <FuturePartner />
        </div>
    );
}
