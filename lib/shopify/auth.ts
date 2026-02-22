import { headers } from "next/headers";

const CLIENT_ID = process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID!;
const SHOP_ID = "101432230233"; // Retrieved automatically
const CALLBACK_URL = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`
    : "http://localhost:3000/api/auth/callback";

// ──── PKCE Utilities ─────────────────────────────────────────────────────────

export function generateCodeVerifier() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...Array.from(array)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

export async function generateCodeChallenge(codeVerifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...Array.from(new Uint8Array(digest))))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

export function generateState() {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Buffer.from(array).toString("hex");
}

// ──── Auth Flow ─────────────────────────────────────────────────────────────

export async function buildAuthorizationUrl(state: string, codeVerifier: string) {
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: CALLBACK_URL,
        response_type: "code",
        scope: "openid email https://api.customers.com/auth/customer.graphql",
        state,
        code_challenge: codeChallenge,
        code_challenge_method: "S256",
    });

    return `https://shopify.com/${SHOP_ID}/auth/oauth/authorize?${params.toString()}`;
}

export async function exchangeCodeForTokens(code: string, codeVerifier: string) {
    const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        redirect_uri: CALLBACK_URL,
        code,
        code_verifier: codeVerifier,
    });

    const res = await fetch(`https://shopify.com/${SHOP_ID}/auth/oauth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
    });

    if (!res.ok) {
        throw new Error(`Failed to exchange token: ${res.statusText}`);
    }

    return res.json();
}

export async function getCustomer(accessToken: string) {
    const query = `
        {
            customer {
                id
                firstName
                lastName
                emailAddress {
                    emailAddress
                }
                phoneNumber {
                    phoneNumber
                }
            }
        }
    `;

    const res = await fetch(`https://shopify.com/${SHOP_ID}/account/customer/api/2024-01/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken,
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch customer: ${res.statusText}`);
    }

    return res.json();
}

export function getLogoutUrl() {
    return `https://shopify.com/${SHOP_ID}/auth/logout`;
}
