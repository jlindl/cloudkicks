"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "glass";
    showArrow?: boolean;
    type?: "button" | "submit" | "reset";
}

const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    onClick,
    children,
    className = "",
    variant = "primary",
    showArrow = false,
    type = "button",
}) => {
    const baseStyles = "group relative inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 overflow-hidden";

    const variants = {
        primary: "bg-white text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 py-4 px-8 text-lg",
        secondary: "bg-white/10 text-white border border-white/10 hover:bg-white hover:text-black backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 py-3 px-6 text-base",
        glass: "bg-white/5 text-white border border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 py-4 px-8 text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
    };

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {showArrow && (
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
            </span>

            {/* Primary Hover Effect: Sliding Pane */}
            {variant === "primary" && (
                <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0" />
            )}

            {/* Secondary/Glass Hover Effect: Shimmer */}
            {(variant === "secondary" || variant === "glass") && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {content}
        </button>
    );
};

export default CTAButton;
