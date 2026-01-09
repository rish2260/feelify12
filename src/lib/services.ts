import {
    LucideIcon,
    Search,
    Share2,
    BarChart2,
    PenTool,
    Layout,
    Users,
    Palette,
    MousePointerClick,
    FileText,
    Clapperboard,
    UserCog,
    Megaphone,
    Smartphone,
    Gamepad2
} from "lucide-react";

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
    vfxPreview?: string; // Placeholder for video loop path
};

export const servicesData: ServiceData[] = [
    {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        slug: "seo",
        icon: Search,
        shortDesc: "Boost organic visibility, improve keyword rankings, and generate high-intent traffic.",
        heroHeadline: "Dominate Search Results & Drive Organic Growth",
        heroSubhead: "We don't just get you traffic. We get you customers who are searching for exactly what you offer.",
        whoIsThisFor: [
            "Local Businesses aiming for local dominance",
            "E-commerce stores needing product visibility",
            "Startups looking for sustainable long-term growth"
        ],
        benefits: [
            "Technical SEO Audit",
            "On-page & Off-page Optimization",
            "Local SEO Dominance",
            "Content SEO Strategy",
            "Monthly Analytics & Transparent Reporting"
        ],
        process: [
            { title: "Audit & Analysis", desc: "Deep dive into your current ranking and competitor landscape." },
            { title: "Strategy Formulation", desc: "Identifying high-intent keywords and technical fixes." },
            { title: "Execution", desc: "On-page changes and building high-authority backlinks." },
            { title: "Review & Scale", desc: "Analyzing growth and refining tactics for maximum ROI." }
        ],
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        id: "social-media",
        title: "Social Media Marketing",
        slug: "social-media",
        icon: Share2,
        shortDesc: "Build engaged online communities and grow brand presence across Instagram, Facebook, and LinkedIn.",
        heroHeadline: "Build a Community That Loves Your Brand",
        heroSubhead: "Turn followers into loyal paying customers with engaging content and strategic growth.",
        whoIsThisFor: [
            "Brands wanting more engagement",
            "Businesses launching new products",
            "Influencers and Personal Brands"
        ],
        benefits: [
            "Comprehensive Content Planning",
            "Creative Design & Reel Production",
            "Active Community Management",
            "Targeted Paid Social Campaigns"
        ],
        process: [
            { title: "Brand Voice Audit", desc: "Defining how your brand speaks and interacts online." },
            { title: "Creative Sprints", desc: "Rapid production of high-quality visual content." },
            { title: "Community Building", desc: "Engaging with your audience to build trust." },
            { title: "Performance Review", desc: "Tracking reach, engagement, and conversion metrics." }
        ],
        color: "text-pink-500",
        bgColor: "bg-pink-500/10"
    },
    {
        id: "sem",
        title: "Search Engine Marketing (SEM)",
        slug: "sem",
        icon: MousePointerClick,
        shortDesc: "Drive instant traffic and conversions with highly targeted paid search campaigns.",
        heroHeadline: "Instant Visibility, Measurable Results",
        heroSubhead: "Get your brand in front of customers exactly when they are ready to buy.",
        whoIsThisFor: [
            "Businesses needing immediate leads",
            "E-commerce brands for seasonal sales",
            "B2B firms targeting specific industry keywords"
        ],
        benefits: [
            "Expert Google Ads Management",
            "Strategic Keyword Bidding",
            "Precise Conversion Tracking",
            "Continuous A/B Testing for ROI"
        ],
        process: [
            { title: "Keyword Research", desc: "Finding the most profitable keywords for your business." },
            { title: "Ad Creation", desc: "Writing compelling copy and designing high-converting ads." },
            { title: "Launch & Monitor", desc: "Starting the campaign and monitoring initial data." },
            { title: "ROI Optimization", desc: "Refining bids and copy to lower lead costs." }
        ],
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10"
    },
    {
        id: "content-marketing",
        title: "Content Marketing",
        slug: "content-marketing",
        icon: PenTool,
        shortDesc: "Create content that attracts, educates, and converts audiences across platforms.",
        heroHeadline: "Tell Stories That Sell",
        heroSubhead: "High-value content that positions you as an industry authority and builds trust effortlessly.",
        whoIsThisFor: [
            "B2B Companies with long sales cycles",
            "Educators and Coaches",
            "Brands improving SEO"
        ],
        benefits: [
            "Long-term Blog & Resource Strategy",
            "Visual Brand Storytelling",
            "High-Performance Sales Funnels",
            "Educational Content that Converts"
        ],
        process: [
            { title: "Audience Persona", desc: "Deeply understanding who we are talking to." },
            { title: "Content Pillar Strategy", desc: "Defining the core topics that matter to your brand." },
            { title: "Execution", desc: "High-quality writing and visual design." },
            { title: "Distribution", desc: "Getting your content seen on the right platforms." }
        ],
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        id: "web-development",
        title: "Web Design & Development",
        slug: "web-development",
        icon: Layout,
        shortDesc: "Design and develop modern, responsive websites that are fast and conversion-focused.",
        heroHeadline: "Your Website Should Be Your Best Salesman",
        heroSubhead: "Blazing fast, mobile-first, and stunning websites designed to convert visitors into leads.",
        whoIsThisFor: [
            "Businesses with outdated sites",
            "Startups needing a launch platform",
            "Service providers needing credibility"
        ],
        benefits: [
            "Premium UI/UX Design",
            "High-Conversion Landing Pages",
            "Full-Stack Business Solutions",
            "Performance & Speed Optimization"
        ],
        process: [
            { title: "Discovery & Wireframing", desc: "Planning the structure and flow of your site." },
            { title: "Aesthetic Design", desc: "Creating a modern, premium look for your brand." },
            { title: "Advanced Development", desc: "Coding with the latest, fastest technologies." },
            { title: "Quality Assurance", desc: "Rigorous testing before the big launch." }
        ],
        color: "text-brand-yellow",
        bgColor: "bg-brand-yellow/10"
    },
    {
        id: "content-writing",
        title: "Content Writing",
        slug: "content-writing",
        icon: FileText,
        shortDesc: "Craft persuasive, SEO-optimized copy that tells your brand story and drives action.",
        heroHeadline: "Words That Win Hearts & Wallets",
        heroSubhead: "Professional copy that sounds like you, but works harder.",
        whoIsThisFor: [
            "Brands needing a consistent voice",
            "E-commerce stores for product descriptions",
            "Founders wanting to build personal authority"
        ],
        benefits: [
            "SEO-Optimized Website Copy",
            "High-Converting Ad Copy",
            "Thought Leadership Blogs",
            "Creative Scripts & Captions"
        ],
        process: [
            { title: "Voice Discovery", desc: "Learning your brand's unique personality." },
            { title: "Thematic Research", desc: "Digging into the topics to provide real value." },
            { title: "Writing & Refinement", desc: "Crafting clear, punchy, and persuasive text." },
            { title: "SEO Integration", desc: "Ensuring your words are discoverable by search engines." }
        ],
        color: "text-green-600",
        bgColor: "bg-green-600/10"
    },
    {
        id: "scripting",
        title: "Scripting",
        slug: "scripting",
        icon: Clapperboard,
        shortDesc: "Develop powerful scripts for ads, reels, explainer videos, and branded content.",
        heroHeadline: "The Foundation of Every Great Video",
        heroSubhead: "Scripts that grab attention in the first 3 seconds and never let go.",
        whoIsThisFor: [
            "Video creators and YouTubers",
            "Marketing teams for video ads",
            "Corporate communicators"
        ],
        benefits: [
            "High-Retention Ad Scripts",
            "Viral-Ready Reel Scripts",
            "Clear Explainer Video Flows",
            "Detailed Storyboarding Guidance"
        ],
        process: [
            { title: "Hook Generation", desc: "Brainstorming angles to stop the scroll." },
            { title: "Narrative Flow", desc: "Writing the body of the script for clarity." },
            { title: "Call to Action", desc: "Crafting the perfect ending to drive results." },
            { title: "Scene Outlining", desc: "Providing visual cues for the production team." }
        ],
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        id: "performance-marketing",
        title: "Performance Marketing",
        slug: "performance-marketing",
        icon: BarChart2,
        shortDesc: "Data-driven advertising campaigns focused purely on results, leads, and sales.",
        heroHeadline: "Stop Burning Cash. Start Scaling Revenue.",
        heroSubhead: "Data-driven Meta & Google Ads campaigns designed to generate leads and sales, not just clicks.",
        whoIsThisFor: [
            "D2C Brands ready to scale",
            "B2B Service providers needing leads",
            "Events and Webinar hosts"
        ],
        benefits: [
            "Expert Meta & Google Ads",
            "Landing Page Funnel Optimization",
            "Deep Data Analytics",
            "Aggressive ROI & Lead Tracking"
        ],
        process: [
            { title: "Funnel Setup", desc: "Building the path from ad to purchase." },
            { title: "Pixel & API Integration", desc: "Ensuring every data point is tracked." },
            { title: "Live Scaling", desc: "Increasing budget on winning ads to maximize ROI." },
            { title: "Weekly Optimization", desc: "Continuous tweaks for better results." }
        ],
        color: "text-red-500",
        bgColor: "bg-red-500/10"
    },
    {
        id: "influencer-marketing",
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        icon: Users,
        shortDesc: "Connect brands with the right creators to amplify reach and trust.",
        heroHeadline: "Leverage the Power of Trusted Voices",
        heroSubhead: "Connect with your audience through content creators they already know, like, and trust.",
        whoIsThisFor: [
            "Lifestyle and Fashion Brands",
            "App Launches",
            "Mass-market consumer products"
        ],
        benefits: [
            "Data-Driven Influencer Discovery",
            "Strategic Campaign Planning",
            "Authentic Content Collaboration",
            "Real-Time Performance Tracking"
        ],
        process: [
            { title: "Ideal Creator Persona", desc: "Mapping influencers to your brand values." },
            { title: "Outreach & Briefing", desc: "Coordinating the vision with creators." },
            { title: "Campaign Launch", desc: "Pushing viral content to massive audiences." },
            { title: "Impact Analysis", desc: "Measuring sentiment and sales lift." }
        ],
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10"
    },
    {
        id: "influencer-management",
        title: "Influencer Management",
        slug: "influencer-management",
        icon: UserCog,
        shortDesc: "End-to-end management of influencers from onboarding to reporting.",
        heroHeadline: "Hassle-Free Creator Partnerships",
        heroSubhead: "We bridge the gap between brands and creators for seamless execution.",
        whoIsThisFor: [
            "Large brands with massive rosters",
            "Influencers needing professional management",
            "Agencies Outsourcing campaign operations"
        ],
        benefits: [
            "Seamless Creator Onboarding",
            "Legal & Contract Management",
            "Payment & Finance Coordination",
            "Campaign Performance Audits"
        ],
        process: [
            { title: "Portfolio Vetting", desc: "Auditing creator history and current reach." },
            { title: "Contractual Clarity", desc: "Managing terms, usage rights, and payments." },
            { title: "Execution Logistics", desc: "Ensuring content goes live on time." },
            { title: "Growth Guidance", desc: "Providing feedback for long-term partnership success." }
        ],
        color: "text-indigo-600",
        bgColor: "bg-indigo-600/10"
    },
    {
        id: "brand-promotion",
        title: "Brand Advertisement & Promotion",
        slug: "brand-promotion",
        icon: Megaphone,
        shortDesc: "Execute integrated brand campaigns across digital and offline platforms to maximize reach.",
        heroHeadline: "Visibility That Creates Impact",
        heroSubhead: "Beyond digital—we build brand recall that stays with your audience.",
        whoIsThisFor: [
            "Enterprise companies for brand recall",
            "Local legends wanting total area dominance",
            "New market entries"
        ],
        benefits: [
            "360-Degree Brand Strategy",
            "High-Impact Visual Campaigns",
            "Digital + Offline Integration",
            "Logo & Identity Motion Reveals"
        ],
        process: [
            { title: "Strategic Positioning", desc: "Finding your 'X-factor' in the market." },
            { title: "Visual Storyboarding", desc: "Designing the look of your mass campaign." },
            { title: "Multi-Channel Rollout", desc: "Deploying across PR, social, and more." },
            { title: "Recall Measurement", desc: "Auditing brand impact and market sentiment." }
        ],
        color: "text-pink-600",
        bgColor: "bg-pink-600/10"
    },
    {
        id: "app-development",
        title: "App Development",
        slug: "app-development",
        icon: Smartphone,
        shortDesc: "Design and develop scalable Android & iOS applications with modern UI/UX.",
        heroHeadline: "Bring Your Idea to Their Pocket",
        heroSubhead: "Flutter, Native, and WebView solutions tailored for startups and enterprises.",
        whoIsThisFor: [
            "Startup founders build their MVP",
            "Businesses moving to mobile-first commerce",
            "Service providers needing custom portals"
        ],
        benefits: [
            "Cross-Platform Flutter Apps",
            "Scale-Ready MVP Development",
            "Advanced API & IoT Integration",
            "Modern Gesture-Driven UI/UX"
        ],
        process: [
            { title: "Feature Scoping", desc: "Defining what your users really need." },
            { title: "Prototype Development", desc: "Visualizing the app before writing code." },
            { title: "Agile Development", desc: "Building and testing in rapid iterations." },
            { title: "Store Submission", desc: "Navigating App Store & Play Store requirements." }
        ],
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        id: "game-development",
        title: "Game Development",
        slug: "game-development",
        icon: Gamepad2,
        shortDesc: "A dedicated creative gaming studio building interactive games and gamified experiences.",
        heroHeadline: "Where Creativity Meets Play",
        heroSubhead: "Mobile, Web, and Brand-focused games that engage and entertain.",
        whoIsThisFor: [
            "Gaming startups building their first title",
            "Brands wanting gamified marketing apps",
            "Educational firms for interactive learning"
        ],
        benefits: [
            "Hyper-Casual Mobile Games",
            "Gamified Brand Experiences",
            "Modern Game UI/UX Design",
            "3D & 2D Asset Creation"
        ],
        process: [
            { title: "Concept Art", desc: "Designing characters, worlds, and mechanics." },
            { title: "Core Loop Development", desc: "Ensuring the game is fun to play." },
            { title: "Visual VFX Polish", desc: "Adding that 'wow' factor with effects." },
            { title: "Monetization Strategy", desc: "Helping you earn from your creation." }
        ],
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    }
];
