"use client";

import Link from "next/link";
import React from "react";

interface CloudButtonProps {
    text: string;
    href: string;
}

export default function CloudButton({ text, href }: CloudButtonProps) {
    return (
        <Link
            href={href}
            className="group relative flex items-center justify-center px-8 py-4 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
            {/* SVG Cloud Shape */}
            <svg
                viewBox="0 0 200 80"
                className="absolute inset-0 h-full w-full fill-white/10 stroke-white/20 stroke-[1.5] transition-all duration-300 group-hover:fill-white/20 group-hover:stroke-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                preserveAspectRatio="none"
            >
                <path
                    d="M25,45 
             Q10,45 10,30 
             Q10,15 25,15 
             Q30,5 50,5 
             Q70,5 75,15 
             Q85,5 110,5 
             Q135,5 140,20 
             Q155,10 170,20 
             Q190,20 190,40 
             Q190,60 170,60 
             Q160,75 140,75 
             Q120,75 110,65 
             Q100,75 70,75 
             Q50,75 45,65 
             Q30,70 15,60 
             Q10,55 25,45 
             Z"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Text */}
            <span className="relative z-10 text-sm font-bold tracking-wide text-white drop-shadow-md">
                {text}
            </span>
        </Link>
    );
}
