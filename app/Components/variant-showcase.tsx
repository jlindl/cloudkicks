"use client";

import React from "react";
import Reveal from "./reveal";
import TiltedCard from "./tilted-card";
import CTAButton from "./cta-button";

const variants = [
    {
        id: "magma",
        name: "Magma Edition",
        price: "159.00 GBP",
        color: "Volcanic Red",
        image: "/assets/variant_magma.png",
        description: "Forged in fire. The hottest drop of the season."
    },
    {
        id: "ice",
        name: "Arctic Ice",
        price: "159.00 GBP",
        color: "Glacial Blue",
        image: "/assets/variant_ice.png",
        description: "Stay cool. Crystal clear comfort below zero."
    },
    {
        id: "cyber",
        name: "Cyber Neon",
        price: "159.00 GBP",
        color: "Electric Purple",
        image: "/assets/variant_cyber.png",
        description: "Future ready. Glow through the night."
    }
];

const VariantShowcase: React.FC = () => {
    return (
        <section className="w-full bg-black px-6 py-24 text-white font-inter font-bold">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <Reveal>
                        <p className="text-sm uppercase tracking-wide text-neutral-500">Limited Editions</p>
                        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Element</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {variants.map((variant, index) => (
                        <Reveal key={variant.id} delay={index * 100} className="w-full h-full">
                            <TiltedCard
                                imageSrc={variant.image}
                                altText={variant.name}
                                captionText=""
                                containerHeight="450px"
                                containerWidth="100%"
                                imageHeight="350px"
                                imageWidth="350px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{variant.name}</h3>
                                                <p className="text-sm text-neutral-400">{variant.color}</p>
                                            </div>
                                            <p className="text-lg font-mono text-white">{variant.price}</p>
                                        </div>
                                        <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                                            {variant.description}
                                        </p>
                                        <CTAButton variant="secondary" className="w-full">
                                            View Details
                                        </CTAButton>
                                    </div>
                                }
                                containerClass="bg-black border border-white/10 rounded-2xl overflow-hidden"
                            />
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VariantShowcase;
