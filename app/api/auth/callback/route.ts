import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForTokens, getCustomer } from "../../../../lib/shopify/auth";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    // Get stored verifier and state from cookies
    const verifier = req.cookies.get("shopify_code_verifier")?.value;
    const savedState = req.cookies.get("shopify_oauth_state")?.value;

    if (!code || !state || !verifier || !savedState) {
        return NextResponse.redirect(`${req.nextUrl.origin}/account?error=Missing+parameters`);
    }

    if (state !== savedState) {
        return NextResponse.redirect(`${req.nextUrl.origin}/account?error=Invalid+state`);
    }

    try {
        // Exchange code for tokens
        const tokenResponse = await exchangeCodeForTokens(code, verifier);

        const { access_token, refresh_token, id_token, expires_in } = tokenResponse;

        // Redirect to account dashboard
        const response = NextResponse.redirect(`${req.nextUrl.origin}/account`);

        // Store tokens in HTTP-only cookies
        response.cookies.set("shopify_access_token", access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: expires_in,
        });

        if (refresh_token) {
            response.cookies.set("shopify_refresh_token", refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 30 * 24 * 60 * 60, // 30 days
            });
        }

        // Also set a client-readable cookie so UI knows user is logged in
        response.cookies.set("shopify_customer_logged_in", "true", {
            httpOnly: false, // Visible to client
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: expires_in,
        });

        // Clear the temporary PKCE cookies
        response.cookies.delete("shopify_code_verifier");
        response.cookies.delete("shopify_oauth_state");

        return response;

    } catch (error) {
        console.error("Callback error:", error);
        return NextResponse.redirect(`${req.nextUrl.origin}/account?error=Authentication+failed`);
    }
}
