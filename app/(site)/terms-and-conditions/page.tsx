
import React from "react";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-black text-white font-inter selection:bg-white selection:text-black">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Terms & Conditions
                    </h1>
                    <p className="text-neutral-500 font-mono text-sm">Last Updated: 20/02/2026</p>
                </header>

                <div className="max-w-none space-y-12 text-neutral-300 font-light leading-relaxed">
                    <section>
                        <p>Welcome to CloudKicks. These Terms & Conditions govern your use of our website, located at www.cloudkicks.store (the "Site"), and the purchase of any products from us.</p>
                        <p>By accessing our Site or placing an order, you agree to these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Company Information</h2>
                        <p>CloudKicks is operated by: JMW Holdings Group Limited, United Kingdom. Email: support@cloudkicks.store</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Eligibility</h2>
                        <p>By using this Site, you confirm that:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You are at least 18 years old</li>
                            <li>You are legally capable of entering into binding contracts</li>
                            <li>The information you provide is accurate and complete</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Orders & Acceptance</h2>
                        <p>All orders are subject to acceptance and availability. We reserve the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Refuse or cancel any order</li>
                            <li>Limit quantities per customer</li>
                            <li>Cancel orders suspected of fraud or resale abuse</li>
                            <li>Correct pricing errors at any time</li>
                        </ul>
                        <p className="mt-4 italic">An order confirmation email does not constitute final acceptance. Acceptance occurs once your order has been dispatched.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Pricing & Payment</h2>
                        <p>All prices are displayed in GBP (£) unless otherwise stated. We reserve the right to adjust pricing at any time. Payments are processed securely via Shopify Payments or authorised third-party providers. We are not responsible for additional fees charged by your bank or payment provider.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Product Descriptions</h2>
                        <p>We make every effort to display product details accurately. However:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Colours may vary slightly due to screen differences</li>
                            <li>Minor design variations may occur</li>
                            <li>Packaging may change without notice</li>
                        </ul>
                        <p className="mt-4">All sizes and measurements are approximate.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Limited Drops & Availability</h2>
                        <p>Certain CloudKicks products may be released in limited quantities. We operate on a "while stocks last" basis. We are not obligated to restock any specific colourway or drop.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">7. Shipping</h2>
                        <p>Delivery times are estimates and not guaranteed. We are not liable for delays caused by: Couriers, Customs, Weather, or incorrect address details. Risk of loss transfers to the customer upon confirmed delivery.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">8. Returns & Refunds</h2>
                        <p>Returns are governed by our separate Returns & Refund Policy. Products must be returned in original condition and packaging unless faulty. We reserve the right to refuse returns that do not meet our policy requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">9. Intellectual Property</h2>
                        <p>All content on this Site, including but not limited to Logos, Branding, Product designs, Images, Text, and Graphics are the property of JMW Holdings Group Limited. You may not copy, reproduce, distribute, modify, or exploit any content without written permission. CloudKicks is an independent brand and is not affiliated with any other footwear or apparel brand.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">10. Prohibited Use</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Use our products for unlawful purposes</li>
                            <li>Attempt to resell products as authorised distributors without permission</li>
                            <li>Interfere with the Site's security</li>
                            <li>Attempt to copy or replicate product designs</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">11. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law: We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or Site. Nothing in these Terms excludes liability where it would be unlawful to do so.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">12. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless JMW Holdings Group Limited from any claims arising from your misuse of the Site or products.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">13. Governing Law</h2>
                        <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">14. Changes to These Terms</h2>
                        <p>We reserve the right to update these Terms at any time. The latest version will always be available on this page.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
