import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Preloader />
            <Navbar />
            <main className="min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
