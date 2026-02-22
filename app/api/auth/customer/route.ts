import { NextRequest, NextResponse } from "next/server";
import { getCustomer } from "../../../../lib/shopify/auth";

export async function GET(req: NextRequest) {
    const accessToken = req.cookies.get("shopify_access_token")?.value;

    if (!accessToken) {
        return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 }
        );
    }

    try {
        const { data } = await getCustomer(accessToken);

        if (!data?.customer) {
            return NextResponse.json(
                { error: "Customer not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ customer: data.customer });
    } catch (error: any) {
        console.error("Customer fetch error:", error);
        return NextResponse.json(
            { error: "Failed to fetch customer data" },
            { status: 500 }
        );
    }
}
