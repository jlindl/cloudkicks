import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white pt-12 pb-8 font-inter font-bold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-white to-neutral-400 shadow-md flex items-center justify-center font-extrabold text-black">CK</div>
              <div>
                <p className="text-lg font-semibold tracking-tight">CloudKicks</p>
                <p className="mt-1 text-sm text-gray-400 max-w-xs">Premium sneaker-slippers — built for everyday comfort and effortless style.</p>

                <div className="mt-4 flex items-center gap-3">
                  <Link href="#" className="text-sm text-gray-300 hover:text-white transition">About</Link>
                  <span className="text-gray-600">·</span>
                  <Link href="#" className="text-sm text-gray-300 hover:text-white transition">Careers</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">New Arrivals</Link></li>
                <li><Link href="#" className="hover:text-white transition">All Products</Link></li>
                <li><Link href="#" className="hover:text-white transition">Best Sellers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Gift Cards</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="#" className="hover:text-white transition">Returns</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter + Social */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Join our newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Sign up for early access to new drops and exclusive offers.</p>

            <div className="flex items-center gap-2">
              <input
                aria-label="Email address"
                placeholder="you@domain.com"
                className="w-full rounded-md bg-neutral-800/60 border border-white/6 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                readOnly
              />
              <Link href="/signup" className="inline-flex items-center px-3 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition">Subscribe</Link>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-white/6 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/6 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.89 1.11A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.51 2.35-3.93 4.77A12.94 12.94 0 0 1 1.64 1.16 4.48 4.48 0 0 0 3.04 7.2 4.41 4.41 0 0 1 .89 6.9v.06A4.5 4.5 0 0 0 4.5 11a4.52 4.52 0 0 1-2 .08 4.5 4.5 0 0 0 4.2 3.12A9.06 9.06 0 0 1 1 19.54 12.8 12.8 0 0 0 8.29 21c7.55 0 11.68-6.63 11.36-12.53A8.18 8.18 0 0 0 23 3z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-white/6 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.05H8.03v-2.9h2.41V9.41c0-2.39 1.43-3.71 3.62-3.71 1.05 0 2.15.18 2.15.18v2.36h-1.21c-1.2 0-1.58.75-1.58 1.52v1.82h2.69l-.43 2.9h-2.26V22c4.78-.83 8.44-4.96 8.44-9.93z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} CloudKicks — All rights reserved</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
