"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import AboutHero from "./about-hero";
import AboutTechnology from "./about-technology";
import AboutChapterOne from "./about-chapter-one";

const AboutClient = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // Global Floating Orbs Parallax mapping
    const orb1Y = useTransform(smoothScroll, [0, 1], ["0%", "500%"]);
    const orb2Y = useTransform(smoothScroll, [0, 1], ["0%", "-400%"]);
    const orb3Y = useTransform(smoothScroll, [0, 1], ["0%", "800%"]);

    return (
        <div ref={containerRef} className="relative bg-[#020202] text-white selection:bg-white selection:text-black font-inter w-full">

            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
                <motion.div style={{ y: orb1Y }} className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-white/5 blur-[150px] rounded-full" />
                <motion.div style={{ y: orb2Y }} className="absolute top-[50%] right-[-10%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full" />
                <motion.div style={{ y: orb3Y }} className="absolute bottom-[20%] left-[10%] w-[50vw] h-[50vw] bg-white/5 blur-[200px] rounded-full" />
            </div>

            {/* 1. Cinematic Parallax Hero */}
            <div className="relative z-10"><AboutHero /></div>

            {/* 4. Deep Technical Dive (Sticky Scroll) */}
            <div className="relative z-10"><AboutTechnology /></div>

            {/* 5. The Chapter 1 Text Reel  */}
            <div className="relative z-10"><AboutChapterOne /></div>
        </div>
    );
};

export default AboutClient;
