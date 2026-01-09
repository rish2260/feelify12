import { Work } from "@/components/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | Portfolio & Case Studies | Feelify Solutions",
    description: "Explore our selected works, marketing campaigns, and digital builds. Witness how we transform businesses into brands.",
};

export default function WorkPage() {
    return (
        <div className="pt-20">
            <Work />
        </div>
    );
}
