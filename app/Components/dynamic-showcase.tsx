import { client } from "../../lib/shopify";
import { GET_PRODUCTS_QUERY } from "../../lib/shopify/queries";
import DynamicShowcaseClient from "./dynamic-showcase-client";

interface Product {
    node: {
        id: string;
        handle: string;
        title: string;
        priceRange: {
            minVariantPrice: {
                amount: string;
                currencyCode: string;
            };
        };
        images: {
            edges: {
                node: {
                    url: string;
                    altText: string;
                };
            }[];
        };
    };
}

export default async function DynamicShowcase() {
    let products: Product[] = [];
    try {
        const { data } = (await client.request(GET_PRODUCTS_QUERY, {
            variables: {
                first: 5,
            },
        })) as { data: { products: { edges: Product[] } } };
        products = data?.products?.edges ?? [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }

    if (!products.length) return null;

    return <DynamicShowcaseClient products={products} />;
}
