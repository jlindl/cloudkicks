import { notFound } from "next/navigation";
import { client } from "../../../lib/shopify";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "../../../lib/shopify/queries";
import AddToCartButton from "../../Components/cart/add-to-cart-button";
import Reveal from "../../Components/reveal";
import ProductGallery from "../../Components/product/product-gallery";
import VariantSelector from "../../Components/product/variant-selector";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
    params: Promise<{
        handle: string;
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface ShopifyOption {
    name: string;
    value: string;
}

interface ShopifyVariantNode {
    id: string;
    title: string;
    availableForSale: boolean;
    price: {
        amount: string;
        currencyCode: string;
    };
    selectedOptions: ShopifyOption[];
}

interface ShopifyVariantEdge {
    node: ShopifyVariantNode;
}

interface ShopifyImageEdge {
    node: unknown; // Keep simple for image node right now
}


export default async function ProductPage({ params, searchParams }: ProductPageProps) {
    const { handle } = await params;
    const searchParamsValue = await searchParams; // Await search params for variant logic

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

    const { title, description, images, variants, options } = product;

    // ──── Logic: Determine Selected Variant ─────────────────────────
    // 1. Find the variant that matches all selected options from URL search params
    const selectedVariant = variants.edges.find((edge: ShopifyVariantEdge) => {
        return edge.node.selectedOptions.every((option: ShopifyOption) => {
            return searchParamsValue[option.name] === option.value;
        });
    })?.node || variants.edges[0]?.node; // Fallback to first variant if no match

    // 2. Prepare images
    const allImages = [
        images.edges[0]?.node,
        ...images.edges.slice(1).map((edge: ShopifyImageEdge) => edge.node)
    ].filter(Boolean);

    // 3. Prepare options for selector (ensure unique values)
    const validOptions = options.filter((opt: { name: string; values: string[] }) => opt.name !== "Title"); // Filter out default "Title" option if present

    return (
        <div className="bg-black min-h-screen font-inter text-white selection:bg-white selection:text-black">

            {/* Breadcrumb / Back Navigation */}
            <div className="fixed top-24 left-6 z-40 hidden lg:block">
                <Link href="/shop" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Shop
                </Link>
            </div>

            <div className="mx-auto max-w-[1800px] px-4 md:px-8 pt-32 pb-24 lg:pt-40">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                    {/* Left Side: Product Gallery (Spans 8 columns for wider visual impact) */}
                    <div className="lg:col-span-8">
                        <Suspense fallback={<div className="w-full h-[80vh] bg-neutral-900 animate-pulse rounded-[2rem]" />}>
                            <ProductGallery images={allImages} />
                        </Suspense>
                    </div>

                    {/* Right Side: Sticky Product Details (Spans 4 columns) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 flex flex-col h-fit">
                            <Reveal>
                                {/* Badges */}
                                <div className="flex gap-2 mb-6">
                                    {selectedVariant?.availableForSale ? (
                                        <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 rounded-full text-white bg-white/5 backdrop-blur-sm">
                                            In Stock
                                        </div>
                                    ) : (
                                        <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-red-500/30 text-red-400 bg-red-500/10 rounded-full backdrop-blur-sm">
                                            Sold Out
                                        </div>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[0.9] text-white uppercase">
                                    {title}
                                </h1>

                                {/* Price */}
                                <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-white/10">
                                    <div className="text-3xl font-mono font-medium text-white">
                                        {parseFloat(selectedVariant?.price.amount).toLocaleString("en-US", {
                                            style: "currency",
                                            currency: selectedVariant?.price.currencyCode
                                        })}
                                    </div>
                                    <div className="text-xs text-white/40 font-mono">
                                        VAT INCLUDED
                                    </div>
                                </div>

                                {/* Variant Selector */}
                                <div className="mb-8">
                                    <VariantSelector options={validOptions} variants={variants.edges.map((e: ShopifyVariantEdge) => e.node)} />
                                </div>

                                {/* Add to Cart */}
                                <div className="flex flex-col gap-4 mb-10">
                                    <AddToCartButton variantId={selectedVariant?.id} />
                                    <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                                        Secure Checkout via Shopify
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="prose prose-invert prose-sm text-neutral-400 mb-10 leading-relaxed max-w-none">
                                    <p>{description}</p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex flex-col items-center justify-center text-center gap-1">
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">Fast Shipping</span>
                                        <span className="text-[10px] text-white/40">2-3 Business Days</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex flex-col items-center justify-center text-center gap-1">
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">Returns</span>
                                        <span className="text-[10px] text-white/40">30-Day Guarantee</span>
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
