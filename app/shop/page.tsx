import { client } from "../../lib/shopify";
import { GET_PRODUCTS_QUERY } from "../../lib/shopify/queries";
import ShopGridClient from "../Components/shop/shop-grid-client";
import ScrollReveal from "../Components/scroll-reveal";


export const revalidate = 60; // Revalidate every minute

export default async function ShopPage() {
    let products = [];
    try {
        const { data } = await client.request(GET_PRODUCTS_QUERY, {
            variables: { first: 20 },
        });
        products = data.products.edges;
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    return (
        <div className="min-h-screen bg-black font-inter text-white pt-32 pb-32 relative overflow-hidden">
            {/* Immersive Animated Background Glows */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-white/5 blur-[200px] rounded-full pointer-events-none opacity-60 animate-[sway_20s_ease-in-out_infinite] transform-gpu" />
            <div className="absolute bottom-40 left-0 w-[60vw] h-[60vw] bg-white/5 blur-[150px] rounded-full pointer-events-none opacity-40 animate-[float_15s_ease-in-out_infinite_reverse] transform-gpu" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">

                {/* Cinematic Header Section */}
                <div className="flex flex-col items-center justify-center text-center mt-12 mb-24 min-h-[30vh]">
                    <ScrollReveal duration={1} distance={40}>
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/80">
                                Official Collection
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal duration={1} delay={0.2} distance={30}>
                        <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-kanit font-black leading-[0.85] tracking-tighter uppercase relative group">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-800 drop-shadow-2xl">
                                THE ARCHIVE
                            </span>
                            {/* Animated Shine Pass */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_auto] bg-clip-text text-transparent opacity-0 mix-blend-screen animate-[shine_5s_linear_infinite]" />
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal duration={1} delay={0.4} distance={20}>
                        <p className="mt-8 text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide">
                            Explore our complete lineup of engineered comfort. Built for the streets, designed for the clouds.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Interactive Client Grid */}
                <ShopGridClient products={products} />

            </div>
        </div>
    );
}
