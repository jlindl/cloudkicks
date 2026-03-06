"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface BentoCardProps {
    title: string;
    value: string;
    desc: string;
    colSpan: string;
    rowSpan: string;
}

const BentoCard = ({ title, value, desc, colSpan, rowSpan }: BentoCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            className={`relative group rounded-3xl border border-white/5 bg-black overflow-hidden flex flex-col justify-end p-8 md:p-12 ${colSpan} ${rowSpan}`}
            onMouseMove={handleMouseMove}
        >
            {/* Glowing Mouse-Tracking Background */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.06),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Glowing Mouse-Tracking Border */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.4),
                            transparent 80%
                        )
                    `,
                    WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='black' stroke-width='2'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="relative z-10">
                <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-4">{title}</p>
                <div className="text-5xl md:text-7xl font-black font-kanit text-white mb-4 group-hover:text-white transition-colors duration-500">
                    {value}
                </div>
                <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed max-w-xs group-hover:text-neutral-300 transition-colors duration-500">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default function AboutBento() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <span className="text-white font-mono tracking-[0.4em] uppercase text-sm">The Foundry</span>
                    <h2 className="text-4xl md:text-6xl font-black font-kanit text-white uppercase tracking-tighter mt-4">By The Numbers</h2>
                </div>

                {/* CSS Grid Bento Box */}
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto_auto] md:grid-rows-[400px_400px] gap-6">

                    <BentoCard
                        title="Density"
                        value="0.2g/cm³"
                        desc="The CloudFloat matrix is lighter than pure cork, yet boasts a tensile strength equivalent to aerospace-grade titanium alloys."
                        colSpan="md:col-span-2"
                        rowSpan="md:row-span-1"
                    />

                    <BentoCard
                        title="Energy Return"
                        value="98.4%"
                        desc="Kinetic energy is not absorbed. It is violently expelled back up through the sole upon every single strike."
                        colSpan="md:col-span-1"
                        rowSpan="md:row-span-2"
                    />

                    <BentoCard
                        title="Iterations"
                        value="412"
                        desc="Failed chemical polymer mixes before discovering the stable Matrix-04 compound."
                        colSpan="md:col-span-1"
                        rowSpan="md:row-span-1"
                    />

                    <BentoCard
                        title="Active Patents"
                        value="14"
                        desc="Protecting the microscopic vacuum chambers woven directly into our AeroWeave fabric."
                        colSpan="md:col-span-1"
                        rowSpan="md:row-span-1"
                    />

                </div>
            </div>
        </section>
    );
}
