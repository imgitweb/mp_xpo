import React from 'react';

const Legal = ({ type }) => {
    const isPrivacy = type === 'privacy';

    return (
        <div className="pt-32 pb-24 min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--color-text)' }}>
                    {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                </h1>

                <div className="prose prose-lg prose-invert opacity-80" style={{ color: 'var(--color-text-secondary)' }}>
                    <p>Last updated: November 2026</p>

                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to MP Startup Expo. By accessing our website and attending our events, you agree to these legal terms.
                        We value your trust and are committed to protecting your personal data.
                    </p>

                    <h3>2. Data Collection</h3>
                    <p>
                        We collect information directly from you when you register for a pass, apply for a pitch, or subscribe to our newsletter.
                        This includes name, email, phone number, and startup details.
                    </p>

                    <h3>3. Usage of Information</h3>
                    <p>
                        Your data is used solely for facilitating your participation in the event (networking, badges, updates).
                        We do not sell your personal data to third parties.
                    </p>

                    <h3>4. Event Photography</h3>
                    <p>
                        By attending, you consent to being photographed and filmed. These materials may be used for marketing purposes by MP Startup Expo.
                    </p>

                    <h3>5. Contact Us</h3>
                    <p>
                        For legal inquiries, please contact legal@mpstartupexpo.com.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <a href="/" className="font-bold hover:underline" style={{ color: 'var(--color-text)' }}>← Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default Legal;
