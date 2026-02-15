"use client";

import React, { useState } from "react";
import LiquidEther from './LiquidEther';
import Reveal from "./reveal";
import CTAButton from "./cta-button";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setMessage("Welcome to the cloud!");
                setEmail("");
            } else {
                setStatus("error");
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="relative w-full bg-black px-6 pt-24 pb-28 -mt-16 text-white font-inter font-bold overflow-hidden">
            <div className="absolute inset-0 z-0">
                <LiquidEther
                    colors={['#FFFFFF', '#F0F0F0', '#E0E0E0']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-lg text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Join the cloud.
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
                        Join the CloudKicks community for exclusive drops, discounts, and early access to new products.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                        <div className="w-full relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === "loading"}
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all backdrop-blur-sm disabled:opacity-50"
                            />
                        </div>
                        <CTAButton
                            type="submit"
                            variant="primary"
                            className="w-full md:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Joining..." : "Join"}
                        </CTAButton>
                    </form>

                    {message && (
                        <p className={`mt-4 text-sm font-medium ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                            {message}
                        </p>
                    )}

                    <p className="mt-4 text-xs text-gray-500 font-normal">
                        By subscribing to our newsletter, you agree to our Terms and Privacy Policy. Opt out anytime.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Newsletter;
