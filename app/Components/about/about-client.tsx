"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import AboutHero from "./about-hero";
import AboutExploded from "./about-exploded";
import AboutTechnology from "./about-technology";
import AboutBento from "./about-bento";
import AboutTimeline from "./about-timeline";

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

            {/* --- GLOBAL ATMOSPHERE LAYER (FLOATING PARTICLES) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
                <motion.div style={{ y: orb1Y }} className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-sky-600/10 blur-[150px] rounded-full" />
                <motion.div style={{ y: orb2Y }} className="absolute top-[50%] right-[-10%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full" />
                <motion.div style={{ y: orb3Y }} className="absolute bottom-[20%] left-[10%] w-[50vw] h-[50vw] bg-blue-500/5 blur-[200px] rounded-full" />
            </div>

            {/* 1. Cinematic Parallax Hero */}
            <div className="relative z-10"><AboutHero /></div>


            {/* 3. The Exploded View Presentation */}
            <div className="relative z-10"><AboutExploded /></div>

            {/* 4. Deep Technical Dive (Sticky Scroll) */}
            <div className="relative z-10"><AboutTechnology /></div>

            {/* 5. The Foundry (Stats Grid) */}
            <div className="relative z-10"><AboutBento /></div>

            {/* 6. Company Trajectory (Horizontal Scroll) */}
            <div className="relative z-10"><AboutTimeline /></div>

            {/* 7. Final CTA Footer Section (Wrapped in z-10 for atmosphere to go behind) */}
            <section className="relative z-10 py-60 border-t border-white/5 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#020202] to-[#020202] flex flex-col items-center text-center px-6 overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-kanit font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
                        The Sky is<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
                            The Start
                        </span>
                    </h2>

                    <p className="text-neutral-400 text-lg md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                        We aren't just making shoes. We are engineering the complete absence of gravity. Are you ready to fly?
                    </p>

                    <Link
                        href="/shop"
                        className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-sm md:text-xl uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 font-kanit tracking-[0.1em]">ASCEND NOW</span>
                        <ArrowUpRight className="relative z-10 w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutClient;
