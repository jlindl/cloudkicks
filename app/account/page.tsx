"use client";

import React from "react";
import { useAuth } from "../contexts/auth-context";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccountPage() {
    const { customer, isLoading, login, logout } = useAuth();

    // ──── Loading ────────────────────────────────────────
    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full"
                />
            </div>
        );
    }

    // ──── Logged-in Dashboard ────────────────────────────
    if (customer) {
        return (
            <div className="min-h-screen bg-black text-white font-inter pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Welcome Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-14"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <p className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase mb-3">
                                    My Account
                                </p>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                                    Hey, {customer.firstName || "there"}.
                                </h1>
                            </div>
                            <button
                                onClick={logout}
                                className="self-start md:self-auto px-6 py-2.5 border border-white/10 rounded-full text-xs font-mono text-white/40 uppercase tracking-wider hover:text-white hover:border-white/30 transition-all duration-300"
                            >
                                Sign Out
                            </button>
                        </div>
                        <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                    >
                        {[
                            { label: "Member Since", value: "2024" },
                            { label: "Orders", value: customer.orders?.edges?.length?.toString() || "0" },
                            { label: "Status", value: "Active" },
                            { label: "Tier", value: "Cloud" },
                        ].map((stat, i) => (
                            <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                                <p className="text-[10px] font-mono tracking-wider text-white/30 uppercase mb-2">{stat.label}</p>
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Profile + Orders Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="lg:col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl font-black text-white/60">
                                    {(customer.firstName?.[0] || "C").toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{customer.firstName} {customer.lastName}</p>
                                    <p className="text-xs text-white/40">{customer.emailAddress?.emailAddress}</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {customer.phoneNumber && (
                                    <div>
                                        <p className="text-[10px] font-mono tracking-wider text-white/25 uppercase mb-1">Phone</p>
                                        <p className="text-sm text-white/70">{customer.phoneNumber.phoneNumber}</p>
                                    </div>
                                )}
                                {customer.defaultAddress && (
                                    <div>
                                        <p className="text-[10px] font-mono tracking-wider text-white/25 uppercase mb-1">Address</p>
                                        <p className="text-sm text-white/70">
                                            {customer.defaultAddress.address1}<br />
                                            {customer.defaultAddress.city}{customer.defaultAddress.province && `, ${customer.defaultAddress.province}`}<br />
                                            {customer.defaultAddress.country} {customer.defaultAddress.zip}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Orders Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8"
                        >
                            <h2 className="text-sm font-mono tracking-wider text-white/40 uppercase mb-6">Order History</h2>

                            {(!customer.orders || customer.orders.edges.length === 0) ? (
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                                        <svg className="w-7 h-7 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/30 text-sm mb-6">No orders yet</p>
                                    <Link
                                        href="/shop"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                                    >
                                        Browse Collection
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {customer.orders.edges.map(({ node: order }) => (
                                        <div
                                            key={order.id}
                                            className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xs font-mono text-white/40">
                                                    #{order.orderNumber}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">Order #{order.orderNumber}</p>
                                                    <p className="text-[11px] text-white/30 mt-0.5">
                                                        {new Date(order.processedAt).toLocaleDateString("en-GB", {
                                                            day: "numeric", month: "short", year: "numeric",
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right flex items-center gap-4">
                                                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.fulfillmentStatus === "FULFILLED"
                                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                                    }`}>
                                                    {order.fulfillmentStatus || "Processing"}
                                                </span>
                                                <p className="text-sm font-mono text-white/70">
                                                    {order.totalPrice.currencyCode} {parseFloat(order.totalPrice.amount).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }

    // ──── Access Portal ────────────────────────
    return (
        <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.015] rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">

                {/* Logo Mark */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <div className="w-16 h-16 mx-auto relative">
                        <Image src="/assets/cloud_emblem_mono.png" alt="CloudKicks" fill className="object-contain invert opacity-30" />
                    </div>
                </motion.div>

                {/* Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-[420px] text-center"
                >
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                        Welcome to CloudKicks
                    </h1>
                    <p className="text-white/40 text-sm mb-12">
                        Sign in to manage your orders and profile
                    </p>

                    {/* Sign In Button */}
                    <button
                        onClick={login}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-[0.1em] hover:bg-neutral-100 transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative inline-flex items-center gap-2">
                            Sign In with Shopify
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                    </button>

                    <p className="mt-6 text-[11px] text-white/20">
                        You'll be redirected to Shopify to verify your email securely.
                    </p>

                </motion.div>
            </div>
        </div>
    );
}
