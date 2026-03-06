"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { client } from "../../lib/shopify";
import {
    CREATE_CART_MUTATION,
    ADD_TO_CART_MUTATION,
    UPDATE_CART_LINES_MUTATION,
    REMOVE_FROM_CART_MUTATION
} from "../../lib/shopify/mutations";
import { Cart } from "../../lib/shopify/types";

type CartContextType = {
    cart: Cart | undefined;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    addToCart: (variantId: string) => Promise<void>;
    updateCartItem: (lineId: string, quantity: number) => Promise<void>;
    removeCartItem: (lineId: string) => Promise<void>;
    totalQuantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Cart | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const localCartId = localStorage.getItem("shopify_cart_id");
        if (localCartId) {
            // In a real app, we would verify this ID with Shopify
            // For now, we rely on subsequent operations or a fresh fetch if we had a query for it.
            // Since we don't have a specific "Get Cart" query easily available in this context without
            // writing one, we'll optimistically assume it's valid or let the next action fix it.
            // Ideally: fetchCart(localCartId).then(setCart)
        }
    }, []);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const totalQuantity = useMemo(() => {
        return cart?.lines.edges.reduce((sum, { node }) => sum + node.quantity, 0) || 0;
    }, [cart]);

    const addToCart = async (variantId: string) => {
        try {
            const cartId = cart?.id || localStorage.getItem("shopify_cart_id");

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
            // If error is "Cart not found", we should clear local storage and retry (simplified here)
            if (JSON.stringify(error).includes("Cart not found")) {
                localStorage.removeItem("shopify_cart_id");
                // Retry creation logic could go here
            }
        }
    };

    const updateCartItem = async (lineId: string, quantity: number) => {
        const cartId = cart?.id;
        if (!cartId) return;

        try {
            const { data } = await client.request(UPDATE_CART_LINES_MUTATION, {
                variables: {
                    cartId,
                    lines: [{ id: lineId, quantity }],
                },
            });
            setCart(data.cartLinesUpdate.cart);
        } catch (error) {
            console.error("Error updating cart item:", error);
        }
    };

    const removeCartItem = async (lineId: string) => {
        const cartId = cart?.id;
        if (!cartId) return;

        try {
            const { data } = await client.request(REMOVE_FROM_CART_MUTATION, {
                variables: {
                    cartId,
                    lineIds: [lineId],
                },
            });
            setCart(data.cartLinesRemove.cart);
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                isOpen,
                openCart,
                closeCart,
                addToCart,
                updateCartItem,
                removeCartItem,
                totalQuantity
            }}
        >
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
