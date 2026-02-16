import { client } from "../../lib/shopify";
import { GET_PRODUCTS_QUERY } from "../../lib/shopify/queries";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../Components/reveal";

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
        <div className="min-h-screen bg-black font-inter text-white pt-32 pb-24 relative overflow-hidden">
            {/* Ambient Gradients sticking to corners */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">

                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full text-white/60">
                            The Collection
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                            ALL RELEASES
                        </h1>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(({ node }: { node: any }) => (
                        <Reveal key={node.handle} className="group flex flex-col gap-4">
                            <Link href={`/products/${node.handle}`} className="relative aspect-square overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-colors hover:border-white/30">
                                {node.images.edges[0] && (
                                    <Image
                                        src={node.images.edges[0].node.url}
                                        alt={node.images.edges[0].node.altText || node.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full">
                                        View Item
                                    </span>
                                </div>
                            </Link>

                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                                        {node.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 line-clamp-1">{node.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-mono text-white">
                                        {node.priceRange.minVariantPrice.amount}
                                        <span className="text-xs text-neutral-500 ml-1">
                                            {node.priceRange.minVariantPrice.currencyCode}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
