"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Product {
    node: {
        id: string;
        handle: string;
        title: string;
        description: string;
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
    const [activeId, setActiveId] = useState<string | null>(products[0]?.node.id || null);
    const router = useRouter();

    const handleCardClick = (id: string, handle: string) => {
        if (activeId === id) {
            router.push(`/products/${handle}`);
        } else {
            setActiveId(id);
        }
    };

    return (
        <section className="w-full bg-black font-inter py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                        Next Gen<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Collection</span>
                    </h2>
                </div>
                <p className="text-neutral-400 max-w-sm text-sm md:text-base">
                    Experience the future of comfort.
                    <span className="hidden lg:inline"> Click to expand, click again to view.</span>
                    <span className="lg:hidden"> Swipe to explore.</span>
                </p>
            </div>

            {/* Mobile View: Vertical Snap */}
            <div className="flex lg:hidden flex-col gap-6 px-4 snap-y snap-mandatory h-[80vh] overflow-y-auto no-scrollbar">
                {products.map(({ node }) => {
                    const price = node.priceRange.minVariantPrice;
                    const image = node.images.edges[0]?.node;

                    return (
                        <div key={node.id} className="snap-center shrink-0 h-full py-4">
                            <Link
                                href={`/products/${node.handle}`}
                                className="group relative block w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                            >
                                <img
                                    src={image?.url}
                                    alt={image?.altText || node.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-3">
                                    <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                        New Arrival
                                    </div>
                                    <h3 className="text-4xl font-black text-white leading-none uppercase">{node.title}</h3>
                                    <p className="text-white/80 font-mono text-xl">
                                        {price.amount} {price.currencyCode}
                                    </p>
                                </div>

                                <div className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                                    <ArrowRight className="w-6 h-6 -rotate-45" />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Desktop View: Interactive Accordion */}
            <div className="hidden lg:flex h-[650px] gap-4 px-6 max-w-[1600px] mx-auto">
                {products.map(({ node }) => {
                    const isActive = activeId === node.id;
                    const price = node.priceRange.minVariantPrice;
                    const image = node.images.edges[0]?.node;

                    return (
                        <motion.div
                            key={node.id}
                            layout
                            onClick={() => handleCardClick(node.id, node.handle)}
                            initial={false}
                            animate={{ flex: isActive ? 3.5 : 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer border-2 
                                ${isActive ? "border-white shadow-[0_0_50px_rgba(255,255,255,0.2)]" : "border-white/5 hover:border-white/20"}`}
                        >
                            <motion.img
                                src={image?.url}
                                alt={image?.altText || node.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                animate={{ scale: isActive ? 1.1 : 1, filter: isActive ? "grayscale(0%)" : "grayscale(80%)" }}
                                transition={{ duration: 0.8 }}
                            />

                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 transition-opacity duration-500 ${isActive ? "opacity-90" : "opacity-70"}`} />

                            {/* Active Content */}
                            <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="absolute inset-0 p-10 flex flex-col justify-end items-start"
                                    >
                                        <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                            Selected
                                        </div>
                                        <h3 className="text-6xl font-black text-white leading-none uppercase tracking-tighter mb-4">
                                            {node.title}
                                        </h3>
                                        <p className="text-white/70 max-w-lg text-lg line-clamp-2 mb-8">
                                            {node.description}
                                        </p>

                                        <div className="flex items-center gap-6 w-full">
                                            <span className="text-3xl font-mono text-white">
                                                {price.amount} {price.currencyCode}
                                            </span>
                                            <button className="flex-1 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group">
                                                View Product Details
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Inactive Content */}
                            {!isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 p-8 flex flex-col justify-end"
                                >
                                    <h3 className="text-2xl font-bold text-white/50 text-vertical-rl rotate-180 uppercase tracking-widest origin-bottom-left">
                                        {node.title}
                                    </h3>
                                    <div className="absolute top-8 right-8 text-white/30">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                            <span className="text-2xl">+</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </section>
    );
}
