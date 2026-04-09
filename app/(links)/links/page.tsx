"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, ShoppingBag, ExternalLink, Globe } from "lucide-react";

const links = [
  {
    title: "Buy CloudKicks Now",
    url: "/shop",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "bg-white text-black",
    description: "Experience the ultimate comfort",
  },
  {
    title: "Follow on Instagram",
    url: "https://instagram.com/cloudkicks",
    icon: <Instagram className="w-5 h-5" />,
    color: "bg-zinc-900 text-white",
    description: "Daily drops & community highlights",
  },
  {
    title: "Find us on TikTok",
    url: "https://tiktok.com/@cloudkicks",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    color: "bg-zinc-900 text-white",
    description: "See the kicks in action",
  },
  {
    title: "Shop on Amazon",
    url: "https://amazon.com/cloudkicks",
    icon: <ExternalLink className="w-5 h-5" />,
    color: "bg-zinc-900 text-white",
    description: "Available on Amazon Prime",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 relative overflow-hidden flex flex-col items-center py-16 px-6">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12 text-center"
      >
        <div className="relative w-24 h-24 mb-6 group">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 p-2 bg-zinc-900">
            <Image
              src="/assets/Cloudkickslogo.png"
              alt="CloudKicks Logo"
              width={96}
              height={96}
              className="object-contain p-2"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter mb-2 font-kanit">
          CloudKicks
        </h1>
        <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
          Premium sneaker-slippers designed for everyday comfort and style. Engineering comfort for your feet.
        </p>
      </motion.div>

      {/* Links Section */}
      <div className="w-full max-w-sm space-y-4">
        {links.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <Link
              href={link.url}
              className={`group relative flex items-center p-4 rounded-2xl transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] ${link.color}`}
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors mr-4">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{link.title}</span>
                <span className="text-[10px] opacity-60 font-medium tracking-wide uppercase">
                  {link.description}
                </span>
              </div>
              <ExternalLink className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-auto pt-16 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <Link href="/" className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium tracking-wider uppercase">cloudkicks.com</span>
        </Link>
      </motion.div>
    </div>
  );
}
