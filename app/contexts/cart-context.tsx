"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "../../lib/shopify";
import { CREATE_CART_MUTATION, ADD_TO_CART_MUTATION } from "../../lib/shopify/mutations";
import { Cart } from "../../lib/shopify/types";

type CartContextType = {
    cart: Cart | undefined;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    addToCart: (variantId: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Cart | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const localCartId = localStorage.getItem("shopify_cart_id");
        if (localCartId) {
            // Fetch existing cart (implementation skipped for brevity, usually we query getCart)
            // For now, we'll start fresh or improve this later
        }
    }, []);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const addToCart = async (variantId: string) => {
        try {
            let cartId = cart?.id || localStorage.getItem("shopify_cart_id");

            if (!cartId) {
                // Create Cart
                const { data } = await client.request(CREATE_CART_MUTATION, {
                    variables: {
                        lines: [{ merchandiseId: variantId, quantity: 1 }],
                    },
                });
                const newCart = data.cartCreate.cart;
                setCart(newCart);
                localStorage.setItem("shopify_cart_id", newCart.id);
                openCart();
            } else {
                // Add to existing cart
                const { data } = await client.request(ADD_TO_CART_MUTATION, {
                    variables: {
                        cartId,
                        lines: [{ merchandiseId: variantId, quantity: 1 }],
                    },
                });
                setCart(data.cartLinesAdd.cart);
                openCart();
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, isOpen, openCart, closeCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
