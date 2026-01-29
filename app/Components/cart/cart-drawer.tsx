"use client";

import React from "react";
import { useCart } from "../../contexts/cart-context";
import { X, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
    const { cart, isOpen, closeCart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-neutral-900 border-l border-white/10 h-full p-6 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold font-inter text-white flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        Cart
                    </h2>
                    <button onClick={closeCart} className="p-2 hover:bg-white/10 rounded-full transition text-white/70 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto space-y-6">
                    {!cart?.lines.edges.length ? (
                        <p className="text-gray-400 text-center py-12">Your cart is empty.</p>
                    ) : (
                        cart.lines.edges.map(({ node }) => (
                            <div key={node.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                                    <img src={node.merchandise.image.url} alt={node.merchandise.image.altText} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-medium">{node.merchandise.product.title}</h3>
                                    <p className="text-sm text-gray-400">{node.merchandise.title}</p>
                                    <p className="mt-2 text-white/90">
                                        {node.quantity} x {node.merchandise.price.amount} {node.merchandise.price.currencyCode}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart && cart.lines.edges.length > 0 && (
                    <div className="border-t border-white/10 pt-6 mt-6">
                        <div className="flex justify-between text-white font-bold text-lg mb-4">
                            <span>Total</span>
                            <span>{cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</span>
                        </div>
                        <a
                            href={cart.checkoutUrl}
                            className="block w-full bg-white text-black text-center py-3 font-bold rounded-lg hover:bg-gray-200 transition"
                        >
                            Checkout
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
