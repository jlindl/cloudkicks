"use client";

import { useCart } from "../../contexts/cart-context";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function AddToCartButton({ variantId }: { variantId: string }) {
    const { addToCart, openCart } = useCart();
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        if (!variantId) return;
        setLoading(true);
        await addToCart(variantId);
        setLoading(false);
        openCart();
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={loading}
            className={`
        w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all
        ${loading
                    ? "bg-neutral-700 text-gray-400 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-white/10"
                }
      `}
        >
            <ShoppingBag className="w-5 h-5" />
            {loading ? "Adding..." : "Add to Cart"}
        </button>
    );
}
