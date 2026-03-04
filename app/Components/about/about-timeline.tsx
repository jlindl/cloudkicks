"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const milestones = [
    {
        year: "2023",
        title: "The Hypothesis",
        desc: "A small team of aerospace engineers and material scientists asked a simple question: why do shoes fight gravity instead of ignoring it?"
    },
    {
        year: "2024",
        title: "The CloudFloat™ Prototype",
        desc: "After 400 failed polymer mixes, Matrix-04 stabilized. The first working prototype delivered 98% energy return with zero structural degradation."
    },
    {
        year: "2025",
        title: "The Archive Drop",
        desc: "CloudKicks launched direct-to-consumer. The Signature Series sold out in 14 minutes, establishing a new standard for hyper-engineered footwear."
    },
    {
        year: "2026",
        title: "Ascension",
        desc: "The sky is no longer the limit. It is merely the starting line. We continue to push the boundaries of what is physically possible to wear."
    }
];

export default function AboutTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // Horizontal Translate based on scroll
    // 4 items means we need to translate roughly -75% to see the last one fully
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={containerRef} className="h-[400vh] bg-transparent relative border-t border-white/5">

            {/* STICKY CONTAINER FOR HORIZONTAL SCROLL */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#050505]">

                {/* Background Grid for Technical Feel */}
                <div className="absolute inset-0 z-0 opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />

                <div className="absolute top-1/4 left-6 md:left-12 z-20">
                    <h2 className="text-xl md:text-3xl font-mono text-white/30 tracking-[0.5em] uppercase drop-shadow-md">Trajectory</h2>
                </div>

                {/* THE MOVING TRACK */}
                <motion.div style={{ x }} className="flex h-full items-center px-[10vw] pt-20">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 px-4 md:px-8 relative z-10">

                            {/* Card */}
                            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-3xl p-10 md:p-14 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                <div className="text-6xl md:text-8xl font-black font-kanit text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-6 drop-shadow-md transition-all duration-500 group-hover:from-white group-hover:to-white/20">
                                    {milestone.year}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-500">
                                    {milestone.title}
                                </h3>
                                <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed group-hover:text-neutral-200 transition-colors duration-500">
                                    {milestone.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </motion.div>

                {/* Progress Line */}
                <div className="absolute bottom-24 left-0 w-full h-[1px] bg-white/5 z-20">
                    <motion.div
                        className="h-full bg-gradient-to-r from-white via-white/80 to-white origin-left shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        style={{ scaleX: smoothProgress }}
                    />
                </div>
            </div>
        </section>
    );
}
