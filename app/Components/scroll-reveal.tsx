"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    delay?: number;
    duration?: number;
    distance?: number;
    scale?: number;
    once?: boolean;
    threshold?: number;
    blur?: boolean;
    stagger?: number;
    as?: keyof React.JSX.IntrinsicElements;
}

const getDirectionOffset = (direction: Direction, distance: number) => {
    switch (direction) {
        case "up": return { x: 0, y: distance };
        case "down": return { x: 0, y: -distance };
        case "left": return { x: distance, y: 0 };
        case "right": return { x: -distance, y: 0 };
        case "none": return { x: 0, y: 0 };
    }
};

export default function ScrollReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.7,
    distance = 40,
    scale = 1,
    once = true,
    threshold = 0.15,
    blur = false,
    as = "div",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const offset = getDirectionOffset(direction, distance);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            scale: scale,
            filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for silky motion
            },
        },
    };

    const MotionComponent = motion[as as "div"] as typeof motion.div;

    return (
        <MotionComponent
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </MotionComponent>
    );
}

/* StaggerContainer: wraps children so they can animate with stagger */
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    threshold = 0.1,
    once = true,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
    once?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* StaggerItem: a child of StaggerContainer */
export function StaggerItem({
    children,
    className = "",
    direction = "up",
    distance = 30,
}: {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    distance?: number;
}) {
    const offset = getDirectionOffset(direction, distance);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: offset.x, y: offset.y },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                },
            }}
            className={className}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}
