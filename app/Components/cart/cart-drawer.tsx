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
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-black border-l border-white/10 shadow-2xl flex flex-col font-inter"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <ShoppingBag className="w-5 h-5 text-emerald-400" />
                                </div>
                                Your Cart
                                <span className="text-sm font-normal text-neutral-500 ml-2 font-mono">
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
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {!cart?.lines.edges.length ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-neutral-600" />
                                    </div>
                                    <p className="text-neutral-400 text-lg">Your cart is empty.</p>
                                    <button
                                        onClick={closeCart}
                                        className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                                    >
                                        Start Shopping &rarr;
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
                            <div className="p-6 bg-black border-t border-white/10 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-neutral-400">
                                        <span>Subtotal</span>
                                        <span className="font-mono">{cart.cost.subtotalAmount.amount} {cart.cost.subtotalAmount.currencyCode}</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-400">
                                        <span>Taxes</span>
                                        <span className="font-mono">{cart.cost.totalTaxAmount?.amount || "0.00"} {cart.cost.subtotalAmount.currencyCode}</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/5">
                                        <span>Total</span>
                                        <span className="font-mono">{cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</span>
                                    </div>
                                </div>

                                <a
                                    href={cart.checkoutUrl}
                                    className="group w-full bg-white text-black py-4 rounded-xl font-bold text-lg flex items-center justify-between px-6 hover:bg-emerald-400 transition-colors duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        Checkout <Lock className="w-4 h-4 opacity-50" />
                                    </span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
