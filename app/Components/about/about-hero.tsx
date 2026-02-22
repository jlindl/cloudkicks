"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const philosophyText = "We didn't set out to make a shoe. We set out to kill gravity.";
const philosophyWords = philosophyText.split(" ");

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth physics-based scroll — low stiffness for buttery feel
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 30, mass: 0.8 });

    // ===== PHASE 1: Initial hero (0% – 20%) =====
    const phase1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0]);
    const hudP1Y = useTransform(smoothProgress, [0, 0.22], ["0%", "-120%"]);
    const hudP2Y = useTransform(smoothProgress, [0, 0.22], ["0%", "-60%"]);

    // ===== PHASE 2: Zoom CCLDN + crossfade to tunnel (15% – 45%) =====
    const ccldnScale = useTransform(smoothProgress, [0, 0.18, 0.42], [1, 1.2, 3.5]);
    const ccldnOpacity = useTransform(smoothProgress, [0, 0.18, 0.35, 0.42], [0.8, 0.8, 0.3, 0]);

    // Cloudtunnel fade in, zoom & spin
    const tunnelOpacity = useTransform(smoothProgress, [0.28, 0.4, 0.6, 0.65], [0, 1, 1, 1]);
    const tunnelScale = useTransform(smoothProgress, [0.3, 0.65], [2, 6]);
    const tunnelRotate = useTransform(smoothProgress, [0.3, 0.65], [0, 180]);

    // Progressive darkening — raw scroll so it reliably hits full black
    const darkenOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0, 0.6, 1]);

    // ===== PHASE 3: "ASCEND" text (30% – 55%) =====
    const ascendOpacity = useTransform(smoothProgress, [0.28, 0.35, 0.5, 0.58], [0, 1, 1, 0]);
    const ascendScale = useTransform(smoothProgress, [0.28, 0.38, 0.58], [0.7, 1, 1.4]);
    const ascendY = useTransform(smoothProgress, [0.3, 0.58], ["0%", "-60%"]);

    // Bottom vignette
    const vignetteOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [0.4, 0.3, 0.7]);

    // ===== PHASE 4: Philosophy text reveal (65% – 95%) =====
    // The black overlay fades back out to reveal the text
    const philosophyContainerOpacity = useTransform(scrollYProgress, [0.62, 0.68], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-[#020202]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* 1. Deep Background Glow & Grid */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-[80vw] h-[80vw] bg-sky-900/30 blur-[200px] rounded-full mix-blend-screen" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                {/* 2. CCLDN Image Layer — zooms in and fades out */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-10 will-change-transform"
                    style={{ opacity: ccldnOpacity, scale: ccldnScale }}
                >
                    <Image
                        src="/assets/CCLDN.png"
                        alt="CloudKicks City"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#020202]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/60" />
                </motion.div>

                {/* 3. Cloud Tunnel Image Layer — fades in, zooms & spins through */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-[9] will-change-transform"
                    style={{ opacity: tunnelOpacity, scale: tunnelScale, rotate: tunnelRotate }}
                >
                    <Image
                        src="/assets/Cloudtunnel.png"
                        alt="Cloud Tunnel Ascent"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#020202_100%)]" />
                </motion.div>

                {/* Dynamic vignette overlay */}
                <motion.div
                    className="absolute inset-0 z-[11] pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-[#020202]"
                    style={{ opacity: vignetteOpacity }}
                />

                {/* Progressive black overlay — seamless transition */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none bg-[#020202]"
                    style={{ opacity: darkenOpacity }}
                />

                {/* --- FLOATING HUD COMPONENTS (Phase 1) --- */}

                {/* Top Left HUD */}
                <motion.div style={{ y: hudP1Y, opacity: phase1Opacity }} className="absolute z-40 top-12 left-6 md:left-12 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-[0_0_10px_#38bdf8]" />
                        <span className="text-white/70 font-mono text-[10px] md:text-xs tracking-widest uppercase">System Online</span>
                    </div>
                    <div className="w-32 h-[1px] bg-white/20" />
                    <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase mt-1">AX-04 Protocol Active</span>
                </motion.div>

                {/* Top Right Floating Glass Card */}
                <motion.div
                    style={{ y: hudP2Y, opacity: phase1Opacity }}
                    className="absolute z-40 top-24 right-6 md:right-12 backdrop-blur-md bg-white/[0.02] border border-white/10 p-4 rounded-xl shadow-2xl"
                >
                    <div className="flex flex-col gap-1">
                        <span className="text-sky-400 font-mono text-[10px] tracking-widest uppercase">Gravitational Constant</span>
                        <span className="text-white font-mono text-xl tracking-tight">0.00 <span className="text-white/40 text-sm">m/s²</span></span>
                    </div>
                </motion.div>

                {/* Atmospheric Floating Blur Orbs */}
                <motion.div style={{ y: hudP1Y, opacity: phase1Opacity }} className="absolute z-20 top-[20%] left-[10%] w-64 h-64 bg-white/5 blur-[80px] rounded-full" />
                <motion.div style={{ y: hudP2Y, opacity: phase1Opacity }} className="absolute z-20 top-[60%] right-[15%] w-96 h-96 bg-sky-400/5 blur-[100px] rounded-full" />

                {/* Center Targeting Reticle */}
                <motion.div
                    style={{ y: hudP1Y, opacity: phase1Opacity }}
                    className="absolute z-20 w-[600px] h-[600px] border border-white/5 rounded-full flex items-center justify-center pointer-events-none opacity-50"
                >
                    <div className="w-[400px] h-[400px] border border-white/5 rounded-full border-dashed" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5" />
                </motion.div>

                {/* Phase 1 Typography — "Defy Gravity" */}
                <motion.div
                    className="absolute z-30 flex flex-col items-center justify-center pointer-events-none text-center"
                    style={{ y: hudP1Y, opacity: phase1Opacity }}
                >
                    <span className="text-sky-400 font-mono tracking-[0.5em] text-sm md:text-base uppercase mb-8 drop-shadow-md">CloudKicks Propulsion Labs</span>
                    <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-kanit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[0.85] tracking-tight uppercase drop-shadow-[0_0_100px_rgba(255,255,255,0.2)]">
                        Defy<br />Gravity.
                    </h1>
                </motion.div>

                {/* Phase 1 Scroll Indicator */}
                <motion.div style={{ opacity: phase1Opacity }} className="absolute z-40 bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Initiate Descent</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-sky-400 to-transparent" />
                </motion.div>

                {/* Phase 2/3: "ASCEND" text */}
                <motion.div
                    className="absolute z-30 flex flex-col items-center justify-center pointer-events-none text-center"
                    style={{ opacity: ascendOpacity, scale: ascendScale, y: ascendY }}
                >
                    <span className="text-sky-300/80 font-mono tracking-[0.6em] text-xs md:text-sm uppercase mb-6 drop-shadow-md">
                        Through the clouds
                    </span>
                    <h2 className="text-7xl md:text-[10rem] lg:text-[14rem] font-kanit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/20 leading-[0.85] tracking-tight uppercase drop-shadow-[0_0_120px_rgba(255,255,255,0.35)]">
                        Ascend
                    </h2>
                </motion.div>

                {/* ===== Phase 4: Philosophy text — emerges from black ===== */}
                <motion.div
                    className="absolute z-[60] inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24"
                    style={{ opacity: philosophyContainerOpacity }}
                >
                    <p className="max-w-5xl flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4 text-center">
                        {philosophyWords.map((word, i) => {
                            // Words reveal between 68% and 88% scroll
                            const wordStart = 0.68 + (i / philosophyWords.length) * 0.2;
                            const wordEnd = wordStart + (0.2 / philosophyWords.length);

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(smoothProgress, [wordStart, wordEnd], [0.1, 1]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const filter = useTransform(smoothProgress, [wordStart, wordEnd], ["blur(10px)", "blur(0px)"]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const color = useTransform(smoothProgress, [wordStart, wordEnd], ["#333", "#FFF"]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const textShadow = useTransform(smoothProgress, [wordStart, wordEnd], [
                                "0px 0px 0px rgba(255,255,255,0)",
                                "0px 0px 40px rgba(255,255,255,0.8)"
                            ]);

                            return (
                                <motion.span
                                    key={i}
                                    style={{ opacity, filter, color, textShadow }}
                                    className="text-4xl md:text-6xl lg:text-8xl font-black font-kanit uppercase tracking-tighter"
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
