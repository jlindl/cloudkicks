"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroCTAProps {
    mainText?: string;
    revealText?: string;
    link?: string;
}

const HeroCTA: React.FC<HeroCTAProps> = ({
    mainText = "Shop the Drop",
    revealText = "Explore Now",
    link = "/shop"
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position logic for magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Apply magnetic pull (weaker at edges)
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="relative z-50 inline-block"
        >
            <Link href={link} className="group relative flex items-center justify-center">
                {/* Glow Effect */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        opacity: isHovered ? 0.8 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-white/40 rounded-full blur-2xl"
                />

                {/* Button Container */}
                <div className="relative px-8 py-4 md:px-12 md:py-6 rounded-full overflow-hidden bg-black border border-white/20 backdrop-blur-md transition-colors duration-500 group-hover:border-white/50">

                    {/* Liquid Gradient Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 animate-[shine_3s_linear_infinite] bg-[length:200%_100%]" />
                    </div>

                    {/* Text Reveal Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-6 overflow-hidden">
                        {/* Primary Text */}
                        <motion.span
                            animate={{ y: isHovered ? -30 : 0, color: isHovered ? "#000000" : "#ffffff" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-lg md:text-2xl font-black uppercase tracking-[0.2em] whitespace-nowrap"
                        >
                            {mainText}
                        </motion.span>

                        {/* Hidden Reveal Text */}
                        <motion.span
                            initial={{ y: 30 }}
                            animate={{ y: isHovered ? -24 : 30 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute text-lg md:text-2xl font-black text-black uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-3"
                        >
                            {revealText} <ArrowRight className="w-5 h-5 text-black" />
                        </motion.span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default HeroCTA;
