"use client";

import React, { useRef, useState } from "react";

// Types for the TiltedCard component
interface TiltedCardProps {
    imageSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string | number;
    containerWidth?: string | number;
    imageHeight?: string | number;
    imageWidth?: string | number;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
    children?: React.ReactNode;
}

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    children,
    containerClass = "bg-black",
}: TiltedCardProps & { containerClass?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -rotateAmplitude;
        const rotY = ((x - centerX) / centerX) * rotateAmplitude;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseEnter = () => {
        setScale(scaleOnHover);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center cursor-pointer"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[400ms] ease-out will-change-transform"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                }}
            >
                <div className={`relative w-full h-full overflow-hidden rounded-[15px] shadow-md ${containerClass}`}>
                    {children ? (
                        children
                    ) : (
                        <div style={{ backgroundImage: `url(${imageSrc})` }} className="absolute inset-0 bg-cover bg-center">
                            {displayOverlayContent && overlayContent && (
                                <div className="absolute inset-0 z-[2]">
                                    {overlayContent}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {showTooltip && (
                    <figcaption className="pointer-events-none absolute left-0 right-0 top-0 z-[3] hidden p-2 px-3 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100 sm:block">
                        {captionText}
                    </figcaption>
                )}
            </div>
        </figure>
    );
}
