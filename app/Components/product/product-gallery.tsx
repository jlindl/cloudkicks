"use client";

import React, { useState } from "react";
import { } from "framer-motion"; // Keeping for consistency or removing if empty
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImage {
    url: string;
    altText: string;
}

interface ProductGalleryProps {
    images: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filter out any invalid images just in case
    const validImages = images.filter(img => img.url);

    if (validImages.length === 0) {
        return <div className="w-full h-96 bg-neutral-900 rounded-3xl animate-pulse" />;
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    return (
        <div className="w-full h-full flex flex-col gap-4">

            {/* Mobile: Horizontal Scroll Snap Carousel */}
            <div className="lg:hidden relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900">
                <div
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
                    onScroll={(e) => {
                        const scrollLeft = e.currentTarget.scrollLeft;
                        const width = e.currentTarget.offsetWidth;
                        const index = Math.round(scrollLeft / width);
                        setCurrentImageIndex(index);
                    }}
                >
                    {validImages.map((image, idx) => (
                        <div key={idx} className="snap-center shrink-0 w-full h-full relative">
                            <img
                                src={image.url}
                                alt={image.altText || `Product View ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                        </div>
                    ))}
                </div>

                {/* Mobile Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {validImages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>

                {/* Mobile Navigation Arrows (Optional, mostly for swipe hint) */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:bg-black/40 hidden sm:flex"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:bg-black/40 hidden sm:flex"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Desktop: Vertical Stack Grid */}
            <div className="hidden lg:flex flex-col gap-6">
                {validImages.map((image, idx) => (
                    <div
                        key={idx}
                        className="relative w-full rounded-3xl overflow-hidden bg-neutral-900 group"
                    >
                        {/* Applying different aspect ratios for variety if needed, but standard is safest */}
                        <img
                            src={image.url}
                            alt={image.altText || `Product View ${idx + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default ProductGallery;
