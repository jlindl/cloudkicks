"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function AboutTechnology() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // ─── SCROLL MAPPINGS ───
    const progressBarY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    const t1Opacity = useTransform(smoothProgress, [0, 0.1, 0.35, 0.45], [0, 1, 1, 0]);
    const t1Y = useTransform(smoothProgress, [0, 0.1, 0.35, 0.45], [50, 0, 0, -50]);

    const img1Opacity = useTransform(smoothProgress, [0.0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
    const img1Scale = useTransform(smoothProgress, [0.0, 0.5], [1.1, 1]);

    const t2Opacity = useTransform(smoothProgress, [0.45, 0.55, 0.85, 0.95], [0, 1, 1, 0]);
    const t2Y = useTransform(smoothProgress, [0.45, 0.55, 0.85, 0.95], [50, 0, 0, -50]);

    const img2Opacity = useTransform(smoothProgress, [0.45, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
    const img2Scale = useTransform(smoothProgress, [0.45, 0.95], [1.1, 1]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-transparent text-white selection:bg-white selection:text-black border-t border-white/5">

            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0a0a0a]">

                {/* ─── LEFT SIDE: TEXT (Philosophy & Specs) ─── */}
                <div className="relative w-full md:w-5/12 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 lg:p-24 z-20">

                    {/* Progress Track */}
                    <div className="absolute left-6 md:left-12 top-1/4 bottom-1/4 w-[2px] bg-white/5 hidden md:block rounded-full">
                        <motion.div style={{ height: progressBarY }} className="w-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>

                    <div className="w-full max-w-sm relative h-[400px] flex items-center ml-0 md:ml-8">

                        {/* Content 1: Sole */}
                        <motion.div style={{ opacity: t1Opacity, y: t1Y }} className="absolute inset-0 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 pr-4">
                                FROM LOUNGE<br />TO LINK-UP.
                            </h2>
                            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-sm md:text-base pr-4">
                                <p>
                                    Not just for staying in. Not just for stepping out.
                                </p>
                                <p>
                                    CloudKicks bridge comfort and streetwear in one oversized silhouette. A statement shape softened with plush materials and everyday cushioning.
                                </p>
                                <p>
                                    It is the pair you reach for without thinking. The one that works with whatever the day becomes.
                                </p>
                                <p className="text-white font-medium mt-6">
                                    Comfort stays locked in. Style stays sharp.
                                </p>
                            </div>
                        </motion.div>

                        {/* Content 2: Mesh */}
                        <motion.div style={{ opacity: t2Opacity, y: t2Y }} className="absolute inset-0 flex flex-col justify-center pointer-events-none">
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 drop-shadow-sm pr-4">
                                DESIGNED<br />WITH<br />INTENT.
                            </h2>
                            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-sm md:text-base pr-4">
                                <p>
                                    Every line. Every proportion. Every material choice.
                                </p>
                                <p>
                                    CloudKicks aren’t accidental. The oversized stance, the cushioned interior, the clean finish. It is built to feel effortless and look deliberate.
                                </p>
                                <p className="text-white font-medium mt-6">
                                    Because comfort should still carry weight.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* ─── RIGHT SIDE: IMAGERY & SCHEMATICS ─── */}
                <div className="relative w-full md:w-7/12 h-1/2 md:h-full bg-black z-10 overflow-hidden">

                    {/* Shadow gradient uniting the halves */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-30 pointer-events-none hidden md:block" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-30 pointer-events-none block md:hidden" />

                    <motion.div
                        style={{ opacity: img1Opacity, scale: img1Scale }}
                        className="absolute inset-0 w-full h-full will-change-transform"
                    >
                        <Image src="/assets/cloud_kicks_hero_final.png" alt="CloudKicks in Premium Lounge" fill className="object-cover" priority />

                        {/* Branded Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* Image 2: The Mesh */}
                    <motion.div
                        style={{ opacity: img2Opacity, scale: img2Scale }}
                        className="absolute inset-0 w-full h-full will-change-transform"
                    >
                        <Image src="/assets/about_material_mesh.png" alt="Tech Material Mesh" fill className="object-cover" />

                        <div className="absolute inset-0 bg-gradient-to-tl from-space-900/40 to-transparent mix-blend-overlay" />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
