import { notFound } from "next/navigation";
import { client } from "../../../lib/shopify";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "../../../lib/shopify/queries";
import AddToCartButton from "../../Components/cart/add-to-cart-button";
import Reveal from "../../Components/reveal";
import ProductGallery from "../../Components/product/product-gallery";
import { Suspense } from "react";

interface ProductPageProps {
    params: Promise<{
        handle: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    // Await the params to get the handle
    const { handle } = await params;

    let product;
    try {
        const { data } = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
            variables: { handle },
        });
        product = data.product;
    } catch (err) {
        console.error(err);
    }

    if (!product) {
        return notFound();
    }

    const { title, description, images, variants } = product;
    // Combine mainImage and additionalImages for the gallery
    const allImages = [
        images.edges[0]?.node,
        ...images.edges.slice(1).map((edge: any) => edge.node)
    ].filter(Boolean);
    const firstVariant = variants.edges[0]?.node;

    return (
        <div className="bg-neutral-900 min-h-screen font-inter text-white selection:bg-white selection:text-black">
            {/* Added pt-32 to fix header overlap */}
            <div className="mx-auto max-w-[1600px] px-4 md:px-6 pt-32 pb-24 lg:pt-40">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Side: Product Gallery (Spans 7 columns) */}
                    <div className="lg:col-span-7">
                        <Suspense fallback={<div className="w-full h-[80vh] bg-neutral-800 animate-pulse rounded-3xl" />}>
                            <ProductGallery images={allImages} />
                        </Suspense>
                    </div>

                    {/* Right Side: Sticky Product Details (Spans 5 columns) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 flex flex-col justify-center h-fit">
                            <Reveal>
                                <div className="mb-6">
                                    <div className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full text-white/80 bg-white/5 backdrop-blur-sm">
                                        New Arrival
                                    </div>
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[0.9] text-white uppercase">
                                    {title}
                                </h1>

                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
                                    <div className="text-4xl font-mono font-medium text-white">
                                        {firstVariant?.price.amount} <span className="text-xl text-white/50">{firstVariant?.price.currencyCode}</span>
                                    </div>
                                </div>

                                <div className="prose prose-invert prose-lg text-neutral-400 mb-10 leading-relaxed">
                                    <p>{description}</p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                        <AddToCartButton variantId={firstVariant?.id} />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center gap-2">
                                            <span className="text-white font-bold">Free Shipping</span>
                                            <span className="text-xs text-neutral-500">On all global orders</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center gap-2">
                                            <span className="text-white font-bold">Secure Checkout</span>
                                            <span className="text-xs text-neutral-500">Encrypted payment</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
