"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const text = "We didn't set out to make a shoe. We set out to kill gravity.";
const words = text.split(" ");

export default function AboutPhilosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    return (
        <section ref={containerRef} className="h-[300vh] bg-[#020202] relative flex items-center justify-center">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24">
                <p className="max-w-5xl flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4 text-center">
                    {words.map((word, i) => {
                        // All words reveal within the first 55% of scroll progress
                        const start = (i / words.length) * 0.55;
                        const end = start + (0.55 / words.length);

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(smoothProgress, [start, end], [0.1, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const filter = useTransform(smoothProgress, [start, end], ["blur(10px)", "blur(0px)"]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const color = useTransform(smoothProgress, [start, end], ["#333", "#FFF"]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const textShadow = useTransform(smoothProgress, [start, end], ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 40px rgba(255,255,255,0.8)"]);

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
            </div>
        </section>
    );
}
