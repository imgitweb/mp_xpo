import React from 'react';

const Legal = ({ type }) => {
    const isPrivacy = type === 'privacy';

    return (
        <div
            className="pt-32 pb-24 min-h-screen"
            style={{ backgroundColor: 'var(--color-bg)' }}
        >
            <div className="max-w-4xl mx-auto px-6">
                <h1
                    className="text-4xl md:text-5xl font-black mb-8"
                    style={{ color: 'var(--color-text)' }}
                >
                    {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                </h1>

                <div
                    className="prose prose-lg prose-invert opacity-80"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    <p>Last updated: January 2026</p>

                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to the Bundelkhand Venture Summit (BVS) 2026.
                        By accessing our website and attending our events, you agree
                        to these legal terms. This summit is organized in association
                        with Rotary Club of Jhansi Rani, Rotaract Club of Manu Jhansi,
                        and Dainik Jagran.
                    </p>

                    <h3>2. Event Details & Participation</h3>
                    <p>
                        The summit will be held from 28 February to 1 March 2026.
                        Participation is open to startups and MSMEs across various
                        sectors including IT, Agriculture, Health Tech, and more.
                        Stall bookings and entries are subject to a screening process.
                    </p>

                    <h3>3. Exhibition Tiers</h3>
                    <p>
                        Participants can join through three distinct tiers:
                        Tier 3 (Growth), Tier 2 (Foundation), and Tier 1 (Pinnacle).
                        Benefits may include networking lunches, VIP seating,
                        stage presentation slots, and media visibility via
                        Dainik Jagran, depending on the selected tier.
                    </p>

                    <h3>4. Media & Recognition</h3>
                    <p>
                        By attending the summit, participants may receive media
                        exposure, awards, and recognition. The event features
                        high-impact networking opportunities, panel discussions,
                        and celebrity musical concert nights.
                    </p>

                    <h3>5. Contact Us</h3>
                    <p>
                        For any inquiries regarding registration or the summit,
                        please contact us:
                        <br />
                        <strong>Mobile:</strong> 9305536659
                        <br />
                        <strong>Email:</strong> startupexpo2026@gmail.com
                        <br />
                        <strong>Instagram:</strong> @Bundelkhandventuresummit
                    </p>
                </div>

                <div
                    className="mt-12 pt-8 border-t"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <a
                        href="/"
                        className="font-bold hover:underline"
                        style={{ color: 'var(--color-text)' }}
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Legal;
