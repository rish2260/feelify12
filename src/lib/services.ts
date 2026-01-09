import { LucideIcon, Search, Share2, BarChart2, PenTool, Layout, Users, Palette } from "lucide-react";

export type ServiceData = {
    id: string;
    title: string;
    slug: string;
    icon: LucideIcon;
    shortDesc: string;
    heroHeadline: string;
    heroSubhead: string;
    whoIsThisFor: string[];
    benefits: string[];
    process: { title: string; desc: string }[];
    color: string;
    bgColor: string;
};

export const servicesData: ServiceData[] = [
    {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        slug: "seo",
        icon: Search,
        shortDesc: "Rank higher on Google and convert search traffic into customers.",
        heroHeadline: "Dominate Search Results & Drive Organic Growth",
        heroSubhead: "We don't just get you traffic. We get you customers who are searching for exactly what you offer.",
        whoIsThisFor: [
            "Local Businesses aiming for local dominance",
            "E-commerce stores needing product visibility",
            "Startups looking for sustainable long-term growth"
        ],
        benefits: [
            "Rank #1 on Google for high-intent keywords",
            "Improve website authority and trust",
            "Drive consistent, free traffic 24/7",
            "Outrank your biggest competitors"
        ],
        process: [
            { title: "Audit & Keyword Research", desc: "We analyze your site and find high-opportunity keywords." },
            { title: "On-Page Optimization", desc: "Fixing technical errors and optimizing content for ranking." },
            { title: "Link Building", desc: "Acquiring high-quality backlinks to boost authority." },
            { title: "Tracking & Growth", desc: "Monthly reporting and continuous optimization." }
        ],
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        id: "social-media",
        title: "Social Media Marketing",
        slug: "social-media",
        icon: Share2,
        shortDesc: "Build trust, engagement & sales on Instagram, Facebook & YouTube.",
        heroHeadline: "Build a Community That Loves Your Brand",
        heroSubhead: "Turn followers into loyal paying customers with engaging content and strategic growth.",
        whoIsThisFor: [
            "Brands wanting more engagement",
            "Businesses launching new products",
            "Influencers and Personal Brands"
        ],
        benefits: [
            "Increase brand awareness instantly",
            "Build a loyal community of customers",
            "Showcase your products visually",
            "Direct engagement with your audience"
        ],
        process: [
            { title: "Content Strategy", desc: "Planning themes, formats, and posting schedules." },
            { title: "Creative Production", desc: "Designing reels, posts, and stories that pop." },
            { title: "Community Management", desc: "Replying to comments and engaging with fans." },
            { title: "Analytics Review", desc: "Measuring reach, engagement, and growth." }
        ],
        color: "text-pink-500",
        bgColor: "bg-pink-500/10"
    },
    {
        id: "performance-marketing",
        title: "Performance Marketing",
        slug: "performance-marketing",
        icon: BarChart2,
        shortDesc: "Every rupee tracked. Every campaign optimized for ROI.",
        heroHeadline: "Stop Burning Cash. Start Scaling Revenue.",
        heroSubhead: "Data-driven Meta & Google Ads campaigns designed to generate leads and sales, not just clicks.",
        whoIsThisFor: [
            "D2C Brands ready to scale",
            "B2B Service providers needing leads",
            "Events and Webinar hosts"
        ],
        benefits: [
            "Instant targeted traffic",
            "Precise audience targeting",
            "Measurable ROI and ROAS",
            "Scale winning campaigns fast"
        ],
        process: [
            { title: "Funnel Setup", desc: "Setting up pixels, tracking events, and landing pages." },
            { title: "Ad Creative Testing", desc: "Testing multiple angles and creatives." },
            { title: "Campaign Launch", desc: "Deploying campaigns across optimal channels." },
            { title: "Optimization", desc: "Killing bad ads and scaling good ones daily." }
        ],
        color: "text-green-500",
        bgColor: "bg-green-500/10"
    },
    {
        id: "content-marketing",
        title: "Content Marketing",
        slug: "content-marketing",
        icon: PenTool,
        shortDesc: "Content that attracts, educates and converts.",
        heroHeadline: "Tell Stories That Sell",
        heroSubhead: "High-value content that positions you as an industry authority and builds trust effortlessly.",
        whoIsThisFor: [
            "B2B Companies with long sales cycles",
            "Educators and Coaches",
            "Brands improving SEO"
        ],
        benefits: [
            "Establish thought leadership",
            "Nurture leads automatically",
            "Support SEO efforts",
            "Build long-term brand equity"
        ],
        process: [
            { title: "Audience Persona", desc: "Understanding who we are talking to." },
            { title: "Content Calendar", desc: "Planning blogs, videos, and newsletters." },
            { title: "Production", desc: "Writing, filming, and editing high-quality assets." },
            { title: "Distribution", desc: "Sharing content where your audience lives." }
        ],
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        id: "web-development",
        title: "Web Design & Development",
        slug: "web-development",
        icon: Layout,
        shortDesc: "Fast, modern websites built to convert visitors into leads.",
        heroHeadline: "Your Website Should Be Your Best Salesman",
        heroSubhead: "Blazing fast, mobile-first, and stunning websites designed to convert visitors into leads.",
        whoIsThisFor: [
            "Businesses with outdated sites",
            "Startups needing a launch platform",
            "Service providers needing credibility"
        ],
        benefits: [
            "First impression that wows",
            "Lightning fast loading speeds",
            "Mobile-optimized experience",
            "SEO-ready architecture"
        ],
        process: [
            { title: "Discovery", desc: "Understanding goals and brand vibe." },
            { title: "Wireframing", desc: "Planning the user journey and layout." },
            { title: "Development", desc: "Coding with modern tech stacks." },
            { title: "Launch & Support", desc: "Going live and keeping it running smooth." }
        ],
        color: "text-brand-yellow",
        bgColor: "bg-brand-yellow/10"
    },
    {
        id: "influencer-marketing",
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        icon: Users,
        shortDesc: "Authentic creators. Real reach. Measurable impact.",
        heroHeadline: "Leverage the Power of Trusted Voices",
        heroSubhead: "Connect with your audience through content creators they already know, like, and trust.",
        whoIsThisFor: [
            "Lifestyle and Fashion Brands",
            "App Launches",
            "Mass-market consumer products"
        ],
        benefits: [
            "Instant social proof",
            "Access to niche communities",
            "High-quality content creation",
            "Viral potential"
        ],
        process: [
            { title: "Influencer Selection", desc: "Vetting creators for fit and engagement." },
            { title: "Campaign Brief", desc: "Defining deliverables and key messages." },
            { title: "Execution", desc: "Coordinating posts and stories." },
            { title: "Reporting", desc: "Tracking clicks, reach, and conversions." }
        ],
        color: "text-red-500",
        bgColor: "bg-red-500/10"
    },
    {
        id: "branding",
        title: "Branding & Creative",
        slug: "branding",
        icon: Palette,
        shortDesc: "Visual identity that makes your brand unforgettable.",
        heroHeadline: "Stand Out in a Crowded Market",
        heroSubhead: "More than just a logo—we build cohesive visual identities that tell your unique story.",
        whoIsThisFor: [
            "New Startups",
            "Companies rebranding",
            "Brands needing a refresh"
        ],
        benefits: [
            "Memorable visual identity",
            "Consistent cross-channel look",
            "Professional brand assets",
            "Emotional connection with users"
        ],
        process: [
            { title: "Brand Strategy", desc: "Defining your mission, vision, and voice." },
            { title: "Visual Identity", desc: "Logo, colors, typography, and guidelines." },
            { title: "Collateral Design", desc: "Business cards, social kits, and more." },
            { title: "Guidelines Delivery", desc: "A handbook to keep your brand on point." }
        ],
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10"
    }
];
