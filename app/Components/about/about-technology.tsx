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
                        <motion.div style={{ height: progressBarY }} className="w-full bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                    </div>

                    <div className="w-full max-w-sm relative h-[400px] flex items-center ml-0 md:ml-8">

                        {/* Content 1: Sole */}
                        <motion.div style={{ opacity: t1Opacity, y: t1Y }} className="absolute inset-0 flex flex-col justify-center">
                            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Component 01</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                                Zero<br />Impact<br />Matrix.
                            </h2>
                            <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                                The <strong>CloudFloat™ Sole</strong> isn't just foam. It is an engineered translucent polymer matrix containing microscopic vacuum chambers. Upon impact, the chambers dissipate kinetic energy laterally rather than vertically.
                            </p>

                            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                                <li className="flex justify-between items-center text-xs font-mono uppercase text-white/60">
                                    <span>Energy Return</span>
                                    <span className="text-white">98.4%</span>
                                </li>
                                <li className="flex justify-between items-center text-xs font-mono uppercase text-white/60">
                                    <span>Matrix Density</span>
                                    <span className="text-white">0.2g/cm³</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Content 2: Mesh */}
                        <motion.div style={{ opacity: t2Opacity, y: t2Y }} className="absolute inset-0 flex flex-col justify-center pointer-events-none">
                            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-sky-400/50 mb-6">Component 02</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-700 drop-shadow-sm">
                                Adaptive<br />Aero<br />Weave.
                            </h2>
                            <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                                Utilizing extreme macro-woven structural fibers interlaced with highly reactive neon-luminescent polymers. The <strong>AeroWeave Mesh</strong> actively responds to foot temperature and flex, adjusting its tensile strength.
                            </p>

                            <ul className="mt-8 space-y-3 border-t border-sky-400/10 pt-6">
                                <li className="flex justify-between items-center text-xs font-mono uppercase text-sky-200/60">
                                    <span>Tensile Strength</span>
                                    <span className="text-sky-300">4,500 MPa</span>
                                </li>
                                <li className="flex justify-between items-center text-xs font-mono uppercase text-sky-200/60">
                                    <span>Thermal Venting</span>
                                    <span className="text-sky-300">Active</span>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>

                {/* ─── RIGHT SIDE: IMAGERY & SCHEMATICS ─── */}
                <div className="relative w-full md:w-7/12 h-1/2 md:h-full bg-black z-10 overflow-hidden">

                    {/* Shadow gradient uniting the halves */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-30 pointer-events-none hidden md:block" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-30 pointer-events-none block md:hidden" />

                    {/* Image 1: The Sole */}
                    <motion.div
                        style={{ opacity: img1Opacity, scale: img1Scale }}
                        className="absolute inset-0 w-full h-full will-change-transform"
                    >
                        <Image src="/assets/about_tech_sole.png" alt="Tech Sole Layout" fill className="object-cover" priority />

                        {/* Tech Overlay Lines */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/20 to-black/80 mix-blend-multiply" />
                        <div className="absolute top-1/3 left-1/4 w-[1px] h-32 bg-white/40 origin-bottom scale-y-[0.5]" />
                        <div className="absolute top-[40%] right-1/4 w-32 h-[1px] bg-white/40 origin-left scale-x-[0.5]" />
                        <div className="absolute top-[40%] right-1/4 w-2 h-2 bg-white rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]" />
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
