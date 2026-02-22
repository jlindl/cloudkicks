import { NextResponse } from "next/server";
import { generateCodeVerifier, generateState, buildAuthorizationUrl } from "../../../../lib/shopify/auth";

export async function GET() {
    // Generate PKCE values
    const codeVerifier = generateCodeVerifier();
    const state = generateState();

    // Build Shopify OAuth URL
    const authUrl = await buildAuthorizationUrl(state, codeVerifier);

    // Create response with redirect
    const response = NextResponse.redirect(authUrl);

    // Store verifier and state in HTTP-only cookies
    // These are needed to validate the callback
    response.cookies.set("shopify_code_verifier", codeVerifier, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 3600, // 1 hour
    });

    response.cookies.set("shopify_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 3600, // 1 hour
    });

    return response;
}
