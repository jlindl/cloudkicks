"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

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
    if (!products || products.length === 0) return null;

    // Use up to 5 products for the carousel so it repeats predictably
    const carouselProducts = products.slice(0, 5);

    return (
        <section className="w-full bg-black font-inter py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <ScrollReveal direction="left" distance={50} duration={0.8}>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-kanit text-white tracking-tighter uppercase leading-[0.9]">
                        Signature<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">
                            Series
                        </span>
                    </h2>
                </ScrollReveal>
                <ScrollReveal direction="left" distance={30} delay={0.2} duration={0.8}>
                    <p className="text-neutral-400 max-w-sm text-lg font-light tracking-wide">
                        Experience our most coveted drops in full cinematic glory. Hover to explore.
                    </p>
                </ScrollReveal>
            </div>

            {/* Cinematic Carousel */}
            <ScrollReveal direction="up" distance={40} duration={1} delay={0.2}>
                <div className="relative w-full pb-16 flex items-center overflow-x-hidden pt-10 group/carousel">

                    {/* Fading Edges for depth */}
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                    <div className="carousel-track flex w-max">
                        {/* Render 4 identical sets to ensure a seamless infinite loop */}
                        {[0, 1, 2, 3].map((setIndex) => (
                            <div key={setIndex} className="flex gap-6 px-3">
                                {carouselProducts.map(({ node }, index) => {
                                    const price = node.priceRange.minVariantPrice;
                                    const image = node.images.edges[0]?.node;

                                    return (
                                        <Link
                                            key={`${node.id}-${setIndex}-${index}`}
                                            href={`/products/${node.handle}`}
                                            className="carousel-card relative w-[280px] h-[400px] md:w-[420px] md:h-[550px] shrink-0 rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 block shadow-2xl"
                                        >
                                            <img
                                                src={image?.url}
                                                alt={image?.altText || node.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 transition-opacity duration-500 card-gradient" />

                                            {/* Content */}
                                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                                <div className="translate-y-4 transition-transform duration-500 card-content">
                                                    <h3 className="text-2xl md:text-5xl font-kanit font-black text-white uppercase tracking-tighter leading-[0.85] mb-4">
                                                        {node.title}
                                                    </h3>

                                                    <div className="flex items-center justify-between opacity-0 transition-opacity duration-500 delay-100 card-meta">
                                                        <p className="text-white/90 font-mono text-base md:text-xl">
                                                            {price.amount} {price.currencyCode}
                                                        </p>

                                                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
                                                            <ArrowUpRight className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            <style jsx global>{`
                .carousel-track {
                    animation: scroll-left 40s linear infinite;
                    will-change: transform;
                }
                
                /* Pause on hover */
                .carousel-track:hover {
                    animation-play-state: paused;
                }
                
                /* 4 identical blocks. Translating by -25% shifts exactly 1 block over, making a seamless loop */
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }

                /* Sibling dimming effect: when carousel is hovered, dim ALL cards... */
                .group\\/carousel:hover .carousel-card {
                    opacity: 0.3;
                    filter: grayscale(80%) blur(2px);
                    transform: scale(0.95);
                }
                
                /* ...except the one actively being hovered */
                .group\\/carousel .carousel-card:hover {
                    opacity: 1;
                    filter: grayscale(0%) blur(0px);
                    transform: scale(1.05);
                    z-index: 20;
                    box-shadow: 0 0 80px rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.4);
                }
                
                .carousel-card {
                    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }

                /* Card inner element hover states (replacing generic group-hover for more specific targeting) */
                .carousel-card:hover .card-gradient {
                    opacity: 0.95;
                }
                
                .carousel-card:hover .card-content {
                    transform: translateY(0);
                }
                
                .carousel-card:hover .card-meta {
                    opacity: 1;
                }
                
                .carousel-card:hover img {
                    transform: scale(1.1);
                }
                
                @media (max-width: 768px) {
                    .carousel-track {
                        animation-duration: 25s;
                    }
                }
            `}</style>
        </section>
    );
}
