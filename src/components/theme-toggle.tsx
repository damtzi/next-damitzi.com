"use client";

import { Moon, Sun } from "lucide-react";
import { animate } from "motion";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    const onClick = () => {
        setTheme(theme === "light" ? "dark" : "light");

        const moon = document.getElementById("moonIcon");
        const sun = document.getElementById("sunIcon");

        if (moon && sun) {
            animate([
                [moon, { y: 32 }],
                [sun, { y: -32 }, { at: "+0.5" }],
            ]);
        }
    };

    return (
        <div className="grid place-items-center border border-gray-300 shadow rounded-md p-2">
            <button
                type="button"
                onClick={onClick}
                aria-label="Toggle Theme"
                className="hover:cursor-pointer"
            >
                <motion.div
                    whileTap={{
                        rotate: theme === "light" ? 180 : -180,
                    }}
                >
                    {theme === "light" ? (
                        <Moon id="moonIcon" className="size-5" />
                    ) : (
                        <Sun id="sunIcon" className="size-5" />
                    )}
                </motion.div>
            </button>
        </div>
    );
};
