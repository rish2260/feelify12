"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-2"
            >
                <Sun className="w-6 h-6 text-brand-black" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-2"
            >
                <Moon className="w-6 h-6 text-brand-yellow" />
            </motion.div>
            <div className="w-6 h-6 opacity-0"></div> {/* Spacer */}
        </button>
    );
}
