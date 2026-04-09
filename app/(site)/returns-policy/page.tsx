
import React from "react";

export default function ReturnsPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-black text-white font-inter selection:bg-white selection:text-black">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Returns & Refund Policy
                    </h1>
                    <p className="text-neutral-500 font-mono text-sm">Last Updated: 20/02/2026</p>
                </header>

                <div className="max-w-none space-y-12 text-neutral-300 font-light leading-relaxed">
                    <section>
                        <p>CloudKicks is a trading brand of JMW Holdings Group Limited. We want you to love your CloudKicks. If something isn't right, we're here to help.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. 14-Day Return Window</h2>
                        <p>Under UK consumer law, you have the right to cancel your order within 14 days of receiving your item. To initiate a return, you must contact us within 14 days of delivery at: support@cloudkicks.store. You then have a further 14 days to return the item to us.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Eligibility for Returns</h2>
                        <p>To be eligible for a return:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Items must be unworn and unused</li>
                            <li>Items must be in original condition</li>
                            <li>Original packaging must be included</li>
                            <li>All tags and inserts must be intact</li>
                        </ul>
                        <p className="mt-4">CloudKicks are designed primarily for indoor comfort use. Items showing signs of outdoor wear, damage, or misuse will not be eligible for return unless faulty. We reserve the right to reduce the refund amount if returned items show signs of use beyond reasonable inspection.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Return Shipping Costs</h2>
                        <p>For change of mind returns, a fixed return shipping fee of £3.99 will be deducted from your refund. This fee covers the cost of providing a tracked return label. Original shipping charges are non-refundable. If your item is faulty, damaged on arrival, or incorrect, return shipping will be covered by us.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Faulty or Damaged Items</h2>
                        <p>If your item arrives damaged or faulty, please contact us within 48 hours of delivery with:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Your order number</li>
                            <li>Clear photographs of the issue</li>
                        </ul>
                        <p className="mt-4">We will assess the issue and provide a resolution, which may include a replacement or refund.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Refund Processing</h2>
                        <p>Once we receive and inspect your return, we will notify you of approval or rejection. If approved:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Refunds will be issued to the original payment method</li>
                            <li>Processing time is typically 5–10 business days</li>
                        </ul>
                        <p className="mt-4">Original outbound shipping costs are non-refundable unless the item is faulty.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Exchanges</h2>
                        <p>We do not currently offer direct exchanges. If you would like a different size or colourway, please return your item and place a new order.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">7. Non-Returnable Items</h2>
                        <p>We cannot accept returns for:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Items returned outside the 14-day window</li>
                            <li>Worn or used products</li>
                            <li>Products without original packaging</li>
                            <li>Items marked as final sale or limited drop</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">8. Policy Abuse & Chargebacks</h2>
                        <p>We reserve the right to investigate suspicious activity, excessive returns, or fraudulent chargebacks. Accounts found abusing our policies may be restricted from future purchases.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
