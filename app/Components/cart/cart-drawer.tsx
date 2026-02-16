"use client";

import React from "react";
import { useCart } from "../../contexts/cart-context";
import { X, ShoppingBag, ArrowRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./cart-item";

export default function CartDrawer() {
    const { cart, isOpen, closeCart } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-black/80 border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col font-inter"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
                            <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                                    <ShoppingBag className="w-5 h-5 text-white" />
                                </div>
                                Your Cart
                                <span className="text-sm font-normal text-neutral-400 ml-2 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                                    {cart?.lines.edges.reduce((acc, { node }) => acc + node.quantity, 0) || 0} items
                                </span>
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-white/10 rounded-full transition text-neutral-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {!cart?.lines.edges.length ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                        <ShoppingBag className="w-10 h-10 text-neutral-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
                                        <p className="text-neutral-400 text-sm max-w-[200px] mx-auto">
                                            Looks like you haven't added anything to your cart yet.
                                        </p>
                                    </div>
                                    <button
                                        onClick={closeCart}
                                        className="text-white hover:text-neutral-300 font-medium transition-colors flex items-center gap-2 group"
                                    >
                                        Start Shopping
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <AnimatePresence initial={false} mode="popLayout">
                                    {cart.lines.edges.map(({ node }) => (
                                        <CartItem key={node.id} item={node} />
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Footer */}
                        {cart && cart.lines.edges.length > 0 && (
                            <div className="p-6 bg-black/40 border-t border-white/10 space-y-4 backdrop-blur-md">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-neutral-400 text-sm">
                                        <span>Subtotal</span>
                                        <span className="font-mono text-white">{cart.cost.subtotalAmount.amount} {cart.cost.subtotalAmount.currencyCode}</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-400 text-sm">
                                        <span>Taxes</span>
                                        <span className="font-mono text-white">{cart.cost.totalTaxAmount?.amount || "0.00"} {cart.cost.subtotalAmount.currencyCode}</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10">
                                        <span>Total</span>
                                        <span className="font-mono text-white text-2xl tracking-tighter drop-shadow-lg">
                                            {cart.cost.totalAmount.amount} <span className="text-base text-white/50 align-top">{cart.cost.totalAmount.currencyCode}</span>
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={cart.checkoutUrl}
                                    className="group relative w-full bg-white text-black py-4 rounded-xl font-bold text-lg flex items-center justify-between px-6 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                        Checkout <Lock className="w-4 h-4 opacity-50" />
                                    </span>
                                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                                </a>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
