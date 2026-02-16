import { client } from "../../lib/shopify";
import { GET_PRODUCTS_QUERY } from "../../lib/shopify/queries";
import DynamicShowcaseClient from "./dynamic-showcase-client";

export default async function DynamicShowcase() {
    let products: any[] = [];
    try {
        const { data } = await client.request(GET_PRODUCTS_QUERY, {
            variables: {
                first: 5,
            },
        });
        products = data.products.edges;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }

    if (!products.length) return null;

    return <DynamicShowcaseClient products={products} />;
}
