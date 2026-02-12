"use client";

import React, { useState } from "react";
import { CartLine } from "../../../lib/shopify/types";
import { useCart } from "../../contexts/cart-context";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface CartItemProps {
    item: CartLine;
}

export default function CartItem({ item }: CartItemProps) {
    const { updateCartItem, removeCartItem } = useCart();
    const [updating, setUpdating] = useState(false);

    const { id, quantity, merchandise } = item;
    const { product, image, price } = merchandise;

    const handleUpdateQuantity = async (newQuantity: number) => {
        if (newQuantity < 1) return;
        setUpdating(true);
        await updateCartItem(id, newQuantity);
        setUpdating(false);
    };

    const handleRemove = async () => {
        setUpdating(true);
        await removeCartItem(id);
        setUpdating(false);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="group relative flex gap-4 p-4 bg-neutral-800/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
        >
            {/* Image */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-black shrink-0 border border-white/5">
                {image && (
                    <img
                        src={image.url}
                        alt={image.altText || product.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-white leading-tight">
                            {product.title}
                        </h3>
                        <p className="font-mono text-sm text-emerald-400 shrink-0">
                            {price.amount} {price.currencyCode}
                        </p>
                    </div>
                    <p className="text-sm text-neutral-400 mt-1">{merchandise.title}</p>
                </div>

                <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-black rounded-lg p-1 border border-white/5">
                        <button
                            onClick={() => handleUpdateQuantity(quantity - 1)}
                            disabled={updating || quantity <= 1}
                            className="p-1 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>

                        <span className="w-8 text-center text-sm font-medium font-mono text-white">
                            {updating ? (
                                <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                            ) : (
                                quantity
                            )}
                        </span>

                        <button
                            onClick={() => handleUpdateQuantity(quantity + 1)}
                            disabled={updating}
                            className="p-1 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white disabled:opacity-50 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={handleRemove}
                        disabled={updating}
                        className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
