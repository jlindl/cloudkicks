"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function AboutExploded() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // ─── EXPLOSION ANIMATION MAPPING ───
    const yTop = useTransform(smoothProgress, [0.3, 0.6, 0.8, 1], ["0%", "-120%", "-120%", "0%"]);
    const opacityTop = useTransform(smoothProgress, [0.2, 0.4, 0.8, 0.9], [0.5, 1, 1, 0.5]);
    const scaleTop = useTransform(smoothProgress, [0.3, 0.6, 0.8, 1], [1, 1.1, 1.1, 1]);

    const opacityMid = useTransform(smoothProgress, [0.3, 0.5, 0.8, 0.9], [0, 1, 1, 0]);
    const scaleMid = useTransform(smoothProgress, [0.3, 0.6, 0.8, 1], [0.9, 1.05, 1.05, 0.9]);

    const yBot = useTransform(smoothProgress, [0.3, 0.6, 0.8, 1], ["0%", "120%", "120%", "0%"]);
    const opacityBot = useTransform(smoothProgress, [0.2, 0.4, 0.8, 0.9], [0.5, 1, 1, 0.5]);
    const scaleBot = useTransform(smoothProgress, [0.3, 0.6, 0.8, 1], [1, 1.1, 1.1, 1]);

    const labelOpacity = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="h-[350vh] bg-transparent relative">

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Ambient Glow */}
                <motion.div
                    style={{ opacity: labelOpacity }}
                    className="absolute inset-0 flex justify-center items-center pointer-events-none"
                >
                    <div className="w-[60vw] h-[60vw] bg-sky-900/20 blur-[150px] rounded-full" />
                </motion.div>

                {/* THE ASSEMBLED / EXPLODED STACK */}
                <div className="relative w-full max-w-4xl h-[60vh] flex flex-col items-center justify-center">

                    {/* TOP LAYER: MESH */}
                    <motion.div
                        style={{ y: yTop, opacity: opacityTop, scale: scaleTop }}
                        className="absolute z-30 w-[90%] md:w-3/4 h-[25vh] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] will-change-transform"
                    >
                        <Image src="/assets/about_material_mesh.png" alt="AeroWeave Mesh" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40 border border-white/10 rounded-3xl" />

                        <motion.div style={{ opacity: labelOpacity }} className="absolute bottom-6 left-8">
                            <h3 className="text-white font-kanit font-black text-2xl md:text-4xl uppercase tracking-wider">AeroWeave Upper</h3>
                            <p className="text-white/60 font-mono text-sm tracking-widest uppercase mb-2">Layer 01</p>
                            <div className="w-12 h-[2px] bg-white/50" />
                        </motion.div>
                    </motion.div>

                    {/* MIDDLE LAYER: CORE MATRIX */}
                    <motion.div
                        style={{ opacity: opacityMid, scale: scaleMid }}
                        className="absolute z-20 w-[80%] md:w-2/3 h-[8px] rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_50px_rgba(56,189,248,1)] will-change-transform flex items-center justify-center"
                    >
                        <motion.div style={{ opacity: labelOpacity }} className="absolute top-10 text-center w-full">
                            <h3 className="text-sky-300 font-kanit font-black text-xl md:text-3xl uppercase tracking-wider drop-shadow-md">Tension Core</h3>
                            <p className="text-sky-300/60 font-mono text-sm tracking-widest uppercase mb-2">Layer 02</p>
                            <div className="w-[1px] h-12 bg-sky-400/50 mx-auto" />
                        </motion.div>
                    </motion.div>

                    {/* BOTTOM LAYER: SOLE */}
                    <motion.div
                        style={{ y: yBot, opacity: opacityBot, scale: scaleBot }}
                        className="absolute z-10 w-[90%] md:w-3/4 h-[25vh] rounded-3xl overflow-hidden shadow-[0_-40px_100px_rgba(0,0,0,0.8)] will-change-transform"
                    >
                        <Image src="/assets/about_tech_sole.png" alt="CloudFloat Sole" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40 border border-white/10 rounded-3xl" />

                        <motion.div style={{ opacity: labelOpacity }} className="absolute top-6 left-8">
                            <h3 className="text-white font-kanit font-black text-2xl md:text-4xl uppercase tracking-wider">CloudFloat™ Sole</h3>
                            <p className="text-white/60 font-mono text-sm tracking-widest uppercase mb-2">Layer 03</p>
                            <div className="w-12 h-[2px] bg-white/50" />
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
