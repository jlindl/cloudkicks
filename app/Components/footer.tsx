"use client";

import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "All Products", href: "/shop" },
  { label: "Gift Cards", href: "#" },
  { label: "About", href: "/about" },
  { label: "B2B", href: "#" },
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

export default function Footer() {
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
              Engineered for effortless living. CloudKicks are where cloud-soft comfort meets clean, everyday style.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-1 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-3">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

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
