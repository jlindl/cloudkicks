"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import { motion } from "framer-motion";

interface Product {
    node: {
        id: string;
        handle: string;
        title: string;
        priceRange: {
            minVariantPrice: {
                amount: string;
                currencyCode: string;
            };
        };
        images: {
            edges: {
                node: {
                    url: string;
                    altText: string;
                };
            }[];
        };
    };
}

export default function DynamicShowcaseClient({ products }: { products: Product[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    if (!products || products.length === 0) return null;

    // Use up to 2 products since the user only has 2 available drops
    const displayProducts = products.slice(0, 2);

    return (
        <section className="w-full bg-black font-inter py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-center justify-start gap-6 md:gap-10">
                <ScrollReveal direction="left" distance={50} duration={0.8}>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-kanit text-white tracking-wide uppercase leading-normal md:leading-tight">
                        Shop The{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">
                            Drop&nbsp;
                        </span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal direction="left" distance={30} delay={0.2} duration={0.8} className="hidden md:block">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </ScrollReveal>

                <ScrollReveal direction="left" distance={30} delay={0.4} duration={0.8}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
                        <p className="text-neutral-200 text-xs md:text-sm font-mono tracking-[0.2em] uppercase font-bold">
                            Only 200 pairs released
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Expandable Bento Showcase Grid */}
            <ScrollReveal direction="up" distance={40} duration={1} delay={0.2}>
                <div className="container mx-auto px-6 h-[600px] md:h-[700px] flex flex-col md:flex-row gap-4 lg:gap-6">
                    {displayProducts.map(({ node }, index) => {
                        const price = node.priceRange.minVariantPrice;
                        const image = node.images.edges[0]?.node;
                        const isHovered = hoveredIndex === index;
                        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

                        return (
                            <motion.div
                                key={node.id}
                                className="relative rounded-[2rem] overflow-hidden cursor-pointer"
                                animate={{
                                    flex: isHovered ? 2 : (isOtherHovered ? 0.8 : 1),
                                }}
                                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Link href={`/products/${node.handle}`} className="block w-full h-full relative group">
                                    {/* Main Product Image */}
                                    <motion.img
                                        src={image?.url}
                                        alt={image?.altText || node.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        animate={{
                                            scale: isHovered ? 1.05 : 1.0,
                                            filter: isOtherHovered ? "grayscale(80%) blur(4px) brightness(0.5)" : "grayscale(0%) blur(0px) brightness(1)",
                                        }}
                                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                    />

                                    {/* Moody Gradient Sub-layer */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"
                                        animate={{ opacity: isHovered ? 0.9 : 0.6 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Content Container */}
                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end pointer-events-none">
                                        <motion.div
                                            animate={{
                                                y: isHovered ? 0 : 20,
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="max-w-2xl"
                                        >
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-kanit font-black text-white uppercase tracking-tighter leading-[0.85] mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                                {node.title}
                                            </h3>

                                            {/* Expandable Price & CTA row */}
                                            <motion.div
                                                className="flex items-center gap-4 mt-8 overflow-hidden"
                                                animate={{
                                                    opacity: isHovered ? 1 : 0,
                                                    height: isHovered ? "auto" : 0,
                                                }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <p className="text-white font-mono text-xl md:text-2xl mr-auto font-bold tracking-wider">
                                                    {price.amount} {price.currencyCode}
                                                </p>
                                                <div className="w-14 h-14 rounded-full border border-white/30 flex shrink-0 items-center justify-center bg-white/10 backdrop-blur-md">
                                                    <ArrowUpRight className="w-7 h-7 text-white" />
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </ScrollReveal>
        </section>
    );
}
