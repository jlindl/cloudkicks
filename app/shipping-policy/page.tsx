
import React from "react";

export default function ShippingPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-black text-white font-inter selection:bg-white selection:text-black">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Shipping Policy
                    </h1>
                    <p className="text-neutral-500 font-mono text-sm">Last Updated: 20/02/2026</p>
                </header>

                <div className="max-w-none space-y-12 text-neutral-300 font-light leading-relaxed">
                    <section>
                        <p>CloudKicks is a trading brand of JMW Holdings Group Limited. We aim to dispatch all orders quickly and securely.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Order Processing Time</h2>
                        <p>All orders are processed within 1–2 business days (Monday–Friday). Orders placed on weekends or public holidays will be processed on the next working day. You will receive a shipping confirmation email once your order has been dispatched.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Shipping Rates</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-medium mb-1 tracking-tight">United Kingdom</h3>
                                <p>Standard Shipping: £3.99</p>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1 tracking-tight">International</h3>
                                <p>Standard International Shipping: £12.99</p>
                            </div>
                        </div>
                        <p className="mt-4 italic">Shipping costs are calculated and displayed at checkout.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Estimated Delivery Times</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-medium mb-1 tracking-tight">United Kingdom</h3>
                                <p>Estimated delivery: 2–4 business days after dispatch.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1 tracking-tight">International</h3>
                                <p>Estimated delivery: 5–12 business days depending on destination and customs processing.</p>
                            </div>
                        </div>
                        <p className="mt-4 italic">Delivery times are estimates and are not guaranteed.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Customs, Duties & Taxes</h2>
                        <p>International customers are responsible for any customs duties, import taxes, or additional fees imposed by their country. CloudKicks is not responsible for delays caused by customs clearance processes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Incorrect Address Information</h2>
                        <p>Customers are responsible for providing accurate shipping information. If an incorrect address is provided and the parcel is returned to us, additional shipping fees may apply for redelivery.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Lost or Delayed Parcels</h2>
                        <p>If your parcel has not arrived within the estimated timeframe, please contact support@cloudkicks.store. We will investigate with the courier. CloudKicks is not liable for delivery delays caused by courier issues, weather, customs, or incorrect address information. If a parcel is confirmed lost by the courier, we will arrange a replacement or refund.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">7. Risk of Loss</h2>
                        <p>Risk of loss passes to the customer upon confirmed delivery to the shipping address provided at checkout.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
