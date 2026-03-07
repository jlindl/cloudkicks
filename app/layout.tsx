import type { Metadata } from "next";
import { Kanit, Geist_Mono, Signika, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kanit = Kanit({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const signika = Signika({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-signika",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CloudKicks",
  description: "Premium sneaker-slippers designed for everyday comfort and style",
};

import Header from "./Components/header";
import Newsletter from "./Components/newsletter";
import Footer from "./Components/footer";

import { CartProvider } from "./contexts/cart-context";
import CartDrawer from "./Components/cart/cart-drawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${kanit.variable} ${signika.variable} ${geistMono.variable} ${inter.variable} font-sans min-h-screen bg-black text-white antialiased`}
      >
        <CartProvider>
          <div className="fixed top-6 left-0 right-0 z-50">
            <Header />
          </div>
          <CartDrawer />
          {children}
          <Newsletter />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
