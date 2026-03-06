
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../contexts/cart-context";
import { ShoppingBag, Menu, X, Instagram, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileHeader() {
    const { openCart, totalQuantity } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navLinks = [
        { label: "Shop All", href: "/shop" },
        { label: "About Us", href: "/about" },
        { label: "Our Mission", href: "/about#mission" },
        { label: "Contact", href: "#footer" },
    ];

    return (
        <div className="md:hidden w-full px-4 py-3">
            <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 shadow-2xl">

                {/* Menu Trigger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Open Menu"
                >
                    <Menu className="h-6 w-6" />
                </button>

                {/* Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center -top-4">
                    <Image
                        src="/assets/Cloudkickslogo.png"
                        alt="CloudKicks Logo"
                        width={180}
                        height={60}
                        className="h-24 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                    />
                </Link>

                {/* Cart Icon */}
                <button
                    onClick={openCart}
                    className="relative p-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Cart"
                >
                    <ShoppingBag className="h-6 w-6" />
                    {totalQuantity > 0 && (
                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black text-[10px] font-bold shadow-lg">
                            {totalQuantity}
                        </span>
                    )}
                </button>
            </div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col"
                    >
                        {/* Header area in menu */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">
                            <Image
                                src="/assets/Cloudkickslogo.png"
                                alt="CloudKicks Logo"
                                width={140}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 bg-white/5 rounded-full text-white/80 hover:text-white transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-8 py-12 flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between text-3xl font-black uppercase tracking-tighter text-white"
                                    >
                                        <span>{link.label}</span>
                                        <ChevronRight className="h-6 w-6 text-white/20 group-hover:text-white transition-colors" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Footer area in menu */}
                        <div className="px-8 pb-12 pt-6 border-t border-white/5 space-y-6">
                            <div className="flex items-center gap-6">
                                <Link
                                    href="https://www.instagram.com/cloudkicks.store/"
                                    target="_blank"
                                    className="p-4 bg-white/5 rounded-2xl text-white/80 hover:text-white transition-all hover:scale-105"
                                >
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Follow Us</p>
                                    <p className="text-sm text-neutral-300">@cloudkicks.store</p>
                                </div>
                            </div>

                            <Link
                                href="/shop"
                                onClick={() => setIsOpen(false)}
                                className="block w-full bg-white text-black text-center py-5 rounded-2xl font-black uppercase tracking-tighter text-lg shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)]"
                            >
                                Shop Collection
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
