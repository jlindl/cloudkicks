"use client";

import { useCart } from "../../contexts/cart-context";
import { useState } from "react";
import { ShoppingBag, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCartButton({ variantId }: { variantId: string }) {
    const { addToCart, openCart } = useCart();
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleAddToCart = async () => {
        if (!variantId) return;
        setStatus("loading");
        await addToCart(variantId);
        setStatus("success");

        // Open cart after short delay to show success state
        setTimeout(() => {
            openCart();
            setStatus("idle");
        }, 1000);
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={status === "loading" || status === "success"}
            className={`
                relative w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all overflow-hidden
                ${status === "success"
                    ? "bg-white text-black hover:bg-neutral-200"
                    : status === "loading"
                        ? "bg-neutral-800 text-neutral-400 cursor-not-allowed"
                        : "bg-white text-black hover:bg-neutral-200"
                }
            `}
        >
            <AnimatePresence mode="wait" initial={false}>
                {status === "loading" ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Adding...</span>
                    </motion.div>
                ) : status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <Check className="w-5 h-5" />
                        <span>Added to Cart</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        <span>Add to Cart</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
