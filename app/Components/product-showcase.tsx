import React from "react";
import { client } from "../../lib/shopify";
import { GET_PRODUCTS_QUERY } from "../../lib/shopify/queries";
import Reveal from "./reveal";
import TiltedCard from "./tilted-card";
import Link from "next/link";

interface ProductNode {
    id: string;
    title: string;
    description: string;
    handle: string;
    images: {
        edges: Array<{
            node: {
                url: string;
                altText: string | null;
            };
        }>;
    };
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
}

export default async function ProductShowcase() {
    let products: any[] = [];

    try {
        const { data } = await client.request(GET_PRODUCTS_QUERY, { variables: { first: 3 } });
        products = data?.products?.edges || [];
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    console.log("ProductShowcase: Products found:", products.length);
    if (products.length === 0) {
        console.log("ProductShowcase: No products found. Env:", process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ? "Set" : "Unset");
    }

    if (products.length === 0) {
        return (
            <section className="w-full bg-black px-6 py-24 text-white font-inter font-bold">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-red-500">No products found. (Debug Mode)</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-black px-6 py-24 text-white font-inter font-bold">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 max-w-3xl">
                    <Reveal>
                        <p className="text-sm uppercase tracking-wide text-gray-400">New Arrivals</p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Latest Drops</h2>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Fresh from the CloudKicks collection.
                        </p>
                    </Reveal>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {products.map(({ node }: { node: ProductNode }, index: number) => {
                        const imageUrl = node.images.edges[0]?.node.url || "";
                        const altText = node.images.edges[0]?.node.altText || node.title;
                        const price = parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2);
                        const currency = node.priceRange.minVariantPrice.currencyCode;

                        return (
                            <Reveal key={node.id} delay={60 * (index + 1)} className="w-full h-full aspect-[4/5] relative group">
                                <Link href={`/products/${node.handle}`} className="absolute inset-0 z-20" aria-label={`View ${node.title}`} />
                                <TiltedCard
                                    imageSrc={imageUrl}
                                    altText={altText}
                                    captionText=""
                                    containerHeight="100%"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={false}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                                            <div className="absolute top-4 right-4 text-xl text-white/70 transition pointer-events-none">+</div>
                                            <div className="absolute bottom-4 left-4 pointer-events-none">
                                                <p className="text-sm text-white/90 font-medium">{node.title}</p>
                                                <p className="text-xs text-white/70">{currency} {price}</p>
                                            </div>
                                        </>
                                    }
                                />
                            </Reveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
