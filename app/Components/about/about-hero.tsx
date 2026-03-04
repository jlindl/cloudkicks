"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const philosophyText = "We didn't set out to make a slipper. We set out to redefine comfort.";
const philosophyWords = philosophyText.split(" ");

export default function AboutHero() {
    return (
        <section className="relative w-full bg-[#020202] flex flex-col">
            {/* Top Hero Section */}
            <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/CCLDN.png"
                        alt="CloudKicks City"
                        fill
                        className="object-cover opacity-60 mix-blend-luminosity"
                        priority
                    />
                    {/* Gradient blending the image smoothly into the background below */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/50 to-[#020202]" />
                </div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                >
                    <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-kanit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[0.85] tracking-tight uppercase drop-shadow-[0_0_100px_rgba(255,255,255,0.2)]">
                        MEET<br />CLOUDKICKS.
                    </h1>
                    <span className="text-white/80 font-mono tracking-[0.3em] text-lg md:text-2xl uppercase mt-8 drop-shadow-md">
                        Style meets comfort
                    </span>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">SCROLL</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </div>

            {/* Philosophy Text Section with Scroll Animation */}
            <PhilosophyScrollSection />
        </section>
    );
}

function PhilosophyScrollSection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0.1,
            filter: "blur(10px)",
            color: "#333333",
            textShadow: "0px 0px 0px rgba(255,255,255,0)",
            y: 20
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            color: "#FFFFFF",
            textShadow: "0px 0px 40px rgba(255,255,255,0.7)",
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1] as const
            }
        }
    };

    return (
        <div className="relative bg-[#020202] py-24 md:py-32 z-10">
            <div className="flex items-center justify-center px-6 md:px-12 lg:px-24">
                <motion.p
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="max-w-5xl flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4 text-center"
                >
                    {philosophyWords.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className="text-4xl md:text-6xl lg:text-8xl font-black font-kanit uppercase tracking-tighter"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
        </div>
    );
}
