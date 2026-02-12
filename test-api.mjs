import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const envPath = path.resolve(__dirname, '.env.local'); // Assumes script is in root or adjusted
    // Correction: Script will be in root, so .env.local is just './.env.local'

    if (fs.existsSync(envPath)) {
        console.log("Loading .env.local...");
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split(/\r?\n/).forEach(line => {
            const parts = line.split('=');
            const key = parts[0]?.trim();
            const val = parts.slice(1).join('=')?.trim(); // Handle values with =
            if (key && val) {
                process.env[key] = val.replace(/^"|"$/g, '');
            }
        });
    } else {
        console.log(".env.local not found!");
    }

    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !token) {
        console.error("Missing credentials!");
        console.log("Domain:", domain);
        console.log("Token:", token ? "******" : "Missing");
        process.exit(1);
    }

    const client = createStorefrontApiClient({
        storeDomain: domain,
        apiVersion: '2026-01',
        publicAccessToken: token,
    });

    const query = `
      query GetProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              handle
              description
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;

    console.log("Running full query...");

    // Pass variables
    client.request(query, { variables: { first: 3 } }).then(({ data, errors }) => {
        if (errors) {
            console.error("GraphQL Errors:", JSON.stringify(errors, null, 2));
        }

        console.log("Success!");
        if (data?.products?.edges) {
            console.log("Products found:", data.products.edges.length);
            data.products.edges.forEach(e => {
                console.log("- " + e.node.title);
                console.log("  Price:", e.node.priceRange?.minVariantPrice?.amount);
                console.log("  Image:", e.node.images?.edges[0]?.node?.url);
            });
        } else {
            console.log("Data returned but no products structure:", JSON.stringify(data, null, 2));
        }

    }).catch(err => {
        console.error("Error fetching products:");
        console.error(JSON.stringify(err, null, 2));
    });

} catch (e) {
    console.error("Script error:", e);
}
