"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    emailAddress?: { emailAddress: string };
    phoneNumber?: { phoneNumber: string };
    defaultAddress?: {
        address1: string;
        address2?: string;
        city: string;
        province: string;
        country: string;
        zip: string;
    };
    orders?: {
        edges: Array<{
            node: {
                id: string;
                orderNumber: number;
                processedAt: string;
                totalPrice: { amount: string; currencyCode: string };
                fulfillmentStatus: string;
            };
        }>;
    };
}

interface AuthContextType {
    customer: Customer | null;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Check if user is logged in
    const checkAuth = useCallback(async () => {
        try {
            const res = await fetch("/api/auth/customer");

            if (res.ok) {
                const { customer } = await res.json();
                setCustomer(customer);
            } else {
                setCustomer(null);
            }
        } catch {
            console.error("Failed to check auth");
            setCustomer(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const login = () => {
        // Redirect to our login API route which handles the OAuth
        window.location.href = "/api/auth/login";
    };

    const logout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            const { url } = await res.json();

            setCustomer(null);

            // Redirect to Shopify logout URL if provided, or reload
            if (url) {
                window.location.href = url;
            } else {
                window.location.reload();
            }
        } catch {
            console.error("Logout failed");
        }
    };

    return (
        <AuthContext.Provider value={{ customer, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}

