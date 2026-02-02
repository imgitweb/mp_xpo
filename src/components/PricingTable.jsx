import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';

const plans = [
    {
        name: "Visitor Pass",
        price: "₹299",
        desc: "For students & professionals.",
        features: ["Expo Zone Access", "Open Keynotes", "Startup Stalls", "Talent Show"],
        missing: ["Investor Connect", "Networking Lunch", "Stage Pitch"],
        cta: "Buy Pass",
        highlight: false
    },
    {
        name: "Growth Partner",
        price: "₹18k + GST",
        desc: "For early startups.",
        features: ["80 sq.ft Stall", "1 Silver Pass", "General Access", "Concert Entry"],
        missing: ["Priority Stall", "Networking Lunch", "Media Promotion"],
        cta: "Apply Now",
        highlight: false
    },
    {
        name: "Foundation",
        price: "₹25k + GST",
        desc: "Priority access.",
        features: ["100 sq.ft Stall", "Gold Pass", "Networking Lunch", "Priority Entry"],
        missing: ["Stage Slot", "VIP Branding"],
        cta: "Get Foundation",
        highlight: true
    },
    {
        name: "Pinnacle",
        price: "₹37k + GST",
        desc: "Premium exposure.",
        features: ["Prime Stall", "Platinum VIP", "5-Min Pitch", "Media Promotion"],
        missing: [],
        cta: "Become Pinnacle",
        highlight: false
    },
    {
        name: "Creator Pass",
        price: "Free",
        desc: "For influencers.",
        features: ["Creator Lounge", "Collab Zone", "Brand Networking", "Social Feature"],
        missing: ["Startup Stall", "Investor Pitch"],
        cta: "Join Now",
        highlight: false
    }
];

const PricingTable = () => {
    const [hoveredIndex, setHoveredIndex] = useState(2);

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                        UNLOCK <span style={{ color: 'var(--color-text-muted)' }}>OPPORTUNITY</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            layout // This makes the size change smooth
                            onMouseEnter={() => setHoveredIndex(idx)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className={`relative p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer
                                ${hoveredIndex === idx ? 'z-20 shadow-2xl' : 'opacity-60 scale-95'}`}
                            style={{
                                backgroundColor: hoveredIndex === idx ? 'var(--color-surface)' : 'transparent',
                                borderColor: hoveredIndex === idx ? 'var(--color-text)' : 'var(--color-border)'
                            }}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <div className="px-3 py-1 rounded-full font-bold text-[9px] uppercase tracking-tighter shadow-xl"
                                        style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                                        ★ Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>{plan.name}</h3>
                                <div className="text-2xl font-black mb-3" style={{ color: 'var(--color-text)' }}>{plan.price}</div>
                                <p className="text-[11px] leading-tight" style={{ color: 'var(--color-text-muted)' }}>{plan.desc}</p>
                            </div>

                            <button
                                className="w-full py-3 rounded-xl font-bold text-xs mb-6 flex items-center justify-center gap-2 transition-all"
                                style={{
                                    backgroundColor: hoveredIndex === idx ? 'var(--color-text)' : 'transparent',
                                    color: hoveredIndex === idx ? 'var(--color-bg)' : 'var(--color-text)',
                                    border: hoveredIndex === idx ? 'none' : '1px solid var(--color-border)'
                                }}
                            >
                                {plan.cta}
                                {hoveredIndex === idx && <motion.span initial={{ x: -5 }} animate={{ x: 0 }}><FiArrowRight /></motion.span>}
                            </button>

                            <div className="space-y-3">
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-2 text-[12px]">
                                        <FiCheck className="text-green-500 mt-1 shrink-0" />
                                        <span style={{ color: 'var(--color-text-secondary)' }}>{feat}</span>
                                    </div>
                                ))}
                                {plan.missing.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-2 text-[12px] opacity-30">
                                        <FiX className="mt-1 shrink-0" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;