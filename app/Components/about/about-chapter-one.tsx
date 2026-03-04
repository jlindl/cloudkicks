"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutChapterOne() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax glow orb drifting diagonally across the section
    const orbX = useTransform(scrollYProgress, [0, 1], ["-20%", "80%"]);
    const orbY = useTransform(scrollYProgress, [0, 1], ["80%", "-20%"]);
    const orbOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);

    // Subtle vertical parallax on the heading for depth
    const headingY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#020202] overflow-hidden">

            {/* Animated floating glow orb */}
            <motion.div
                style={{ x: orbX, y: orbY, opacity: orbOpacity }}
                className="absolute z-0 w-[500px] h-[500px] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 md:py-28">
                <div className="max-w-7xl mx-auto w-full">

                    {/* Heading with parallax */}
                    <motion.h2
                        style={{ y: headingY }}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] as const }}
                        className="text-5xl md:text-8xl lg:text-[8rem] font-kanit font-black uppercase tracking-tighter leading-[0.82] text-white"
                    >
                        THIS IS<br />
                        JUST THE<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-600">
                            BEGINNING.
                        </span>
                    </motion.h2>

                    {/* Body text — right aligned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-10 md:mt-12 flex justify-end"
                    >
                        <div className="max-w-md text-right space-y-4">
                            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                                The first pair laid the foundation.<br />
                                <span className="text-neutral-500">The next ones raise the standard.</span>
                            </p>
                            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                                Bolder colourways. Refined shape. New silhouettes built with the same oversized intent.
                            </p>
                        </div>
                    </motion.div>

                    {/* Animated divider — glowing pulse */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] as const }}
                        className="mt-10 md:mt-14 w-full h-[1px] bg-white/10 origin-left relative"
                    >
                        {/* Animated shimmer travelling along the line */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "200%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                    </motion.div>

                    {/* Two opposing statements */}
                    <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-3xl font-kanit font-bold uppercase tracking-tight text-white"
                        >
                            Comfort stays locked in.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-3xl font-kanit font-bold uppercase tracking-tight text-white/40 md:text-right"
                        >
                            Culture keeps moving forward.
                        </motion.p>
                    </div>

                    {/* Closing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-16 md:mt-20 flex flex-col items-center text-center gap-6"
                    >
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-kanit font-black uppercase tracking-tight leading-[0.85] text-white">
                            WE ARE ONLY JUST<br />GETTING STARTED.
                        </h3>

                        <Link
                            href="/shop"
                            className="group relative mt-4 inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black text-sm md:text-base uppercase tracking-[0.15em] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10 font-kanit tracking-[0.1em]">SHOP NOW</span>
                            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
