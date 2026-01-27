import React, { useState } from 'react';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';

const plans = [
    {
        name: "Visitor Pass",
        price: "Free",
        desc: "For students & enthusiasts exploring the ecosystem.",
        features: [
            "Access to Expo Zone",
            "Attend Open Keynotes",
            "Networking App (Lite)",
            "Digital Certificate"
        ],
        missing: [
            "Startup Pitch Entry",
            "Investor Lounge Access",
            "Gala Dinner Invite",
            "1-on-1 Mentorship"
        ],
        cta: "Register Free",
        highlight: false
    },
    {
        name: "Startup Pro",
        price: "₹4,999",
        desc: "For founders raising capital and building networks.",
        features: [
            "All Visitor Access",
            "Startup Pitch Battle Entry",
            "Investor Lounge Access",
            "Mentorship Clinics",
            "Networking App (Pro)"
        ],
        missing: [
            "Gala Dinner Invite",
            "VIP Backstage Access"
        ],
        cta: "Get Pro Pass",
        highlight: true
    },
    {
        name: "VIP Investor",
        price: "₹9,999",
        desc: "For VCs and Angels looking for the next unicorn.",
        features: [
            "All Pro Access",
            "Gala Dinner with Speakers",
            "VIP Lounge & Bar",
            "Dedicated Concierge",
            "Private Deal Flow"
        ],
        missing: [],
        cta: "Request Invite",
        highlight: false
    }
];

const PricingTable = () => {
    const [hoveredIndex, setHoveredIndex] = useState(1); // Default highlight middle

    return (
        <section className="py-32 relative" style={{ backgroundColor: 'var(--color-bg)' }}>

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">
                    <span className="inline-block px-4 py-1 rounded-full border mb-6"
                        style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                            Choose Your Path
                        </span>
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6" style={{ color: 'var(--color-text)' }}>
                        UNLOCK <span style={{ color: 'var(--color-text-muted)' }}>OPPORTUNITY.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl font-light" style={{ color: 'var(--color-text-secondary)' }}>
                        Whether you are just starting or scaling up, we have a curated experience for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            className={`relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 ease-in-out ${hoveredIndex === idx ? 'scale-105 shadow-2xl z-10' : 'scale-95 opacity-80'}`}
                            style={{
                                backgroundColor: hoveredIndex === idx ? 'var(--color-surface)' : 'transparent',
                                borderColor: hoveredIndex === idx ? 'var(--color-text)' : 'var(--color-border)'
                            }}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <div className="px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2"
                                        style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                                        ★ Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{plan.name}</h3>
                                <p className="text-sm h-10 mb-6" style={{ color: 'var(--color-text-muted)' }}>{plan.desc}</p>
                                <div className="text-5xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
                                    {plan.price}
                                </div>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide mb-12 flex items-center justify-center gap-2 transition-all ${hoveredIndex === idx ? 'opacity-100' : 'opacity-70'}`}
                                style={{
                                    backgroundColor: hoveredIndex === idx ? 'var(--color-text)' : 'transparent',
                                    color: hoveredIndex === idx ? 'var(--color-bg)' : 'var(--color-text)',
                                    border: hoveredIndex === idx ? 'none' : '1px solid var(--color-border)'
                                }}>
                                {plan.cta} {hoveredIndex === idx && <FiArrowRight />}
                            </button>

                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>Includes</p>
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5 min-w-[1.25rem] min-h-[1.25rem] rounded-full flex items-center justify-center bg-green-500/10 text-green-500">
                                            <FiCheck className="w-3 h-3" />
                                        </div>
                                        <span style={{ color: 'var(--color-text-secondary)' }}>{feat}</span>
                                    </div>
                                ))}

                                {plan.missing.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm opacity-40">
                                        <div className="mt-0.5 min-w-[1.25rem] min-h-[1.25rem] rounded-full flex items-center justify-center border"
                                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                                            <FiX className="w-3 h-3" />
                                        </div>
                                        <span style={{ color: 'var(--color-text-muted)' }}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingTable;
