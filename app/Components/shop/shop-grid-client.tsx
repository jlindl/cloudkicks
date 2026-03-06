"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


interface ProductNode {
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
}

const ProductCard = ({ node }: { node: ProductNode }) => {
    const ref = useRef<HTMLAnchorElement>(null);


    // Mouse coordinates for 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Mouse coordinates for radial glow
    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);

    // Spring physics for smooth tilt
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const rotateX = useSpring(useMotionTemplate`calc(${mouseY} * -15deg)`, springConfig);
    const rotateY = useSpring(useMotionTemplate`calc(${mouseX} * 15deg)`, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Coordinates for tilt (normalized -0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);

        // Coordinates for glow (pixels relative to card)
        glowX.set(e.clientX - rect.left);
        glowY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const imageNode = node.images.edges[0]?.node;

    return (
        <motion.div
            style={{ perspective: 1200 }}
            className="h-full w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Link
                href={`/products/${node.handle}`}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col h-full bg-neutral-900/50 backdrop-blur-xl rounded-[2rem] border border-white/5 transition-colors duration-500 overflow-hidden block"
            >
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-full h-full flex flex-col"
                >
                    {/* Radial Glow Spotlight */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    600px circle at ${glowX}px ${glowY}px,
                                    rgba(255,255,255,0.1),
                                    transparent 40%
                                )
                            `,
                        }}
                    />

                    {/* Image Container */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-t-[2rem] bg-black/40">
                        {imageNode && (
                            <Image
                                src={imageNode.url}
                                alt={imageNode.altText || node.title}
                                fill
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                        )}

                        {/* Hover Overlay dimming */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10" />

                        {/* Slide-up Action Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex justify-center">
                            <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-2xl">
                                View Details <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Product Meta */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]">
                        <div className="flex justify-between items-start gap-4 mb-2">
                            <h3 className="text-2xl font-kanit font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300 leading-tight uppercase tracking-tight">
                                {node.title}
                            </h3>
                            <p className="text-xl font-mono text-white shrink-0 mt-1">
                                {node.priceRange.minVariantPrice.amount}
                                <span className="text-xs text-neutral-500 ml-1 uppercase">
                                    {node.priceRange.minVariantPrice.currencyCode}
                                </span>
                            </p>
                        </div>
                        <p className="text-sm text-neutral-400 line-clamp-2 font-light leading-relaxed mt-auto">
                            {node.description}
                        </p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default function ShopGridClient({ products }: { products: { node: ProductNode }[] }) {
    if (!products?.length) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map(({ node }) => (
                <ProductCard key={node.handle} node={node} />
            ))}
        </div>
    );
}
