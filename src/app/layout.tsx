import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Feelify Solutions - We Build Brands People Feel",
    template: "%s | Feelify Solutions"
  },
  description: "ROI-focused digital growth for startups & local businesses. SEO, Social Media, Web Design, and more.",
  keywords: ["Digital Marketing Agency India", "SEO Services", "Social Media Marketing", "Performance Marketing", "Web Design Agency", "Branding Agency"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://feelifysolutions.com",
    siteName: "Feelify Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Feelify Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feelify Solutions - We Build Brands People Feel",
    description: "ROI-focused digital growth for startups & local businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-[#0B0B0B] text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden`}
      >
        <Providers>
          <Preloader />
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MarketingAgency",
                "name": "Feelify Solutions",
                "image": "https://feelifysolutions.com/logo.png",
                "@id": "https://feelifysolutions.com",
                "url": "https://feelifysolutions.com",
                "telephone": "+916394806825",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vikas Nagar, Mama Chauraha",
                  "addressLocality": "Lucknow",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "226022",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 26.8467,
                  "longitude": 80.9462
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                "sameAs": [
                  "https://www.instagram.com/feelifysolutions",
                  "https://www.linkedin.com/company/feelify-solutions"
                ]
              })
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
