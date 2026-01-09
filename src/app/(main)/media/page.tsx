import { Media } from "@/components/Media";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media House | Ads, Reels & VFX | Feelify Solutions",
    description: "Explore our media powerhouse. From high-impact ads to viral reels and stunning VFX, we create stories that move.",
};

export default function MediaPage() {
    return (
        <div className="pt-20">
            <Media />
        </div>
    );
}
