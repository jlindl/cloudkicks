import { notFound } from "next/navigation";
import { client } from "../../../lib/shopify";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "../../../lib/shopify/queries";
import AddToCartButton from "../../Components/cart/add-to-cart-button";

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
    const mainImage = images.edges[0]?.node.url;
    const firstVariant = variants.edges[0]?.node;

    return (
        <div className="bg-neutral-900 min-h-screen pt-32 pb-20 px-6 font-inter text-white">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Product Image */}
                <div className="relative aspect-square w-full bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
                    {mainImage && (
                        <img
                            src={mainImage}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    )}
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    <div className="text-2xl text-white/90 font-medium mb-8">
                        {firstVariant?.price.amount} {firstVariant?.price.currencyCode}
                    </div>

                    <div className="prose prose-invert prose-lg text-gray-400 mb-10">
                        <p>{description}</p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-sm">
                        <AddToCartButton variantId={firstVariant?.id} />
                    </div>
                </div>

            </div>
        </div>
    );
}
