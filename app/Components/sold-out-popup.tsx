"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoldOutPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 700);
        return () => clearTimeout(timer);
    }, []);

    const close = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
                    />

                    {/* Dialog */}
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="sold-out-title"
                            initial={{ opacity: 0, scale: 0.92, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 12 }}
                            transition={{ type: "spring", damping: 26, stiffness: 280 }}
                            className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-xl font-inter"
                        >
                            {/* Ambient glow */}
                            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

                            <button
                                onClick={close}
                                aria-label="Close"
                                className="absolute right-4 top-4 z-10 rounded-full p-2 text-neutral-400 transition hover:bg-white/10 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative z-[1] flex flex-col items-center px-8 pb-8 pt-10 text-center">
                                {/* Logo */}
                                <Image
                                    src="/assets/Cloudkickslogo.png"
                                    alt="CloudKicks"
                                    width={260}
                                    height={120}
                                    priority
                                    className="mb-2 h-24 w-auto object-contain drop-shadow-lg"
                                />

                                <h2
                                    id="sold-out-title"
                                    className="mb-3 font-kanit text-4xl font-black uppercase leading-[0.9] tracking-[0.02em] text-white md:text-5xl"
                                >
                                    Drop 1
                                    <br />
                                    Sold Out
                                </h2>

                                <p className="mb-6 text-sm text-neutral-300 md:text-base">
                                    Drop 2 coming this Autumn.
                                </p>

                                <div className="flex w-full flex-col gap-3">
                                    <a
                                        href="https://www.instagram.com/cloudkicks.store/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={close}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                                    >
                                        <Instagram className="h-4 w-4" />
                                        Keep an eye on our Instagram
                                    </a>
                                    <button
                                        onClick={close}
                                        className="w-full rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white"
                                    >
                                        Keep browsing
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
