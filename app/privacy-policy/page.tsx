
import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-black text-white font-inter selection:bg-white selection:text-black">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Privacy Policy
                    </h1>
                    <p className="text-neutral-500 font-mono text-sm">Last Updated: 20/02/2026</p>
                </header>

                <div className="max-w-none space-y-12 text-neutral-300 font-light leading-relaxed">
                    <section>
                        <p>CloudKicks is a trading brand of JMW Holdings Group Limited ("we", "us", "our"). This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from www.cloudkicks.store (the "Site").</p>
                        <p>We are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Information We Collect</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-medium mb-2 tracking-tight">Personal Information</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Full name</li>
                                    <li>Billing and shipping address</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Payment details</li>
                                    <li>Order history</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-2 tracking-tight">Technical Information</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>IP address</li>
                                    <li>Browser type and device type</li>
                                    <li>Location data</li>
                                    <li>Cookies and tracking information</li>
                                    <li>Pages viewed and interaction data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Process and fulfil orders</li>
                            <li>Provide customer support</li>
                            <li>Send order confirmations and delivery updates</li>
                            <li>Prevent fraud and unauthorised transactions</li>
                            <li>Improve our website performance and customer experience</li>
                            <li>Operate advertising campaigns</li>
                            <li>Send marketing communications where consent has been given</li>
                        </ul>
                        <p className="mt-4">We only collect data that is necessary to operate and grow the CloudKicks brand responsibly.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Payments</h2>
                        <p>Payments are processed securely via Shopify Payments and authorised third-party payment providers. CloudKicks and JMW Holdings Group Limited do not store full card details on our own servers.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Marketing & Tracking Technologies</h2>
                        <p>We may use tracking technologies including: Meta Pixel, TikTok Pixel, Google Analytics, and Shopify analytics tools. These technologies help us understand website usage and improve advertising performance. You may disable cookies via your browser settings at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Sharing Your Information</h2>
                        <p>We may share personal information with trusted service providers, including: Shopify, payment processors, shipping and fulfilment partners, and marketing and analytics providers. We do not sell or rent your personal data.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Data Retention</h2>
                        <p>We retain personal information only as long as necessary to fulfil contractual obligations, comply with legal requirements, resolve disputes, and enforce our agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">7. Your Rights Under UK GDPR</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your personal data</li>
                            <li>Withdraw consent for marketing communications</li>
                            <li>Object to certain types of data processing</li>
                            <li>Lodge a complaint with the ICO</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">8. Data Security</h2>
                        <p>We implement appropriate technical and organisational safeguards to protect your personal information. However, no system can guarantee complete security of online data transmission.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">9. International Transfers</h2>
                        <p>Some service providers may process data outside the United Kingdom. Where this occurs, appropriate safeguards are in place to ensure compliance with UK data protection standards.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">10. Independent Brand Statement</h2>
                        <p>CloudKicks is an independent brand operated by JMW Holdings Group Limited and is not affiliated with any other footwear or apparel brand.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">11. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy periodically to reflect operational or legal changes. The most recent version will always be available on this page.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
