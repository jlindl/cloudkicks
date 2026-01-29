export type Cart = {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    lines: {
        edges: Array<{
            node: CartLine;
        }>;
    };
};

export type CartLine = {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        image: {
            url: string;
            altText: string;
        };
        price: Money;
        product: {
            title: string;
            handle: string;
        };
    };
};

export type Money = {
    amount: string;
    currencyCode: string;
};

export type Product = {
    id: string;
    title: string;
    handle: string;
    description: string;
    images: {
        edges: Array<{
            node: {
                url: string;
                altText: string;
            };
        }>;
    };
    variants: {
        edges: Array<{
            node: {
                id: string;
                title: string;
                price: Money;
            };
        }>;
    };
};
