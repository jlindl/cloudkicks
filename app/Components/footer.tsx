"use client";

import Link from "next/link";
import Image from "next/image";

const NAV = [
  {
    heading: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop" },
      { label: "All Products", href: "/shop" },
      { label: "Best Sellers", href: "/shop" },
      { label: "Gift Cards", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Centre", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
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
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L2.25 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
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

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/Cloudkickslogo.png"
                alt="CloudKicks"
                width={180}
                height={60}
                className="h-16 w-auto object-contain filter brightness-100 transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Engineered for effortless living. CloudKicks are where cloud-soft comfort meets clean, everyday style.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-1 mt-2">
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

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter bar */}
        <div className="mt-16 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-white">Stay in the loop</p>
            <p className="text-sm text-gray-500 font-light mt-0.5">Early drops, restocks & exclusive offers — in your inbox.</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              aria-label="Email address"
              placeholder="you@domain.com"
              className="flex-1 md:w-64 rounded-xl bg-white/5 border border-white/8 px-4 py-2.5 text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/30 font-light"
              readOnly
            />
            <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/6 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} CloudKicks Ltd. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
