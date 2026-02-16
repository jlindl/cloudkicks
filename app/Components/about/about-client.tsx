"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/*
 * Architecture: "Cinematic Scroll-Band"
 *
 * Single sticky viewport. 4 phases fade in/out at scroll ranges.
 * Enhanced with: parallax depth, film grain, vignettes, glow FX,
 * dramatic scale transitions, atmospheric haze, and premium polish.
 *
 *   0.00 – 0.30  Phase 1: CONCRETE ROOTS
 *   0.25 – 0.55  Phase 2: WALKING ON AIR
 *   0.50 – 0.80  Phase 3: ASCENSION
 *   0.75 – 1.00  Phase 4: STRATOSPHERE
 */

const AboutClient = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 28, restDelta: 0.0005 });

    // ─── PHASE 1: CONCRETE ROOTS (0.00 – 0.32) ────────────────────
    const p1Opacity = useTransform(smooth, [0, 0.04, 0.22, 0.32], [1, 1, 1, 0]);
    const p1BgScale = useTransform(smooth, [0, 0.32], [1.0, 1.15]);
    const p1BgY = useTransform(smooth, [0, 0.32], ["0%", "-6%"]);
    const p1TitleScale = useTransform(smooth, [0, 0.32], [1, 1.3]);
    const p1TitleOpacity = useTransform(smooth, [0, 0.20], [0.08, 0.04]);
    const p1CardY = useTransform(smooth, [0.02, 0.12], ["50px", "0px"]);
    const p1CardOpacity = useTransform(smooth, [0.02, 0.12], [0, 1]);
    const p1CtaY = useTransform(smooth, [0.09, 0.16], ["20px", "0px"]);
    const p1CtaOpacity = useTransform(smooth, [0.09, 0.16], [0, 1]);
    const p1VignetteOpacity = useTransform(smooth, [0, 0.15], [0.3, 0.6]);

    // ─── PHASE 2: WALKING ON AIR (0.26 – 0.56) ────────────────────
    const p2Opacity = useTransform(smooth, [0.26, 0.34, 0.48, 0.56], [0, 1, 1, 0]);
    const p2BgScale = useTransform(smooth, [0.26, 0.56], [1.04, 1.0]);
    const p2ShoeX = useTransform(smooth, [0.28, 0.37, 0.45, 0.54], ["110%", "48%", "32%", "-15%"]);
    const p2ShoeY = useTransform(smooth, [0.28, 0.37, 0.45, 0.54], ["-25%", "8%", "4%", "-18%"]);
    const p2ShoeRotate = useTransform(smooth, [0.28, 0.37, 0.54], [25, -3, -12]);
    const p2ShoeScale = useTransform(smooth, [0.28, 0.39, 0.54], [0.65, 1.05, 0.9]);
    const p2TextY = useTransform(smooth, [0.31, 0.39], ["25px", "0px"]);
    const p2TextOpacity = useTransform(smooth, [0.31, 0.39], [0, 1]);
    const p2CtaY = useTransform(smooth, [0.36, 0.43], ["18px", "0px"]);
    const p2CtaOpacity = useTransform(smooth, [0.36, 0.43], [0, 1]);

    // ─── PHASE 3: ASCENSION (0.50 – 0.80) ─────────────────────────
    const p3Opacity = useTransform(smooth, [0.50, 0.58, 0.72, 0.80], [0, 1, 1, 0]);
    const p3TunnelScale = useTransform(smooth, [0.50, 0.78], [1, 2.5]);
    const p3TunnelRotate = useTransform(smooth, [0.50, 0.78], [0, 8]);
    const p3BgBrightness = useTransform(smooth, [0.50, 0.65, 0.78], [0.7, 1, 1.2]);
    const p3SpeedLinesOpacity = useTransform(smooth, [0.56, 0.65, 0.74], [0, 0.2, 0]);
    const p3TextY = useTransform(smooth, [0.56, 0.64], ["25px", "0px"]);
    const p3TextOpacity = useTransform(smooth, [0.56, 0.64], [0, 1]);
    const p3TextScale = useTransform(smooth, [0.56, 0.64], [0.97, 1]);
    const p3CtaY = useTransform(smooth, [0.61, 0.68], ["18px", "0px"]);
    const p3CtaOpacity = useTransform(smooth, [0.61, 0.68], [0, 1]);

    // ─── PHASE 4: THE SUMMIT (0.74 – 1.00) ──────────────────────
    const p4Opacity = useTransform(smooth, [0.74, 0.82, 0.97, 1], [0, 1, 1, 1]);
    const p4EmblemScale = useTransform(smooth, [0.80, 0.92], [0.8, 1.0]);
    const p4EmblemOpacity = useTransform(smooth, [0.80, 0.90], [0, 1]);
    const p4LineWidth = useTransform(smooth, [0.84, 0.93], ["0%", "100%"]);
    const p4TextY = useTransform(smooth, [0.86, 0.93], ["20px", "0px"]);
    const p4TextOpacity = useTransform(smooth, [0.86, 0.93], [0, 1]);
    const p4CtaY = useTransform(smooth, [0.91, 0.97], ["15px", "0px"]);
    const p4CtaOpacity = useTransform(smooth, [0.91, 0.97], [0, 1]);
    const p4GlowOpacity = useTransform(smooth, [0.85, 1], [0, 0.25]);


    return (
        <div ref={containerRef} className="relative bg-black text-white selection:bg-white selection:text-black" style={{ height: "500vh" }}>

            {/* ━━━ STICKY VIEWPORT ━━━ */}
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ willChange: "transform" }}>

                {/* ══════ PHASE 1: CONCRETE ROOTS ══════ */}
                <motion.div
                    style={{ opacity: p1Opacity }}
                    className="absolute inset-0 z-10 will-change-transform"
                >
                    {/* Parallax Background */}
                    <motion.div style={{ scale: p1BgScale, y: p1BgY }} className="absolute inset-0 will-change-transform">
                        <Image
                            src="/assets/Concrete.png"
                            alt="Concrete Texture"
                            fill
                            className="object-cover brightness-[0.2] grayscale"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>

                    {/* Cinematic Vignette */}
                    <motion.div
                        style={{ opacity: p1VignetteOpacity }}
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.9)_100%)] z-[1]"
                    />

                    {/* Atmospheric Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-[2]" />

                    {/* Giant Watermark Title (Parallax) */}
                    <motion.div
                        style={{ scale: p1TitleScale, opacity: p1TitleOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[3]"
                    >
                        <h1 className="text-[5rem] md:text-[14rem] font-black text-white leading-[0.82] tracking-[-0.06em] text-center select-none uppercase whitespace-nowrap">
                            Concrete<br />Roots
                        </h1>
                    </motion.div>

                    {/* Floating Emblem */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[4] opacity-[0.04]">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
                            className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
                        >
                            <Image src="/assets/cloud_emblem_mono.png" alt="Emblem" fill className="object-contain" />
                        </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className="absolute inset-0 flex items-center justify-center z-[10]">
                        <motion.div
                            style={{ y: p1CardY, opacity: p1CardOpacity }}
                            className="w-full max-w-lg mx-auto px-5"
                        >
                            <div className="relative bg-white/[0.06] backdrop-blur-2xl border border-white/[0.1] rounded-[2rem] p-10 md:p-14 text-center shadow-[0_8px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                                {/* Card Inner Glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

                                <span className="inline-block text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase mb-7 border border-white/[0.08] bg-white/[0.03] rounded-full px-5 py-2">
                                    Our Story
                                </span>

                                <h2 className="text-3xl md:text-[3.2rem] font-bold text-white mb-5 tracking-tight leading-[1.1]">
                                    Built From<br />The Ground Up.
                                </h2>

                                <p className="text-sm md:text-base text-neutral-400 mb-10 leading-relaxed max-w-xs mx-auto">
                                    Cloud Kicks was born from a simple belief: sneakers should feel as free as the sky looks. We started on sidewalks, dreaming of clouds.
                                </p>

                                <motion.div style={{ y: p1CtaY, opacity: p1CtaOpacity }}>
                                    <Link
                                        href="/shop"
                                        className="group relative inline-flex items-center justify-center w-full py-5 md:py-6 bg-white text-black text-base md:text-lg font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-1 overflow-hidden"
                                    >
                                        {/* Shimmer */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        <span className="relative">Explore Our Roots</span>
                                        <svg className="relative w-5 h-5 ml-2 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* ══════ PHASE 2: WALKING ON AIR ══════ */}
                <motion.div
                    style={{ opacity: p2Opacity }}
                    className="absolute inset-0 z-20 will-change-transform"
                >
                    {/* Sky Background (Clean) */}
                    <motion.div style={{ scale: p2BgScale }} className="absolute inset-0 will-change-transform">
                        <Image src="/assets/Sky.png" alt="Sky" fill className="object-cover" sizes="100vw" />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>

                    {/* Shoe — Swooping Arc */}
                    <motion.div
                        style={{ x: p2ShoeX, y: p2ShoeY, rotate: p2ShoeRotate, scale: p2ShoeScale }}
                        className="absolute top-[15%] md:top-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-10 will-change-transform"
                    >
                        {/* Motion Trail / Shadow */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 opacity-20 blur-xl">
                            <Image src="/assets/CCsingular.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/assets/CCsingular.png" alt="Cloud Kicks Shoe" fill className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
                    </motion.div>

                    {/* Text — Bottom Left */}
                    <div className="absolute inset-0 flex items-end justify-start z-30 pb-[12%] pl-[6%] md:pb-[8%] md:pl-[8%]">
                        <motion.div
                            style={{ y: p2TextY, opacity: p2TextOpacity }}
                            className="text-left max-w-lg"
                        >
                            <span className="inline-block text-[10px] font-mono tracking-[0.4em] text-white/50 uppercase mb-4">
                                The Innovation
                            </span>

                            <h2 className="text-5xl md:text-[6rem] font-black text-white mb-4 tracking-[-0.03em] leading-[0.85]">
                                Walking<br />On Air.
                            </h2>

                            <p className="text-sm md:text-base text-white/60 max-w-sm mb-8 leading-relaxed">
                                Our proprietary CloudFloat™ sole is engineered with zero-gravity cushioning — every step feels like your first step off the ground.
                            </p>

                            <motion.div style={{ y: p2CtaY, opacity: p2CtaOpacity }}>
                                <Link
                                    href="/shop"
                                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-sm md:text-base font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    <span className="relative">Feel The Difference</span>
                                    <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* ══════ PHASE 3: ASCENSION ══════ */}
                <motion.div
                    style={{ opacity: p3Opacity }}
                    className="absolute inset-0 z-30 will-change-transform"
                >
                    {/* Sky Base */}
                    <div className="absolute inset-0">
                        <Image src="/assets/Sky.png" alt="Sky" fill className="object-cover brightness-110" sizes="100vw" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Cloud Tunnel (Warp Drive) */}
                    <motion.div
                        style={{ scale: p3TunnelScale, rotate: p3TunnelRotate }}
                        className="absolute inset-0 z-10 origin-center will-change-transform"
                    >
                        <Image src="/assets/Cloudtunnel.png" alt="Cloud Tunnel" fill className="object-cover opacity-80" />
                    </motion.div>

                    {/* Speed Lines Effect */}
                    <motion.div
                        style={{ opacity: p3SpeedLinesOpacity }}
                        className="absolute inset-0 z-20 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_5px)] mix-blend-overlay"
                    />

                    {/* Radial Light Burst */}
                    <div className="absolute inset-0 z-15 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />

                    {/* Text */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <motion.div
                            style={{ y: p3TextY, opacity: p3TextOpacity, scale: p3TextScale }}
                            className="text-center px-6"
                        >
                            <span className="inline-block text-[10px] font-mono tracking-[0.4em] text-sky-200/70 uppercase mb-5 border border-sky-200/15 bg-white/[0.05] backdrop-blur-xl rounded-full px-5 py-2 drop-shadow-lg">
                                The Experience
                            </span>

                            <h2 className="text-5xl md:text-[7rem] font-extralight text-white mb-6 tracking-[0.15em] drop-shadow-[0_5px_50px_rgba(255,255,255,0.3)] uppercase">
                                Ascend
                            </h2>

                            <p className="text-sm md:text-base text-sky-50/80 max-w-lg mx-auto mb-12 drop-shadow-md leading-relaxed">
                                From runway to rooftop, Cloud Kicks move with you.<br />
                                Designed for those who refuse to stay grounded.
                            </p>

                            <motion.div style={{ y: p3CtaY, opacity: p3CtaOpacity }}>
                                <Link
                                    href="/shop"
                                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-black rounded-full text-base md:text-lg font-bold tracking-wide transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_80px_rgba(255,255,255,0.35)] overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    <span className="relative">Find Your Pair</span>
                                    <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* ══════ PHASE 4: THE SUMMIT ══════ */}
                <motion.div
                    style={{ opacity: p4Opacity }}
                    className="absolute inset-0 z-40 will-change-transform"
                >
                    {/* Dark Base */}
                    <div className="absolute inset-0 bg-black" />

                    {/* Subtle Center Glow */}
                    <motion.div
                        style={{ opacity: p4GlowOpacity }}
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(255,255,255,0.06)_0%,_transparent_65%)] z-[1]"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="flex flex-col items-center text-center px-6 max-w-2xl">

                            {/* Emblem */}
                            <motion.div
                                style={{ scale: p4EmblemScale, opacity: p4EmblemOpacity }}
                                className="relative w-24 h-24 md:w-40 md:h-40 mb-10"
                            >
                                <Image src="/assets/cloud_emblem_mono.png" alt="Cloud Kicks" fill className="object-contain invert opacity-80" />
                            </motion.div>

                            {/* Horizontal Rule — animated width */}
                            <motion.div
                                style={{ width: p4LineWidth }}
                                className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-10"
                            />

                            {/* Text */}
                            <motion.div style={{ y: p4TextY, opacity: p4TextOpacity }}>
                                <h2 className="text-4xl md:text-[5.5rem] font-extralight text-white mb-4 tracking-[0.08em] leading-[0.9] uppercase">
                                    Above All
                                </h2>

                                <p className="text-sm md:text-base text-white/40 max-w-md mx-auto mb-12 leading-relaxed font-light">
                                    Premium materials. Relentless innovation.<br />
                                    This is Cloud Kicks — footwear without limits.
                                </p>
                            </motion.div>

                            {/* CTA */}
                            <motion.div style={{ y: p4CtaY, opacity: p4CtaOpacity }}>
                                <Link
                                    href="/shop"
                                    className="group relative inline-flex items-center gap-3 bg-white text-black px-14 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-[0.18em] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    <span className="relative">Shop The Collection</span>
                                    <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            </motion.div>

                            {/* Footer Tag */}
                            <motion.p
                                style={{ opacity: p4TextOpacity }}
                                className="mt-16 text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase"
                            >
                                Est. 2024 — Cloud Kicks Co.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>


                {/* ━━━ GLOBAL OVERLAYS ━━━ */}

                {/* Film Grain (always on, subtle) */}
                <div
                    className="absolute inset-0 z-[45] pointer-events-none opacity-[0.035] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "128px 128px",
                    }}
                />

                {/* Scroll Progress Bar */}
                <motion.div
                    style={{ scaleX: smooth }}
                    className="absolute top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left mix-blend-difference"
                />

            </div>
        </div>
    );
};

export default AboutClient;
