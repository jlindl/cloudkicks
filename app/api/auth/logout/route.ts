import { NextRequest, NextResponse } from "next/server";
import { getLogoutUrl } from "../../../../lib/shopify/auth";

export async function POST(req: NextRequest) {
    const logoutUrl = getLogoutUrl();

    // Create response redirecting to Shopify logout
    const response = NextResponse.json({ url: logoutUrl });

    // Clear all auth cookies
    response.cookies.delete("shopify_access_token");
    response.cookies.delete("shopify_refresh_token");
    response.cookies.delete("shopify_customer_logged_in");

    return response;
}
