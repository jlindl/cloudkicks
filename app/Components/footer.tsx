"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Check, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "All Products", href: "/shop" },
  { label: "Gift Cards", href: "#" },
  { label: "About", href: "/about" },
  { label: "B2B / Wholesale", href: "#", isB2B: true },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns Policy", href: "/returns-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cloudkicks.store/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.84a8.27 8.27 0 004.84 1.55V6.94a4.85 4.85 0 01-1.07-.25z" />
      </svg>
    ),
  },
];

import { useState } from "react";
import Reveal from "./reveal";

export default function Footer() {
  const [showB2BForm, setShowB2BForm] = useState(false);
  const [b2bStatus, setB2BStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleB2BSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setB2BStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setB2BStatus("success");
      setTimeout(() => {
        setShowB2BForm(false);
        setB2BStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="relative w-full bg-black text-white font-inter overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        {/* Main layout */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/Cloudkickslogo.png"
                alt="CloudKicks"
                width={180}
                height={60}
                className="h-14 w-auto object-contain filter brightness-100 transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Streetwear comfort, done right
            </p>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Join the Cloud.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-1 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-3">
            {LINKS.map((l) => (
              l.isB2B ? (
                <button
                  key={l.label}
                  onClick={() => setShowB2BForm(true)}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light whitespace-nowrap text-left"
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light whitespace-nowrap"
                >
                  {l.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* B2B Form Overlay */}
        {showB2BForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => !b2bStatus.includes("loading") && setShowB2BForm(false)}
            />
            <Reveal className="relative w-full max-w-xl bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-white to-emerald-500" />

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">B2B & Wholesale</h3>
                  <p className="text-neutral-400 font-light text-sm">Partner with CloudKicks for your retail space or corporate needs.</p>
                </div>
                <button
                  onClick={() => setShowB2BForm(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {b2bStatus === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">Inquiry Received</h4>
                  <p className="text-neutral-400 font-light leading-relaxed">Our partnerships team will review your application and get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleB2BSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contact Person</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Business Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Store Co."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="partnership@storeco.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Inquiry Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your business and roughly how many units you are interested in..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={b2bStatus === "loading"}
                    className="w-full bg-white text-black font-black uppercase tracking-tighter py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-50"
                  >
                    {b2bStatus === "loading" ? "Processing..." : (
                      <>
                        Submit Inquiry <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/6 pt-6 flex flex-col items-center gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} CloudKicks Ltd. All rights reserved.</span>
          <span>
            Website powered by{" "}
            <a
              href="https://www.integrate-tech.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              www.integrate-tech.co.uk
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
