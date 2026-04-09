"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="bg-black min-h-screen font-inter text-white flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
                Something went wrong
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
                An unexpected error occurred. We have been notified and are looking into it.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-neutral-200 transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
